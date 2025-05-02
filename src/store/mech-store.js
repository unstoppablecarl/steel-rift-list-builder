import {defineStore} from 'pinia';
import {HEV_SIZES, SIZE_MEDIUM} from '../data/mech-sizes.js';
import {HEV_BODY_MODS, MOD_STANDARD} from '../data/mech-body.js';
import {HEV_ARMOR_UPGRADES, NO_ARMOR_UPGRADE} from '../data/mech-armor-upgrades.js';
import {findById, updateObject} from '../data/data-helpers.js';
import {sumBy} from 'lodash';
import {traitDisplayNames} from '../data/weapon-traits.js';
import {HEV_WEAPONS} from '../data/mech-weapons.js';
import {readonly} from 'vue';
import {HEV_UPGRADES} from '../data/mech-upgrades.js';
import {deleteItemById, findItemIndex, moveItem} from '../helpers/collection-helper.js';
import {useToastStore} from './toast-store.js';
import {useFactionStore} from './faction-store.js';
import {
    DWC_TOP_END_HARDWARE,
    DWC_TOP_END_HARDWARE_BONUS_TONS,
    RD_ADVANCED_HARDPOINT_DESIGN,
    RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS,
    UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN,
} from '../data/factions.js';
import {useTeamStore} from './team-store.js';

