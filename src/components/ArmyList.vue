<script setup>

import Faction from './ArmyList/Faction.vue';
import {useArmyListStore} from '../store/army-list-store.js';
import Fraction from './functional/fraction.vue';
import {storeToRefs} from 'pinia';
import ArmyListType from './ArmyList/ArmyListType.vue';
import {BFormInput} from 'bootstrap-vue-next';

const store = useArmyListStore();

const {used_tons, max_tons, name} = storeToRefs(store);


</script>
<template>
  <div class="card text-bg-light">
    <div class="card-header">
      Army
      <div class="float-end">
        <strong>Tonnage: </strong>
        <fraction :a="used_tons" :b="max_tons"/>
      </div>
    </div>
    <div class="card-body">
      <div class="row">

        <div class="col">
          <div class="form-floating mb-1">
            <BFormInput
                id="list_name"
                v-model="name"
            />
            <label for="list_name">Name</label>
          </div>
        </div>
        <div class="col">
          <ArmyListType/>
        </div>
        <div class="col">
          <Faction/>
        </div>
      </div>
    </div>
  </div>
</template>