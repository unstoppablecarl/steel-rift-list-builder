<script setup>
import {HEV_BODY_MODS, HEV_BODY_MODS_DROP_DOWN} from '../../../data/mech-body.js';
import {computed} from 'vue';

const options = HEV_BODY_MODS_DROP_DOWN;
const {
  formId,
  label,
  tonnage,
  armor,
  structure,
} = defineProps({
  formId: {
    type: String,
  },
  label: {
    type: String,
  },
  modifierLabel: {
    type: String,
  },
  tonnage: {
    default: 0,
  },
  armor: {
    default: 0,
  },
  structure: {
    default: 0,
  },
});

const model = defineModel();

const selectedValueLabel = computed(() => {
  return HEV_BODY_MODS[model.value].display_name;
});

function selectOption(value) {
  model.value = value;
}
</script>
<template>
  <tr>
    <td>
      <label class="col-form-label" :for="formId">{{ label }}</label>
    </td>
    <td colspan="3">
      <BDropdown
          :id="formId"
          class="dropdown-table"
          variant="light"
          :text="selectedValueLabel"
      >
        <table class="table table-hover table-borderless">
          <thead>
          <tr>
            <td>
              Type
            </td>
            <td class="text-end">
              {{ modifierLabel }}
            </td>
            <td class="text-end">
              Tons Used
            </td>
          </tr>
          </thead>
          <tbody>
          <tr
              :class="{
                'dropdown-row': true,
                'table-primary':   (item.value == model)
              }"
              v-for="item in options" :key="item.value"
              @click="selectOption(item.value)"
          >
            <td>
              {{ item.text }}
            </td>
            <td class="text-end">
              <number :val="item.modifier"/>
            </td>
            <td class="text-end">
              <number :val="item.max_tons" invert invert-color/>
            </td>
          </tr>
          </tbody>
        </table>
      </BDropdown>

    </td>
    <td class="col-form-label text-end">
      <number :val="armor" v-if="armor !== null"/>
    </td>
    <td class="col-form-label text-end">
      <number :val="structure" v-if="structure !== null"/>
    </td>
    <td></td>
    <td class="col-form-label text-end">
      <number :val="tonnage" :invert-color="true"/>
    </td>
  </tr>
</template>
