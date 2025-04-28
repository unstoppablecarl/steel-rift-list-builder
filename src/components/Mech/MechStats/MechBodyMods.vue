<script setup>
import {HEV_BODY_MODS, HEV_BODY_MODS_DROP_DOWN} from '../../../data/mech-body.js';
import {computed} from 'vue';
import {BDropdownDivider} from 'bootstrap-vue-next';

const options = HEV_BODY_MODS_DROP_DOWN;
const {
  formId,
  label,
  tonnage,
  armor,
  structure,
  bgColor,
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
  bgColor: {
    default: null,
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
  <div :class="'row my-1 ' + bgColor">
    <label class="col-sm-2 col-form-label" :for="formId">{{ label }}</label>
    <BCol sm="4">
      <BDropdown
          :id="formId"
          class="dropdown-block"
          variant="light"
          :text="selectedValueLabel"
      >
        <BDropdown-header>
          <BRow class="my-1">
            <BCol sm="4">
              Type
            </BCol>
            <BCol sm="4" class="text-right">
              {{ modifierLabel }}
            </BCol>
            <BCol sm="4" class="text-right">
              Tons Used
            </BCol>
          </BRow>
        </BDropdown-header>
        <BDropdownDivider/>
        <BDropdown-item
            v-for="item in options" :key="item.value"
            @click="selectOption(item.value)"
            :active="item.value == model"
        >
          <BRow class="my-1">
            <BCol sm="4">
              {{ item.text }}
            </BCol>
            <BCol sm="4" class="text-right">
              <number :val="item.modifier"/>
            </BCol>
            <BCol sm="4" class="text-right">
              <number :val="item.max_tons" invert invert-color/>
            </BCol>
          </BRow>
        </BDropdown-item>
      </BDropdown>
    </BCol>

    <div class="col-sm-1 col-form-label text-right">
      <number :val="armor" v-if="armor !== null"/>
    </div>

    <div class="col-sm-1 col-form-label text-right">
      <number :val="structure" v-if="structure !== null"/>
    </div>
    <div class="col-sm-1"></div>
    <div class="col-sm-1 col-form-label text-right">
      <number :val="tonnage" :invert-color="true"/>
    </div>
  </div>
</template>
<style scoped>

</style>
