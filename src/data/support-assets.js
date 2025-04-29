import {makeFrozenStaticListIds} from './data-helpers.js';
import {makeTrait, TRAIT_AP, TRAIT_BLAST, TRAIT_KINETIC, TRAIT_LIMITED, TRAIT_MINE_TOKENS} from './weapon-traits.js';

export const ARTILLERY_BARRAGE = 'ARTILLERY_BARRAGE';
export const MASS_DRIVER = 'MASS_DRIVER';
export const MINE_DRONE_BARRAGE = 'MINE_DRONE_BARRAGE';
export const ORBITAL_LASER = 'ORBITAL_LASER';

export const SUPPORT_ASSETS = makeFrozenStaticListIds({
    [[ARTILLERY_BARRAGE]]: {
        display_name: 'Artillery Barrage',
        cost: 10,
        attack: 4,
        traits: [
            makeTrait(TRAIT_BLAST, 6),
            makeTrait(TRAIT_LIMITED, 3),
        ],
    },
    [[MASS_DRIVER]]: {
        display_name: 'Mass Driver',
        attack: 6,
        cost: 10,
        traits: [
            makeTrait(TRAIT_KINETIC),
            makeTrait(TRAIT_LIMITED, 3),
        ],
    },
    [[MINE_DRONE_BARRAGE]]: {
        display_name: 'Mine-Drone Barrage',
        attack: 0,
        cost: 10,
        traits: [
            makeTrait(TRAIT_MINE_TOKENS, 3),
        ],
    },
    [[ORBITAL_LASER]]: {
        display_name: 'Orbital Laser',
        attack: 3,
        cost: 10,
        traits: [
            makeTrait(TRAIT_AP, 3),
            makeTrait(TRAIT_LIMITED, 3),
        ],
    },
});