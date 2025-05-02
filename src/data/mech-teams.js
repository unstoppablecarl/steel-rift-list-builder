import {SIZE_HEAVY, SIZE_LIGHT, SIZE_MEDIUM, SIZE_ULTRA} from './mech-sizes.js';
import {TARGET_DESIGNATOR} from './mech-upgrades.js';
import {HOWITZER, MELEE, MISSILES, ROCKET_PACK} from './mech-weapons.js';
import {
    BENEFIT_0_SLOT_ARMOR_UPGRADES,
    BENEFIT_0_SLOT_ECM,
    BENEFIT_0_SLOT_TARGET_DESIGNATORS,
    BENEFIT_0_TON_ARMOR_UPGRADES,
    BENEFIT_0_TON_ECM,
    BENEFIT_0_TON_TARGET_DESIGNATORS,
    BENEFIT_DIRECTIONAL_ASSETS,
    BENEFIT_EXTRA_MISSILE_AMMO,
    BENEFIT_EXTRA_TONNAGE,
    BENEFIT_RECON_INITIATIVE,
    BENEFIT_SIDE_ARMOR,
    BENEFIT_SMART_HOWITZERS,
    BENEFIT_SUPPORT_ASSET_DAMAGE,
} from './mech-benefits.js';
import {MOD_REINFORCED, MOD_STANDARD, MOD_STRIPPED} from './mech-body.js';
import {makeStaticListIds} from './data-helpers.js';
import {ABLATIVE_ARMOR_UPGRADE, CERAMIC_ARMOR_UPGRADE, REACTIVE_ARMOR_UPGRADE} from './mech-armor-upgrades.js';
import {each} from 'lodash';

export const TEAM_SIZE_SMALL = 'TEAM_SIZE_SMALL';
export const TEAM_SIZE_MEDIUM = 'TEAM_SIZE_MEDIUM';
export const TEAM_SIZE_LARGE = 'TEAM_SIZE_LARGE';

export const TEAM_GENERAL = 'TEAM_GENERAL';
export const TEAM_FIRE_SUPPORT = 'TEAM_FIRE_SUPPORT';
export const TEAM_RECON = 'TEAM_RECON';
export const TEAM_SECURITY = 'TEAM_SECURITY';
export const TEAM_TACTICAL = 'TEAM_TACTICAL';