export const useMechStore = defineStore('mech', {
        state() {
            return {
                mechs: [],
                mechs_id_increment: 1,
            };
        },
        actions: {
            addMech({
                        size_id,
                        structure_mod_id,
                        armor_mod_id,
                        armor_upgrade_id,
                    }) {

                size_id = size_id ?? SIZE_MEDIUM;
                structure_mod_id = structure_mod_id ?? MOD_STANDARD;
                armor_mod_id = armor_mod_id ?? MOD_STANDARD;
                armor_upgrade_id = armor_upgrade_id ?? NO_ARMOR_UPGRADE;

                let id = this.mechs_id_increment++;
                let mech = {
                    id,
                    name: null,
                    size_id,
                    structure_mod_id,
                    armor_mod_id,
                    armor_upgrade_id,
                    weapons: [],
                    weapons_id_increment: 1,
                    upgrades: [],
                    upgrades_id_increment: 1,
                    display_order: null,
                };

                this.mechs.push(mech);
                mech.display_order = findItemIndex(this.mechs, mech);

                return mech;
            },
            updateMech(mechId, data) {
                let mech = findById(this.mechs, mechId);
                updateObject(mech, data, [
                    'name',
                    'size_id',
                    'structure_mod_id',
                    'armor_mod_id',
                    'armor_upgrade_id',
                ]);

                if (data.size_id) {
                    this.removeInvalidMechAttachments(mechId);
                }
            },
            moveMech(mech, toIndex) {
                moveItem(this.mechs, mech, toIndex);
            },
            removeMech(mechId) {
                deleteItemById(this.mechs, mechId);
            },
            addMechWeaponAttachment(mechId, weaponId) {
                let mech = findById(this.mechs, mechId);
                let id = mech.weapons_id_increment++;
                let weapon = {
                    id,
                    weapon_id: weaponId,
                    display_order: null,
                };
                mech.weapons.push(weapon);
                weapon.display_order = findItemIndex(mech.weapons, weapon);
            },
            removeMechWeaponAttachment(mechId, mechWeaponAttachmentId) {
                let mech = findById(this.mechs, mechId);
                deleteItemById(mech.weapons, mechWeaponAttachmentId);
            },
            moveMechWeaponAttachment(mechId, weaponAttachment, toIndex) {
                let mech = findById(this.mechs, mechId);
                moveItem(mech.weapons, weaponAttachment, toIndex);
            },
            addMechUpgradeAttachment(mechId, upgradeId) {
                let mech = findById(this.mechs, mechId);
                let id = mech.upgrades_id_increment++;
                let upgrade = {
                    id,
                    upgrade_id: upgradeId,
                    display_order: null,
                };
                mech.upgrades.push(upgrade);
                upgrade.display_order = findItemIndex(mech.upgrades, upgrade);
            },
            removeMechUpgradeAttachment(mechId, mechUpgradeAttachmentId) {
                let mech = findById(this.mechs, mechId);
                deleteItemById(mech.upgrades, mechUpgradeAttachmentId);
            },
            moveMechUpgradeAttachment(mechId, upgradeAttachment, toIndex) {
                let mech = findById(this.mechs, mechId);
                moveItem(mech.upgrades, upgradeAttachment, toIndex);
            },
            removeInvalidMechAttachments(mechId) {
                let mech = findById(this.mechs, mechId);
                let mechInfo = this.getMechInfo(mechId);
                mech.upgrades.forEach((upgradeAttachment) => {
                    const info = this.getMechUpgradeAttachmentInfo(mechId, upgradeAttachment.id);
                    if (!info.valid) {
                        const {toastInfo} = useToastStore();

                        toastInfo(`${mechInfo.size.display_name} HE-V (${mechInfo.display_name})`,
                            `${info.display_name} removed: (${info.validation_messages.join(', ')})`);
                        this.removeMechUpgradeAttachment(mechId, upgradeAttachment.id);
                    }
                });
            },
        },
        getters: {
            totalTons(state) {
                let tons = 0;
                state.mechs.forEach((mech) => {
                    const {size} = this.getMechInfo(mech.id);
                    tons += size.max_tons;
                });
                return tons;
            },
            getMech(state) {
                return (mechId) => findById(state.mechs, mechId);
            },
            getMechWeaponAttachment(state) {
                return (mechId, mechWeaponAttachmentId) => {
                    const mech = findById(state.mechs, mechId);
                    return findById(mech.weapons, mechWeaponAttachmentId);
                };
            },
            getMechWeaponAttachmentInfo(state) {
                return (teamId, groupId, mechId, mechWeaponAttachmentId) => {
                    const teamStore = useTeamStore();

                    const mech = this.getMech(mechId);
                    const weaponAttachment = this.getMechWeaponAttachment(mechId, mechWeaponAttachmentId);
                    const weapon_id = weaponAttachment.weapon_id;
                    const weaponInfo = this.getWeaponInfo(mechId, weaponAttachment.weapon_id);

                    const previousWeaponInstances = mech.weapons.filter((item) => {
                        return item.weapon_id == weapon_id && item.display_order < weaponAttachment.display_order;
                    }).length;

                    let cost = weaponInfo.cost;
                    const duplicate_cost = Math.floor(previousWeaponInstances * cost * 0.5);
                    const isRequired = teamStore.getWeaponIsRequired(teamId, groupId, weapon_id);

                    const result = Object.assign({}, weaponInfo, {
                        base_cost: cost,
                        cost: cost + duplicate_cost,
                        duplicate_cost,
                        required_by_group: previousWeaponInstances === 0 && isRequired,
                        duplicate_percent: previousWeaponInstances * 50,
                    });

                    return readonly(result);
                };
            },
            getMechAvailableWeaponsInfo(state) {
                return (mechId) => {
                    return Object.keys(HEV_WEAPONS)
                        .map((weaponId) => this.getWeaponInfo(mechId, weaponId));
                };
            },
            getMechAvailableUpgradesInfo(state) {
                return (mechId) => {
                    const mech = findById(state.mechs, mechId);
                    const existingUpgradeIds = mech.upgrades.map((item) => item.upgrade_id);

                    return Object.keys(HEV_UPGRADES)
                        .filter((upgradeId) => {
                            return !existingUpgradeIds.includes(upgradeId);
                        })
                        .map((upgradeId) => this.getUpgradeInfo(mechId, upgradeId));
                };
            },
            getMechUpgradeAttachment(state) {
                return (mechId, mechUpgradeAttachmentId) => {
                    const mech = findById(state.mechs, mechId);
                    return findById(mech.upgrades, mechUpgradeAttachmentId);
                };
            },
            getMechUpgradeAttachmentInfo(state) {
                return (teamId, groupId, mechId, mechUpgradeAttachmentId) => {
                    const teamStore = useTeamStore();
                    const upgradeAttachment = this.getMechUpgradeAttachment(mechId, mechUpgradeAttachmentId);

                    const info = this.getUpgradeInfo(mechId, upgradeAttachment.upgrade_id);
                    const isRequired = teamStore.getUpgradeIsRequired(teamId, groupId, upgradeAttachment.upgrade_id);

                    return Object.assign({}, info, {required_by_group: isRequired});
                };
            },
            getAllMechInfo(state) {
                return state.mechs.map((mech) => this.getMechInfo(mech.id));
            },
            getMechInfo(state) {
                return function (mechId) {
                    const factionStore = useFactionStore();

                    let {
                        name,
                        size_id,
                        structure_mod_id,
                        armor_mod_id,
                        armor_upgrade_id,
                        weapons,
                        upgrades,
                    } = this.getMech(mechId);

                    const placeholder_name = ('Mech-' + mechId).padStart(1);

                    const weaponsInfo = weapons.map((item) => this.getWeaponInfo(mechId, item.weapon_id));
                    const upgradesInfo = upgrades.map((item) => this.getUpgradeInfo(mechId, item.upgrade_id));

                    const size = HEV_SIZES[size_id];
                    const structure_mod = HEV_BODY_MODS[structure_mod_id];
                    const armor_mod = HEV_BODY_MODS[armor_mod_id];
                    const armorUpgrade = HEV_ARMOR_UPGRADES[armor_upgrade_id];

                    const armor_stat = size.armor + armor_mod.modifier;
                    const structure_stat = size.structure + structure_mod.modifier;

                    let max_tons = size.max_tons;
                    let max_slots = size.max_slots;

                    const weapon_used_tons = sumBy(weaponsInfo, 'cost');
                    const weapon_used_slots = sumBy(weaponsInfo, 'slots');

                    const upgrade_used_slots = sumBy(upgradesInfo, 'slots');
                    const upgrade_used_tons = sumBy(upgradesInfo, 'cost');

                    let used_slots = weapon_used_slots +
                        upgrade_used_slots +
                        armorUpgrade.slots;

                    if (factionStore.hasPerk(RD_ADVANCED_HARDPOINT_DESIGN) ||
                        factionStore.hasPerk(UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN)) {
                        used_slots += RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS;
                    }

                    let used_tons = weapon_used_tons +
                        upgrade_used_tons +
                        armor_stat +
                        structure_stat +
                        armorUpgrade.cost_by_size[size_id];

                    if (factionStore.hasPerk(DWC_TOP_END_HARDWARE)) {
                        used_tons += DWC_TOP_END_HARDWARE_BONUS_TONS;
                    }

                    let display_name = name || placeholder_name;

                    return {
                        display_name,
                        placeholder_name,
                        size,
                        structure_mod,
                        armor_mod,
                        max_tons,
                        used_tons,
                        max_slots,
                        used_slots,
                        armor_stat,
                        structure_stat,
                        upgrade_used_tons,
                        upgrade_used_slots,
                        weapon_used_slots,
                        weapon_used_tons,
                    };
                };
            },
            getWeaponInfo(state) {
                return (mechId, weaponId) => {

                    let mech = this.getMech(mechId);
                    let size_id = mech.size_id;
                    let weapon = HEV_WEAPONS[weaponId];

                    let range_formatted = '-';
                    if (weapon.range) {
                        range_formatted = weapon.range + '"';
                    }

                    const traitsBySize = weapon.traits_by_size[size_id];
                    let cost = weapon.cost_by_size[size_id];

                    return readonly({
                        weapon_id: weaponId,
                        display_name: weapon.display_name,
                        damage: weapon.damage_by_size[size_id],
                        slots: 1,
                        cost,
                        range: weapon.range,
                        range_formatted,
                        traits: traitsBySize,
                        trait_display_names: traitDisplayNames(traitsBySize),
                    });
                };
            },
            getUpgradeInfo(state) {
                return (mechId, upgradeId) => {

                    const mech = this.getMech(mechId);
                    const size_id = mech.size_id;
                    const upgrade = HEV_UPGRADES[upgradeId];
                    const notes = [];
                    const validation_messages = [];

                    let valid = true;

                    if (upgrade.prohibited_by_sizes) {
                        valid = !upgrade.prohibited_by_sizes.includes(size_id);
                        if (!valid) {
                            const message = 'Not available for Light HE-V';
                            notes.push(message);
                            validation_messages.push(message);
                        }
                    }

                    return readonly({
                        upgrade_id: upgradeId,
                        display_name: upgrade.display_name,
                        valid,
                        validation_messages,
                        notes,
                        slots: 1,
                        cost: upgrade.cost_by_size[size_id],
                    });
                };
            },
        },
        persist: true,
    },
);