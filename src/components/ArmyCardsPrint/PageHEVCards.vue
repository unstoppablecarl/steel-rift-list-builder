<script setup>
import HEVCard from './HEVCard.vue';

const {mechPage} = defineProps({
  mechPage: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="page-preview page-letter "
       style="background-color:white">
    <div class="page-card-grid">
      <HEVCard v-for="mech in mechPage" :mech-id="mech.id"/>
    </div>
  </div>
</template>
