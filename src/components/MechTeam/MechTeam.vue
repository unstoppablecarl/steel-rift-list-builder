<script setup>

import {useTeamStore} from '../../store/team-store.js';
import {computed} from 'vue';
import MechTeamGroup from './MechTeamGroup.vue';
import {BButton} from 'bootstrap-vue-next';

const teamStore = useTeamStore();

const {teamId} = defineProps({
  teamId: String,
  groupId: String,
});

const teamInfo = computed(() => teamStore.getTeamInfo(teamId));

</script>
<template>
  <div class="card">
    <div class="card-header d-flex ">
      <div class="flex-grow-1">
        <div class="d-inline-block py-1 fw-bold">
          {{ teamInfo.display_name }}
        </div>
      </div>
      <div class="text-end">
        <BButton
            @click="teamStore.removeTeam(teamId)"
            size="sm"
            variant="danger"
            class="mx-1"
            v-b-tooltip.hover.top="'Remove Team'"
        >
          <span class="material-symbols-outlined">delete</span>
        </BButton>
      </div>
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