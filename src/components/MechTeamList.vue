<script setup>
import {storeToRefs} from 'pinia';
import {useTeamStore} from '../store/team-store.js';
import MechTeam from './MechTeam/MechTeam.vue';
import {computed} from 'vue';
import {TEAM_GENERAL} from '../data/mech-teams.js';
import MechTeamGroup from './MechTeam/MechTeamGroup.vue';
import {BDropdown, BDropdownItem} from 'bootstrap-vue-next';

const teamStore = useTeamStore();
const {teams, addable_teams} = storeToRefs(teamStore);

const nonGeneralTeams = computed(() => {
  return teams.value.filter((team) => team.id !== TEAM_GENERAL);
});

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
  <BDropdown
      text="Add Team"
      variant="primary"
  >
    <BDropdownItem
        v-for="item in addable_teams"
        @click="teamStore.addTeam(item.id)"
    >
      {{ item.display_name }}
    </BDropdownItem>
  </BDropdown>
</template>