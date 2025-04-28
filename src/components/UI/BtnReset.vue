<script setup>


import {useMechStore} from '../../store/mech-store.js';
import {useFactionStore} from '../../store/faction-store.js';

const mechStore = useMechStore();
const factionStore = useFactionStore();

function reset() {
  mechStore.$reset();
  factionStore.$reset();
}
</script>
<template>
  <BButton @click="reset" variant="danger">Reset</BButton>
</template>