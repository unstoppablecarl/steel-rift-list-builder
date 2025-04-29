<script setup>
import {computed} from 'vue';
import {BDropdownDivider} from 'bootstrap-vue-next';
import {HEV_ARMOR_UPGRADES, HEV_ARMOR_UPGRADES_DROP_DOWN} from '../../../data/mech-armor-upgrades.js';
import NumberVal from '../../functional/number.vue';

const options = HEV_ARMOR_UPGRADES_DROP_DOWN;
const {
  label,
  sizeId,
  mechId,
} = defineProps({
  label: {
    type: String,
  },
  sizeId: {
    type: String,
  },
  mechId: {
    type: Number,
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
  <div class="row my-1">
    <label class="col-sm-2 col-form-label" :for="'mech-input-armor-upgrade-' + mechId">{{ label }}</label>
    <BCol sm="4">
      <BDropdown
          :id="'mech-input-armor-upgrade-' + mechId"
          class="dropdown-block"
          :text="selectedValueLabel"
          variant="light"
      >
        <BDropdown-header>
          <BRow class="my-1">
            <BCol sm="4">
              Type
            </BCol>
            <BCol sm="4" class="text-right">
              Slots Used
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
              <number-val :val="item.slots" :invert-color="true" :positive-signed="false"/>
            </BCol>
            <BCol sm="4" class="text-right">
              <number-val :val="item.cost_by_size[sizeId]" :invert-color="true" :positive-signed="false"/>
            </BCol>
          </BRow>
        </BDropdown-item>
      </BDropdown>
    </BCol>
    <div class="col-sm-1">
    </div>
    <div class="col-sm-1 col-form-label text-right">
    </div>
    <div class="col-sm-1 col-form-label text-right">
      <number-val :val="selectedValue.slots" invert-color/>
    </div>
    <div class="col-sm-1 col-form-label text-right">
      <number-val :val="selectedValue.cost_by_size[sizeId]" invert-color/>
    </div>
  </div>
</template>
<style scoped>

</style>
