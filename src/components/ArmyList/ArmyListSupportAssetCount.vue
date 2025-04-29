<script setup>
import {BFormInput} from 'bootstrap-vue-next';
import {storeToRefs} from 'pinia';
import {ref, watch} from 'vue';
import {useSupportAssetStore} from '../../store/support-asset-store.js';

const store = useSupportAssetStore();

const {
  max_support_assets,
  custom_max_support_assets,
} = storeToRefs(store);

const customSupportAssets = ref(false);

function setCustomSupportAssetCount(value) {
  custom_max_support_assets.value = value;
}

watch(customSupportAssets, () => {
  if (!customSupportAssets.value) {
    custom_max_support_assets.value = null;
  } else {
    custom_max_support_assets.value = max_support_assets.value;
  }
});

</script>
<template>
  <div class="form-floating mb-1">
    <BFormInput
        id="list_max_support_assets"
        @update:model-value="setCustomSupportAssetCount"
        :model-value="max_support_assets"
        type="number"
        :disabled="!customSupportAssets"
    />
    <label for="list_max_support_assets">Support Assets</label>
  </div>
  <BFormCheckbox v-model="customSupportAssets">
    Custom
  </BFormCheckbox>
</template>