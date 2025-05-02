<script setup>
import Toaster from './components/UI/Toaster.vue';
import FileControls from './components/FileControls.vue';
import ArmyList from './components/ArmyList.vue';
import MechTeamList from './components/MechTeamList.vue';
import {onMounted} from 'vue';

onMounted(() => {
  document.getElementById('failsafe-container').remove();
});
</script>
<template>

  <Toaster/>
  <div class="container-lg py-1 ">
    <FileControls/>
    <ArmyList/>
    <MechTeamList/>
  </div>
</template>