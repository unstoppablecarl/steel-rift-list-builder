<script setup>

import Mech from '../Mech.vue';
import draggable from 'vuedraggable';
import {computed, ref} from 'vue';
import {useTeamStore} from '../../store/team-store.js';
import {TEAM_GENERAL} from '../../data/mech-teams.js';
import IconHev from '../UI/IconHEV.vue';
import {useExpandCollapseAll} from '../functional/expand-collapse.js';
import BtnToolTip from '../UI/BtnToolTip.vue';

const teamStore = useTeamStore();
const {teamId, groupId} = defineProps({
  teamId: {
    type: String,
  },
  groupId: {
    type: String,
  },
});

const groupCount = computed(() => teamStore.getTeamGroupMechCount(teamId, groupId));
const groupInfo = computed(() => teamStore.getTeamGroupInfo(teamId, groupId));
const mechIds = computed(() => teamStore.getTeamGroupMechIds(teamId, groupId));
const size = computed(() => teamStore.getTeamGroupSizeValidation(teamId, groupId));
const isGeneralGroup = computed(() => teamId === TEAM_GENERAL);
const teamGroupPerks = computed(() => teamStore.getTeamGroupPerksInfo(teamId, groupId));
const dragging = ref(false);
const groupPerksOpen = ref(false);

function onSortableChange(event) {
  let moved = event.moved;
  if (!moved) {
    return;
  }

  teamStore.moveGroupMech(teamId, groupId, moved.element, moved.newIndex);
}

const {
  expandAll,
  collapseAll,
} = useExpandCollapseAll();

</script>
<template>
  <div class="card text-bg-light">
    <div class="card-header d-flex">
      <div class="flex-grow-1">
        <div class="d-inline-block py-1 ps-3 pe-1 fw-medium">
          {{ groupInfo.display_name }}
        </div>
        <span
            class="btn btn-sm btn-outline mx-1 btn-light"
            v-b-tooltip.hover.top="'Group Size'"
        >
          {{ groupCount }}
          <IconHev/>
        </span>

        <span
            v-if="!isGeneralGroup"
            :class="{
          'btn btn-sm btn-outline mx-1': true,
          'btn-light': size.size_valid,
          'btn-outline-danger': !size.size_valid,
        }"
            v-b-tooltip.hover.top="{title: size.size_validation_message}"
        >
          Size: {{ size.min_count }}-{{ size.max_count }}
        </span>

        <BtnToolTip>
          <template #target="{mouseover, mouseleave}">

            <span
                v-show="!isGeneralGroup && teamGroupPerks.length"
                @mouseover="mouseover"
                @mouseleave="mouseleave"
                class="btn btn-sm btn-outline mx-1 btn-light"
            >
              Group Perks
              <span class="material-symbols-outlined">
                star_rate
              </span>
            </span>
          </template>
          <template #content>
            <template v-for="size in teamGroupPerks">
              <h6
                  v-if="teamGroupPerks.length > 1"
              >{{ size.display_name }} HE-Vs</h6>

              <div class="mb-2 p-gap">
                <template v-for="perk in size.perks">
                  <div class="fw-bold">
                    {{ perk.display_name }}:
                  </div>
                  <p>{{ perk.description }}</p>
                </template>
              </div>
            </template>
          </template>
        </BtnToolTip>
      </div>
      <div class="text-end">
        <BButton
            size="sm"
            variant="primary"
            class="ms-1"
            @click="teamStore.addMechToTeam(teamId, groupId)">
          Add
          <IconHev light/>
        </BButton>
        <BButton
            size="sm"
            variant="tertiary"
            class="ms-1"
            @click="collapseAll"
        >
          <span class="material-symbols-outlined">keyboard_double_arrow_up</span>
        </BButton>
        <BButton
            size="sm"
            variant="tertiary"
            class="ms-1"
            @click="expandAll"
        >
          <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
        </BButton>
      </div>
    </div>
    <div class="card-body">
      <draggable
          :list="mechIds"
          item-key="id"
          :group="'mechs-' + teamId + '-' + groupId"
          handle=".btn-grab"
          ghost-class="ghost"
          @start="dragging = true"
          @end="dragging = false"
          @change="onSortableChange"
          :animation="200"
          :preventOnFilter="false"
      >
        <template #item="{ element }">
          <mech
              :mech-id="element"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>