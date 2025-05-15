import {defineStore} from 'pinia';
import {computed, readonly, ref} from 'vue';
import {SUPPORT_ASSET_UNITS} from '../data/support-asset-units.js';
import {TRAIT_SHORT, WEAPON_TRAITS, weaponTraitDisplayName} from '../data/weapon-traits.js';
import {getter} from './helpers/store-helpers.js';
import {VEHICLE_WEAPONS} from '../data/vehicle-weapons.js';
import {countBy, sumBy} from 'lodash';
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
                .map(id => getUnitInfo.value(id));
        });

        const support_asset_units_info = computed(() => {
            return support_asset_unit_ids.value
                .map(id => getUnitInfo.value(id));
        });

        const used_tons = computed(() => sumBy(support_asset_units_info.value, 'cost'));
        const used_count = computed(() => support_asset_units.value.length);

        const getUnitAttachmentInfo = getter(unitAttachmentId => {
            const unitAttachment = findById(support_asset_units.value, unitAttachmentId);
            const unitId = getSupportAssetIdBySupportAssetAttachmentId.value(unitAttachmentId);
            let unitInfo = getUnitInfo.value(unitId);

            unitInfo = Object.assign({}, unitInfo);
            unitInfo.vehicles = unitAttachment.vehicles.map(vehicle => getUnitVehicleInfo.value(unitAttachment.support_asset_unit_id, vehicle.vehicle_id));

            return unitInfo;
        });

        const getUnitInfo = getter(unitId => {
            let asset = SUPPORT_ASSET_UNITS[unitId];
            asset = Object.assign({}, asset);
            asset.vehicles = Object.assign({}, asset.vehicles);

            Object.keys(asset.vehicles).forEach(vehicleId => {
                asset.vehicles[vehicleId] = getUnitVehicleInfo.value(unitId, vehicleId);
            });

            asset.size = {display_name: MECH_SIZES[asset.size_id].display_name};
            return readonly(asset);
        });

        const getUnitVehicleInfo = getter((unitId, vehicleId) => {
            let asset = SUPPORT_ASSET_UNITS[unitId];
            let vehicle = asset.vehicles[vehicleId];
            vehicle = Object.assign({}, vehicle);

            if (vehicle.weapon_ids) {
                vehicle.weapons = vehicle.weapon_ids.map(weaponId => getVehicleWeaponInfo.value(weaponId));
            } else if (vehicle.weapon_choice_ids) {
                vehicle.weapon_choices = [];
                Object.keys(vehicle.weapon_choice_ids).forEach(key => {
                    const weaponIds = vehicle.weapon_choice_ids[key];
                    vehicle.weapon_choices.push(weaponIds.map(weaponId => getVehicleWeaponInfo.value(weaponId)));
                });
            }

            let traits = vehicle.traits || [];

            vehicle.traits = traits.map(trait => Object.assign({},
                trait,
                UNIT_TRAITS[trait.id],
                {display_name: unitTraitDisplayName(trait)},
            ));

            return vehicle;
        });

        const getVehicleWeaponInfo = getter(weaponId => {
            let weapon = VEHICLE_WEAPONS[weaponId];
            weapon = Object.assign({}, weapon);

            weapon.traits = weapon?.traits?.map(trait => Object.assign({},
                trait,
                WEAPON_TRAITS[trait.id],
                {display_name: weaponTraitDisplayName(trait)},
            )).filter(weapon => weapon.id !== TRAIT_SHORT);

            return weapon;
        });

        const hasUnitId = getter(unitId => support_asset_unit_ids.value.includes(unitId));
        const getVehicleAttachments = getter(unitAttachmentId => getUnitAttachment.value(unitAttachmentId).vehicles);
        const getUnitVehicleCount = getter(unitAttachmentId => getUnitAttachment.value(unitAttachmentId).vehicles.length);
        const getUnitAttachment = getter(unitAttachmentId => findById(support_asset_units.value, unitAttachmentId));

        const getSupportAssetIdBySupportAssetAttachmentId = getter(unitAttachmentId => findById(support_asset_units.value, unitAttachmentId).support_asset_unit_id);

        const getUnitAttachmentWeaponsInfo = getter(unitAttachmentId => {

            const unit = getUnitAttachmentInfo.value(unitAttachmentId);

            let weaponIdMap = {};

            unit.vehicles.forEach(vehicle => {
                vehicle.weapons?.forEach(weapon => {
                    weaponIdMap[weapon.id] = weapon;
                });
            });

            return Object.values(weaponIdMap);
        });

        const getUnitWeaponsInfo = getter(unitAttachmentId => {
            const unit = getUnitAttachment.value(unitAttachmentId);
            const unitInfo = getUnitInfo.value(unit.support_asset_unit_id);
            let weaponIdMap = {};
            Object.keys(unitInfo.vehicles).forEach((vehicle_id) => {
                const vehicle = getUnitVehicleInfo.value(unit.support_asset_unit_id, vehicle_id);
                vehicle.weapons?.forEach(weapon => {
                    weaponIdMap[weapon.id] = weapon;
                });
            });
            return Object.values(weaponIdMap);
        });

        const getAttachmentVehicleIdCounts = getter(unitAttachmentId => {
            const unit = getUnitAttachment.value(unitAttachmentId);
            const selectedVehicleIds = unit.vehicles.map(vehicle => vehicle.vehicle_id);
            return countBy(selectedVehicleIds);
        });

        const getAvailableVehiclesInfo = getter(unitAttachmentId => {
            const unit = getUnitAttachment.value(unitAttachmentId);
            const unitInfo = getUnitInfo.value(unit.support_asset_unit_id);

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
                        validation_message = `Each vehicle may only be included ${maxDuplicates} times`;
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
            let index = findItemIndexById(support_asset_units.value, vehicleAttachmentId);
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
            const supportAssetUnit = findById(support_asset_units.value, unitAttachmentId);
            supportAssetUnit.vehicles.push({
                id: supportAssetUnit.vehicles_id_increment++,
                vehicle_id: vehicleId,
            });
        }

        function removeVehicle(unitAttachmentId, vehicleAttachmentId) {
            const supportAssetUnit = findById(support_asset_units.value, unitAttachmentId);
            let index = findItemIndexById(supportAssetUnit.vehicles, vehicleAttachmentId);
            supportAssetUnit.vehicles.splice(index, 1);
        }

        return {
            support_asset_units,
            used_tons,
            used_count,

            available_support_asset_units_info,
            support_asset_units_info,

            getAvailableVehiclesInfo,
            getUnitVehicleCount,

            getUnitInfo,
            getUnitWeaponsInfo,
            getVehicleAttachments,
            getUnitAttachmentInfo,
            getUnitAttachmentWeaponsInfo,
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