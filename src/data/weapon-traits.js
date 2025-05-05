import {makeStaticListIds} from './data-helpers.js';

export const TRAIT_AP = 'TRAIT_AP';
export const TRAIT_BLAST = 'BLAST';
export const TRAIT_DISRUPTIVE = 'DISRUPTIVE';
export const TRAIT_DRAINING = 'DRAINING';
export const TRAIT_FLAK = 'FLAK';
export const TRAIT_FRAG = 'FRAG';
export const TRAIT_KINETIC = 'KINETIC';
export const TRAIT_LIGHT = 'LIGHT';
export const TRAIT_LIMITED = 'LIMITED';
export const TRAIT_MELEE = 'MELEE';
export const TRAIT_SHORT = 'SHORT';
export const TRAIT_SMART = 'SMART';
export const TRAIT_MINE_TOKENS = 'MINE_TOKENS';

function numberFormater(name, number) {
    return `${name}(${number})`;
}

function inchFormater(name, number) {
    return `${name}(${number}")`;
}

export const WEAPON_TRAITS = makeStaticListIds({
    [[TRAIT_AP]]: {
        display_name: 'AP',
        description: 'If any damage is inflicted by this Attack, apply AP(X) damage directly to the target unit\'s Structure',
        formatter: numberFormater,
    },
    [[TRAIT_BLAST]]: {
        display_name: 'Blast',
        description: 'All units (friend or foe) within (x") of the original target must also make a Defense Roll against this Attack at -1 to the Attack Pool (to a minimum of 1).',
        formatter: inchFormater,
    },
    [[TRAIT_DISRUPTIVE]]: {
        display_name: 'Disruptive',
        description: 'If a target model suffers any damage from a weapon with this Trait, the Active Player rolls 1D6. On a 5 or 6, mark the target unit with a Redlined marker.',
    },
    [[TRAIT_DRAINING]]: {
        display_name: 'Draining',
        description: 'If a model uses this Weapon System during an activation, mark it with a Redline marker as well as an Activated token when it has completed its Orders. This does not cause Structure damage. If a model has a Redlined token when it activates, it may not use Weapon Systems with this Trait.',
    },
    [[TRAIT_FLAK]]: {
        display_name: 'Flak',
        description: 'Reduce the number of dice in an attack from Mine Drones, Missiles, or Rocket Packs by 2 to a minimum of 1 if this model doesn\'t have a Redlined marker.',
    },
    [[TRAIT_FRAG]]: {
        display_name: 'Frag',
        description: 'Targets are -1 to Defense Rolls from attacks with this Trait.',
    },
    [[TRAIT_KINETIC]]: {
        display_name: 'Kinetic',
        description: 'If any damage is inflicted by this attack, roll 1D6. Add +1 to the roll for each Class Size larger the Active model is than the target model. Subtract -1 from the roll for each Class Size smaller the Active model is than the target model. On a result of 4+, rotate the target model 45° away from the Active Unit, in a direction chosen by the Active Player.',
    },
    [[TRAIT_LIGHT]]: {
        display_name: 'Light',
        description: 'This attack will cause 1 damage to Armor or Structure for every 2 hits that are not evaded, rounding down.',
    },
    [[TRAIT_LIMITED]]: {
        display_name: 'Limited',
        description: 'This attack may only be made (x) times during a mission.',
        formatter: numberFormater,
    },
    [[TRAIT_MELEE]]: {
        display_name: 'Melee',
        description: 'Add (x) to the Attack Pool of this mech when it is performing a Smash Order. This model counts as one Class Size larger during a Smash order. This weapon System is not used in an Engage Order. Note that more than one Melee weapon does not grant this bonus multiple times.',
        formatter: numberFormater,
    },
    [[TRAIT_SHORT]]: {
        display_name: 'Short',
        description: 'The maximum range for this attack is (x") instead of unlimited during an Engage Order.',
    },
    [[TRAIT_SMART]]: {
        display_name: 'Smart',
        description: 'The Active Unit may use any friendly unit with a Target Designator for determining Line of Sight for attacks with this Weapon System.',
    },
    [[TRAIT_MINE_TOKENS]]: {
        display_name: 'Mine Tokens',
        formatter: numberFormater,
    },
});

export function traitDisplayNames(traits) {
    return traits.map((trait) => traitDisplayName(trait))
        .join(', ');

}

export function traitDisplayName({id, number}) {

    const trait = WEAPON_TRAITS[id];

    if (!trait) {
        throw new Error('trait not found: '.id);
    }
    if (trait.formatter) {
        return trait.formatter(trait.display_name, number);
    }
    return trait.display_name;
}

export function makeTrait(id, number = null) {
    return Object.freeze({
        id,
        number,
    });
}

