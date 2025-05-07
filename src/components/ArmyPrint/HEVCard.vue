<script setup>

import {useMechStore} from '../../store/mech-store.js';
import {computed} from 'vue';
import HEVCardWeapons from './HEVCardWeapons.vue';
import HEVCardUpgrades from './HEVCardUpgrades.vue';
import HEVCardStats from './HEVCardStats.vue';
import HEVCardHp from './HEVCardHp.vue';

const mechStore = useMechStore();

const {mechId} = defineProps({
  mechId: {
    type: String,
  },
});

const info = computed(() => {
  return mechStore.getMechInfo(mechId);
});

</script>
<template>
  <div class="card card-unit">
    <div class="card-content-container">
      <div class="px-2 py-1">
        {{ info.display_name }}
      </div>

      <HEVCardStats :mech-id="mechId"/>
      <HEVCardHp :mech-id="mechId"/>
      <HEVCardWeapons :mech-id="mechId"/>
      <HEVCardUpgrades :mech-id="mechId"/>

    </div>
  </div>
</template>