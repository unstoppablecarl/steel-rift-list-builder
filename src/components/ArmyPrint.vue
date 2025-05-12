<script setup>
import {computed} from 'vue';
import ArmyPrintSettings from './ArmyPrint/ArmyPrintSettings.vue';
import {PRINT_MODES, usePrintSettingsStore} from '../store/print-settings-store.js';
import {storeToRefs} from 'pinia';

const printSettingsStore = usePrintSettingsStore();

const {
  print_mode,
  print_mode_display_name,
  one_team_per_page,
  include_army_name_on_cards,
  include_mine_drone_card,
} = storeToRefs(printSettingsStore);

const printComponent = computed(() => printSettingsStore.getPrintModeComponent());

function print() {
  window.print();
}
</script>
<template>
  <ArmyPrintSettings>
    <template #nav>
      <template v-for="(item, key) in PRINT_MODES">
        <button
            :class="{
                        'btn btn-sm btn-light': true,
                        'active': print_mode === key
                      }"
            @click="print_mode = key"
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
        <input class="form-check-input" type="checkbox" v-model="include_army_name_on_cards" id="army-name-on-cards">
        <label class="form-check-label" for="army-name-on-cards">
          Include army name on cards
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" v-model="include_mine_drone_card" id="include-mine-drone-card">
        <label class="form-check-label" for="include-mine-drone-card">
          Include Mine Drone Card
        </label>
      </div>

    </template>


    <template #footer>
      <button class="btn btn-sm btn-primary" @click="print">
        {{ print_mode_display_name }}
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
