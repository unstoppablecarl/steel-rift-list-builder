<script setup>
import ArmyList from './ArmyEdit/ArmyList.vue';
import SecondaryAgendas from './ArmyEdit/SecondaryAgendas.vue';
import MechTeamList from './ArmyEdit/Mech/MechTeamList.vue';
import {storeToRefs} from 'pinia';
import {useSupportAssetUnitsStore} from '../store/support-asset-units-store.js';
const {support_asset_units} = storeToRefs(useSupportAssetUnitsStore());

</script>
<template>
  <div class="container-lg pb-2">
    <ArmyList/>
    <SquadronItem v-for="unit in support_asset_units" :support-asset-attachment-id="unit.id"/>
    <MechTeamList/>
    <SecondaryAgendas/>
  </div>
</template>