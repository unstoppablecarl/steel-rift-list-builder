<script setup>


import {useMechStore} from '../../store/mech-store.js';
import {useFactionStore} from '../../store/faction-store.js';
import {useTemplateRef} from 'vue';
import {useToastStore} from '../../store/toast-store.js';

const toastStore = useToastStore();
const mechStore = useMechStore();
const factionStore = useFactionStore();

function loadToStore(store, data) {
  store.$reset();
  store.$patch(data);
}

const fileUpload = useTemplateRef('file-upload');

function clickFile() {
  fileUpload.value.click();
}

function fileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const {mech, faction} = JSON.parse(e.target.result);

        loadToStore(factionStore, faction);
        loadToStore(mechStore, mech);

      } catch (error) {
        toastStore.toastError('Invalid Save File', error);
        console.error('Error parsing JSON:', error);
      }

      fileUpload.value.value = null;
    };
    reader.readAsText(file);
  }
}
</script>
<template>
  <input ref="file-upload" type="file" @change="fileChange" accept="application/json" hidden>
  <BButton @click="clickFile">Load</BButton>
</template>