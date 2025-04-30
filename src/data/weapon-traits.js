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
        formatter: numberFormater,
    },
    [[TRAIT_BLAST]]: {
        display_name: 'Blast',
        formatter: inchFormater,
    },
    [[TRAIT_DISRUPTIVE]]: {
        display_name: 'Disruptive',
    },
    [[TRAIT_DRAINING]]: {
        display_name: 'Draining',
    },
    [[TRAIT_FLAK]]: {
        display_name: 'Flak',
    },
    [[TRAIT_FRAG]]: {
        display_name: 'Frag',
    },
    [[TRAIT_KINETIC]]: {
        display_name: 'Kinetic',
    },
    [[TRAIT_LIGHT]]: {
        display_name: 'Light',
    },
    [[TRAIT_LIMITED]]: {
        display_name: 'Limited',
        formatter: numberFormater,
    },
    [[TRAIT_MELEE]]: {
        display_name: 'Melee',
        formatter: numberFormater,
    },
    [[TRAIT_SHORT]]: {
        display_name: 'Short',
    },
    [[TRAIT_SMART]]: {
        display_name: 'Smart',
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

