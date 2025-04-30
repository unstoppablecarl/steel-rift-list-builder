<script setup>
import {computed} from 'vue';
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
  <tr>
    <td>
      <label class="col-form-label" :for="'mech-input-armor-upgrade-' + mechId">{{ label }}</label>
    </td>
    <td>
      <BDropdown
          :id="'mech-input-armor-upgrade-' + mechId"
          class="dropdown-table"
          :text="selectedValueLabel"
          variant="light"
      >
        <table class="table table-hover table-borderless">
          <thead>
          <tr>
            <td>
              Type
            </td>
            <td class="text-end">
              Slots Used
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
              <number-val :val="item.slots" :invert-color="true" :positive-signed="false"/>
            </td>
            <td class="text-end">
              <number-val :val="item.cost_by_size[sizeId]" :invert-color="true" :positive-signed="false"/>
            </td>
          </tr>
          </tbody>
        </table>
      </BDropdown>
    </td>
    <td class="">
    </td>
    <td class=" col-form-label text-right">
    </td>
    <td class=" col-form-label text-right">
      <number-val :val="selectedValue.slots" invert-color/>
    </td>
    <td class=" col-form-label text-right">
      <number-val :val="selectedValue.cost_by_size[sizeId]" invert-color/>
    </td>
  </tr>
</template>
