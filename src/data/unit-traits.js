import {MECH_UPGRADES, TARGET_DESIGNATOR} from './mech-upgrades.js';

export const TRAIT_ALL_TERRAIN = 'TRAIT_ALL_TERRAIN';
export const TRAIT_CLOSE_SUPPORT = 'TRAIT_CLOSE_SUPPORT';
export const TRAIT_GARRISON = 'TRAIT_GARRISON';
export const TRAIT_GROUP_COMMAND = 'TRAIT_GROUP_COMMAND';
export const TRAIT_MAGNETIC_GRAPPLES = 'TRAIT_MAGNETIC_GRAPPLES';
export const TRAIT_MINE_SWEEPER = 'TRAIT_MINE_SWEEPER';
export const TRAIT_SHIELD_PROJECTOR = 'TRAIT_SHIELD_PROJECTOR';
export const TRAIT_TARGET_DESIGNATOR = 'TRAIT_TARGET_DESIGNATOR';
export const TRAIT_OUTRIDER = 'TRAIT_OUTRIDER';
export const TRAIT_SUPPORT_ORDER_CNC = 'TRAIT_SUPPORT_ORDER_CNC';
export const TRAIT_SUPPORT_ORDER_COMBAT_SUPPLIES = 'TRAIT_SUPPORT_ORDER_COMBAT_SUPPLIES';
export const TRAIT_SUPPORT_GUIDANCE_SUITE = 'TRAIT_SUPPORT_GUIDANCE_SUITE';
export const TRAIT_SUPPORT_MINE_DRONE_LAYER = 'TRAIT_SUPPORT_MINE_DRONE_LAYER';
export const TRAIT_SUPPORT_MOED = 'TRAIT_SUPPORT_MOED';

export const UNIT_TRAITS = makeUnitTraits({
    [[TRAIT_ALL_TERRAIN]]: {
        display_name: 'All-Terrain',
        description: 'Units with this Trait ignore the movement penalty for Rough Terrain.',
    },
    [[TRAIT_CLOSE_SUPPORT]]: {
        display_name: 'Close Support',
        description: 'If a friendly unit with this trait is within 6” of an enemy target of a Engage or Smash Order, add one to the Damage Rating of each weapon used in that Engage or Smash Order. This bonus is only applied once, regardless of the number of units with this Trait in range.',
    },
    [[TRAIT_GARRISON]]: {
        display_name: 'Garrison',
        description: '',
    },
    [[TRAIT_GROUP_COMMAND]]: {
        display_name: 'Group Command',
        description: 'All Units in this Asset are issued Orders during the same activation. Select one Unit from this Asset, perform its Orders as normal until it has finished. Then select another Unit from this Asset, perform its Orders until it has finished, and so on until all Units from this Asset have activated. The opponent Commander then becomes the Active Player as normal. If this Unit is no longer in play, any other Units from its Asset will still activate with Group Command.',
    },
    [[TRAIT_MAGNETIC_GRAPPLES]]: {
        display_name: 'Magnetic Grapples',
        description: 'When an enemy Unit attempts to Move or Jump out of contact with one or more Units with this Trait, before moving, that model rolls 1D6, adding +1 for each additional model with this Trait in contact after the first. On a 1-2 result, reduce the Speed distance that the Unit may move by 50%. On a 3-4 result, reduce the distance by 75%. On a 5-6 result, the Active Unit may only move 1” regardless of how far it would normally be allowed to go during that Order.',
    },
    [[TRAIT_MINE_SWEEPER]]: {
        display_name: 'Mine Sweeper',
        description: 'Unit with this Trait may perform the following Order: Clear Minefield: Target a Mine Token of any type within 8” and Line of Sight of this Unit. Roll 1D6, adding +1 for each additional model with the Minesweeper Trait in this Unit. on a roll of 4”, the Mine Token is neutralized and removed from play.',
    },
    [[TRAIT_SHIELD_PROJECTOR]]: {
        display_name: 'Shield Projector',
        description: 'When a friendly or enemy unit within 6” is damaged by an Attack, and it has more than 0 Armor remaining, roll 1D6 for each point of Damage it would receive. On a 5+, that point of Damage is ignored. Damage negated by this rule is treated as not having happened for the purposes of other weapon Trait effects, such as AP. This effect is not cumulative with the effect of a Combat Shield.',
    },
    [[TRAIT_TARGET_DESIGNATOR]]: {
        display_name: 'Target Designator',
        description: MECH_UPGRADES[TARGET_DESIGNATOR].description,
    },
    [[TRAIT_OUTRIDER]]: {
        display_name: 'Outrider',
        description: 'If these models are part of a Squadron, they may be deployed and end moves within 12” of the Squadron Leader (instead of 3”). However, all models with this Trait in a Squadron must deploy and end moves within 3” of all other models with this Trait in the Squadron.',
    },
    [[TRAIT_SUPPORT_ORDER_CNC]]: {
        display_name: 'Support: Command and Control Station',
        description: '',
    },
    [[TRAIT_SUPPORT_ORDER_COMBAT_SUPPLIES]]: {
        display_name: 'Support: Combat Supplies',
        description: '',
    },
    [[TRAIT_SUPPORT_GUIDANCE_SUITE]]: {
        display_name: 'Support: Guidance Suite',
        description: '',
    },
    [[TRAIT_SUPPORT_MINE_DRONE_LAYER]]: {
        display_name: 'Support: Mine Drone Layer',
        description: '',
    },[[TRAIT_SUPPORT_MOED]]: {
        display_name: 'Support: Multi-spectral Obscuration Emitter Deployer',
        description: '',
    },
    //
    // [[FOO]]: {
    //     display_name: '',
    //     description: '',
    // },
});

function makeUnitTraits(items) {
    Object.keys(items)
        .forEach((key) => {
            const item = items[key];
            item.id = key;

            Object.freeze(item);
        });

    return Object.freeze(items);
}