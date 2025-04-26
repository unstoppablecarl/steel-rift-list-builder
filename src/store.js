import {defineStore} from 'pinia';
import {HEV_SIZES, SIZE_MEDIUM} from './data/mech-sizes.js';
import {HEV_BODY_MODS, MOD_STANDARD} from './data/mech-body.js';
import {HEV_ARMOR_UPGRADES, NO_ARMOR_UPGRADE} from './data/mech-armor-upgrades.js';
import {findById, updateObject} from './data/data-helpers.js';
import {find, sumBy} from 'lodash';
import {WEAPON_TRAITS} from './data/weapon-traits.js';
import {HEV_WEAPONS} from './data/mech-weapons.js';
import {readonly} from 'vue';

export const useMechStore = defineStore('mech', {
    state() {
        return {
            mechs: [],
            idIncrement: 1,
        };
    },
    actions: {
        addMech() {
            let id = this.idIncrement++;
            this.mechs.push({
                id,
                name: null,
                size_id: SIZE_MEDIUM,
                structure_mod_id: MOD_STANDARD,
                armor_mod_id: MOD_STANDARD,
                armor_upgrade_id: NO_ARMOR_UPGRADE,
                weapon_ids: [],
                upgrade_ids: [],
            });
        },
        updateMech(mechId, data) {
            let existing = findById(this.mechs, mechId)
            updateObject(existing, data, [
                'name',
                'size_id',
                'structure_mod_id',
                'armor_mod_id',
                'armor_upgrade_id',
            ]);
        },
        addMechWeapon(mechId, weaponId) {
            let existing = findById(this.mechs, mechId)
            existing.weapon_ids.push(weaponId);
        },
        addMechUpgrade(mechId, weaponId) {
            let existing = findById(this.mechs, mechId)
            existing.upgrade_ids.push(weaponId);
        },
    },
    getters: {
        getMech(state) {
            return (mechId) => findById(state.mechs, mechId)
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
                    weapon_ids,
                } = this.getMech(mechId);

                const weapons = weapon_ids.map((weaponId) => this.getWeaponInfo(mechId, weaponId));

                const size = HEV_SIZES[size_id];
                const structureMod = HEV_BODY_MODS[structure_mod_id];
                const armorMod = HEV_BODY_MODS[armor_mod_id];
                const armorUpgrade = HEV_ARMOR_UPGRADES[armor_upgrade_id];
                const maxTons = size.max_tons + armorMod.max_tons + structureMod.max_tons;
                const placeholderName = ('Mech-' + mechId).padStart(1);

                const armorStat = size.armor + armorMod.modifier;
                const structureStat = size.structure + armorMod.modifier;

                const maxSlots = size.slots - armorUpgrade.slots;

                const usedSlots = sumBy(weapons, 'slots');
                const usedTons = sumBy(weapons, 'cost');

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
    },
});