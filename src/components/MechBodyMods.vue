<script setup>
import {HEV_BODY_MODS, HEV_BODY_MODS_DROP_DOWN} from '../data/mech-body.js';
import {computed} from 'vue';
import {BDropdownDivider} from 'bootstrap-vue-next';

const options = HEV_BODY_MODS_DROP_DOWN;
const {
  label,
  tonnage,
  armor,
  structure,
} = defineProps({
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
  <BRow class="my-1">
    <BCol sm="2">
      <label>{{ label }}</label>
    </BCol>
    <BCol sm="4">
      <BDropdown variant="light" :text="selectedValueLabel" class="dropdown-block">
        <BDropdown-header>
          <BRow class="my-1">
            <BCol sm="4">
              Type
            </BCol>
            <BCol sm="4" class="text-right">
              {{modifierLabel}}
            </BCol>
            <BCol sm="4" class="text-right">
              Tons
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
              <number :val="item.max_tons"/>
            </BCol>
          </BRow>
        </BDropdown-item>
      </BDropdown>
    </BCol>

    <BCol sm="1" class="number-cell">
      <number :val="armor"/>
    </BCol>
    <BCol sm="1" class="number-cell">
      <number :val="structure"/>
    </BCol>
    <BCol sm="1" class="number-cell">
    </BCol>
    <BCol sm="1" class="number-cell">
      <number :val="tonnage"/>
    </BCol>
  </BRow>
</template>
<style scoped>

</style>
