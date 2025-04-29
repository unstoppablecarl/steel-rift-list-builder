<script setup>
import {storeToRefs} from 'pinia';
import {useSupportAssetStore} from '../../store/support-asset-store.js';
import ArmyListSupportAssetAdd from './ArmyListSupportAssets/ArmyListSupportAssetAdd.vue';
import {traitDisplayNames} from '../../data/weapon-traits.js';

const store = useSupportAssetStore();

const {
  support_assets,
} = storeToRefs(store);

</script>
<template>
  <ArmyListSupportAssetAdd/>
  <div class="card">
    <div class="card-header">
      Support Assets
    </div>
    <div class="card-body">
      <table class="table" v-if="support_assets.length">
        <thead>
        <tr>
          <th>Name</th>
          <th class="text-end pe-1">Damage</th>
          <th class="text-end pe-1">Tons</th>
          <th>Traits</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in support_assets">
          <td class="cell-pad-top">
            {{ item.display_name }}
          </td>
          <td class="cell-pad-top text-right">
            {{ item.damage }}
          </td>
          <td class="cell-pad-top text-right">
            <number :val="item.cost" :positive-signed="false" :invert-color="true"/>
          </td>
          <td class="cell-pad-top">
            {{ traitDisplayNames(item.traits) }}
          </td>
          <td>
            <BButton @click="store.removeSupportAssetId(item.id)" variant="danger">Remove</BButton>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>