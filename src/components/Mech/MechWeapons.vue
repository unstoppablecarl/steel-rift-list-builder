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
};
</script>
<template>
  <tr>
    <th>
      Weapon
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
    <td>
      <MechWeaponAdd :mech-id="mechId"/>
    </td>
    <th></th>
    <th class="fw-medium">
      Slots
    </th>
    <th class="fw-medium">
      Tons
    </th>
  </tr>
  <MechWeaponItem
      :mech-id="mechId"
      v-for="weaponAttachment in mech.weapons"
      :mech-weapon-attachment-id="weaponAttachment.id"
      :index="weaponAttachment.display_order"
  />


</template>

<style scoped>

</style>
