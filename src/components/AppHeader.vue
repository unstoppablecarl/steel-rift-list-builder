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
import {ROUTE_HOME, ROUTE_PRINT} from '../routes.js';
import logoSvg from '/steel-rift-logo.svg';

const store = useArmyListStore();
const {used_teams_count, max_teams_count} = storeToRefs(useTeamStore());

const {used_tons, max_tons, name} = storeToRefs(store);
const {used_support_assets, max_support_assets} = storeToRefs(useSupportAssetStore());

const currentPath = inject('currentPath');

</script>
<template>
  <div class="sticky-top text-bg-light border-bottom shadow app-header">
    <div class="container-lg">
      <div class="px-4 pt-2 pb-2">
        <div class="row g-1">
          <div class="col-sm">
            <div class="fs-5">
             <img :src="logoSvg" height="25" class="logo"/> Garage
            </div>
          </div>
          <div class="col-sm">
            <div class="float-end">
              <BtnSave/>&nbsp;
              <BtnLoad/>&nbsp;
              <BtnReset/>
              <div class="btn-group ms-1" role="group">
                <a :href="`#${ROUTE_HOME}`" :class="{
                  'btn btn-sm btn-light': true,
                  'active': currentPath === `#${ROUTE_HOME}`
                }">
                  Edit
                </a>
                <a :href="`#${ROUTE_PRINT}`" :class="{
                  'btn btn-sm btn-light': true,
                  'active': currentPath === `#${ROUTE_PRINT}`
                }">
                  Print
                </a>

              </div>
            </div>
          </div>
        </div>
        <div class="row pt-1 g-1">
          <div class="col-auto flex-sm-shrink-1">
            <label class="col-form-label fw-bold" for="list-name">
              Army Name:
            </label>
          </div>
          <div class="col-3">
            <input
                type="text"
                v-model="name"
                id="list-name"
                class="form-control form-con"
            />
          </div>
          <div class="col-auto flex-grow-1 text-sm-end">
            <div class="col-form-label">


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
  </div>
</template>