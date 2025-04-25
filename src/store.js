import {defineStore} from 'pinia';
import {HEV_SIZES, SIZE_MEDIUM} from './data/mech-sizes.js';
import {MOD_STANDARD} from './data/mech-body.js';
import {NO_ARMOR_UPGRADE} from './data/mech-armor-upgrades.js';

export const mechStore = defineStore('mech', {
    state() {
        return {
            name: '',
            sizeId: SIZE_MEDIUM,
            structureModId: MOD_STANDARD,
            armorModId: MOD_STANDARD,
            armorUpgradeId: NO_ARMOR_UPGRADE,
        };
    },
    mutations: {

    },
    getters: {
        size(state) {
            return HEV_SIZES[state.sizeId];
        },
    },
});