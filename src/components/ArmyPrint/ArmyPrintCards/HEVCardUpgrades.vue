<script setup>

import {computed} from 'vue';
import {useMechStore} from '../../../store/mech-store.js';
import {useTeamStore} from '../../../store/team-store.js';
import {MINEFIELD_DRONE_CARRIER_SYSTEM} from '../../../data/mech-upgrades.js';
import {TRAIT_COMPACT, TRAIT_UPGRADE_LIMITED} from '../../../data/upgrade-traits.js';

const mechStore = useMechStore();
const teamStore = useTeamStore();

const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});

const upgrades = computed(() => {
  const upgradesAttachments = mechStore.getMechUpgradesAttachmentInfo(mechId)
      .map(item => {

        if (item.traits) {
          item.traits = item.traits
              .filter(trait => trait.id !== TRAIT_COMPACT);
        }
        return item;
      })
      // shown in weapons row instead
      .filter(item => item.upgrade_id !== MINEFIELD_DRONE_CARRIER_SYSTEM);

  return [].concat(
      upgradesAttachments,
      teamStore.getTeamPerksInfoByMech(mechId).filter(({is_ability}) => is_ability),
  );

});
</script>
<template>
  <div v-if="upgrades.length">
    <div class="upgrades-heading">
      Upgrades
    </div>
    <div class="upgrades">
      <template v-for="(upgrade, index) in upgrades">
        <span>
          {{ upgrade.display_name }}<template v-if="upgrade.traits?.length">: </template>
            <template v-for="trait in upgrade.traits">
              <template v-if="trait.id === TRAIT_UPGRADE_LIMITED">
                <template v-for="i in Array(trait.number)">
                <span class="upgrade-use">&nbsp;</span>
                </template>
              </template>
              <template v-else>
              {{ trait.display_name }}
              </template>
            </template>
          <span v-if="index !== upgrades.length -1">, </span>
        </span>
      </template>
    </div>
  </div>
</template>