<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';

export default {
  props: {
    mechId: Number,
    mechWeaponAttachmentId: Number,
    index: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    weapon() {
      const weaponAttachment = this.mechStore.getMechWeaponAttachment(this.mechId, this.mechWeaponAttachmentId);

      return this.mechStore.getWeaponInfo(this.mechId, weaponAttachment.weapon_id);
    },
  },
  methods: {
    remove() {
      this.mechStore.removeMechWeaponAttachment(this.mechId, this.mechWeaponAttachmentId);
    },
  },
};
</script>
<template>
  <tr class="list-item-sortable">
    <td><span class="btn btn-light btn-grab">:::</span> {{ weapon.displayName }}</td>
    <td>{{ weapon.slots }}</td>
    <td>{{ weapon.cost }}</td>
    <td>{{ weapon.damage }}</td>
    <td>{{ weapon.range_formatted }}</td>
    <td>{{ weapon.traitDisplayNames }}</td>
    <td>
      <BButton @click="remove()">Delete</BButton>
    </td>
  </tr>
</template>
<style scoped>

</style>
