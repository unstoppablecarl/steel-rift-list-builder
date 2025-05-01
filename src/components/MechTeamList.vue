<script setup>

import {storeToRefs} from 'pinia';
import {useTeamStore} from '../store/team-store.js';
import MechTeam from './MechTeam/MechTeam.vue';
import {computed} from 'vue';

const teamStore = useTeamStore();
const {teams, addable_teams} = storeToRefs(teamStore);

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

  <MechTeam
      v-for="team in teams"
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