import {SIZE_HEAVY, SIZE_LIGHT, SIZE_MEDIUM, SIZE_ULTRA} from './mech-sizes.js';
import {SUBMUNITIONS} from './mech-weapons.js';
import {listToDropDown, makeStaticListIds} from './data-helpers.js';

export const ANTI_MISSILE_SYSTEM = 'ANTI_MISSILE_SYSTEM';
export const ELECTRONIC_COUNTERMEASURES = 'ELECTRONIC_COUNTERMEASURES';
export const HEAVY_REACTOR = 'HEAVY_REACTOR';
export const JUMP_JETS = 'JUMP_JETS';
export const MINEFIELD_DRONE_CARRIER_SYSTEM = 'MINEFIELD_DRONE_CARRIER_SYSTEM';
export const MINEFIELD_DRONE_TRACKING_SYSTEM = 'Minefield Drone Tracking Submunitions';
export const OPTIC_CAMO = 'OPTIC_CAMO';
export const TARGET_DESIGNATOR = 'TARGET_DESIGNATOR';

export const HEV_UPGRADES = makeStaticListIds({
    [[ANTI_MISSILE_SYSTEM]]: makeArmorUpgrade({
        display_name: 'Anti-Missile System',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[ELECTRONIC_COUNTERMEASURES]]: makeArmorUpgrade({
        display_name: 'Electronic Countermeasures',
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 1,
            [[SIZE_ULTRA]]: 1,
        },
    }),
    [[HEAVY_REACTOR]]: makeArmorUpgrade({
        display_name: 'Heavy Reactor',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[JUMP_JETS]]: makeArmorUpgrade({
        display_name: 'Jump Jets',
        cost_by_size: {
            [[SIZE_LIGHT]]: 3,
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[MINEFIELD_DRONE_CARRIER_SYSTEM]]: makeArmorUpgrade({
        display_name: 'Minefield Drone Carrier System',
        cost_by_size: {
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 6,
            [[SIZE_ULTRA]]: 6,
        },
        prohibited_by_sizes: [SIZE_LIGHT],
    }),
    [[MINEFIELD_DRONE_TRACKING_SYSTEM]]: makeArmorUpgrade({
        display_name: 'Minefield Drone Tracking Submunitions',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
        upgrade_required: [SUBMUNITIONS],
    }),
    [[OPTIC_CAMO]]: makeArmorUpgrade({
        display_name: 'Optic Camouflage',
        cost_by_size: {
            [[SIZE_LIGHT]]: 5,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[TARGET_DESIGNATOR]]: makeArmorUpgrade({
        display_name: 'Target Designator',
        cost: 1,
    }),
});

export const HEV_UPGRADES_DROP_DOWN = listToDropDown(HEV_UPGRADES);

function makeArmorUpgrade(item) {
    if (!item.cost_by_size) {
        item.cost_by_size = {
            [[SIZE_LIGHT]]: item.cost,
            [[SIZE_MEDIUM]]: item.cost,
            [[SIZE_HEAVY]]: item.cost,
            [[SIZE_ULTRA]]: item.cost,
        };
    }

    return item;
}