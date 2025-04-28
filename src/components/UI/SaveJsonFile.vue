<script setup>
import fileSaver from 'file-saver';

function saveFile(fileName, data) {
  let payload = JSON.stringify(data);
  var blob = new Blob([payload], {type: 'text/plain;charset=utf-8'});
  fileSaver.saveAs(blob, `${fileName}.json`);
}

function loadFromLocal(key) {
  return JSON.parse(localStorage[key]);
}

function save() {

  const data = {
    save_schema_version: 1,
    mech: loadFromLocal('mech'),
    faction: loadFromLocal('faction'),
  };

  saveFile('my-list', data);
}
</script>
<template>
  <BButton @click="save">Save</BButton>
</template>