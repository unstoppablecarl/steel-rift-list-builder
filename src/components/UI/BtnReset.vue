<script setup>
import {resetStores} from '../../store/helpers/store-save-load.js';
import {BModal} from 'bootstrap-vue-next';
import {ref} from 'vue';

const modal = ref(false);

</script>
<template>
  <BButton @click="modal = !modal" v-b-modal.modal-center size="sm" variant="danger">Reset</BButton>
  <BModal
      v-model="modal"
      centered
      @ok="resetStores()"
      ok-variant="danger"
      title="Reset Army List?"
  >
    <div class="lead">
      Are you sure you want to clear all army list data?
    </div>
  </BModal>
</template>