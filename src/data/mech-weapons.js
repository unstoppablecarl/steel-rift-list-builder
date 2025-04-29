import {SIZE_HEAVY, SIZE_LIGHT, SIZE_MEDIUM, SIZE_ULTRA} from './mech-sizes.js';
import {
    makeTrait,
    TRAIT_AP,
    TRAIT_BLAST,
    TRAIT_DISRUPTIVE,
    TRAIT_DRAINING,
    TRAIT_FLAK,
    TRAIT_FRAG,
    TRAIT_KINETIC,
    TRAIT_LIGHT,
    TRAIT_LIMITED,
    TRAIT_MELEE,
    TRAIT_SHORT,
    TRAIT_SMART,
} from './weapon-traits.js';
import {listToDropDown, makeFrozenStaticListIds} from './data-helpers.js';
import {find} from 'lodash';

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

export const HEV_WEAPONS = makeFrozenStaticListIds({
    [[AUTO_CANNON]]: makeWeapon({
        display_name: 'Auto-Cannon',
        damage_by_size: {
            [[SIZE_LIGHT]]: 3,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 5,
            [[SIZE_ULTRA]]: 6,
        },
        traits: [
            makeTrait(TRAIT_KINETIC),
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
            makeTrait(TRAIT_BLAST, 3),
            makeTrait(TRAIT_KINETIC),
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
            [[SIZE_LIGHT]]: [makeTrait(TRAIT_AP, 1)],
            [[SIZE_MEDIUM]]: [makeTrait(TRAIT_AP, 1)],
            [[SIZE_HEAVY]]: [makeTrait(TRAIT_AP, 2)],
            [[SIZE_ULTRA]]: [makeTrait(TRAIT_AP, 3)],
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
            [[SIZE_LIGHT]]: [makeTrait(TRAIT_MELEE, 1)],
            [[SIZE_MEDIUM]]: [makeTrait(TRAIT_MELEE, 1)],
            [[SIZE_HEAVY]]: [makeTrait(TRAIT_MELEE, 2)],
            [[SIZE_ULTRA]]: [makeTrait(TRAIT_MELEE, 2)],
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
            makeTrait(TRAIT_SMART),
            makeTrait(TRAIT_LIMITED, 3),
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
            makeTrait(TRAIT_SHORT, 18),
            makeTrait(TRAIT_DRAINING),
            makeTrait(TRAIT_DISRUPTIVE),
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
            makeTrait(TRAIT_KINETIC),
        ],
        traits_by_size: {
            [[SIZE_LIGHT]]: [makeTrait(TRAIT_AP, 1)],
            [[SIZE_MEDIUM]]: [makeTrait(TRAIT_AP, 1)],
            [[SIZE_HEAVY]]: [makeTrait(TRAIT_AP, 2)],
            [[SIZE_ULTRA]]: [makeTrait(TRAIT_AP, 3)],
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
            makeTrait(TRAIT_SMART),
            makeTrait(TRAIT_BLAST, 3),
            makeTrait(TRAIT_LIMITED, 2),
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
            makeTrait(TRAIT_SHORT, 12),
            makeTrait(TRAIT_LIGHT),
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
            makeTrait(TRAIT_SHORT, 6),
            makeTrait(TRAIT_LIGHT),
            makeTrait(TRAIT_FRAG),
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
            makeTrait(TRAIT_SHORT, 6),
            makeTrait(TRAIT_FLAK),
        ],
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 4,
        },
    }),
});
function makeWeapon({
                        display_name,
                        damage,
                        damage_by_size,
                        traits,
                        traits_by_size,
                        cost,
                        cost_by_size,
                    }) {
    if (!cost_by_size) {
        cost_by_size = {
            [[SIZE_LIGHT]]: cost,
            [[SIZE_MEDIUM]]: cost,
            [[SIZE_HEAVY]]: cost,
            [[SIZE_ULTRA]]: cost,
        };
    }

    if (!traits_by_size) {
        traits_by_size = {
            [[SIZE_LIGHT]]: traits,
            [[SIZE_MEDIUM]]: traits,
            [[SIZE_HEAVY]]: traits,
            [[SIZE_ULTRA]]: traits,
        };
    }

    if (!damage_by_size) {
        damage_by_size = {
            [[SIZE_LIGHT]]: damage,
            [[SIZE_MEDIUM]]: damage,
            [[SIZE_HEAVY]]: damage,
            [[SIZE_ULTRA]]: damage,
        };
    }
    let range = null;
    if (traits) {

        let result = find(traits, (trait) => trait.id == TRAIT_SHORT);
        if (result) {
            range = result.number;
        }
    }

    return {
        display_name,
        damage_by_size,
        traits_by_size,
        cost_by_size,
        range,
    };

}

export const HEV_WEAPONS_DROP_DOWN = listToDropDown(HEV_WEAPONS);
