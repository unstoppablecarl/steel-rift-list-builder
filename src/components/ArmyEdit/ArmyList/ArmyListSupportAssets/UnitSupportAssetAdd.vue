<script setup>
import {storeToRefs} from 'pinia';
import {useSupportAssetStore} from '../../../../store/support-asset-store.js';

const store = useSupportAssetStore();

const {
  available_unit_support_assets,
} = storeToRefs(store);

</script>
<template>
  <BDropdown
      class="dropdown-table d-inline-block"
      text="Add"
      size="sm"
      variant="primary"
      placement="bottom-end"
  >
    <div class="position-relative">
      <table class="table table-hover table-borderless table-striped">
        <thead class="sticky-top top-0 shadow">
        <tr>
          <td>
            Support Asset
          </td>
          <td class="text-end">
            Tons
          </td>
          <td></td>
        </tr>
        </thead>
        <tbody>
        <tr
            :class="{
              'dropdown-row': true,
            }"
            v-for="item in available_unit_support_assets" :key="item.id"
            @click="store.addSupportAsset(item.id)"
        >
          <td class="text-nowrap">
            {{ item.display_name }}
          </td>

          <td class="text-end">
            <number :val="item.cost" :invert-color="true"/>
          </td>
          <td>
            <small>
              {{ item.notes.join(', ') }}
            </small>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </BDropdown>

</template>