<script setup>

import {useMechStore} from '../../../store/mech-store.js';
import {computed} from 'vue';
import HEVCardWeapons from './HEVCardWeapons.vue';
import HEVCardUpgrades from './HEVCardUpgrades.vue';
import HEVCardStats from './HEVCardStats.vue';
import HEVCardHp from './HEVCardHp.vue';
import {useArmyListStore} from '../../../store/army-list-store.js';
import {usePrintSettingsStore} from '../../../store/print-settings-store.js';
const armyStore = useArmyListStore()
const mechStore = useMechStore();
const printStore = usePrintSettingsStore()

const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});

const info = computed(() => {
  return mechStore.getMechInfo(mechId);
});

</script>
<template>
  <div class="game-card">
    <div class="card-content-container">


      <div class="card-name d-flex">
        <div class="flex-grow-1">

        {{ info.display_name }}
        </div>
        <div class="flex-shrink-1" v-if="printStore.include_army_name_on_cards">
          {{armyStore.name || 'Unnamed Army'}}
        </div>
      </div>

      <HEVCardStats :mech-id="mechId"/>
      <HEVCardHp :mech-id="mechId"/>
      <HEVCardWeapons :mech-id="mechId"/>
      <HEVCardUpgrades :mech-id="mechId"/>

    </div>
  </div>
</template>