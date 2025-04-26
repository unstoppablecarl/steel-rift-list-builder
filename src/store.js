import {defineStore} from 'pinia';
import {HEV_SIZES, SIZE_MEDIUM} from './data/mech-sizes.js';
import {HEV_BODY_MODS, MOD_STANDARD} from './data/mech-body.js';
import {HEV_ARMOR_UPGRADES, NO_ARMOR_UPGRADE} from './data/mech-armor-upgrades.js';
import {updateObject} from './data/data-helpers.js';
import {find} from 'lodash';
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
                sizeId: SIZE_MEDIUM,
                structureModId: MOD_STANDARD,
                armorModId: MOD_STANDARD,
                armorUpgradeId: NO_ARMOR_UPGRADE,
                weapons: [],
            });
        },
        updateMechName(mechId, name){
            let existing = find(this.mechs, (mech) => mechId == mech.id);
            existing.name = name
        },
        updateMech(mechId, data) {
            let existing = find(this.mechs, (mech) => mechId == mech.id);
            updateObject(existing, data, [
                'name',
                'sizeId',
                'structureModId',
                'armorModId',
                'armorUpgradeId',
            ]);
        },
        addMechWeapon(mechId, weaponId) {
            let existing = find(this.mechs, (mech) => mechId == mech.id);
            existing.weapons.push(weaponId);
        },
    },
    getters: {
        getMech(state) {
            return (mechId) => find(state.mechs, (mech) => mechId == mech.id);
        },
        getMechName(state){
            return (mechId) => this.getMech(mechId).name
        },
        getMechInfo(state) {
            return function (mechId) {
                let {
                    name,
                    sizeId,
                    structureModId,
                    armorModId,
                    armorUpgradeId,
                } = this.getMech(mechId);

                const size = HEV_SIZES[sizeId];
                const structureMod = HEV_BODY_MODS[structureModId];
                const armorMod = HEV_BODY_MODS[armorModId];
                const armorUpgrade = HEV_ARMOR_UPGRADES[armorUpgradeId];
                const maxTons = size.max_tons + armorMod.max_tons + structureMod.max_tons;
                const placeholderName = ('Mech-' + mechId).padStart(1);
                const maxSlots = size.slots - armorUpgrade.slots;

                let displayName = name || placeholderName;

                return {
                    name,
                    displayName,
                    placeholderName,
                    sizeId,
                    structureModId,
                    structureMod,
                    armorModId,
                    armorMod,
                    maxTons,
                    armorUpgradeId,
                    armorUpgrade,
                    size,
                    maxSlots,
                };
            };
        },
        getWeapon(state) {
            return (weaponId) => HEV_WEAPONS[this.weaponId];
        },
        getWeaponInfo(state) {
            return (mechId, weaponId) => {

                let sizeId = this.getMech(mechId).sizeId;
                let weapon = HEV_WEAPONS[weaponId];

                return readonly({
                    display_name: weapon.display_name,
                    damage: weapon.damage_by_size[sizeId],
                    slots: 1,
                    cost: weapon.cost_by_size[sizeId],
                    range: weapon.range,
                    traits: weapon.traits_by_size[sizeId],
                    trait_display_names: weapon.traits_by_size[sizeId]
                        .map((traitId) => {
                            return WEAPON_TRAITS[traitId].display_name;
                        })
                        .join(', '),
                });
            };
        },
    },
});