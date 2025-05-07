<script setup>
import {BDropdown, BDropdownItem} from 'bootstrap-vue-next';
import {useTeamStore} from '../../store/team-store.js';
import {storeToRefs} from 'pinia';

const teamStore = useTeamStore();
const {addable_teams} = storeToRefs(teamStore);
</script>
<template>
  <BDropdown
      text="Add Team"
      variant="primary"
  >
    <BDropdownItem
        v-for="item in addable_teams"
        @click="teamStore.addTeam(item.id)"
    >
      <img :src="item.icon"/> {{ item.display_name }}
    </BDropdownItem>
  </BDropdown>
</template>
