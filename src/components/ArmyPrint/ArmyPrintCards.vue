<script setup>
import {useMechStore} from '../../store/mech-store.js';
import {computed} from 'vue';
import {chunk} from 'lodash';
import HEVCard from './ArmyPrintCards/HEVCard.vue';

const mechStore = useMechStore();

const mechPages = computed(() => {
  return chunk(mechStore.mechs, 9);
});

</script>
<template>
  <div
      v-for="mechPage in mechPages"
      class="page-preview page-letter"
      style="background-color:white"
  >
    <div class="page-card-grid">
      <HEVCard v-for="mech in mechPage" :mech-id="mech.id"/>
    </div>
  </div>
</template>
