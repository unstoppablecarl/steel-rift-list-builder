<script setup>
import {storeToRefs} from 'pinia';
import {useSupportAssetStore} from '../../../store/support-asset-store.js';
import ArmyListSupportAssetAdd from './ArmyListSupportAssets/ArmyListSupportAssetAdd.vue';
import TraitList from '../../UI/TraitList.vue';
import BtnToolTip from '../../UI/BtnToolTip.vue';

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
            <BtnToolTip>
              <template #target="{mouseover, mouseleave}">
                <span
                    @mouseover="mouseover"
                    @mouseleave="mouseleave"
                    class="text-tooltip"
                >
                  {{ item.display_name }}
                </span>
              </template>
              <template #content>
                {{ item.description }}
              </template>
            </BtnToolTip>
          </td>
          <td class="text-end">
            {{ item.damage }}
          </td>
          <td class="text-end">
            <number :val="item.cost" ::invert-color="true"/>
          </td>
          <td>
            <TraitList :traits="item.traits"/>
          </td>
          <td>
            <div class="small lh-sm">
              {{ item.notes.join(', ') }}
            </div>
          </td>
          <td>
            <BButton @click="store.removeSupportAssetId(item.id)" variant="danger" size="sm"><span class="material-symbols-outlined">delete</span></BButton>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>