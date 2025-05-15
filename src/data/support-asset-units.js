import {makeFrozenStaticListIds} from './data-helpers.js';
import {ASSAULT_VEHICLE_SQUADRON_DATA} from './support-assets/assault-vehicle-squadron.js';
import {SUPPORT_VEHICLE_SQUADRON_DATA} from './support-assets/support-vehicle-squadron.js';
import {LAS_WING_ATTACK_SQUADRON_DATA} from './support-assets/las-wing-attack-squadron.js';

export const SUPPORT_ASSET_UNITS = makeFrozenStaticListIds({
    ...ASSAULT_VEHICLE_SQUADRON_DATA,
    ...SUPPORT_VEHICLE_SQUADRON_DATA,
    ...LAS_WING_ATTACK_SQUADRON_DATA,
});