<script setup>

import Fraction from './functional/fraction.vue';
import BtnReset from './UI/BtnReset.vue';
import BtnLoad from './UI/BtnLoad.vue';
import BtnSave from './UI/BtnSave.vue';
import {useArmyListStore} from '../store/army-list-store.js';
import {storeToRefs} from 'pinia';
import {useTeamStore} from '../store/team-store.js';
import {useSupportAssetStore} from '../store/support-asset-store.js';

const store = useArmyListStore();
const {used_teams_count, max_teams_count} = storeToRefs(useTeamStore());

const {used_tons, max_tons, name} = storeToRefs(store);
const {used_support_assets, max_support_assets} = storeToRefs(useSupportAssetStore());
</script>
<template>
  <div class="sticky-top text-bg-light border-bottom shadow">
    <div class="container">
      <div class="px-1 pt-2 pb-3">
        <div class="row">
          <div class="col">
            <div class="fs-5">
              Steel Rift: Garage
            </div>
          </div>
          <div class="col">
            <div class="float-end">
              <BtnSave/>&nbsp;
              <BtnLoad/>&nbsp;
              <BtnReset/>
            </div>
          </div>
        </div>
        <div class="pt-2">
          <strong>
            Army:
          </strong>
          {{ name || 'Not named' }}
          <div class="float-end">
        <span class="ms-2">
        <strong>Teams: </strong>
        <fraction
            :a="used_teams_count"
            :b="max_teams_count"
            success-class="fw-bold"
        />
        </span>

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
      </div>

    </div>
  </div>
</template>