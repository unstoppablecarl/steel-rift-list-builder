<script setup>
import {computed, ref} from 'vue';
import ArmyPrintCards from './ArmyPrint/ArmyPrintCards.vue';
import ArmyPrintRef from './ArmyPrint/ArmyPrintRef.vue';
import ArmyPrintAll from './ArmyPrint/ArmyPrintAll.vue';
import ArmyPrintSettings from './ArmyPrint/ArmyPrintSettings.vue';
import {usePrintSettingsStore} from '../store/print-settings-store.js';
import {storeToRefs} from 'pinia';

const printSettingsStore = usePrintSettingsStore();

const {one_team_per_page, include_army_name_on_cards} = storeToRefs(printSettingsStore);
const PRINT_MODE_CARDS = 'PRINT_MODE_CARDS';
const PRINT_MODE_REF = 'PRINT_MODE_REF';
const PRINT_MODE_ALL = 'PRINT_MODE_ALL';

const printView = ref(PRINT_MODE_CARDS);

const components = {
  [[PRINT_MODE_CARDS]]: {
    display_name: 'Cards',
    component: ArmyPrintCards,
  },
  [[PRINT_MODE_REF]]: {
    display_name: 'Reference',
    component: ArmyPrintRef,
  },
  [[PRINT_MODE_ALL]]: {
    display_name: 'All',
    component: ArmyPrintAll,
  },
};

const printDisplayName = computed(() => {
  return components[printView.value].display_name;
});

const printComponent = computed(() => {
  return components[printView.value].component;
});

function print() {
  window.print();
}
</script>
<template>
  <ArmyPrintSettings>
    <template #nav>
      <template v-for="(item, key) in components">
        <button
            :class="{
                        'btn btn-sm btn-light': true,
                        'active': printView === key
                      }"
            @click="printView = key"
        >
          {{ item.display_name }}
        </button>
      </template>
    </template>

    <template #body>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="one_team_per_page" id="one-team-per-page">
        <label class="form-check-label" for="one-team-per-page">
          Print one team per page
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="include_army_name_on_cards" id="one-team-per-page">
        <label class="form-check-label" for="one-team-per-page">
          Include army name on cards
        </label>
      </div>

    </template>


    <template #footer>
      <button class="btn btn-sm btn-primary" @click="print">
        {{ printDisplayName }}
        <span class="material-symbols-outlined">print</span>
      </button>
    </template>
  </ArmyPrintSettings>

  <div class="page-previews-container" data-bs-theme="light">
    <div class="output-container">
      <component :is="printComponent"/>
    </div>
  </div>
</template>
