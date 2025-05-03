<script setup>

import Faction from './ArmyList/Faction.vue';
import ArmyListSize from './ArmyList/ArmyListSize.vue';
import {BFormFloatingLabel, BFormInput} from 'bootstrap-vue-next';
import ArmyListSupportAssetCount from './ArmyList/ArmyListSupportAssetCount.vue';
import ArmyListSupportAssets from './ArmyList/ArmyListSupportAssets.vue';
import ArmyListTeams from './ArmyList/ArmyListTeams.vue';
import {useArmyListStore} from '../store/army-list-store.js';
import {storeToRefs} from 'pinia';

const {name} = storeToRefs(useArmyListStore());
</script>
<template>
  <div class="card text-bg-light">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-3">
          <BFormFloatingLabel label="Army Name" label-for="list-name" class="mb-1">
            <BFormInput
                id="list-name"
                v-model="name"
                placeholder="Army Name"
            />
          </BFormFloatingLabel>
          <ArmyListSize/>
          <div class="row g-1">
            <div class="col">
              <ArmyListSupportAssetCount/>
            </div>
            <div class="col">
              <ArmyListTeams/>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <ArmyListSupportAssets/>
        </div>
        <div class="col-sm-3">
          <Faction/>
        </div>
      </div>
    </div>
  </div>
</template>