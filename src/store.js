import {defineStore} from 'pinia';
import {HEV_SIZES, SIZE_MEDIUM} from './data/mech-sizes.js';
import {HEV_BODY_MODS, MOD_STANDARD} from './data/mech-body.js';
import {HEV_ARMOR_UPGRADES, NO_ARMOR_UPGRADE} from './data/mech-armor-upgrades.js';
import {findById, updateObject} from './data/data-helpers.js';
import {sumBy} from 'lodash';
import {WEAPON_TRAITS} from './data/weapon-traits.js';
import {HEV_WEAPONS} from './data/mech-weapons.js';
import {readonly} from 'vue';
import {HEV_UPGRADES} from './data/mech-upgrades.js';
import {deleteItemById, findItemIndex, moveItem} from './helpers/collection-helper.js';
import {useToastStore} from './store/toast-store.js';
import {useFactionStore} from './store/faction-store.js';
import {
    DWC_TOP_END_HARDWARE,
    DWC_TOP_END_HARDWARE_BONUS_TONS,
    RD_ADVANCED_HARDPOINT_DESIGN,
    RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS,
} from './data/factions.js';

export const useMechStore = defineStore('mech', {
    state() {
        return {
            mechs: [],
            mechs_id_increment: 1,
        };
    },
    actions: {
        addMech() {
            let id = this.mechs_id_increment++;
            let mech = {
                id,
                name: null,
                size_id: SIZE_MEDIUM,
                structure_mod_id: MOD_STANDARD,
                armor_mod_id: MOD_STANDARD,
                armor_upgrade_id: NO_ARMOR_UPGRADE,
                weapons: [],
                weapons_id_increment: 1,
                upgrades: [],
                upgrades_id_increment: 1,
                display_order: null,
            };

            this.mechs.push(mech);
            mech.display_order = findItemIndex(this.mechs, mech);
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
                    const {toast} = useToastStore();

                    toast({
                        title: `${mechInfo.size.display_name} HE-V (${mechInfo.displayName})`,
                        body: `${info.display_name} removed: (${info.validation_messages.join(', ')})`,
                    });
                    this.removeMechUpgradeAttachment(mechId, upgradeAttachment.id);
                }
            });
        },
    },
    getters: {
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
            return (mechId, mechWeaponAttachmentId) => {
                const weaponAttachment = this.getMechWeaponAttachment(mechId, mechWeaponAttachmentId);
                return this.getWeaponInfo(mechId, weaponAttachment.weapon_id);
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
                return Object.keys(HEV_UPGRADES)
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
            return (mechId, mechUpgradeAttachmentId) => {
                const upgradeAttachment = this.getMechUpgradeAttachment(mechId, mechUpgradeAttachmentId);
                return this.getUpgradeInfo(mechId, upgradeAttachment.upgrade_id);
            };
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

                const weaponsInfo = weapons.map((item) => this.getWeaponInfo(mechId, item.weapon_id));
                const upgradesInfo = upgrades.map((item) => this.getUpgradeInfo(mechId, item.upgrade_id));

                const size = HEV_SIZES[size_id];
                const structureMod = HEV_BODY_MODS[structure_mod_id];
                const armorMod = HEV_BODY_MODS[armor_mod_id];
                const armorUpgrade = HEV_ARMOR_UPGRADES[armor_upgrade_id];
                let maxTons = size.max_tons + armorMod.max_tons + structureMod.max_tons;
                if (factionStore.hasPerk(DWC_TOP_END_HARDWARE)) {
                    maxTons += DWC_TOP_END_HARDWARE_BONUS_TONS;
                }
                const placeholderName = ('Mech-' + mechId).padStart(1);

                const armorStat = size.armor + armorMod.modifier;
                const structureStat = size.structure + armorMod.modifier;

                let maxSlots = size.max_slots - armorUpgrade.slots;
                if (factionStore.hasPerk(RD_ADVANCED_HARDPOINT_DESIGN)) {
                    maxSlots += RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS;
                }

                const usedSlots = sumBy(weaponsInfo, 'slots') + sumBy(upgradesInfo, 'slots');
                const usedTons = sumBy(weaponsInfo, 'cost') + sumBy(upgradesInfo, 'cost');

                let displayName = name || placeholderName;

                return {
                    displayName,
                    placeholderName,
                    structureMod,
                    armorMod,
                    maxTons,
                    usedTons,
                    armorUpgrade,
                    size,
                    maxSlots,
                    usedSlots,
                    armorStat,
                    structureStat,
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

                return readonly({
                    weapon_id: weaponId,
                    display_name: weapon.display_name,
                    damage: weapon.damage_by_size[size_id],
                    slots: 1,
                    cost: weapon.cost_by_size[size_id],
                    range: weapon.range,
                    range_formatted,
                    traits: weapon.traits_by_size[size_id],
                    trait_display_names: weapon.traits_by_size[size_id]
                        .map((traitId) => {
                            return WEAPON_TRAITS[traitId].display_name;
                        })
                        .join(', '),
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
});