<script setup>
import ArmyList from './ArmyEdit/ArmyList.vue';
import SecondaryAgendas from './ArmyEdit/SecondaryAgendas.vue';
import MechTeamList from './ArmyEdit/Mech/MechTeamList.vue';
</script>
<template>
  <div class="container-lg py-1 ">
    <ArmyList/>
    <MechTeamList/>
    <SecondaryAgendas/>
  </div>
</template>