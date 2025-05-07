<script setup>
import ArmyRefPrintTeams from './ArmyRefPrint/ArmyRefPrintTeams.vue';
import ArmyRefPrintSecondaryAgendas from './ArmyRefPrint/ArmyRefPrintSecondaryAgendas.vue';
import ArmyRefPrintUpgrades from './ArmyRefPrint/ArmyRefPrintUpgrades.vue';
import ArmyRefPrintWeaponTraits from './ArmyRefPrint/ArmyRefPrintWeaponTraits.vue';
import {useArmyListStore} from '../store/army-list-store.js';

const armyListStore = useArmyListStore();
</script>
<template>
  <div class="page-previews-container" data-bs-theme="light">
    <div class="output-container">
      <div class="page-preview page-letter-width"
           style="background-color:white">
        <div class="page-army-reference">
          <h6>
            <template v-if="armyListStore.name">{{ armyListStore.name }}:</template>
            Army Reference
          </h6>
          <ArmyRefPrintTeams/>
          <ArmyRefPrintSecondaryAgendas/>
          <ArmyRefPrintWeaponTraits/>
          <ArmyRefPrintUpgrades/>
        </div>
      </div>
    </div>
  </div>
</template>
