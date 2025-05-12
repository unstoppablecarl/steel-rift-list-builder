<script setup>
import {useMechStore} from '../../store/mech-store.js';
import {computed} from 'vue';
import {chunk} from 'lodash';
import HEVCard from './ArmyPrintCards/HEVCard.vue';
import {usePrintSettingsStore} from '../../store/print-settings-store.js';
import {useTeamStore} from '../../store/team-store.js';

const printSettingsStore = usePrintSettingsStore();
const teamStore = useTeamStore();
const mechStore = useMechStore();

const pages = computed(() => {

  if (printSettingsStore.one_team_per_page) {
    let pages = [];

    teamStore.teams.forEach(team => {
      const teamMechIds = teamStore.getTeamMechIds(team.id);
      if (teamMechIds.length) {
        pages = pages.concat(chunk(teamMechIds, 9));
      }
    });

    return pages;
  }

  const mechIds = mechStore.mechs.map(mech => mech.id);

  const cards = mechIds.map(mechId => {
    return {
      type: 'hev',
      mechId,
    };
  });

  if (printSettingsStore.include_mine_drone_card) {
    cards.push({
      type: 'mine_drone',
    });
  }

  return chunk(cards, 9);
});

</script>
<template>
  <div
      v-for="page in pages"
      class="page-preview page-letter"
      style="background-color:white"
  >
    <div class="page-card-grid">

      <template v-for="item in page">
        <HEVCard v-if="item.type === 'hev'" :mech-id="item.mechId"/>
        <MineDroneCard v-if="item.type === 'mine_drone'"/>

      </template>
    </div>
  </div>
</template>
