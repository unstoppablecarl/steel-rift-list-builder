import {defineStore} from 'pinia';
import {computed, readonly, ref} from 'vue';
import {SUPPORT_ASSET_UNITS} from '../data/support-asset-units.js';
import {TRAIT_LIMITED, TRAIT_SHORT, WEAPON_TRAITS, weaponTraitDisplayName} from '../data/weapon-traits.js';
import {getter} from './helpers/store-helpers.js';
import {VEHICLE_WEAPONS} from '../data/vehicle-weapons.js';
import {countBy, each, find, sumBy} from 'lodash';
import {findItemIndexById} from './helpers/collection-helper.js';
import {findById} from '../data/data-helpers.js';
import {UNIT_TRAITS, unitTraitDisplayName} from '../data/unit-traits.js';
import {MECH_SIZES} from '../data/mech-sizes.js';

export const useSupportAssetUnitsStore = defineStore('support-asset-units', () => {

        const support_asset_units = ref([]);
        const support_asset_units_id_increment = ref(0);

        function $reset() {
            support_asset_units.value = [];
            support_asset_units_id_increment.value = 0;
        }

        const support_asset_unit_ids = computed(() => {
            return support_asset_units.value.map(item => item.support_asset_unit_id);
        });

        const available_support_asset_unit_ids = computed(() => {
            return Object.keys(SUPPORT_ASSET_UNITS)
                .filter(id => !support_asset_unit_ids.value.includes(id));
        });

        const available_support_asset_units_info = computed(() => {
            return available_support_asset_unit_ids.value
                .map(id => _getUnitInfo.value(id));
        });

        const support_asset_units_info = computed(() => {
            return support_asset_units.value
                .map(({id}) => getUnitAttachmentInfo.value(id));
        });

        const used_tons = computed(() => sumBy(support_asset_units_info.value, 'cost'));
        const used_count = computed(() => support_asset_units.value.length);

        const getUnitAttachmentInfo = getter(unitAttachmentId => {
            let {
                id,
                support_asset_unit_id,
                vehicles,
            } = findById(support_asset_units.value, unitAttachmentId);
            const supportAssetId = getUnitAttachment.value(unitAttachmentId).support_asset_unit_id;

            let {
                display_name,
                size,
                cost,
                max_vehicles,
                max_duplicate_vehicles,
            } = _getUnitInfo.value(supportAssetId);

            vehicles = vehicles.map(vehicleAttachment => getUnitAttachmentVehicleInfo.value(unitAttachmentId, vehicleAttachment.id));
            return readonly({
                id,
                support_asset_unit_id,
                display_name,
                size,
                cost,
                max_vehicles,
                max_duplicate_vehicles,
                vehicles,
            });
        });

        const _getUnitInfo = getter(unitId => {
            let asset = SUPPORT_ASSET_UNITS[unitId];
            asset = Object.assign({}, asset);
            asset.vehicles = Object.assign({}, asset.vehicles);

            Object.keys(asset.vehicles).forEach(vehicleId => {
                asset.vehicles[vehicleId] = _getUnitVehicleInfo(unitId, vehicleId);
            });

            asset.size = {display_name: MECH_SIZES[asset.size_id].display_name};
            return readonly(asset);
        });

        const getUnitVehicleAttachmentRequiredWeaponsInfo = getter((unitAttachmentId, vehicleAttachmentId) => {
            const vehicleDef = getUnitAttachmentVehicleDef.value(unitAttachmentId, vehicleAttachmentId);
            if (!vehicleDef.weapon_ids) {
                return [];
            }
            return vehicleDef.weapon_ids.map(weaponId => _getVehicleWeaponInfo(weaponId));
        });

        const getUnitAttachmentAvailableWeaponChoicesInfo = getter((unitAttachmentId, vehicleAttachmentId) => {
            const vehicleDef = getUnitAttachmentVehicleDef.value(unitAttachmentId, vehicleAttachmentId);

            if (!vehicleDef.weapon_choice_ids) {
                return [];
            }

            return Object.keys(vehicleDef.weapon_choice_ids).map(key => {
                const weaponIds = vehicleDef.weapon_choice_ids[key];
                return {
                    id: key,
                    weapons: weaponIds.map(weaponId => {
                        const {display_name, id} = _getVehicleWeaponInfo(weaponId);

                        return {display_name, id};
                    }),
                };
            });
        });

        function _getVehicleTraitsInfo(traits) {
            return traits.map(trait => Object.assign({},
                trait,
                UNIT_TRAITS[trait.id],
                {display_name: unitTraitDisplayName(trait)},
            ));
        }

        function _getUnitVehicleInfo(unitId, vehicleId) {
            const asset = SUPPORT_ASSET_UNITS[unitId];
            let vehicle = asset.vehicles[vehicleId];
            vehicle = Object.assign({}, vehicle);

            if (vehicle.weapon_ids) {
                vehicle.weapons = vehicle.weapon_ids.map(weaponId => _getVehicleWeaponInfo(weaponId));
            } else if (vehicle.weapon_choice_ids) {
                vehicle.weapon_choices = [];
                Object.keys(vehicle.weapon_choice_ids).forEach(key => {
                    const weaponIds = vehicle.weapon_choice_ids[key];
                    vehicle.weapon_choices.push(weaponIds.map(weaponId => _getVehicleWeaponInfo(weaponId)));
                });
            }

            vehicle.traits = _getVehicleTraitsInfo(vehicle.traits || []);

            return readonly(vehicle);
        }

        function _getVehicleWeaponInfo(weaponId) {
            let weapon = VEHICLE_WEAPONS[weaponId];
            weapon = Object.assign({}, weapon);

            weapon.traits = weapon?.traits?.map(trait => Object.assign({},
                trait,
                WEAPON_TRAITS[trait.id],
                {display_name: weaponTraitDisplayName(trait)},
            )).filter(weapon => weapon.id !== TRAIT_SHORT);

            return readonly(weapon);
        }

        const getUnitAttachmentVehicleInfo = getter((unitAttachmentId, vehicleAttachmentId) => {
            const vehicleAttachment = getUnitVehicleAttachment.value(unitAttachmentId, vehicleAttachmentId);
            const vehicleDef = getUnitAttachmentVehicleDef.value(unitAttachmentId, vehicleAttachmentId);

            let weapons = [];
            if (vehicleDef.weapon_ids) {
                weapons = vehicleDef.weapon_ids.map(weaponId => _getVehicleWeaponInfo(weaponId));
            } else if (vehicleDef.weapon_choice_ids) {
                Object.keys(vehicleDef.weapon_choice_ids).forEach(key => {
                    const weaponId = vehicleAttachment.weapon_choices[key];
                    weapons.push(_getVehicleWeaponInfo(weaponId));
                });
            }

            const {
                id,
                support_asset_unit_id,
            } = vehicleAttachment;

            const {
                display_name,
                move,
                armor,
                structure,
            } = vehicleDef;

            return readonly({
                id,
                support_asset_unit_id,
                weapons,
                display_name,
                move,
                armor,
                structure,
                traits: _getVehicleTraitsInfo(vehicleDef.traits || []),
            });
        });

        const hasUnitId = getter(unitId => support_asset_unit_ids.value.includes(unitId));
        const getUnitVehicleCount = getter(unitAttachmentId => getUnitAttachment.value(unitAttachmentId).vehicles.length);
        const getUnitAttachment = getter(unitAttachmentId => findById(support_asset_units.value, unitAttachmentId));
        const getUnitAndVehicleAttachments = getter((unitAttachmentId, vehicleAttachmentId) => {
            const unitAttachment = getUnitAttachment.value(unitAttachmentId);
            const vehicleAttachment = find(unitAttachment.vehicles, {id: vehicleAttachmentId});
            return {
                unitAttachment,
                vehicleAttachment,
            };
        });

        const getUnitVehicleAttachment = getter((unitAttachmentId, vehicleAttachmentId) => {
            const unitAttachment = getUnitAttachment.value(unitAttachmentId);
            return find(unitAttachment.vehicles, {id: vehicleAttachmentId});
        });

        const getUnitAttachmentWeaponsCardInfo = getter(unitAttachmentId => {
            const unit = getUnitAttachmentInfo.value(unitAttachmentId);
            const weapons = [];
            unit.vehicles.forEach(vehicle => {
                vehicle.weapons?.forEach(weapon => {
                    const prevCopy = find(weapons, {id: weapon.id});
                    const limitedTrait = find(weapon.traits, {id: TRAIT_LIMITED});
                    weapon = Object.assign({}, weapon);
                    if (limitedTrait) {
                        weapon.max_uses = limitedTrait.number;
                    }
                    if (!prevCopy || limitedTrait) {
                        weapons.push(weapon);
                    }
                });
            });
            return readonly(weapons);
        });

        const getUnitAttachmentDef = getter(unitAttachmentId => {
            const unitAttachment = getUnitAttachment.value(unitAttachmentId);
            return SUPPORT_ASSET_UNITS[unitAttachment.support_asset_unit_id];
        });

        const getUnitAttachmentVehicleDef = getter((unitAttachmentId, vehicleAttachmentId) => {
            const {
                unitAttachment,
                vehicleAttachment,
            } = getUnitAndVehicleAttachments.value(unitAttachmentId, vehicleAttachmentId);

            return SUPPORT_ASSET_UNITS[unitAttachment.support_asset_unit_id].vehicles[vehicleAttachment.vehicle_id];
        });

        const getUnitAllWeaponsInfo = getter(unitAttachmentId => {
            const vehicleDefs = getUnitAttachmentDef.value(unitAttachmentId).vehicles;

            const weaponIdMap = {};
            each(vehicleDefs, (vehicleDef) => {
                vehicleDef.weapon_ids?.forEach(weaponId => {
                    weaponIdMap[weaponId] = true;
                });

                each(vehicleDef.weapon_choice_ids, weaponIds => {
                    weaponIds.forEach(weaponId => weaponIdMap[weaponId] = true);
                });
            });

            return Object.keys(weaponIdMap).map(weaponId => _getVehicleWeaponInfo(weaponId));
        });

        const getAttachmentVehicleIdCounts = getter(unitAttachmentId => {
            const unit = getUnitAttachment.value(unitAttachmentId);
            const selectedVehicleIds = unit.vehicles.map(vehicle => vehicle.vehicle_id);
            return countBy(selectedVehicleIds);
        });

        const getAvailableVehiclesInfo = getter(unitAttachmentId => {
            const unit = getUnitAttachment.value(unitAttachmentId);
            const unitInfo = _getUnitInfo.value(unit.support_asset_unit_id);

            const vehicles = Object.assign({}, unitInfo.vehicles);
            const vehicleIdsByCount = getAttachmentVehicleIdCounts.value(unitAttachmentId);
            const vehicleIds = Object.keys(vehicles);

            vehicleIds.forEach(vehicleId => {
                let valid = true;
                let validation_message = null;
                const maxDuplicates = unitInfo.max_duplicate_vehicles;
                if (maxDuplicates) {
                    const count = vehicleIdsByCount[vehicleId];
                    if (count >= maxDuplicates) {
                        valid = false;
                        validation_message = `Each vehicle may only be included ${maxDuplicates} times in a ${unitInfo.display_name}`;
                    }
                }
                vehicles[vehicleId] = Object.assign({}, vehicles[vehicleId], {
                    valid,
                    validation_message,
                });
            });

            return readonly(Object.values(vehicles));
        });

        function removeSupportAssetId(vehicleAttachmentId) {
            let index = support_asset_units.value.findIndex(item => {
                return item.id === vehicleAttachmentId;
            });
            if (index === false) {
                throw new Error('index not found');
            }
            support_asset_units.value.splice(index, 1);
        }

        function addSupportAsset(unitId) {
            support_asset_units.value.push({
                id: support_asset_units_id_increment.value++,
                support_asset_unit_id: unitId,
                vehicles_id_increment: 0,
                vehicles: ref([]),
            });
        }

        function addVehicle(unitAttachmentId, vehicleId) {
            const supportAssetUnit = getUnitAttachment.value(unitAttachmentId);
            const supportAssetUnitId = supportAssetUnit.support_asset_unit_id;
            const vehicleDef = SUPPORT_ASSET_UNITS[supportAssetUnitId].vehicles[vehicleId];

            const vehicleAttachment = {
                id: supportAssetUnit.vehicles_id_increment++,
                vehicle_id: vehicleId,
            };

            if (vehicleDef.weapon_choice_ids) {

                const weaponChoices = {};
                Object.keys(vehicleDef.weapon_choice_ids).forEach(key => {
                    weaponChoices[key] = vehicleDef.weapon_choice_ids[key][0];
                });
                vehicleAttachment.weapon_choices = weaponChoices;
            }

            supportAssetUnit.vehicles.push(vehicleAttachment);
        }

        function setUnitVehicleWeaponChoice(unitAttachmentId, vehicleAttachmentId, choiceId, weaponId) {
            const vehicleAttachment = getUnitVehicleAttachment.value(unitAttachmentId, vehicleAttachmentId);
            vehicleAttachment.weapon_choices[choiceId] = weaponId;
        }

        function removeVehicle(unitAttachmentId, vehicleAttachmentId) {
            const unitAttachment = getUnitAttachment.value(unitAttachmentId);
            const index = findItemIndexById(unitAttachment.vehicles, vehicleAttachmentId);
            unitAttachment.vehicles.splice(index, 1);
        }

        return {
            support_asset_units,
            used_tons,
            used_count,

            available_support_asset_units_info,
            support_asset_units_info,

            getAvailableVehiclesInfo,
            getUnitVehicleCount,
            getUnitVehicleAttachment,
            getUnitAllWeaponsInfo,
            getUnitAndVehicleAttachments,
            getUnitAttachmentInfo,
            getUnitAttachmentVehicleInfo,
            getUnitAttachmentWeaponsCardInfo,
            getUnitAttachmentAvailableWeaponChoicesInfo,
            getUnitVehicleAttachmentRequiredWeaponsInfo,

            setUnitVehicleWeaponChoice,
            addVehicle,
            removeVehicle,
            removeSupportAssetId,
            addSupportAsset,
            hasUnitId,
            $reset,
        };
    },
    {
        persist: true,
    },
);