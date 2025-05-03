<script setup>
import {resetStores} from '../../store/helpers/store-save-load.js';
</script>
<template>
  <BButton @click="resetStores()" size="sm" variant="danger">Reset</BButton>
</template>