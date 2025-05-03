export const BENEFIT_EXTRA_MISSILE_AMMO = 'BENEFIT_EXTRA_MISSILE_AMMO';
export const BENEFIT_0_SLOT_TARGET_DESIGNATORS = 'BENEFIT_0_SLOT_TARGET_DESIGNATORS';
export const BENEFIT_0_TON_TARGET_DESIGNATORS = 'BENEFIT_0_TON_TARGET_DESIGNATORS';
export const BENEFIT_SMART_HOWITZERS = 'BENEFIT_SMART_HOWITZERS';
export const BENEFIT_0_SLOT_ECM = 'BENEFIT_0_SLOT_ECM';
export const BENEFIT_0_TON_ECM = 'BENEFIT_0_TON_ECM';
export const BENEFIT_RECON_INITIATIVE = 'BENEFIT_RECON_INITIATIVE';
export const BENEFIT_SUPPORT_ASSET_DAMAGE = 'BENEFIT_SUPPORT_ASSET_DAMAGE';
export const BENEFIT_DIRECTIONAL_ASSETS = 'BENEFIT_DIRECTIONAL_ASSETS';
export const BENEFIT_0_SLOT_ARMOR_UPGRADES = 'BENEFIT_0_SLOT_ARMOR_UPGRADES';
export const BENEFIT_0_TON_ARMOR_UPGRADES = 'BENEFIT_0_TON_ARMOR_UPGRADES';
export const BENEFIT_EXTRA_TONNAGE = 'BENEFIT_EXTRA_TONNAGE';
export const BENEFIT_SIDE_ARMOR = 'BENEFIT_SIDE_ARMOR';

export const MECH_TEAM_BENEFITS = {
    [[BENEFIT_EXTRA_MISSILE_AMMO]]: {
        desc: 'All Rocket Packs and Missiles gain +1 to their Limited Trait',
    },
    [[BENEFIT_0_SLOT_TARGET_DESIGNATORS]]: {
        desc: 'Target Designators do not use an Upgrade Slot.',
    },
    [[BENEFIT_0_TON_TARGET_DESIGNATORS]]: {
        desc: 'Target Designators have their Cost reduced to 0.',
    },
    [[BENEFIT_0_SLOT_ECM]]: {
        desc: 'Electronic Countermeasures do not use an Upgrade Slot.',
    },
    [[BENEFIT_0_TON_ECM]]: {
        desc: 'Electronic Countermeasures have their Cost reduced to 0.',
    },
    [[BENEFIT_SMART_HOWITZERS]]: {
        desc: 'Howitzers gain the Smart Trait.',
    },
    [[BENEFIT_RECON_INITIATIVE]]: {
        desc: 'If one or more HE-Vs from this Team is within 18” of an enemy Deployment Edge or Corner, you gain +1 to the Initiative Roll.',
    },
    [[BENEFIT_SUPPORT_ASSET_DAMAGE]]: {
        desc: 'Off-Table Support Assets gain +1 to their Damage Rating.',
    },
    [[BENEFIT_DIRECTIONAL_ASSETS]]: {
        desc: 'When determining the origin of direction for an Off-Table Support Asset directed by a member of this team, it can be from any direction.',
    },
    [[BENEFIT_0_SLOT_ARMOR_UPGRADES]]: {
        desc: 'Armor Upgrades do not take up an Upgrade Slot.',
    },
    [[BENEFIT_0_TON_ARMOR_UPGRADES]]: {
        desc: 'Armor Upgrades have their Cost reduced to 0.',
    },
    [[BENEFIT_EXTRA_TONNAGE]]: {
        desc: 'Team Units count as 5 Tons heavier for the purpose of the Security Objective.',
    },
    [[BENEFIT_SIDE_ARMOR]]: {
        desc: 'Enemy Units do not gain bonuses to their Damage Rating for Side Arcs.',
    },
};