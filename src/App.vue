<script setup>
import MechList from './components/MechList.vue';
import Toaster from './components/UI/Toaster.vue';
import Faction from './components/Faction.vue';
import ListInfo from './components/FileControls.vue';
</script>
<template>
  <Toaster/>
  <div class="container py-1">

    <ListInfo/>
    <Faction/>
    <MechList/>

  </div>
</template>