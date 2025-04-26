import {find, pick} from 'lodash';

export function listToDropDown(list) {
    return Object.keys(list)
        .map((key) => {
            return Object.assign({}, list[key], {
                value: key,
                text: list[key].display_name,
            });
        });
}

export function updateObject(existing, data, validKeys) {
    return Object.assign(existing, pick(data, validKeys));
}

export function findById(collection, id) {
    return find(collection, (item) => id == item.id);
}

export function makeStaticListIds(obj) {
    Object.keys(obj)
        .forEach((key) => {
            obj[key].id = key;
        });
    return Object.freeze(obj)
}