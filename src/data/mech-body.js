import {listToDropDown} from './data-helpers.js';

export const MOD_STRIPPED = 'MOD_STRIPPED';
export const MOD_STANDARD = 'MOD_STANDARD';
export const MOD_REINFORCED = 'MOD_REINFORCED';

export const HEV_BODY_MODS = Object.freeze({
    [[MOD_STRIPPED]]: {
        display_name: 'Stripped',
        modifier: -2,
        max_tons: 2,
    },
    [[MOD_STANDARD]]: {
        display_name: 'Standard',
        modifier: 0,
        max_tons: 0,
    },
    [[MOD_REINFORCED]]: {
        display_name: 'Reinforced',
        modifier: 2,
        max_tons: -2,
    },
});

export const HEV_BODY_MODS_DROP_DOWN = listToDropDown(HEV_BODY_MODS);