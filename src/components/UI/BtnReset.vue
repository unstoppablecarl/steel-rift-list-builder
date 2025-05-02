<script setup>


import {useMechStore} from '../../store/mech-store.js';
import {useFactionStore} from '../../store/faction-store.js';
import {useTeamStore} from '../../store/team-store.js';

const mechStore = useMechStore();
const factionStore = useFactionStore();
const teamStore = useTeamStore();

function reset() {
  mechStore.$reset();
  factionStore.$reset();
  teamStore.$reset();
}
</script>
<template>
  <BButton @click="reset" variant="danger">Reset</BButton>
</template>