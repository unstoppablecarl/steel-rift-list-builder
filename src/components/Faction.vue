<script setup>
import {useFactionStore} from '../store/faction-store.js';
import {FACTIONS_DROP_DOWN} from '../data/factions.js';
import {storeToRefs} from 'pinia';

let store = useFactionStore();
const {setPerkId} = store;
const {faction_id, perk_groups, perk_ids} = storeToRefs(store);

function setPerk($event, index) {
  setPerkId(index, $event);
}
</script>
<template>
  <div class="card text-bg-light">
    <div class="card-body">
      <BRow>
        <div class="col-sm-2">
          <div class="form-label-top">Faction</div>
          <BFormSelect
              v-model="faction_id"
          >
            <BFormSelectOption
                v-for="faction in FACTIONS_DROP_DOWN"
                :value="faction.id"
            >
              {{ faction.display_name }}
            </BFormSelectOption>
          </BFormSelect>
        </div>
        <div
            class="col"
            v-for="(perk_group, index) in perk_groups"
        >
          <div class="form-label-top">{{ perk_group.display_name }}</div>
          <BFormSelect
              :options="perk_group.perks"
              :model-value="perk_ids[index]"
              value-field="id"
              text-field="display_name"
              @update:model-value="setPerk($event, index)"
          />
        </div>
      </BRow>
    </div>
  </div>
</template>