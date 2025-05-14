import {
    trait,
    TRAIT_BLAST,
    TRAIT_CONCUSSIVE,
    TRAIT_DISRUPTIVE,
    TRAIT_FLAK,
    TRAIT_KINETIC,
    TRAIT_LIGHT,
    TRAIT_LIMITED,
    TRAIT_MELEE,
    TRAIT_SHORT,
    TRAIT_SMART,
} from './weapon-traits.js';
import {makeFrozenStaticListIds} from './data-helpers.js';
import {getRangeFromShortTrait} from './mech-weapons.js';

export const VEH_AUTO_CANNON = 'VEH_AUTO_CANNON';
export const AA_ARRAY = 'AA_ARRAY';
export const DOZER_BLADE = 'DOZER_BLADE';
export const VEH_HOWITZER = 'VEH_HOWITZER';
export const HEAVY_INCINERATORS = 'HEAVY_INCINERATORS';
export const MISSILE_PACK = 'MISSILE_PACK';
export const VEH_SUBMUNITIONS = 'VEH_SUBMUNITIONS';

export const VEHICLE_WEAPONS = makeFrozenStaticListIds({
    [[VEH_AUTO_CANNON]]: makeWeapon({
        display_name: 'Veh. Auto-Cannon',
        damage: 2,
        traits: [
            trait(TRAIT_KINETIC, 'M'),
        ],
    }),
    [[AA_ARRAY]]: makeWeapon({
        display_name: 'AA Array',
        damage: 2,
        traits: [
            trait(TRAIT_LIGHT),
            trait(TRAIT_FLAK),
            trait(TRAIT_KINETIC, 'M'),
        ],
    }),
    [[DOZER_BLADE]]: makeWeapon({
        display_name: 'Dozer Blade',
        damage: null,
        traits: [
            trait(TRAIT_MELEE, 'X'),
            trait(TRAIT_CONCUSSIVE, 2),
        ],
    }),
    [[VEH_HOWITZER]]: makeWeapon({
        display_name: 'Dozer Blade',
        damage: 3,
        traits: [
            trait(TRAIT_BLAST, 3),
            trait(TRAIT_KINETIC, 'M'),
        ],
    }),
    [[HEAVY_INCINERATORS]]: makeWeapon({
        display_name: 'Heavy Incinerators',
        damage: 5,
        traits: [
            trait(TRAIT_SHORT, 8),
            trait(TRAIT_DISRUPTIVE),
            trait(TRAIT_LIGHT),
        ],
    }),
    [[MISSILE_PACK]]: makeWeapon({
        display_name: 'Missile Pack',
        damage: 3,
        traits: [
            trait(TRAIT_SMART),
            trait(TRAIT_BLAST, 3),
            trait(TRAIT_LIMITED, 3),
        ],
    }),
    [[VEH_SUBMUNITIONS]]: makeWeapon({
        display_name: 'Submunitions',
        damage: 1,
        traits: [
            trait(TRAIT_SHORT, 6),
            trait(TRAIT_FLAK),
        ],
    }),
});

function makeWeapon({
                        display_name,
                        damage,
                        traits,
                    }) {

    traits = traits || [];

    let range = getRangeFromShortTrait(traits);

    return {
        display_name,
        range,
        damage,
        traits,
    };
}