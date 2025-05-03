<script setup>
import fileSaver from 'file-saver';
import {makeSaveFileData} from '../../store/helpers/store-save-load.js';

function saveFile(fileName, data) {
  let payload = JSON.stringify(data);
  let blob = new Blob([payload], {type: 'text/plain;charset=utf-8'});
  fileSaver.saveAs(blob, `${fileName}.json`);
}

function save() {
  saveFile('my-list', makeSaveFileData());
}
</script>
<template>
  <BButton @click="save">Save</BButton>
</template>