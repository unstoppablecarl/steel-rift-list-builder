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
  <tr>
    <th>
      Weapons
    </th>
    <th class="text-end pe-1">
      Damage
    </th>
    <th class="text-end pe-1">
      Range
    </th>
    <th>
      Traits
    </th>
    <th></th>
    <th></th>
    <th>
    </th>
    <th>

    </th>
  </tr>


  <MechWeaponItem
      :mech-id="mechId"
      v-for="weaponAttachment in mech.weapons"
      :mech-weapon-attachment-id="weaponAttachment.id"
      :index="weaponAttachment.display_order"
  />

  <MechWeaponAdd :mech-id="mechId"/>


</template>

<style scoped>

</style>
