<script setup>
import {resetStores} from '../../store/helpers/store-save-load.js';
</script>
<template>
  <BButton @click="resetStores()" variant="danger">Reset</BButton>
</template>