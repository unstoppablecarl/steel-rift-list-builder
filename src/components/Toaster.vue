<script setup>
import {BToastOrchestrator, useToastController} from 'bootstrap-vue-next';
import {useToastStore} from '../store/toast-store.js';

const {show} = useToastController();
const store = useToastStore();

store.$subscribe((mutation, state) => {
  show({
    props: state.message
  });
});
</script>
<template>
  <BToastOrchestrator/>
</template>
