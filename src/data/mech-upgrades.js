import {SIZE_HEAVY, SIZE_LIGHT, SIZE_MEDIUM, SIZE_ULTRA} from './mech-sizes.js';
import {SUBMUNITIONS} from './mech-weapons.js';
import {makeFrozenStaticListIds} from './data-helpers.js';
import {TRAIT_COMPACT, TRAIT_DASH} from './upgrade-traits.js';
import {trait} from './weapon-traits.js';

export const ANTI_MISSILE_SYSTEM = 'ANTI_MISSILE_SYSTEM';
export const ELECTRONIC_COUNTERMEASURES = 'ELECTRONIC_COUNTERMEASURES';
export const HEAVY_REACTOR = 'HEAVY_REACTOR';
export const JUMP_JETS = 'JUMP_JETS';
export const MINEFIELD_DRONE_CARRIER_SYSTEM = 'MINEFIELD_DRONE_CARRIER_SYSTEM';
export const MINEFIELD_DRONE_TRACKING_SYSTEM = 'Minefield Drone Tracking Submunitions';
export const OPTIC_CAMO = 'OPTIC_CAMO';
export const TARGET_DESIGNATOR = 'TARGET_DESIGNATOR';
export const COOLANT_TANKS = 'COOLANT_TANKS';
export const DIRECTIONAL_THRUSTER = 'DIRECTIONAL_THRUSTER';
export const HAPTIC_SUIT = 'HAPTIC_SUIT';
export const HIGH_SPEED_SERVOS = 'HIGH_SPEED_SERVOS';
export const NEURAL_INPUT = 'NEURAL_INPUT';
export const NITRO_BOOST = 'NITRO_BOOST';
export const COMBAT_SHIELD = 'COMBAT_SHIELD';

export const MECH_UPGRADES = makeFrozenStaticListIds({
    [[ANTI_MISSILE_SYSTEM]]: makeUpgrade({
        display_name: 'Anti-Missile System',
        description: 'This unit may not be targeted by a Weapon System using the Smart trait to Engage them from outside of Line of Sight of the Active Model.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[ELECTRONIC_COUNTERMEASURES]]: makeUpgrade({
        display_name: 'Electronic Countermeasures',
        description: 'The Lock On order may not be taken against this model.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 1,
            [[SIZE_ULTRA]]: 1,
        },
    }),
    [[HEAVY_REACTOR]]: makeUpgrade({
        display_name: 'Heavy Reactor',
        description: 'Roll 1D6 when this model would take Structure damage from Redlining, on a 4+ this damage is ignored.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[JUMP_JETS]]: makeUpgrade({
        display_name: 'Jump Jets',
        description: 'This model may take the Jump Jet action.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 3,
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[MINEFIELD_DRONE_CARRIER_SYSTEM]]: makeUpgrade({
        display_name: 'Minefield Drone Carrier System',
        description: 'ORDER: Place a Mine Drone token (as per the Support Asset) within 3” of theActive model and not within 6” of another Mine Drone token. This Upgrade has the Limited (*/1/2/2) trait.',
        cost_by_size: {
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 6,
            [[SIZE_ULTRA]]: 6,
        },
        prohibited_by_sizes: [SIZE_LIGHT],
    }),
    [[MINEFIELD_DRONE_TRACKING_SYSTEM]]: makeUpgrade({
        display_name: 'Minefield Drone Tracking Submunitions',
        description: 'ORDER: This model makes an immediate Engage order against a Mine Field token in range. The Commander of the target Minefield makes a Defense Roll on a 3+. If at least one point of Damage would be inflicted, remove the Token.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
        upgrade_required: [SUBMUNITIONS],
    }),
    [[OPTIC_CAMO]]: makeUpgrade({
        display_name: 'Optic Camouflage',
        description: 'Add +1 to Defense Rolls for this unit when the attacker is outside of 10”',
        cost_by_size: {
            [[SIZE_LIGHT]]: 5,
            [[SIZE_MEDIUM]]: 4,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[TARGET_DESIGNATOR]]: makeUpgrade({
        display_name: 'Target Designator',
        description: '',
        cost: 1,
    }),
    [[COOLANT_TANKS]]: makeUpgrade({
        display_name: 'Coolant Tanks',
        description: 'Twice per game, before issuing an Order you may remove a Redline Marker from this HE-V.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[DIRECTIONAL_THRUSTER]]: makeUpgrade({
        display_name: 'Directional Thruster',
        description: '',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 3,
            [[SIZE_ULTRA]]: 4,
        },
        traits: [
            trait(TRAIT_DASH),
        ],
    }),
    [[HAPTIC_SUIT]]: makeUpgrade({
        display_name: 'Haptic Suit',
        description: 'When performing Return Fire, you may reroll all failed Defense Rolls.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 1,
            [[SIZE_ULTRA]]: 1,
        },
        traits: [
            trait(TRAIT_COMPACT),
        ],
        slots: 0,
    }),
    [[HIGH_SPEED_SERVOS]]: makeUpgrade({
        display_name: 'High Speed Servos',
        description: 'After performing a Smash Order, this Unit may perform a second Smash Order for free.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 3,
            [[SIZE_HEAVY]]: 4,
            [[SIZE_ULTRA]]: 5,
        },
    }),
    [[NEURAL_INPUT]]: makeUpgrade({
        display_name: 'Neural Input',
        description: 'Reduce the Damage Rating of Smash Orders targeting this Unit by 1.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 1,
            [[SIZE_ULTRA]]: 1,
        },
        traits: [
            trait(TRAIT_COMPACT),
        ],
        slots: 0,
    }),
    [[NITRO_BOOST]]: makeUpgrade({
        display_name: 'Nitro Boost',
        description: 'Once per game, at the beginning of a Move Order, you may move an additional 4”',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
    }),
    [[COMBAT_SHIELD]]: makeUpgrade({
        display_name: 'Combat Shield',
        description: 'When this HE-V is damaged by an Attack originating from its front or side arcs, and it has more than 0 Armor remaining, roll 1D6 for each point of Damage it would receive. On a 5+, that point of Damage is ignored. Damage negated by this rule is treated as not having happened for the purposes of other weapon Trait effects, such as AP. If this HE-V performs an Engage Order, all of its Weapon Systems receive a -1 to their Damage Rating.',
        cost_by_size: {
            [[SIZE_LIGHT]]: 0,
            [[SIZE_MEDIUM]]: 0,
            [[SIZE_HEAVY]]: 4,
            [[SIZE_ULTRA]]: 5,
        },
        limited_size_ids: [SIZE_HEAVY, SIZE_ULTRA],
    }),
});

export function upgradeDisplayName(id) {
    return MECH_UPGRADES[id].display_name;
}

function makeUpgrade(item) {
    if (!item.cost_by_size) {
        item.cost_by_size = {
            [[SIZE_LIGHT]]: item.cost,
            [[SIZE_MEDIUM]]: item.cost,
            [[SIZE_HEAVY]]: item.cost,
            [[SIZE_ULTRA]]: item.cost,
        };
    }

    if (item.slots === undefined) {
        item.slots = 1;
    }

    return item;
}