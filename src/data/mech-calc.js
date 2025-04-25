import {HEV_SIZES} from './mech-sizes.js';
import {HEV_BODY_MODS} from './mech-body.js';

export function calcMech(mech){

    let {
        size,
        armor_mod,
        structure_mod
    } = mech

    let {
        armor,
        structure,
        slots,
        max_tons,
    } = HEV_SIZES[size]

    armor = armor + HEV_BODY_MODS[armor_mod].modifier
    structure = structure + HEV_BODY_MODS[structure_mod].modifier

    return {
        name,
        size,
        armor,
        structure,
        slots,
        max_tons,
    }
}