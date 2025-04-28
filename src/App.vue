<script setup>
import MechList from './components/MechList.vue';
import Toaster from './components/Toaster.vue';
import Faction from './components/Faction.vue';
import JSONFileLoad from './components/UI/LoadJsonFile.vue';
import JSONFileSave from './components/UI/SaveJsonFile.vue';
import {useMechStore} from './store/mech-store.js';
import {useFactionStore} from './store/faction-store.js';

const mechStore = useMechStore();
const factionStore = useFactionStore();


function reset(){
  mechStore.$reset()
  factionStore.$reset()
}

</script>
<template>
  <Toaster/>

  <div class="container py-1">
    <JSONFileLoad/>
    <JSONFileSave/>
    <BButton @click="reset">Reset</BButton>
    <Faction/>
    <MechList/>

  </div>
</template>