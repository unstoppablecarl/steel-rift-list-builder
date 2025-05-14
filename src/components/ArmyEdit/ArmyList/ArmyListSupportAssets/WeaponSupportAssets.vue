<script setup>
import {storeToRefs} from 'pinia';
import {useSupportAssetStore} from '../../../../store/support-asset-store.js';
import WeaponSupportAssetAdd from './WeaponSupportAssetAdd.vue';
import TraitList from '../../../UI/TraitList.vue';
import BtnToolTip from '../../../UI/BtnToolTip.vue';
import {useValidationStore} from '../../../../store/validation-store.js';

const store = useSupportAssetStore();
const validationStore = useValidationStore();

const {invalid_number_of_support_assets} = storeToRefs(validationStore);
const {
  weapon_support_assets,
  used_support_assets,
} = storeToRefs(store);

</script>
<template>
  <div
      :class="{
        'card': true,
        'border-danger': invalid_number_of_support_assets
      }"
  >
    <div class="card-header" ref="support-asset-drop-down-container">
      <div class="d-flex ps-3">
        <div class="col-form-label flex-shrink-1 pe-2 fw-bold">
          Weapon Support Assets
        </div>
        <div class="flex-grow-1">
          <IconValidationError size="sm" :message="invalid_number_of_support_assets"/>
        </div>
        <div class="flex-shrink-1 text-end">
          <WeaponSupportAssetAdd/>
        </div>
      </div>
    </div>
    <div class="card-body">
      <table class="table m-0" v-if="used_support_assets">
        <thead>
        <tr class="table-light">
          <th>Name</th>
          <th class="text-end pe-1">Damage</th>
          <th class="text-end pe-1">Tons</th>
          <th>Traits</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in weapon_support_assets">
          <td>
            <BtnToolTip>
              <template #target="{mouseover, mouseleave}">
                <span
                    @mouseover="mouseover"
                    @mouseleave="mouseleave"
                    class="text-tooltip"
                >
                  {{ item.display_name }}
                </span>
              </template>
              <template #content>
                {{ item.description }}
              </template>
            </BtnToolTip>
          </td>
          <td class="text-end">
            {{ item.off_table_weapon.damage }}
          </td>
          <td class="text-end">
            <number :val="item.cost" :invert-color="true"/>
          </td>
          <td>
            <TraitList :traits="item.off_table_weapon.traits"/>
          </td>
          <td>
            <div class="small lh-sm">
              {{ item.notes.join(', ') }}
            </div>
          </td>
          <td>
            <BButton @click="store.removeSupportAssetId(item.id)" variant="danger" size="sm"><span
                class="material-symbols-outlined">delete</span></BButton>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>