<script setup>
import {storeToRefs} from 'pinia';
import {useSupportAssetStore} from '../../../../store/support-asset-store.js';
import {useValidationStore} from '../../../../store/validation-store.js';
import UnitSupportAssetAdd from './UnitSupportAssetAdd.vue';

const store = useSupportAssetStore();
const validationStore = useValidationStore();

const {invalid_number_of_support_assets} = storeToRefs(validationStore);
const {
  unit_support_assets,
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
          <UnitSupportAssetAdd/>
        </div>
      </div>
    </div>
    <div class="card-body p-2" v-if="unit_support_assets.length">
      <table class="table m-0">
        <thead>
        <tr class="table-light">
          <th>Name</th>
          <th class="text-end">Tons</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in unit_support_assets">
          <td>
            {{ item.display_name }}
          </td>
          <td class="text-end">
            <number :val="item.cost" :invert-color="true"/>
          </td>
          <td>
            <div class="small lh-sm">
              {{ item.notes.join(', ') }}
            </div>
          </td>
          <td class="text-end">
            <BButton @click="store.removeSupportAssetId(item.id)" variant="danger" size="sm"><span
                class="material-symbols-outlined">delete</span></BButton>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>