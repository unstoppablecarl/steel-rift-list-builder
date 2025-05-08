import {makeFrozenStaticListIds} from './data-helpers.js';
import {trait, TRAIT_AP, TRAIT_BLAST, TRAIT_KINETIC, TRAIT_LIMITED, TRAIT_MINE_TOKENS} from './weapon-traits.js';

export const ARTILLERY_BARRAGE = 'ARTILLERY_BARRAGE';
export const MASS_DRIVER = 'MASS_DRIVER';
export const MINE_DRONE_BARRAGE = 'MINE_DRONE_BARRAGE';
export const ORBITAL_LASER = 'ORBITAL_LASER';

export const SUPPORT_ASSETS = makeFrozenStaticListIds({
    [[ARTILLERY_BARRAGE]]: {
        display_name: 'Artillery Barrage',
        description: 'Once per Game Round, instead of activating or redlining a model, a Commander may call down an Artillery Barrage from off-table. This Barrage is an Engage Order. The target must be in Line of Sight of a model with a Target Designator or this Support Asset may not be used.',
        cost: 10,
        damage: 4,
        traits: [
            trait(TRAIT_BLAST, 6),
            trait(TRAIT_LIMITED, 3),
        ],
    },
    [[MASS_DRIVER]]: {
        display_name: 'Mass Driver',
        description: 'Once per Game Round, instead of activating or redlining a model, a Commander may drop a tungsten mass rod from orbit. This is an Engage Order. Use the center of the Active Player’s Deployment edge as the origin of the attack. The target must be in Line of Sight of a model with a Target Designator or this Support Asset may not be used. Treat the size of the attacker as Ultra-Heavy for the purposes of the Kinetic trait.',
        damage: 6,
        cost: 10,
        traits: [
            trait(TRAIT_KINETIC),
            trait(TRAIT_LIMITED, 3),
        ],
    },
    [[MINE_DRONE_BARRAGE]]: {
        display_name: 'Mine-Drone Barrage',
        description: 'After Generating Terrain, but before Setting Up Forces, the Commander with this Support Asset may place Mine-Drone tokens (25mm) on the Battlefield not within 12” of an enemy deployment edge, and not within 6” of another friendly Mine-Drone token. If an enemy model ends any Order within 4” of a Mine-Drone token, the Commander may remove the token to make an Engage Order with this support asset attacking that model and all other enemy models in range. Line of Sight for this Attack is drawn from the Target Model to itself (therefore it is never obstructed). The token and Active Unit do not require Line of Sight to each other, as the Drones will attack using their sensors. Units may not Return Fire during this attack. Once this Engage Order is resolved remove the token. Once this is complete the Active Player may continue issuing any remaining orders to the Active Model.',
        damage: 4,
        cost: 10,
        traits: [
            trait(TRAIT_MINE_TOKENS, 3),
            trait(TRAIT_AP, 4),
            trait(TRAIT_BLAST, 4),
        ],
    },
    [[ORBITAL_LASER]]: {
        display_name: 'Orbital Laser',
        description: 'Once per Game Round, instead of activating or redlining a model, a Commander may request an orbital laser strike. This is an Engage Order. The target must be in the Line of Sight of a model with a Target Designator or this Support Asset may not be used. Line of Sight for this Attack is drawn from the Target Model to itself (therefore it is never obstructed).',
        damage: 3,
        cost: 10,
        traits: [
            trait(TRAIT_AP, 3),
            trait(TRAIT_LIMITED, 3),
        ],
    },
});