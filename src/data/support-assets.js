import {makeFrozenStaticListIds} from './data-helpers.js';
import {OFF_TABLE_WEAPON_SUPPORT_ASSETS} from './support-assets/off-table-weapons.js';
import {ASSAULT_VEHICLE_SQUADRON_DATA} from './support-assets/assault-vehicle-squadron.js';

export const SUPPORT_ASSETS = makeFrozenStaticListIds({
    ...OFF_TABLE_WEAPON_SUPPORT_ASSETS,
    // ...ASSAULT_VEHICLE_SQUADRON_DATA,
});