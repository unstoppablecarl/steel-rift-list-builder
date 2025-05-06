<script setup>
import {computed, ref} from 'vue';
import {MECH_ARMOR_UPGRADES} from '../../../data/mech-armor-upgrades.js';
import NumberVal from '../../functional/number.vue';
import {useTeamStore} from '../../../store/team-store.js';
import {useMechStore} from '../../../store/mech-store.js';
import IconTeamGroupPerks from '../../UI/IconTeamGroupPerks.vue';
import IconNotAvailable from '../../UI/IconNotAvailable.vue';
import BtnToolTip from '../../UI/BtnToolTip.vue';

const mechStore = useMechStore();

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
const options = computed(() => mechStore.getMechAvailableArmorUpgrades(mechId));

const selectedValueLabel = computed(() => {
  return MECH_ARMOR_UPGRADES[model.value].display_name;
});

const selectedValue = computed(() => {
  return MECH_ARMOR_UPGRADES[model.value];
});

function selectOption(value) {
  model.value = value;
}

const open = ref(false);
</script>

<template>
  <tr>
    <td>
      <label class="col-form-label" :for="'mech-input-armor-upgrade-' + mechId">{{ label }}</label>
    </td>
    <td colspan="3">
      <BDropdown
          :id="'mech-input-armor-upgrade-' + mechId"
          class="dropdown-form dropdown-table d-inline-block"
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
                'table-primary':   (item.id == model)
              }"
              v-for="item in options" :key="item.id"
              @click="selectOption(item.id)"
          >
            <td>
              {{ item.display_name }}
            </td>
            <td class="text-end">
              <number-val :val="item.slots" :invert-color="true"/>
            </td>
            <td class="text-end">
              <number-val :val="item.cost" :invert-color="true"/>
            </td>
            <td class="notes">
              <BtnToolTip>
                <template #target="{mouseover, mouseleave}">
                  <span
                      v-show="item.description"
                      @mouseover="mouseover"
                      @mouseleave="mouseleave"
                      class="btn btn-sm btn-light"
                  >
                    ?
                  </span>
                </template>
                <template #content>
                  {{ item.description }}
                </template>
              </BtnToolTip>
              </td>
            <td class="notes">
              <IconTeamGroupPerks
                  :perks="item.team_perks"
              />
              <IconNotAvailable
                  :valid="item.valid"
                  :validation_message="item.validation_message"
              />

            </td>
          </tr>
          </tbody>
        </table>
      </BDropdown>
      <BtnToolTip>
        <template #target="{mouseover, mouseleave}">
          <span
              v-show="selectedValue.description"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
              class="btn btn-light ms-2"
          >
            ?
          </span>
        </template>
        <template #content>
          {{ selectedValue.description }}
        </template>
      </BtnToolTip>
    </td>
    <td class="col-form-label text-end">
      <number-val :val="selectedValue.armor_mod" invert-color/>
    </td>
    <td class="col-form-label text-end">
    </td>
    <td class="col-form-label text-end">
      <number-val :val="selectedValue.slots" invert-color/>
    </td>
    <td class="col-form-label text-end">
      <number-val :val="selectedValue.cost_by_size[sizeId]" invert-color/>
    </td>
    <td></td>
  </tr>
</template>
