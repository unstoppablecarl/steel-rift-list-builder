import {listToDropDown, makeStaticListIds} from './data-helpers.js';

export const MOBILITY_BI_PEDAL = 'MOBILITY_BI_PEDAL';
export const MOBILITY_TRACKED = 'MOBILITY_TRACKED';
export const MOBILITY_MULTI_LIMB = 'MOBILITY_MULTI_LIMB';

export const HEV_MOBILITIES = makeStaticListIds({
    [[MOBILITY_BI_PEDAL]]: {
        display_name: 'Bi-Pedal',
    },
    [[MOBILITY_TRACKED]]: {
        display_name: 'Tracked',
    },
    [[MOBILITY_MULTI_LIMB]]: {
        display_name: 'Multi-Limb',
    },
});

export const HEV_MOBILITIES_DROP_DOWN = listToDropDown(HEV_MOBILITIES)