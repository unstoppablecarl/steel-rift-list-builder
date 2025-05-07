<script setup>
import {storeToRefs} from 'pinia';
import {useSupportAssetStore} from '../../../../store/support-asset-store.js';
import {traitDisplayNames} from '../../../../data/weapon-traits.js';

const store = useSupportAssetStore();

const {
  available_support_assets,
} = storeToRefs(store);

</script>
<template>

  <BDropdown
      class="dropdown-table"
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
            Attack
          </td>
          <td class="text-end">
            Tons
          </td>
          <td>
            Traits
          </td>
          <td>
            Notes
          </td>
        </tr>
        </thead>
        <tbody>
        <tr
            :class="{
              'dropdown-row': true,
            }"
            v-for="item in available_support_assets" :key="item.id"
            @click="store.addSupportAsset(item.id)"
        >
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