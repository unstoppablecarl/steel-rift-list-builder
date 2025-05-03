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

export const MECH_TEAM_PERKS = {
    [[TEAM_PERK_EXTRA_MISSILE_AMMO]]: {
        desc: 'All Rocket Packs and Missiles gain +1 to their Limited Trait',
    },
    [[TEAM_PERK_0_SLOT_TARGET_DESIGNATORS]]: {
        desc: 'Target Designators do not use an Upgrade Slot.',
    },
    [[TEAM_PERK_0_TON_TARGET_DESIGNATORS]]: {
        desc: 'Target Designators have their Cost reduced to 0.',
    },
    [[TEAM_PERK_0_SLOT_ECM]]: {
        desc: 'Electronic Countermeasures do not use an Upgrade Slot.',
    },
    [[TEAM_PERK_0_TON_ECM]]: {
        desc: 'Electronic Countermeasures have their Cost reduced to 0.',
    },
    [[TEAM_PERK_SMART_HOWITZERS]]: {
        desc: 'Howitzers gain the Smart Trait.',
    },
    [[TEAM_PERK_RECON_INITIATIVE]]: {
        desc: 'If one or more HE-Vs from this Team is within 18” of an enemy Deployment Edge or Corner, you gain +1 to the Initiative Roll.',
    },
    [[TEAM_PERK_SUPPORT_ASSET_DAMAGE]]: {
        desc: 'Off-Table Support Assets gain +1 to their Damage Rating.',
    },
    [[TEAM_PERK_DIRECTIONAL_ASSETS]]: {
        desc: 'When determining the origin of direction for an Off-Table Support Asset directed by a member of this team, it can be from any direction.',
    },
    [[TEAM_PERK_0_SLOT_ARMOR_UPGRADES]]: {
        desc: 'Armor Upgrades do not take up an Upgrade Slot.',
    },
    [[TEAM_PERK_0_TON_ARMOR_UPGRADES]]: {
        desc: 'Armor Upgrades have their Cost reduced to 0.',
    },
    [[TEAM_PERK_EXTRA_TONNAGE]]: {
        desc: 'Team Units count as 5 Tons heavier for the purpose of the Security Objective.',
    },
    [[TEAM_PERK_SIDE_ARMOR]]: {
        desc: 'Enemy Units do not gain bonuses to their Damage Rating for Side Arcs.',
    },
};