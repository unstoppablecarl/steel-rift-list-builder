<script setup>

import Mech from '../Mech.vue';
import draggable from 'vuedraggable';
import {computed, ref} from 'vue';
import {useTeamStore} from '../../store/team-store.js';

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

const dragging = ref(false);

const collapsed = ref('');
const expanded = ref('');

function onSortableChange(event) {
  let moved = event.moved;
  if (!moved) {
    return;
  }

  teamStore.moveGroupMech(teamId, groupId, moved.element, moved.newIndex);
}

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
      <div class="flex-grow-1 py-1">
        <strong>
          {{ groupInfo.display_name }}
        </strong>
        <span :class="{
          'btn btn-sm btn-fake mx-1': true,
          'btn-light': groupInfo.size_valid
        }">
          Size: {{ groupInfo.min_count }}-{{ groupInfo.max_count }}
        </span>
      </div>
      <div class="text-end">
        <BButton
            class="ms-1"
            variant="secondary"
            size="sm"
            @click="collapseAll"
        >
          Collapse All
        </BButton>
        <BButton
            class="ms-1"
            variant="secondary"
            size="sm"
            @click="expandAll"
        >
          Expand All
        </BButton>
        <BButton
            variant="primary"
            class="ms-1"
            size="sm"
            @click="teamStore.addMechToTeam(teamId, groupId)">
          Add Mech
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