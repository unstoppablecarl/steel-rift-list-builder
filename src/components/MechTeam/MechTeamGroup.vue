<script setup>

import Mech from '../Mech.vue';
import draggable from 'vuedraggable';
import {computed, ref} from 'vue';
import {useTeamStore} from '../../store/team-store.js';
import {TEAM_GENERAL} from '../../data/mech-teams.js';
import IconHev from '../UI/IconHEV.vue';
import {useExpandCollapseAll} from '../functional/expand-collapse.js';

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

        <BPopover
            v-model="groupPerksOpen"
            :click="true"
            :close-on-hide="true"
            :delay="{show: 0, hide: 0}"
        >
          <template #target>
            <span
                v-show="!isGeneralGroup && teamGroupPerks.length"
                @mouseover="groupPerksOpen = true"
                @mouseleave="groupPerksOpen = false"
                class="btn btn-sm btn-outline mx-1 btn-light"
            >
              Group Perks
              <span class="material-symbols-outlined">
                star_rate
              </span>
            </span>
          </template>

          <template #default>
            <template v-for="perk in teamGroupPerks">
              <div class="fw-bold">
                {{ perk.display_name }}:
              </div>
              <p class="p-gap">{{ perk.description }}</p>
            </template>
          </template>

        </BPopover>
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