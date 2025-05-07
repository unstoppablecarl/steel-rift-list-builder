<script setup>
import {storeToRefs} from 'pinia';
import {useSupportAssetStore} from '../../../store/support-asset-store.js';
import ArmyListSupportAssetAdd from './ArmyListSupportAssets/ArmyListSupportAssetAdd.vue';
import {traitDisplayNames} from '../../../data/weapon-traits.js';

const store = useSupportAssetStore();

const {
  support_assets,
  used_support_assets,
} = storeToRefs(store);

</script>
<template>
  <div class="card">
    <div class="card-header" ref="support-asset-drop-down-container">
      <div class="float-end">
        <ArmyListSupportAssetAdd/>
      </div>
      <div class="py-1 ps-2 fw-bold">
        Support Assets
      </div>
    </div>
    <div class="card-body">
      <table class="table m-0" v-if="used_support_assets">
        <thead>
        <tr class="table-light">
          <th>Name</th>
          <th class="text-end pe-1">Damage</th>
          <th class="text-end pe-1">Tons</th>
          <th>Traits</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in support_assets">
          <td>
            {{ item.display_name }}
          </td>
          <td class="text-end">
            {{ item.damage }}
          </td>
          <td class="text-end">
            <number :val="item.cost" :positive-signed="false" :invert-color="true"/>
          </td>
          <td>
            {{ traitDisplayNames(item.traits) }}
          </td>
          <td>
            <div class="small lh-sm">
              {{ item.notes.join(', ') }}
            </div>
          </td>
          <td>
            <BButton @click="store.removeSupportAssetId(item.id)" variant="danger" size="sm">X</BButton>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>