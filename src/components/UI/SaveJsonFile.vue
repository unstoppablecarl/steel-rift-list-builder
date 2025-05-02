<script setup>
import fileSaver from 'file-saver';
import {useMechStore} from '../../store/mech-store.js';
import {useFactionStore} from '../../store/faction-store.js';
import {useTeamStore} from '../../store/team-store.js';

const mechStore = useMechStore();
const factionStore = useFactionStore();
const teamStore = useTeamStore();

function saveFile(fileName, data) {
  let payload = JSON.stringify(data);
  var blob = new Blob([payload], {type: 'text/plain;charset=utf-8'});
  fileSaver.saveAs(blob, `${fileName}.json`);
}

function loadFromLocal(key) {
  return JSON.parse(localStorage[key]);
}

function save() {
  //make sure stores are persisted in case they have not been mutated yet
  mechStore.$persist();
  factionStore.$persist();
  teamStore.$persist();

  const data = {
    save_schema_version: 1,
    mech: loadFromLocal('mech'),
    faction: loadFromLocal('faction'),
    team: loadFromLocal('team')
  };

  saveFile('my-list', data);
}
</script>
<template>
  <BButton @click="save">Save</BButton>
</template>