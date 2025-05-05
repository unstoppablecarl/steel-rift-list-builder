import {each} from 'lodash';
import {value} from 'lodash/seq.js';
import {deepFreeze} from './data-helpers.js';

export const TEAM_PERK_EXTRA_MISSILE_AMMO = 'TEAM_PERK_EXTRA_MISSILE_AMMO';
export const TEAM_PERK_0_SLOT_TARGET_DESIGNATORS = 'TEAM_PERK_0_SLOT_TARGET_DESIGNATORS';
export const TEAM_PERK_0_TON_TARGET_DESIGNATORS = 'TEAM_PERK_0_TON_TARGET_DESIGNATORS';
export const TEAM_PERK_SMART_HOWITZERS = 'TEAM_PERK_SMART_HOWITZERS';
export const TEAM_PERK_0_SLOT_ECM = 'TEAM_PERK_0_SLOT_ECM';
export const TEAM_PERK_0_TON_ECM = 'TEAM_PERK_0_TON_ECM';
export const TEAM_PERK_RECON_INITIATIVE = 'TEAM_PERK_RECON_INITIATIVE';
export const TEAM_PERK_SUPPORT_ASSET_DAMAGE = 'TEAM_PERK_SUPPORT_ASSET_DAMAGE';
export const TEAM_PERK_DIRECTIONAL_ASSETS = 'TEAM_PERK_DIRECTIONAL_ASSETS';
export const TEAM_PERK_0_SLOT_ARMOR_UPGRADES = 'TEAM_PERK_0_SLOT_ARMOR_UPGRADES';
export const TEAM_PERK_0_TON_ARMOR_UPGRADES = 'TEAM_PERK_0_TON_ARMOR_UPGRADES';
export const TEAM_PERK_EXTRA_TONNAGE = 'TEAM_PERK_EXTRA_TONNAGE';
export const TEAM_PERK_SIDE_ARMOR = 'TEAM_PERK_SIDE_ARMOR';

export const MECH_TEAM_PERKS = makeTeamPerks({
    [[TEAM_PERK_0_SLOT_TARGET_DESIGNATORS]]: makeCompact('Target Designators'),
    [[TEAM_PERK_0_TON_TARGET_DESIGNATORS]]: makeLightWeight('Target Designators'),
    [[TEAM_PERK_0_SLOT_ECM]]: makeCompact('Electronic Countermeasures'),
    [[TEAM_PERK_0_TON_ECM]]: makeLightWeight('Electronic Countermeasures'),
    [[TEAM_PERK_0_SLOT_ARMOR_UPGRADES]]: makeCompact('Armor Upgrades'),
    [[TEAM_PERK_0_TON_ARMOR_UPGRADES]]: makeLightWeight('Armor Upgrades'),
    [[TEAM_PERK_SMART_HOWITZERS]]: {
        display_name: 'Smart Howitzers',
        description: 'Howitzers gain the Smart Trait.',
    },
    [[TEAM_PERK_RECON_INITIATIVE]]: {
        display_name: 'Recon Initiative',
        description: 'If one or more HE-Vs from this Team is within 18" of an enemy Deployment Edge or Corner, you gain +1 to the Initiative Roll.',
    },
    [[TEAM_PERK_SUPPORT_ASSET_DAMAGE]]: {
        display_name: 'Improved Support Asset Damage',
        description: 'Off-Table Support Assets gain +1 to their Damage Rating.',
    },
    [[TEAM_PERK_DIRECTIONAL_ASSETS]]: {
        display_name: 'Mobile Support Assets',
        description: 'When determining the origin of direction for an Off-Table Support Asset directed by a member of this team, it can be from any direction.',
    },
    [[TEAM_PERK_EXTRA_MISSILE_AMMO]]: {
        renderDisplayName(value) {
            return `Extra Guided Ammo (x${value})`;
        },
        renderDesc(value) {
            return `All Rocket Packs and Missiles gain +${value} to their Limited Trait`;
        },
        value: 1,
        stackable: true,
    },
    [[TEAM_PERK_EXTRA_TONNAGE]]: {
        display_name: `Extra Tonnage (5)`,
        description: 'Team Units count as 5 Tons heavier for the purpose of the Security Objective.',
    },
    [[TEAM_PERK_SIDE_ARMOR]]: {
        display_name: 'Side Armor',
        description: 'Enemy Units do not gain bonuses to their Damage Rating for Side Arcs.',
    },
});

function makeCompact(name) {
    return {
        display_name: `Compact ${name}`,
        display_name_short: 'Compact',
        description: `Cost 0 Slots.`,
    };
}

function makeLightWeight(name) {
    return {
        display_name: `Lightweight ${name}`,
        display_name_short: 'Lightweight',
        description: `Cost 0 Tons.`,
    };
}

function makeTeamPerks(perks) {

    let display_order = 0;
    each(perks, (perk, perkId, index) => {
        perk.id = perkId;
        if (perk.renderDisplayName) {
            perk.display_name = perk.renderDisplayName(perk.value);
        }
        if (perk.renderDesc) {
            perk.description = perk.renderDesc(perk.value);
        }

        perk.display_order = display_order++
    });

    return deepFreeze(perks);
}

export function makePerkItem(perkId) {
    const perkInfo = MECH_TEAM_PERKS[perkId];
    return {
        perk_id: perkId,
        display_name: perkInfo.display_name,
        display_name_short: perkInfo.display_name_short,
        description: perkInfo.description,
        value: perkInfo.value,
    };
}

export const SPECIAL_ABILITY_PERK_IDS = [
    TEAM_PERK_RECON_INITIATIVE,
    TEAM_PERK_SUPPORT_ASSET_DAMAGE,
    TEAM_PERK_DIRECTIONAL_ASSETS,
    TEAM_PERK_EXTRA_TONNAGE,
    TEAM_PERK_SIDE_ARMOR,
];