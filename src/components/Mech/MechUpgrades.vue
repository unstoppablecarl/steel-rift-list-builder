<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../store/mech-store.js';
import MechUpgradeItem from './MechUpgrades/MechUpgradeItem.vue';
import MechUpgradeAdd from './MechUpgrades/MechUpgradeAdd.vue';

import draggable from 'vuedraggable';
import MechWeaponItem from './MechWeapons/MechWeaponItem.vue';

export default {
  components: {MechWeaponItem, draggable, MechUpgradeItem, MechUpgradeAdd},
  props: {
    mechId: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    mech() {
      return this.mechStore.getMech(this.mechId);
    },
  },
  methods: {
    onSortableChange(event) {
      let moved = event.moved;
      if (!moved) {
        return;
      }

      this.mechStore.moveMechUpgradeAttachment(this.mechId, moved.element, moved.newIndex);
    },
  },
};
</script>
<template>


  <table class="table w-auto">
    <thead class="table-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col" class="text-right pe-1">Slots</th>
      <th scope="col" class="text-right pe-1">Cost</th>
      <th scope="col">Notes</th>
      <th scope="col"></th>
    </tr>
    </thead>

    <draggable
        :list="mech.upgrades"
        draggable=".list-item-sortable"
        tag="tbody"
        item-key="id"
        :group="'mech-' + mechId +'-weapons'"
        handle=".btn-grab"
        ghost-class="ghost"
        @start="dragging = true"
        @end="dragging = false"
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
  </table>
  <MechUpgradeAdd :mech-id="mechId"/>
</template>