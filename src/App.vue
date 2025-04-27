<script setup>
import MechList from './components/MechList.vue';
import Toaster from './components/Toaster.vue';
import Faction from './components/Faction.vue';

</script>
<template>
  <Toaster/>

  <div class="container py-1">
    <Faction/>
    <MechList/>
  </div>
</template>

<style scoped>

</style>
