<script setup>
import {useFactionStore} from '../../../store/faction-store.js';
import {storeToRefs} from 'pinia';
import {BButton, BModal, BTabs} from 'bootstrap-vue-next';

const model = defineModel();

const store = useFactionStore();
const {clearInvalidPerks} = useFactionStore();

const {
  faction_id,
  factions_info,
  perks_full,
  perk_grid,
  hasPerkInGroupId,
  hasPerk,
} = storeToRefs(store);

const {addPerk, removePerk} = store;

function setFactionId(factionId) {
  faction_id.value = factionId;
  clearInvalidPerks();
}

function onChange(index, index2) {
  setFactionId(factions_info.value[index - 1].id);
}

</script>
<template>
  <BModal
      v-model="model"
      :autofocus="false"
      no-trap
      centered
      title="Faction Perks"
      size="xl"
      cl
  >

    <BTabs
        class="tabs-factions"
        content-class="mt-3"
        @activate-tab="onChange"
    >
      <BTab
          title-link-class="tab-select-faction"
          title="Select Faction: "
          :disabled="true"
      />
      <BTab
          v-for="faction in factions_info"
          :title="faction.display_name"
          :active="faction.id === faction_id"
      >
        <div
            class="mb-4"
            v-for="group in perk_grid"
        >
          <h4 class="fw-bold ps-3">
            {{ group.display_name }}
          </h4>

          <div class="row row-cols-1 row-cols-lg-3">

            <div
                class="col pb-1"
                v-for="perk in group.perks"
            >
              <div class="card h-100">
                <div class="card-header ps-3 fw-bold">
                  {{ perk.display_name }}
                </div>
                <div class="card-body">
                  {{ perk.description }}
                </div>
                <div class="card-footer text-end">
                  <label class="form-label"></label>
                  <div class="btn-group ms-2" role="group" aria-label="Basic example">
                    <BButton
                        class="btn"
                        variant="primary"
                        :disabled="perks_full || hasPerkInGroupId(group.id)"
                        v-if="!hasPerk(perk.id)"
                        @click="addPerk(perk.id)"
                    >
                      Add Perk
                    </BButton>
                    <BButton
                        class="btn"
                        variant="danger"
                        v-if="hasPerk(perk.id)"
                        @click="removePerk(perk.id)"
                    >
                      Remove Perk
                    </BButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </BTab>
    </BTabs>

    <template #cancel>&nbsp;</template>
  </BModal>
</template>