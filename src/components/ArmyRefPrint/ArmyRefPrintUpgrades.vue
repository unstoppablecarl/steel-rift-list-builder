<script setup>
import {computed} from 'vue';
import {useMechStore} from '../../store/mech-store.js';
import {MECH_UPGRADES} from '../../data/mech-upgrades.js';

const mechStore = useMechStore();

const upgrades = computed(() => {
  return mechStore.getUsedUpgradeIds.map(upgradeId => {
    return {
      display_name: MECH_UPGRADES[upgradeId].display_name,
      description: MECH_UPGRADES[upgradeId].description,
    };
  });
});
</script>
<template>
  <div class="">
    <div class="divider"></div>
    <div class="ref-heading">Upgrades</div>
    <div v-for="item in upgrades">
      <p class="p-gap">
        <span class="fw-bold">
          {{ item.display_name }}:
        </span>
        {{ item.description }}</p>
    </div>

  </div>
</template>

