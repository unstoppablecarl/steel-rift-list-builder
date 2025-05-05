<script setup>
import {useTeamStore} from '../../store/team-store.js';
import {storeToRefs} from 'pinia';
import {computed} from 'vue';

const {max_team_size_info, team_size_count_validation} = storeToRefs(useTeamStore());

const teamSizeInfo = computed(() => {
  return max_team_size_info.value.filter((item) => item.max_instance_count);
});
</script>
<template>

  <div class="card px-2 py-1">
    <div class="fw-bold">Team Limits</div>
    <div v-for="(item) in teamSizeInfo">
      {{ item.max_instance_count }} team(s) of {{ item.description }}
    </div>

    <div
        v-if="!team_size_count_validation.valid"
        class="text-danger"
    >
      {{ team_size_count_validation.validation_message }}
    </div>

  </div>
</template>