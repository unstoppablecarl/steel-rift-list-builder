<script setup>
import {useSupportAssetStore} from '../../../store/support-asset-store.js';
import {storeToRefs} from 'pinia';
import {SA_TYPE_OT_WEAPON} from '../../../data/support-assets/support-asset-types.js';

const supportAssetStore = useSupportAssetStore();
const {support_assets} = storeToRefs(supportAssetStore);
</script>
<template>
  <div v-if="support_assets.length">
    <div class="divider"></div>
    <div class="ref-heading">Support Assets</div>
    <div v-for="item in support_assets">
      <p class="p-gap">
        <span class="fw-bold">
          {{ item.display_name }}:
          <template v-if="item.type === SA_TYPE_OT_WEAPON">
            <template v-if="item.damage">
              Damage: {{ item.off_table_weapon.damage }},
            </template>
            Traits: {{ item.off_table_weapon.traits.map(trait => trait.display_name).join(', ') }}
            <template v-if="item.notes">
             Notes: {{ item.notes.join(', ') }}
            </template>
          </template>
        </span>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

