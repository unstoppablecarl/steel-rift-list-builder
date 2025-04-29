<script setup>
import {useFactionStore} from '../store/faction-store.js';
import {storeToRefs} from 'pinia';
import {FACTIONS_DROP_DOWN} from '../data/factions.js';
import {watch} from 'vue';

const store = useFactionStore();
const {clearInvalidPerks} = useFactionStore();
const {
  perk_1_id,
  perk_2_id,
  faction_id,
  perks_drop_down,
} = storeToRefs(store);

const factionsDropDown = FACTIONS_DROP_DOWN;

function setFactionId(factionId){
  faction_id.value = factionId
  clearInvalidPerks();
}

</script>
<template>
  <div class="card text-bg-light">
    <div class="card-body">
      <BRow>
        <div class="col-sm-2">
          <div class="form-label-top">Faction</div>
          <BFormSelect
              @update:model-value="setFactionId"
              :model-value="faction_id"
              :options="factionsDropDown"
              value-field="id"
              text-field="display_name"
          >
          </BFormSelect>
        </div>

        <div class="col">
          <div class="form-label-top">Perk 1</div>
          <BFormSelect
              :options="perks_drop_down"
              options-field="perks"
              v-model="perk_1_id"
              value-field="id"
              text-field="display_name"
          />
        </div>
        <div class="col">
          <div class="form-label-top">Perk 2</div>
          <BFormSelect
              :options="perks_drop_down"
              options-field="perks"
              v-model="perk_2_id"
              value-field="id"
              text-field="display_name"
          />
        </div>
      </BRow>
    </div>
  </div>
</template>