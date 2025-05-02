<script setup>

import Mech from '../Mech.vue';
import draggable from 'vuedraggable';
import {computed, ref} from 'vue';
import {useTeamStore} from '../../store/team-store.js';
import {TEAM_GENERAL} from '../../data/mech-teams.js';

const teamStore = useTeamStore();
const {teamId, groupId} = defineProps({
  teamId: {
    type: String,
  },
  groupId: {
    type: String,
  },
});

const groupInfo = computed(() => teamStore.getTeamGroupInfo(teamId, groupId));
const mechIds = computed(() => teamStore.getTeamGroupMechIds(teamId, groupId));
const size = computed(() => teamStore.getTeamGroupSizeValidation(teamId, groupId));

const dragging = ref(false);
const collapsed = ref(0);
const expanded = ref(0);

function onSortableChange(event) {
  let moved = event.moved;
  if (!moved) {
    return;
  }

  teamStore.moveGroupMech(teamId, groupId, moved.element, moved.newIndex);
}

const isGeneralGroup = computed(() => teamId === TEAM_GENERAL);

function collapseAll() {
  collapsed.value = Date.now();
}

function expandAll() {
  expanded.value = Date.now();
}
</script>
<template>
  <div class="card text-bg-light">
    <div class="card-header d-flex">
      <div class="flex-grow-1">
        <div class="d-inline-block py-2 pe-4">
          {{ groupInfo.display_name }}
        </div>
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
      </div>
      <div class="text-end">
        <BButton
            variant="primary"
            class="ms-1"
            @click="teamStore.addMechToTeam(teamId, groupId)">
          Add Mech
        </BButton>
        <BButton
            class="ms-1"
            variant="light"
            @click="collapseAll"
        >
          <span class="material-symbols-outlined">keyboard_double_arrow_up</span>

        </BButton>
        <BButton
            class="ms-1"
            variant="light"
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
          group="mechs"
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
              :collapse-signal="collapsed"
              :expand-signal="expanded"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>