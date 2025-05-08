<script setup>
import {computed, ref} from 'vue';
import NumberVal from '../../../functional/number.vue';
import {useMechStore} from '../../../../store/mech-store.js';
import IconTeamGroupPerks from '../../../UI/IconTeamGroupPerks.vue';
import IconNotAvailable from '../../../UI/IconNotAvailable.vue';
import BtnToolTip from '../../../UI/BtnToolTip.vue';

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

const armorUpgrade = computed(() => {
  const {armor_upgrade_id} = mechStore.getMech(mechId);
  return mechStore.getMechArmorUpgradeInfo(mechId, armor_upgrade_id);
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
          :text="armorUpgrade.display_name"
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
            <td></td>
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
                      class="btn btn-sm btn-light me-1"
                  >
                    <span class="material-symbols-outlined">shield_question</span>
                  </span>
                </template>
                <template #content>
                  {{ item.description }}
                </template>
              </BtnToolTip>
            </td>
            <td class="notes">
              <IconTeamGroupPerks
                  class="me-1"
                  :perks="item.team_perks"
              />
            </td>
            <td class="notes">
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
              v-show="armorUpgrade.description"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
              class="btn btn-light ms-1 me-1"
          >
            <span class="material-symbols-outlined">shield_question</span>
          </span>
        </template>
        <template #content>
          {{ armorUpgrade.description }}
        </template>
      </BtnToolTip>
      <IconTeamGroupPerks
          size="md"
          :perks="armorUpgrade.team_perks"
      />
    </td>
    <td class="col-form-label text-end">
      <number-val :val="armorUpgrade.armor_mod" invert-color/>
    </td>
    <td class="col-form-label text-end">
    </td>
    <td class="col-form-label text-end">
      <number-val :val="armorUpgrade.slots" invert-color/>
    </td>
    <td class="col-form-label text-end">
      <number-val :val="armorUpgrade.cost" invert-color/>
    </td>
    <td></td>
  </tr>
</template>
