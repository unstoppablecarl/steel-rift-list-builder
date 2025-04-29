<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../store/mech-store.js';
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

  <div class="table-responsive">
  <table class="table w-auto">
    <thead class="table-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col" class="text-right pe-1">Slots</th>
      <th scope="col" class="text-right pe-1">Tons</th>
      <th scope="col" class="text-right pe-1">Damage</th>
      <th scope="col" class="text-right pe-1">Range</th>
      <th scope="col">Traits</th>
      <th scope="col"></th>

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
  </div>
  <MechWeaponAdd :mech-id="mechId"/>
</template>

<style scoped>

</style>
