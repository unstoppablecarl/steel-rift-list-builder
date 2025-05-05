<script setup>
import Toaster from './components/UI/Toaster.vue';
import ArmyList from './components/ArmyList.vue';
import MechTeamList from './components/MechTeamList.vue';
import {onMounted} from 'vue';
import AppHeader from './components/AppHeader.vue';
import SecondaryAgendas from './components/SecondaryAgendas.vue';

onMounted(() => {
  document.getElementById('failsafe-container').remove();
});
</script>
<template>
  <Toaster/>
  <AppHeader/>
  <div class="container-lg py-1 ">

    <ArmyList/>
    <MechTeamList/>
    <SecondaryAgendas/>
  </div>
</template>