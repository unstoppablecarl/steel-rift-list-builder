<script setup>
import {computed} from 'vue';
import {MECH_ARMOR_UPGRADES} from '../../../data/mech-armor-upgrades.js';
import NumberVal from '../../functional/number.vue';
import {useTeamStore} from '../../../store/team-store.js';

const teamStore = useTeamStore();

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
const options = computed(() => teamStore.getMechArmorUpgradeOptions(mechId));

const selectedValueLabel = computed(() => {
  return MECH_ARMOR_UPGRADES[model.value].display_name;
});

const selectedValue = computed(() => {
  return MECH_ARMOR_UPGRADES[model.value];
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
    <td colspan="3">
      <BDropdown
          :id="'mech-input-armor-upgrade-' + mechId"
          class="dropdown-form dropdown-table"
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
            <td></td>
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
            <td class="notes">
              <span
                  v-if="!item.valid"
                  v-b-tooltip.hover.top="item.validation_message"
              >
                <span class="btn btn-danger disabled">
                  <span class="material-symbols-outlined">
                  block
                  </span>
                </span>
              </span>
            </td>
          </tr>
          </tbody>
        </table>
      </BDropdown>
    </td>
    <td class="">
    </td>
    <td class=" col-form-label text-end">
    </td>
    <td class=" col-form-label text-end">
      <number-val :val="selectedValue.slots" invert-color/>
    </td>
    <td class=" col-form-label text-end">
      <number-val :val="selectedValue.cost_by_size[sizeId]" invert-color/>
    </td>
    <td></td>
  </tr>
</template>
