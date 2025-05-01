<script setup>

import {useTeamStore} from '../../store/team-store.js';
import {computed} from 'vue';
import MechTeamGroup from './MechTeamGroup.vue';

const teamStore = useTeamStore();

const {teamId} = defineProps({
  teamId: String,
  groupId: String,
});

const teamInfo = computed(() => teamStore.getTeamInfo(teamId));

</script>
<template>
  <div class="card">
    <div class="card-header fw-bold">
      {{ teamInfo.display_name }}
    </div>
    <div class="card-body">
      <MechTeamGroup
          v-for="group in teamInfo.groups"
          :team-id="teamId"
          :group-id="group.id"
      />
    </div>
  </div>
</template>