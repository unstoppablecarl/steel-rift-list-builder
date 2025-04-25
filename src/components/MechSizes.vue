<script setup>
import {computed} from 'vue';
import {HEV_SIZES, HEV_SIZES_DROP_DOWN} from '../data/mech-sizes.js';
import {BDropdownDivider} from 'bootstrap-vue-next';

const options = HEV_SIZES_DROP_DOWN;

const model = defineModel();

const sizeTonnage = computed(() => HEV_SIZES[model.value].max_tons);
const sizeArmor = computed(() => HEV_SIZES[model.value].armor);
const sizeStructure = computed(() => HEV_SIZES[model.value].structure);
const sizeSlots = computed(() => HEV_SIZES[model.value].slots);

const selectedValueLabel = computed(() => {
  return HEV_SIZES[model.value].display_name;
});

function selectOption(value) {
  model.value = value;
}
</script>

<template>
  <BRow class="my-1">
    <BCol sm="2">
      <label for="input-armor-mod">Size</label>
    </BCol>
    <BCol sm="4">
      <BDropdown variant="light" :text="selectedValueLabel" class="dropdown-block">
        <BDropdown-header class="w-100">
          <BRow class="my-1">
            <BCol sm="4">
              Type
            </BCol>
            <BCol sm="2" class="text-right">
              Slots
            </BCol>
            <BCol sm="2" class="text-right">
              Armor
            </BCol>
            <BCol sm="2" class="text-right">
              Structure
            </BCol>
            <BCol sm="2" class="text-right">
              Slots
            </BCol>
            <BCol sm="2" class="text-right">
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
            <BCol sm="2" class="text-right">
              {{item.slots}}
            </BCol>
            <BCol sm="2" class="text-right">
              {{item.armor}}
            </BCol>
            <BCol sm="2" class="text-right">
              {{item.structure}}
            </BCol>
            <BCol sm="2" class="text-right">
              {{item.max_tons}}
            </BCol>
          </BRow>
        </BDropdown-item>
      </BDropdown>
    </BCol>
    <BCol sm="1" class="number-cell">
      {{ sizeArmor }}
    </BCol>
    <BCol sm="1" class="number-cell">
      {{ sizeStructure }}
    </BCol>
    <BCol sm="1" class="number-cell">
      {{sizeSlots}}
    </BCol>
    <BCol sm="1" class="number-cell">
      {{ sizeTonnage }}
    </BCol>
  </BRow>
</template>
<style scoped>

</style>
