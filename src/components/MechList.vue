<script>

import Mech from './Mech.vue';
import {mapStores} from 'pinia';
import {useMechStore} from '../store.js';
import draggable from 'vuedraggable';

export default {
  name: 'mech-list',
  components: {Mech, draggable},
  data() {
    return {
      drag: false,

    };
  },
  computed: {
    ...mapStores(useMechStore),
    mechs() {
      return this.mechStore.mechs;
    },
    name() {
      return this.mechStore.name;
    },
  },
  methods: {
    addMech() {
      this.mechStore.addMech();
    },
    onSortableChange(event) {
      let moved = event.moved;
      if (!moved) {
        return;
      }
      console.log(moved.element, moved.newIndex)

      this.mechStore.moveMech(moved.element, moved.newIndex);

    },
  },
};

</script>

<template>
  <div>
    <draggable
        :list="mechs"
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
            :mech-id="element.id"
        />
      </template>

    </draggable>


    <BButton @click="addMech">Add Mech</BButton>
  </div>
</template>

<style scoped>

</style>
