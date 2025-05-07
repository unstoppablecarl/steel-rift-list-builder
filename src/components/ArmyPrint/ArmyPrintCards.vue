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

const mechPages = computed(() => {
  if (printSettingsStore.one_team_per_page) {
    let pages = [];

    teamStore.teams.forEach(team => {

      const teamMechIds = teamStore.getTeamMechIds(team.id);
      if (teamMechIds.length) {

        pages.push(teamMechIds);
      }
    });

    return pages;
  }

  return chunk(mechStore.mechs, 9);
});

</script>
<template>
  <div
      v-for="mechPage in mechPages"
      class="page-preview page-letter"
      style="background-color:white"
  >
    <div class="page-card-grid">
      <HEVCard v-for="mechId in mechPage" :mech-id="mechId"/>
    </div>
  </div>
</template>
