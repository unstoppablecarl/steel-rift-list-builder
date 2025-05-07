<script setup>
import {storeToRefs} from 'pinia';
import {useTeamStore} from '../../store/team-store.js';
import MechTeam from '../MechTeam/MechTeam.vue';
import {computed} from 'vue';
import {TEAM_GENERAL} from '../../data/mech-teams.js';
import MechTeamGroup from '../MechTeam/MechTeamGroup.vue';
import BtnAddTeam from '../UI/BtnAddTeam.vue';

const teamStore = useTeamStore();
const {teams} = storeToRefs(teamStore);

const nonGeneralTeams = computed(() => {
  return teams.value.filter((team) => team.id !== TEAM_GENERAL);
});

</script>
<template>
  <MechTeamGroup
      :team-id="TEAM_GENERAL"
      group-id="A"
  />
  <div class="d-flex">
    <div class="flex-grow-1"></div>
    <div class="">
      <BtnAddTeam/>
    </div>
  </div>
  <MechTeam
      v-for="team in nonGeneralTeams"
      :team-id="team.id"
  />
  <div class="d-flex">
    <div class="flex-grow-1"></div>
    <div class="">
      <BtnAddTeam v-if="nonGeneralTeams.length"/>
    </div>
  </div>
</template>