<script setup>
import {useMechStore} from '../store/mech-store.js';
import PageHevCards from './ArmyPrint/PageHEVCards.vue';
import {computed} from 'vue';
import {chunk} from 'lodash';

const mechStore = useMechStore();

const mechPages = computed(() => {
  return chunk(mechStore.mechs, 9);
});
</script>
<template>
  <div class="page-previews-container" data-bs-theme="light">
    <div class="output-container">
      <PageHevCards v-for="mechPage in mechPages" :mech-page="mechPage"/>
    </div>
  </div>
</template>
