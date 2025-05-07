<script setup>
import Toaster from './components/UI/Toaster.vue';
import {computed, onMounted, provide, ref} from 'vue';
import AppHeader from './components/AppHeader.vue';
import {ROUTE_HOME, routes} from './routes.js';

onMounted(() => {
  document.getElementById('failsafe-container').remove();
});

const currentPath = ref(window.location.hash);

provide('currentPath', currentPath);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || ROUTE_HOME];
});
</script>
<template>
  <Toaster/>
  <AppHeader/>
  <component :is="currentView"/>
</template>