import {listToDropDown} from './data-helpers.js';

export const SIZE_LIGHT = 'SIZE_LIGHT';
export const SIZE_MEDIUM = 'SIZE_MEDIUM';
export const SIZE_HEAVY = 'SIZE_HEAVY';
export const SIZE_ULTRA = 'SIZE_ULTRA';

export const HEV_SIZES = {
    [[SIZE_LIGHT]]: {
        display_name: 'Light',
        armor: 6,
        structure: 4,
        slots: 4,
        max_tons: 20,
        speed: 12,
        jump: 10,
    },
    [[SIZE_MEDIUM]]: {
        display_name: 'Medium',
        armor: 8,
        structure: 6,
        slots: 5,
        max_tons: 30,
        speed: 10,
        jump: 8,
    },
    [[SIZE_HEAVY]]: {
        display_name: 'Heavy',
        armor: 10,
        structure: 8,
        slots: 6,
        max_tons: 40,
        speed: 8,
        jump: 6,
    },
    [[SIZE_ULTRA]]: {
        display_name: 'Ultra',
        armor: 12,
        structure: 10,
        slots: 7,
        max_tons: 50,
        speed: 6,
        jump: 4,
    },
};

export const HEV_SIZES_DROP_DOWN = listToDropDown(HEV_SIZES);