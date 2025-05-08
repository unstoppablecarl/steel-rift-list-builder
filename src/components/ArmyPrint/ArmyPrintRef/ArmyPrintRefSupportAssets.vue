<script setup>
import {useSupportAssetStore} from '../../../store/support-asset-store.js';
import {storeToRefs} from 'pinia';

const supportAssetStore = useSupportAssetStore();

const {support_assets_info} = storeToRefs(supportAssetStore);


</script>
<template>
  <div v-if="support_assets_info.length">
    <div class="divider"></div>
    <div class="ref-heading">Support Asets</div>
    <div v-for="item in support_assets_info">
      <p class="p-gap">
        <span class="fw-bold">
          {{ item.display_name }}:

          <template v-if="item.damage">
        Damage: {{ item.damage }},
          </template>
        Traits: {{ item.traits.map(trait => trait.display_name).join(', ') }}
        </span>

        {{ item.description }}</p>
    </div>
  </div>
</template>

