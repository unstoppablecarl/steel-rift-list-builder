<script setup>

import {computed} from 'vue';
import {useMechStore} from '../../../store/mech-store.js';
import {useTeamStore} from '../../../store/team-store.js';
import {MINEFIELD_DRONE_CARRIER_SYSTEM} from '../../../data/mech-upgrades.js';

const mechStore = useMechStore();
const teamStore = useTeamStore();

const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});
const upgrades = computed(() => {
  return [].concat(
      mechStore.getMechUpgradesAttachmentInfo(mechId),
      teamStore.getTeamPerksInfoByMech(mechId).filter(({is_ability}) => is_ability),
  )
      .map(item => {

        if (item.traits) {
          item.trait_display_names = item.traits.map(trait => trait.display_name).join(', ');
        }
        return item;
      })
      // shown in weapons row instead
      .filter(item => item.upgrade_id !== MINEFIELD_DRONE_CARRIER_SYSTEM);
});
</script>
<template>
  <div v-if="upgrades.length">
    <div class="upgrades-heading">
      Upgrades
    </div>
    <div class="upgrades">
      <template v-for="(upgrade, index) in upgrades">
        {{ upgrade.display_name }}
        <template v-if="upgrade.trait_display_names">:</template>
        {{ upgrade.trait_display_names }}<span v-if="index !== upgrades.length -1">, </span>
      </template>
    </div>
  </div>
</template>