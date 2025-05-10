<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import MechUpgradeItem from './MechUpgrades/MechUpgradeItem.vue';
import MechUpgradeAdd from './MechUpgrades/MechUpgradeAdd.vue';
import {computed} from 'vue';
import draggable from 'vuedraggable';

const mechStore = useMechStore();

const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});

const mech = computed(() => mechStore.getMech(mechId));
function onSortableChange(event) {
  let moved = event.moved;
  if (!moved) {
    return;
  }

  mechStore.moveMechUpgradeAttachment(mechId, moved.element, moved.newIndex);
}

</script>
<template>
  <tbody>
  <tr class="table-light">
    <th>
      Upgrades
    </th>
    <th colspan="3">
      Traits
    </th>
    <td>
      <MechUpgradeAdd :mech-id="mechId"/>
    </td>
    <th>
    </th>
    <th class="fw-medium">
      Slots
    </th>
    <th class="fw-medium">
      Tons
    </th>
    <th></th>
  </tr>
  </tbody>

  <draggable
      :list="mech.upgrades"
      draggable=".list-item-sortable"
      tag="tbody"
      item-key="id"
      :group="'mech-' + mechId +'-upgrades'"
      handle=".btn-grab"
      ghost-class="ghost"
      @change="onSortableChange"
      :animation="200"
      :preventOnFilter="false"
  >
    <template #item="{ element, index }">
      <MechUpgradeItem
          :mech-id="mechId"
          :mech-upgrade-attachment-id="element.id"
          :index="index"
      />
    </template>
  </draggable>
</template>