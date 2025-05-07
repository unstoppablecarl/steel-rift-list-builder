<script setup>

import {useMechStore} from '../store/mech-store.js';
import {storeToRefs} from 'pinia';
import HEVCard from './ArmyPrint/HEVCard.vue';

const mechStore = useMechStore();
const {mechs} = storeToRefs(mechStore);

</script>
<template>
  <div class="page-previews-container" data-bs-theme="light">
    <div class="output-container card-grid-container-to-scale-print">

      <div class="page-preview page-letter "
           style="background-color:white">
        <div class="page-card-grid">
          <HEVCard v-for="mech in mechs" :mech-id="mech.id"/>
        </div>
      </div>

    </div>
  </div>
</template>
