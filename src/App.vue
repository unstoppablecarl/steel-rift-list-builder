<script>
import MechList from './components/MechList.vue';
import {BToastOrchestrator} from 'bootstrap-vue-next';
import {mapStores} from 'pinia';
import {useMechStore} from './store.js';

export default {
  components: {MechList, BToastOrchestrator},

  computed: {
    ...mapStores(useMechStore),

    toastMessages(){
      return this.mechStore.toast_messages
    }
  },
  watch: {},
};

</script>

<template>
  <div class="container">
    <BToastOrchestrator/>
    <mech-list/>
  </div>
</template>

<style scoped>

</style>
