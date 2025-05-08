<script setup>
import {useFactionStore} from '../../../store/faction-store.js';
import {storeToRefs} from 'pinia';
import {FACTIONS_DROP_DOWN, NO_FACTION} from '../../../data/factions.js';
import {computed} from 'vue';
import {useSupportAssetStore} from '../../../store/support-asset-store.js';
import {DWC_OUTRAGEOUS_SUPPORT_BUDGET} from '../../../data/faction-perks.js';

const store = useFactionStore();
const supportAssetStore = useSupportAssetStore();
const {clearInvalidPerks} = useFactionStore();
const {
  perk_1_id,
  perk_2_id,
  faction_id,
  perk_1_drop_down,
  perk_2_drop_down,
} = storeToRefs(store);

const {
  support_assets,
  outrageous_budget_perk_support_asset_id,
} = storeToRefs(supportAssetStore);

const factionsDropDown = FACTIONS_DROP_DOWN;

const disabled = computed(() => faction_id.value === NO_FACTION);
const hasOutrageousSupportBudget = computed(() => store.hasPerk(DWC_OUTRAGEOUS_SUPPORT_BUDGET));

function setFactionId(factionId) {
  faction_id.value = factionId;
  clearInvalidPerks();
}

</script>
<template>
  <div class="form-floating mb-1">
    <BFormSelect
        id="faction_id"
        @update:model-value="setFactionId"
        :model-value="faction_id"
        :options="factionsDropDown"
        value-field="id"
        text-field="display_name"
    />
    <label for="faction_id">Faction</label>
  </div>
  <div class="form-floating mb-1">
    <BFormSelect
        id="perk_1"
        :options="perk_1_drop_down"
        options-field="perks"
        v-model="perk_1_id"
        value-field="id"
        text-field="display_name"
        :disabled="disabled"
    />
    <label for="perk_1">Perk 1</label>
  </div>
  <div class="form-floating mb-1">
    <BFormSelect
        id="perk_2"
        :options="perk_2_drop_down"
        options-field="perks"
        v-model="perk_2_id"
        value-field="id"
        text-field="display_name"
        :disabled="disabled"
    />
    <label for="perk_2">Perk 2</label>
  </div>
  <div
      v-if="hasOutrageousSupportBudget"
      class="form-floating mb-1"
  >
    <BFormSelect
        :options="support_assets"
        text-field="display_name"
        value-field="id"
        v-model="outrageous_budget_perk_support_asset_id"
    />
    <label for="perk_2">Apply Outrageous Support Budget</label>
  </div>

</template>