import {SIZE_HEAVY, SIZE_LIGHT, SIZE_MEDIUM, SIZE_ULTRA} from './mech-sizes.js';
import {
    TRAIT_AP_1,
    TRAIT_AP_2,
    TRAIT_AP_3,
    TRAIT_BLAST_3,
    TRAIT_DISRUPTIVE,
    TRAIT_DRAINING,
    TRAIT_FLAK,
    TRAIT_FRAG,
    TRAIT_KINETIC,
    TRAIT_LIGHT,
    TRAIT_LIMITED_2, TRAIT_LIMITED_3,
    TRAIT_MELEE_1,
    TRAIT_MELEE_2,
    TRAIT_SHORT_12,
    TRAIT_SHORT_18,
    TRAIT_SHORT_6,
    TRAIT_SMART,
} from './weapon-traits.js';

export const AUTO_CANNON = 'AUTO_CANNON';
export const HOWITZER = 'HOWITZER';
export const LASER = 'LASER';
export const MELEE = 'MELEE';
export const MISSILES = 'MISSILES';
export const PARTICLE_CANNON = 'PARTICLE_CANNON';
export const RAIL_GUN = 'RAIL_GUN';
export const ROCKET_PACK = 'ROCKET_PACK';
export const ROTARY_CANNON = 'ROTARY_CANNON';
export const SHOT_CANNON = 'SHOT_CANNON';
export const SUBMUNITIONS = 'SUBMUNITIONS';

export const HEV_WEAPONS = {
    [[AUTO_CANNON]]: makeWeapon({
        display_name: 'Auto-Cannon',
        damage_by_size: {
            [[SIZE_LIGHT]]: 3,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 5,
            [[SIZE_ULTRA]]: 6,
        },
        traits: [
            TRAIT_KINETIC,
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 3,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 5,
            [[SIZE_ULTRA]]: 6,
        },
    }),
    [[HOWITZER]]: makeWeapon({
        display_name: 'Howitzer',
        damage_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 4,
        },
        traits: [
            TRAIT_BLAST_3,
            TRAIT_KINETIC,
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 4,
            [[SIZE_ULTRA]]: 5,
        },
    }),
    [[LASER]]: makeWeapon({
        display_name: 'Laser',
        damage: 2,
        traits: [
            TRAIT_DRAINING,
        ],
        traits_by_size: {
            [[SIZE_LIGHT]]: [TRAIT_AP_1],
            [[SIZE_MEDIUM]]: [TRAIT_AP_1],
            [[SIZE_HEAVY]]: [TRAIT_AP_2],
            [[SIZE_ULTRA]]: [TRAIT_AP_3],
        },
        cost_by_size: {
            [[SIZE_LIGHT]]: 3,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 5,
            [[SIZE_ULTRA]]: 7,
        },
    }),
    [[MELEE]]: makeWeapon({
        display_name: 'Melee Weapon',
        damage: 0,
        traits_by_size: {
            [[SIZE_LIGHT]]: [TRAIT_MELEE_1],
            [[SIZE_MEDIUM]]: [TRAIT_MELEE_1],
            [[SIZE_HEAVY]]: [TRAIT_MELEE_2],
            [[SIZE_ULTRA]]: [TRAIT_MELEE_2],
        },
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 4,
        },
    }),
    [[MISSILES]]: makeWeapon({
        display_name: 'Missiles',
        damage: 0,
        damage_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 6,
            [[SIZE_ULTRA]]: 8,
        },
        traits: [
            TRAIT_SMART,
            TRAIT_LIMITED_3,
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 4,
            [[SIZE_ULTRA]]: 5,
        },
    }),
    [[PARTICLE_CANNON]]: makeWeapon({
        display_name: 'Particle Cannon ',
        damage: 0,
        damage_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 6,
            [[SIZE_ULTRA]]: 8,
        },
        traits: [
            TRAIT_SHORT_18,
            TRAIT_DRAINING,
            TRAIT_DISRUPTIVE,
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 5,
            [[SIZE_ULTRA]]: 6,
        },
    }),
    [[RAIL_GUN]]: makeWeapon({
        display_name: 'Rail gun',
        damage: 1,
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 4,
            [[SIZE_ULTRA]]: 5,
        },
        traits: [
            TRAIT_KINETIC,
        ],
        traits_by_size: {
            [[SIZE_LIGHT]]: [TRAIT_AP_1],
            [[SIZE_MEDIUM]]: [TRAIT_AP_1],
            [[SIZE_HEAVY]]: [TRAIT_AP_2],
            [[SIZE_ULTRA]]: [TRAIT_AP_3],
        },
    }),
    [[ROCKET_PACK]]: makeWeapon({
        display_name: 'Rocket Pack',
        damage_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 6,
            [[SIZE_ULTRA]]: 8,
        },
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 4,
            [[SIZE_ULTRA]]: 5,
        },
        traits: [
            TRAIT_SMART,
            TRAIT_BLAST_3,
            TRAIT_LIMITED_2,
        ],
    }),
    [[ROTARY_CANNON]]: makeWeapon({
        display_name: 'Rotary Cannon',
        damage_by_size: {
            [[SIZE_LIGHT]]: 5,
            [[SIZE_MEDIUM]]: 7,
            [[SIZE_HEAVY]]: 11,
            [[SIZE_ULTRA]]: 13,
        },
        traits: [
            TRAIT_SHORT_12,
            TRAIT_LIGHT,
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 6,
            [[SIZE_ULTRA]]: 8,
        },
    }),
    [[SHOT_CANNON]]: makeWeapon({
        display_name: 'Shot Cannon',
        damage_by_size: {
            [[SIZE_LIGHT]]: 6,
            [[SIZE_MEDIUM]]: 8,
            [[SIZE_HEAVY]]: 10,
            [[SIZE_ULTRA]]: 12,
        },
        traits: [
            TRAIT_SHORT_6,
            TRAIT_LIGHT,
            TRAIT_FRAG,
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 5,
            [[SIZE_ULTRA]]: 6,
        },
    }),
    [[SUBMUNITIONS]]: makeWeapon({
        display_name: 'Submunitions',
        damage_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 4,
        },
        traits: [
            TRAIT_SHORT_6,
            TRAIT_FLAK,
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 4,
        },
    }),
};

function makeWeapon(item) {
    if (!item.cost_by_size) {
        item.cost_by_size = {
            [[SIZE_LIGHT]]: item.cost,
            [[SIZE_MEDIUM]]: item.cost,
            [[SIZE_HEAVY]]: item.cost,
            [[SIZE_ULTRA]]: item.cost,
        };
    }

    if (!item.traits_by_size) {
        item.traits_by_size = {
            [[SIZE_LIGHT]]: item.traits,
            [[SIZE_MEDIUM]]: item.traits,
            [[SIZE_HEAVY]]: item.traits,
            [[SIZE_ULTRA]]: item.traits,
        };
    }

    if (!item.damage_by_size) {
        item.damage_by_size = {
            [[SIZE_LIGHT]]: item.damage,
            [[SIZE_MEDIUM]]: item.damage,
            [[SIZE_HEAVY]]: item.damage,
            [[SIZE_ULTRA]]: item.damage,
        };
    }

    return item;

}