export const MECH_TEAMS = makeStaticListIds({
    [[TEAM_GENERAL]]: {
        display_name: 'General Team',
        groups: makeStaticListIds({
            'A': makeGroup({
                display_name: 'Group A',
                min_count: false,
                max_count: false,
            }),
        }),
    },
    [[TEAM_FIRE_SUPPORT]]: {
        display_name: 'Fire Support Team',
        groups: makeStaticListIds({
            'A': makeGroup({
                display_name: 'Group A',
                min_count: 1,
                max_count: 2,
                size_ids: [SIZE_LIGHT],
                required_upgrade_ids: [TARGET_DESIGNATOR],
            }),
            'B': makeGroup({
                display_name: 'Group B',
                min_count: 1,
                max_count: 2,
                size_ids: [SIZE_MEDIUM, SIZE_HEAVY],
                required_weapon_ids: [
                    ROCKET_PACK,
                    HOWITZER,
                    MISSILES,
                ],
            }),
        }),
        team_size_benefits: {
            2: {
                [[SIZE_LIGHT]]: [],
                [[SIZE_MEDIUM]]: [BENEFIT_EXTRA_MISSILE_AMMO],
                [[SIZE_HEAVY]]: [BENEFIT_EXTRA_MISSILE_AMMO],
                [[SIZE_ULTRA]]: [],

            },
            3: {
                [[SIZE_LIGHT]]: [BENEFIT_0_SLOT_TARGET_DESIGNATORS],
                [[SIZE_MEDIUM]]: [BENEFIT_SMART_HOWITZERS],
                [[SIZE_HEAVY]]: [BENEFIT_SMART_HOWITZERS],
                [[SIZE_ULTRA]]: [],
            },
            4: {
                [[SIZE_LIGHT]]: [BENEFIT_0_TON_TARGET_DESIGNATORS],
                [[SIZE_MEDIUM]]: [BENEFIT_EXTRA_MISSILE_AMMO],
                [[SIZE_HEAVY]]: [BENEFIT_EXTRA_MISSILE_AMMO],
                [[SIZE_ULTRA]]: [],
            },

        },
    },
    [[TEAM_RECON]]: {
        display_name: 'Recon Team',
        groups: makeStaticListIds({
            'A': makeGroup({
                display_name: 'Group A',
                min_count: 1,
                max_count: 4,
                size_ids: [SIZE_LIGHT],
                required_upgrade_ids: [TARGET_DESIGNATOR],
            }),
            'B': makeGroup({
                display_name: 'Group B',
                min_count: 0,
                max_count: 2,
                size_ids: [SIZE_MEDIUM, SIZE_HEAVY],
                required_upgrade_ids: [TARGET_DESIGNATOR],
                limited_structure_mod_ids: [MOD_STRIPPED],
                limited_armor_mod_ids: [MOD_STRIPPED],
            }),
        }),
        team_size_benefits: {
            2: {
                [[SIZE_LIGHT]]: [BENEFIT_0_SLOT_ECM],
                [[SIZE_MEDIUM]]: [BENEFIT_RECON_INITIATIVE],
                [[SIZE_HEAVY]]: [BENEFIT_RECON_INITIATIVE],
                [[SIZE_ULTRA]]: [],
            },
            3: {
                [[SIZE_LIGHT]]: [BENEFIT_0_SLOT_TARGET_DESIGNATORS],
                [[SIZE_MEDIUM]]: [BENEFIT_SUPPORT_ASSET_DAMAGE],
                [[SIZE_HEAVY]]: [BENEFIT_SUPPORT_ASSET_DAMAGE],
                [[SIZE_ULTRA]]: [],
            },
            4: {
                [[SIZE_LIGHT]]: [BENEFIT_0_TON_ECM, BENEFIT_0_TON_TARGET_DESIGNATORS],
                [[SIZE_MEDIUM]]: [BENEFIT_DIRECTIONAL_ASSETS],
                [[SIZE_HEAVY]]: [BENEFIT_DIRECTIONAL_ASSETS],
                [[SIZE_ULTRA]]: [],
            },

        },
    },
    [[TEAM_SECURITY]]: {
        display_name: 'Security Team',
        groups: makeStaticListIds({
            'A': makeGroup({
                display_name: 'Group A',
                min_count: 1,
                max_count: 4,
                size_ids: [SIZE_MEDIUM],
                limited_armor_upgrade_ids: [
                    ABLATIVE_ARMOR_UPGRADE,
                    REACTIVE_ARMOR_UPGRADE,
                    CERAMIC_ARMOR_UPGRADE,
                ],
                required_armor_or_structure_mod_once: MOD_REINFORCED,
                limited_structure_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
                limited_armor_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
            }),
            'B': makeGroup({
                display_name: 'Group B',
                min_count: 1,
                max_count: 2,
                size_ids: [SIZE_HEAVY],
                limited_armor_upgrade_ids: [
                    ABLATIVE_ARMOR_UPGRADE,
                    REACTIVE_ARMOR_UPGRADE,
                    CERAMIC_ARMOR_UPGRADE,
                ],
                limited_structure_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
                limited_armor_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
            }),
            'C': makeGroup({
                display_name: 'Group C',
                min_count: 0,
                max_count: 2,
                size_ids: [SIZE_ULTRA],
                limited_armor_upgrade_ids: [
                    ABLATIVE_ARMOR_UPGRADE,
                    REACTIVE_ARMOR_UPGRADE,
                    CERAMIC_ARMOR_UPGRADE,
                ],
                limited_structure_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
                limited_armor_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
            }),
        }),
        team_size_benefits: {
            2: {
                [[SIZE_LIGHT]]: [],
                [[SIZE_MEDIUM]]: [BENEFIT_0_SLOT_ARMOR_UPGRADES],
                [[SIZE_HEAVY]]: [BENEFIT_0_SLOT_ARMOR_UPGRADES, BENEFIT_EXTRA_TONNAGE],
                [[SIZE_ULTRA]]: [BENEFIT_0_SLOT_ARMOR_UPGRADES, BENEFIT_EXTRA_TONNAGE],
            },
            3: {
                [[SIZE_LIGHT]]: [],
                [[SIZE_MEDIUM]]: [BENEFIT_0_TON_ARMOR_UPGRADES, BENEFIT_EXTRA_TONNAGE],
                [[SIZE_HEAVY]]: [BENEFIT_0_TON_ARMOR_UPGRADES, BENEFIT_SIDE_ARMOR],
                [[SIZE_ULTRA]]: [BENEFIT_0_TON_ARMOR_UPGRADES, BENEFIT_SIDE_ARMOR],
            },
            4: {
                [[SIZE_LIGHT]]: [],
                [[SIZE_MEDIUM]]: [BENEFIT_SIDE_ARMOR],
                [[SIZE_HEAVY]]: [],
                [[SIZE_ULTRA]]: [],
            },

        },
    },
    [[TEAM_TACTICAL]]: {
        display_name: 'Tactical Team',
        groups: makeStaticListIds({
            'A': makeGroup({
                display_name: 'Group A',
                min_count: 1,
                max_count: 1,
                size_ids: [SIZE_LIGHT],
                required_weapon_ids: [TARGET_DESIGNATOR],
            }),
            'B': makeGroup({
                display_name: 'Group B',
                min_count: 1,
                max_count: 2,
                size_ids: [SIZE_MEDIUM],
                required_weapon_ids: [MELEE],
                limited_structure_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
                limited_armor_mod_ids: [MOD_STANDARD, MOD_REINFORCED],
            }),
            'C': makeGroup({
                display_name: 'Group C',
                min_count: 1,
                max_count: 1,
                size_ids: [SIZE_HEAVY],
                required_at_least_one_of_weapon_ids: [ROCKET_PACK, MISSILES],
            }),
        }),
        team_size_benefits: {
            3: {
                [[SIZE_LIGHT]]: [BENEFIT_0_SLOT_TARGET_DESIGNATORS],
                [[SIZE_MEDIUM]]: [BENEFIT_EXTRA_TONNAGE],
                [[SIZE_HEAVY]]: [BENEFIT_EXTRA_MISSILE_AMMO],
                [[SIZE_ULTRA]]: [],
            },
            4: {
                [[SIZE_LIGHT]]: [],
                [[SIZE_MEDIUM]]: [BENEFIT_SIDE_ARMOR],
                [[SIZE_HEAVY]]: [],
                [[SIZE_ULTRA]]: [],
            },
        },
    },

});

function makeGroup(obj) {

    const defaults = {
        required_weapon_ids: [],
        required_upgrade_ids: [],
        required_at_least_one_of_weapon_ids: [],
        required_armor_or_structure_mod_once: null,
        limited_structure_mod_ids: [],
        limited_armor_mod_ids: [],
        limited_armor_upgrade_ids: [],
    };
    const result = Object.assign(defaults, obj);

    each(result.groups, (group) => {
        const mechOptions = {};

        if (group.size_ids.length) {
            mechOptions.size_id = group.size_ids[0];
        }
        if (group.limited_structure_mod_ids.length) {
            mechOptions.structure_mod_id = group.limited_structure_mod_ids[0];
        }
        if (group.limited_armor_mod_ids.length) {
            mechOptions.armor_mod_id = group.limited_armor_mod_ids[0];
        }
        if (group.limited_armor_upgrade_ids.length) {
            mechOptions.armor_upgrade_id = group.limited_armor_upgrade_ids[0];
        }

        group.new_mech_defaults = mechOptions;
    });

    return result;
}
