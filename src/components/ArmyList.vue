<script setup>

import Faction from './ArmyList/Faction.vue';
import {useArmyListStore} from '../store/army-list-store.js';
import Fraction from './functional/fraction.vue';
import {storeToRefs} from 'pinia';
import ArmyListSize from './ArmyList/ArmyListSize.vue';
import {BFormFloatingLabel, BFormInput} from 'bootstrap-vue-next';
import ArmyListSupportAssetCount from './ArmyList/ArmyListSupportAssetCount.vue';
import ArmyListSupportAssets from './ArmyList/ArmyListSupportAssets.vue';
import {useSupportAssetStore} from '../store/support-asset-store.js';

const store = useArmyListStore();
const {used_tons, max_tons, name} = storeToRefs(store);
const {used_support_assets, max_support_assets} = storeToRefs(useSupportAssetStore());

</script>
<template>
  <div class="card text-bg-light">
    <div class="card-header">
      <strong>
        Army:
      </strong>
      {{name || 'Not named'}}

      <div class="float-end">
        <span class="ms-2">

        <strong>Support Assets: </strong>
        <fraction
            :a="used_support_assets"
            :b="max_support_assets"
            success-class="fw-bold"
        />
        </span>
        <span class="ms-2">
        <strong>Tonnage: </strong>
        <fraction
            :a="used_tons"
            :b="max_tons"
            success-class="fw-bold"
        />
        </span>
      </div>
    </div>
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