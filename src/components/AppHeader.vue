<script setup>

import Fraction from './functional/fraction.vue';
import BtnReset from './UI/BtnReset.vue';
import BtnLoad from './UI/BtnLoad.vue';
import BtnSave from './UI/BtnSave.vue';
import {useArmyListStore} from '../store/army-list-store.js';
import {storeToRefs} from 'pinia';
import {useTeamStore} from '../store/team-store.js';
import {useSupportAssetStore} from '../store/support-asset-store.js';
import {inject} from 'vue';

const store = useArmyListStore();
const {used_teams_count, max_teams_count} = storeToRefs(useTeamStore());

const {used_tons, max_tons, name} = storeToRefs(store);
const {used_support_assets, max_support_assets} = storeToRefs(useSupportAssetStore());

const currentPath = inject('currentPath');

</script>
<template>
  <div class="sticky-top text-bg-light border-bottom shadow">
    <div class="container-lg">
      <div class="px-1 pt-2 pb-3">
        <div class="row">
          <div class="col-sm">
            <div class="fs-5">
              Steel Rift: Garage
            </div>
          </div>
          <div class="col-sm">
            <div class="float-end">
              <BtnSave/>&nbsp;
              <BtnLoad/>&nbsp;
              <BtnReset/>
              <div class="btn-group ms-1" role="group" aria-label="Basic example">

                <a href="#/" :class="{
                  'btn btn-sm btn-light': true,
                  'active': currentPath == '#/'
                }">
                  Edit
                </a>

                <a href="#/print" :class="{
                  'btn btn-sm btn-light': true,
                  'active': currentPath == '#/print'
                }">
                  Print
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="d-sm-flex pt-2">
          <div class="flex-sm-grow-1">
            <strong>
              Army:
            </strong>
            {{ name || 'Not named' }}
          </div>
          <div class="text-sm-end">

            <strong>Teams: </strong>
            <fraction
                :a="used_teams_count"
                :b="max_teams_count"
                success-class="fw-bold"
            />


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