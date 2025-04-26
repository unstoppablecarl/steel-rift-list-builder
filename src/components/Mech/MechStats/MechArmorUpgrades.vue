<script setup>
import {computed} from 'vue';
import {BDropdownDivider} from 'bootstrap-vue-next';
import {HEV_ARMOR_UPGRADES, HEV_ARMOR_UPGRADES_DROP_DOWN} from '../../../data/mech-armor-upgrades.js';
import Number from '../../functional/number.vue';

const options = HEV_ARMOR_UPGRADES_DROP_DOWN;
const {
  label,
  size,
} = defineProps({
  label: {
    type: String,
  },
  size: {
    type: String,
  },
});

const model = defineModel();

const selectedValueLabel = computed(() => {
  return HEV_ARMOR_UPGRADES[model.value].display_name;
});

const selectedValue = computed(() => {
  return HEV_ARMOR_UPGRADES[model.value];
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
              Slots
            </BCol>
            <BCol sm="4" class="text-right">
              Cost
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
              <number :val="item.slots" :invert-color="true" :positive-signed="false"/>
            </BCol>
            <BCol sm="4" class="text-right">

              <number :val="item.cost_by_size[size]" :invert-color="true" :positive-signed="false"/>

            </BCol>
          </BRow>
        </BDropdown-item>
      </BDropdown>
    </BCol>

    <BCol sm="1" class="number-cell">

    </BCol>
    <BCol sm="1" class="number-cell">

    </BCol>
    <BCol sm="1" class="number-cell">
      <number :val="selectedValue.slots" :invert="true"/>
    </BCol>
    <BCol sm="1" class="number-cell">
      <number :val="selectedValue.cost_by_size[size]" :invert="true"/>
    </BCol>
  </BRow>
</template>
<style scoped>

</style>
