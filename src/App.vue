<script setup>
import Toaster from './components/UI/Toaster.vue';
import {computed, inject, onMounted, provide, ref} from 'vue';
import AppHeader from './components/AppHeader.vue';
import ArmyPrint from './components/ArmyPrint.vue';
import ArmyEdit from './components/ArmyEdit.vue';

onMounted(() => {
  document.getElementById('failsafe-container').remove();
});

const routes = {
  '/': ArmyEdit,
  '/print': ArmyPrint,
};

const currentPath = ref(window.location.hash);

provide('currentPath', currentPath)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'];
});
</script>
<template>
  <Toaster/>
  <AppHeader/>

  <component :is="currentView"/>
</template>