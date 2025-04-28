<script setup>
import {BToastOrchestrator, useToastController} from 'bootstrap-vue-next';
import {useToastStore} from '../store/toast-store.js';
import {unref} from 'vue';

const {show} = useToastController();
const store = useToastStore();

store.$subscribe((mutation, state) => {

  const props = unref(state.message);
  store.$reset();

  show({
    props,
  });
});
</script>
<template>
  <BToastOrchestrator/>
</template>
