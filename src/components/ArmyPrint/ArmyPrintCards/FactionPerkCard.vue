<script setup>

import {useArmyListStore} from '../../../store/army-list-store.js';
import {usePrintSettingsStore} from '../../../store/print-settings-store.js';
import {computed} from 'vue';
import {FACTION_PERKS} from '../../../data/faction-perks.js';
import {useFactionStore} from '../../../store/faction-store.js';
import {storeToRefs} from 'pinia';

const armyStore = useArmyListStore();
const printStore = usePrintSettingsStore();
const {faction_display_name} = storeToRefs(useFactionStore());

const {perkId} = defineProps({
  perkId: {
    type: String,
    required: true,
  },
});

const info = computed(() => FACTION_PERKS[perkId]);

</script>
<template>
  <div class="game-card">
    <div class="card-content-container">
      <div class="card-name d-flex">
        <div class="flex-grow-1">
          Faction Perk: {{ faction_display_name }}
        </div>
        <div class="flex-shrink-1" v-if="printStore.include_army_name_on_cards">
          {{ armyStore.name || 'Unnamed Army' }}
        </div>
      </div>

      <div class="fw-bold section-heading">{{ info.display_name }}</div>
      <div class="card-description">
        {{ info.description }}
        <span v-if="info.calculated_on_cards">
          This has already been calculated on generated unit cards.
        </span>
      </div>

      <div class="game-card-footer">
        SteelRift.com
      </div>
    </div>
  </div>
</template>