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
import {findItemIndex, moveItem} from './helpers/collection-helper.js';

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
                upgrade_ids: [],
                display_order: null,
            };

            this.mechs.push(mech);
            mech.display_order = findItemIndex(this.mechs, mech);
        },
        updateMech(mechId, data) {
            let existing = findById(this.mechs, mechId);
            updateObject(existing, data, [
                'name',
                'size_id',
                'structure_mod_id',
                'armor_mod_id',
                'armor_upgrade_id',
            ]);
        },
        moveMech(mech, toIndex) {
            moveItem(this.mechs, mech, toIndex);
        },
        addMechWeaponAttachment(mechId, weaponId) {
            let existing = findById(this.mechs, mechId);
            let id = existing.weapons_id_increment++;
            let weapon = {
                id,
                weapon_id: weaponId,
                display_order: null,
            };
            existing.weapons.push(weapon);
            weapon.display_order = findItemIndex(existing.weapons, weapon);
        },
        removeMechWeaponAttachment(mechId, weaponIndex) {
            let existing = findById(this.mechs, mechId);
            existing.weapons.splice(weaponIndex, 1);
        },
        moveMechWeaponAttachment(mechId, weapon, toIndex) {
            let existing = findById(this.mechs, mechId);
            moveItem(existing.weapons, weapon, toIndex)
        },
        addMechUpgrade(mechId, weaponId) {
            let existing = findById(this.mechs, mechId);
            existing.upgrade_ids.push(weaponId);
        },
    },
    getters: {
        getMech(state) {
            return (mechId) => findById(state.mechs, mechId);
        },
        getMechWeaponAttachment(state){
            return (mechId, mechWeaponAttachmentId) => {
                const mech = findById(state.mechs, mechId);
                return findById(mech.weapons, mechWeaponAttachmentId)
            }
        },
        getMechName(state) {
            return (mechId) => this.getMech(mechId).name;
        },
        getMechInfo(state) {
            return function (mechId) {
                let {
                    name,
                    size_id,
                    structure_mod_id,
                    armor_mod_id,
                    armor_upgrade_id,
                    weapons,
                    upgrade_ids,
                } = this.getMech(mechId);

                const weaponsInfo = weapons.map((item) => this.getWeaponInfo(mechId, item.weapon_id));
                const upgrades = upgrade_ids.map((upgradeId) => this.getUpgradeInfo(mechId, upgradeId));

                const size = HEV_SIZES[size_id];
                const structureMod = HEV_BODY_MODS[structure_mod_id];
                const armorMod = HEV_BODY_MODS[armor_mod_id];
                const armorUpgrade = HEV_ARMOR_UPGRADES[armor_upgrade_id];
                const maxTons = size.max_tons + armorMod.max_tons + structureMod.max_tons;
                const placeholderName = ('Mech-' + mechId).padStart(1);

                const armorStat = size.armor + armorMod.modifier;
                const structureStat = size.structure + armorMod.modifier;

                const maxSlots = size.slots - armorUpgrade.slots;

                const usedSlots = sumBy(weaponsInfo, 'slots') + sumBy(upgrades, 'slots');
                const usedTons = sumBy(weaponsInfo, 'cost') + sumBy(upgrades, 'cost');

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

                return readonly({
                    displayName: weapon.display_name,
                    damage: weapon.damage_by_size[size_id],
                    slots: 1,
                    cost: weapon.cost_by_size[size_id],
                    range: weapon.range,
                    traits: weapon.traits_by_size[size_id],
                    traitDisplayNames: weapon.traits_by_size[size_id]
                        .map((traitId) => {
                            return WEAPON_TRAITS[traitId].display_name;
                        })
                        .join(', '),
                });
            };
        },
        getUpgradeInfo(state) {
            return (mechId, upgradeId) => {

                let mech = this.getMech(mechId);
                let size_id = mech.size_id;
                let upgrade = HEV_UPGRADES[upgradeId];

                return readonly({
                    displayName: upgrade.display_name,
                    slots: 1,
                    cost: upgrade.cost_by_size[size_id],
                });
            };
        },
    },
});