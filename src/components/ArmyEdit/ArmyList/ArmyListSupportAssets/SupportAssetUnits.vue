<script setup>
import {storeToRefs} from 'pinia';
import {useValidationStore} from '../../../../store/validation-store.js';
import SupportAssetUnitAdd from './SupportAssetUnitAdd.vue';
import {useSupportAssetUnitsStore} from '../../../../store/support-asset-units-store.js';

const store = useSupportAssetUnitsStore();
const validationStore = useValidationStore();

const {invalid_number_of_support_assets} = storeToRefs(validationStore);
const {
  support_asset_units_info,
} = storeToRefs(store);

</script>
<template>
  <div
      :class="{
        'card': true,
        'border-danger': invalid_number_of_support_assets
      }"
  >
    <div class="card-header" ref="support-asset-drop-down-container">
      <div class="d-flex">
        <div class="col-form-label form-control-sm flex-shrink-1 pe-2 fw-bold">
          Unit Support Assets
        </div>
        <div class="flex-grow-1">
          <IconValidationError size="sm" :message="invalid_number_of_support_assets"/>
        </div>
        <div class="flex-shrink-1 text-end">
          <SupportAssetUnitAdd/>
        </div>
      </div>
    </div>
    <div class="card-body p-2" v-if="support_asset_units_info.length">
      <table class="table table-btn-sm m-0">
        <thead>
        <tr class="table-light">
          <th>Name</th>
          <th class="text-end">Tons</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in support_asset_units_info">
          <td>
            {{ item.display_name }}
          </td>
          <td class="text-end">
            <number :val="item.cost" :invert-color="true"/>
          </td>
          <td class="table-btn-cell text-end">
            <BButton @click="store.removeSupportAssetId(item.id)" variant="danger" size="sm"><span
                class="material-symbols-outlined">delete</span></BButton>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>