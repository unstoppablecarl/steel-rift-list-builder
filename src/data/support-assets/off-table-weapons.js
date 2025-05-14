import {trait, TRAIT_AP, TRAIT_BLAST, TRAIT_KINETIC, TRAIT_LIMITED, TRAIT_MINE_TOKENS} from '../weapon-traits.js';
import {SA_TYPE_OT_WEAPON} from './support-asset-types.js';

export const ARTILLERY_BARRAGE = 'ARTILLERY_BARRAGE';
export const MASS_DRIVER = 'MASS_DRIVER';
export const MINE_DRONE_BARRAGE = 'MINE_DRONE_BARRAGE';
export const ORBITAL_LASER = 'ORBITAL_LASER';

export const OFF_TABLE_WEAPON_SUPPORT_ASSETS = {
    [[ARTILLERY_BARRAGE]]: {
        type: SA_TYPE_OT_WEAPON,
        display_name: 'Artillery Barrage',
        description: 'Once per Game Round, instead of activating or redlining a model, a Commander may call down an Artillery Barrage from off-table. This Barrage is an Engage Order. The target must be in Line of Sight of a model with a Target Designator or this Support Asset may not be used.',
        cost: 10,
        off_table_weapon: {
            damage: 4,
            traits: [
                trait(TRAIT_BLAST, 6),
                trait(TRAIT_LIMITED, 3),
            ],
        },
    },
    [[MASS_DRIVER]]: {
        type: SA_TYPE_OT_WEAPON,
        display_name: 'Mass Driver',
        description: 'Once per Game Round, instead of activating or redlining a model, a Commander may drop a tungsten mass rod from orbit. This is an Engage Order. Use the center of the Active Player’s Deployment edge as the origin of the attack. The target must be in Line of Sight of a model with a Target Designator or this Support Asset may not be used. Treat the size of the attacker as Ultra-Heavy for the purposes of the Kinetic trait.',
        cost: 10,
        off_table_weapon: {
            damage: 6,
            traits: [
                trait(TRAIT_KINETIC),
                trait(TRAIT_LIMITED, 3),
            ],
        },
    },
    [[MINE_DRONE_BARRAGE]]: {
        type: SA_TYPE_OT_WEAPON,
        display_name: 'Mine-Drone Barrage',
        description: 'After Generating Terrain, but before Setting Up Forces, the Commander with this Support Asset may place Mine-Drone tokens (25mm) on the Battlefield not within 12” of an enemy deployment edge, and not within 6” of another friendly Mine-Drone token.',
        cost: 10,
        off_table_weapon: {
            traits: [
                trait(TRAIT_MINE_TOKENS, 3),
            ],
        },
    },
    [[ORBITAL_LASER]]: {
        type: SA_TYPE_OT_WEAPON,
        display_name: 'Orbital Laser',
        description: 'Once per Game Round, instead of activating or redlining a model, a Commander may request an orbital laser strike. This is an Engage Order. The target must be in the Line of Sight of a model with a Target Designator or this Support Asset may not be used. Line of Sight for this Attack is drawn from the Target Model to itself (therefore it is never obstructed).',
        cost: 10,
        off_table_weapon: {
            damage: 3,
            traits: [
                trait(TRAIT_AP, 3),
                trait(TRAIT_LIMITED, 3),
            ],
        },
    },
};