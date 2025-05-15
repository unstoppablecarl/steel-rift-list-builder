import {
    AA_ARRAY,
    DOZER_BLADE,
    HEAVY_INCINERATORS,
    MISSILE_PACK,
    VEH_AUTO_CANNON,
    VEH_HOWITZER,
    VEH_SUBMUNITIONS,
} from '../vehicle-weapons.js';
import {trait} from '../weapon-traits.js';
import {
    TRAIT_CLOSE_SUPPORT,
    TRAIT_GARRISON,
    TRAIT_GROUP_COMMAND, TRAIT_INFERNO_GEAR,
    TRAIT_MAGNETIC_GRAPPLES,
    TRAIT_MINE_SWEEPER,
    TRAIT_SHIELD_PROJECTOR,
} from '../unit-traits.js';
import {SIZE_MEDIUM} from '../mech-sizes.js';
import {makeStaticListIds} from '../data-helpers.js';
import {SUBMUNITIONS} from '../mech-weapons.js';

export const ASSAULT_VEHICLE_SQUADRON = 'ASSAULT_VEHICLE_SQUADRON';

const baseStats = {
    move: 8,
    armor: 3,
    structure: 2,
};

export const ASSAULT_VEHICLE_SQUADRON_DATA = {
    [[ASSAULT_VEHICLE_SQUADRON]]: {
        size_id: SIZE_MEDIUM,
        display_name: 'Assault Vehicle Squadron',
        cost: 20,
        max_vehicles: 4,
        vehicles: makeStaticListIds({
            NETTER_VEHICLE: {
                ...baseStats,
                display_name: 'Netter Vehicle',
                weapon_ids: [
                    VEH_AUTO_CANNON,
                    VEH_SUBMUNITIONS,
                ],
                traits: [
                    trait(TRAIT_MAGNETIC_GRAPPLES),
                    trait(TRAIT_CLOSE_SUPPORT),
                ],
            },
            DEMOLITION_VEHICLE: {
                ...baseStats,
                display_name: 'Demolition Vehicle',
                weapon_ids: [
                    DOZER_BLADE,
                    HEAVY_INCINERATORS,
                    VEH_SUBMUNITIONS,
                ],
                traits: [
                    trait(TRAIT_INFERNO_GEAR),
                ],
            },
            INFANTRY_FIGHTING_VEHICLE: {
                ...baseStats,
                display_name: 'Infantry Fighting Vehicle',
                weapon_ids: [
                    VEH_AUTO_CANNON,
                    VEH_SUBMUNITIONS,
                ],
                traits: [
                    trait(TRAIT_GROUP_COMMAND),
                    trait(TRAIT_GARRISON, 3),
                ],
            },
            COMBAT_ENGINEERING_VEHICLE: {
                ...baseStats,
                display_name: 'Combat Engineering Vehicle',
                weapon_ids: [
                    VEH_AUTO_CANNON,
                    VEH_SUBMUNITIONS,
                ],
                traits: [
                    trait(TRAIT_MINE_SWEEPER),
                ],
            },
            SHIELD_PROJECTOR_VEHICLE: {
                ...baseStats,
                display_name: 'Shield Projector Vehicle',
                weapon_ids: [
                    VEH_SUBMUNITIONS,
                ],
                traits: [
                    trait(TRAIT_SHIELD_PROJECTOR),
                ],
            },
            FIRE_SUPPORT_VEHICLE: {
                ...baseStats,
                display_name: 'Fire Support Vehicle',
                weapon_ids: [
                    VEH_AUTO_CANNON,
                    MISSILE_PACK,
                ],
            },
            AA_VEHICLE: {
                ...baseStats,
                display_name: 'Anti-Air Vehicle',
                weapon_ids: [
                    AA_ARRAY,
                ],
            },
            ARTILLERY_VEHICLE: {
                ...baseStats,
                display_name: 'Artillery Vehicle',
                weapon_ids: [
                    VEH_HOWITZER,
                    SUBMUNITIONS,
                ],
            },
        }),
    },
};