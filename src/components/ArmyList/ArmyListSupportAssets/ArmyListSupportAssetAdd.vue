<script setup>
import {storeToRefs} from 'pinia';
import {computed} from 'vue';
import {useSupportAssetStore} from '../../../store/support-asset-store.js';
import {traitDisplayNames} from '../../../data/weapon-traits.js';

const store = useSupportAssetStore();

const {
  support_assets_drop_down,
} = storeToRefs(store);

const {
  teleportTo,
} = defineProps({
  teleportTo: {},
});

const options = computed(() => {
  return support_assets_drop_down.value;
});

</script>
<template>

  <BDropdown
      text="Add"
      class="dropdown-block"
      menu-class="w-100"
      :teleport-to="teleportTo"
      placement="bottom-end"
  >
    <BDropdown-header>
      <div class="row my-1">
        <div class="col-sm-3">
          Support Asset
        </div>
        <div class="col-sm-1 text-end">
          Attack
        </div>
        <div class="col-sm-1">
          Tons
        </div>
        <div class="col-sm-4">
          Traits
        </div>
        <div class="col-sm-3 text-start">
          Notes
        </div>
      </div>
    </BDropdown-header>
    <BDropdownDivider/>
    <BDropdown-item
        v-for="item in options" :key="item.id"
        @click="store.addSupportAsset(item.id)"
        :disabled="!store.canAddSupportAssetId(item.id)"
    >
      <div class="row my-2">
        <div class="col-sm-3">
          {{ item.display_name }}
        </div>
        <div class="col-sm-1 text-end">
          {{ item.damage }}
        </div>
        <div class="col-sm-1 text-end">
          <number :val="item.cost" :positive-signed="false" :invert-color="true"/>
        </div>
        <div class="col-sm-4">
          {{ traitDisplayNames(item.traits) }}
        </div>
        <div class="col-sm-3 text-start">
        </div>
      </div>
    </BDropdown-item>
  </BDropdown>
</template>