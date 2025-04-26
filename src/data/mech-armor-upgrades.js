import {SIZE_HEAVY, SIZE_LIGHT, SIZE_MEDIUM, SIZE_ULTRA} from './mech-sizes.js';
import {listToDropDown} from './data-helpers.js';
import {HEV_BODY_MODS} from './mech-body.js';

export const NO_ARMOR_UPGRADE = 'NO_ARMOR_UPGRADE';
export const ABLATIVE_ARMOR_UPGRADE = 'ABLATIVE_ARMOR_UPGRADE';
export const REACTIVE_ARMOR_UPGRADE = 'REACTIVE_ARMOR_UPGRADE';
export const CERAMIC_ARMOR_UPGRADE = 'CERAMIC_ARMOR_UPGRADE';

export const HEV_ARMOR_UPGRADES = Object.freeze({
    [[NO_ARMOR_UPGRADE]]: makeArmorUpgrade({
        display_name: 'Standard Armour',
        cost: 0,
        slots: 0,
    }),
    [[ABLATIVE_ARMOR_UPGRADE]]: makeArmorUpgrade({
        display_name: 'Ablative Armour',
        cost_by_size: {
            [[SIZE_LIGHT]]: 1,
            [[SIZE_MEDIUM]]: 1,
            [[SIZE_HEAVY]]: 2,
            [[SIZE_ULTRA]]: 2,
        },
        slots: 1,
    }),
    [[REACTIVE_ARMOR_UPGRADE]]: makeArmorUpgrade({
        display_name: 'Reactive Armour',
        cost: 1,
        slots: 1,
    }),
    [[CERAMIC_ARMOR_UPGRADE]]: makeArmorUpgrade({
        display_name: 'Ceramic Armour',
        cost_by_size: {
            [[SIZE_LIGHT]]: 2,
            [[SIZE_MEDIUM]]: 2,
            [[SIZE_HEAVY]]: 1,
            [[SIZE_ULTRA]]: 1,
        },
        slots: 1,
    }),
});

export const HEV_ARMOR_UPGRADES_DROP_DOWN = listToDropDown(HEV_ARMOR_UPGRADES)

function makeArmorUpgrade(item) {
    if (!item.cost_by_size) {
        item.cost_by_size = {
            [[SIZE_LIGHT]]: item.cost,
            [[SIZE_MEDIUM]]: item.cost,
            [[SIZE_HEAVY]]: item.cost,
            [[SIZE_ULTRA]]: item.cost,
        };
    }

    return item;
}