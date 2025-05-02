<script setup>

import {storeToRefs} from 'pinia';
import {useTeamStore} from '../store/team-store.js';
import MechTeam from './MechTeam/MechTeam.vue';
import {computed} from 'vue';
import {TEAM_GENERAL} from '../data/mech-teams.js';
import MechTeamGroup from './MechTeam/MechTeamGroup.vue';

const teamStore = useTeamStore();
const {teams, addable_teams} = storeToRefs(teamStore);

const nonGeneralTeams = computed(() => {
  return teams.value.filter((team) => team.id !== TEAM_GENERAL);
});
const addableTeamsDropdown = computed(() => {
  return [{
    id: '',
    display_name: 'Add Team',
  }].concat(addable_teams.value);
});

const selectedTeam = defineModel('selectedTeam');

function addTeam() {

  teamStore.addTeam(selectedTeam.value);
  selectedTeam.value = '';
}

</script>
<template>

  <MechTeamGroup
      :team-id="TEAM_GENERAL"
      group-id="A"
  />
  <MechTeam
      v-for="team in nonGeneralTeams"
      :team-id="team.id"
  />
  <BFormSelect
      v-model="selectedTeam"
      :options="addableTeamsDropdown"
      value-field="id"
      text-field="display_name"
      @change="addTeam"
  />

</template>