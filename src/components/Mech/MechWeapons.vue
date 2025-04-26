<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../store.js';
import MechWeaponItem from './MechWeapons/MechWeaponItem.vue';
import MechWeaponAdd from './MechWeapons/MechWeaponAdd.vue';
import draggable from 'vuedraggable';

export default {
  components: {draggable, MechWeaponAdd, MechWeaponItem},
  props: {
    mechId: Number,
  },
  data() {
    return {
      dragging: false,
    };
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

      this.mechStore.moveMechWeaponAttachment(this.mechId, moved.element, moved.newIndex);
    },
  },
};
</script>
<template>

  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Slots</th>
      <th>Cost</th>
      <th>Damage</th>
      <th>Range</th>
      <th>Traits</th>
    </tr>
    </thead>

    <draggable
        :list="mech.weapons"
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
        <MechWeaponItem
            :mech-id="mechId"
            :mech-weapon-attachment-id="element.id"
            :index="index"
        />
      </template>

    </draggable>

  </table>
  <MechWeaponAdd :mech-id="mechId"/>


</template>

<style scoped>

</style>
