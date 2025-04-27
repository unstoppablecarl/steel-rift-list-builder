<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store/mech-store.js';

export default {
  props: {
    mechId: Number,
    mechWeaponAttachmentId: Number,
    index: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    weapon() {
      return this.mechStore.getMechWeaponAttachmentInfo(this.mechId, this.mechWeaponAttachmentId);
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
    <td><span class="btn btn-light btn-grab">:::</span>
    </td>
    <td class="cell-pad-top">
      {{ weapon.display_name }}
    </td>
    <td class="cell-pad-top text-right">
      <number :val="weapon.slots" :positive-signed="false" :invert-color="true"/>
    </td>
    <td class="cell-pad-top text-right">
      <number :val="weapon.cost" :positive-signed="false" :invert-color="true"/>
    </td>
    <td class="cell-pad-top text-right">
      {{ weapon.damage }}
    </td>
    <td class="cell-pad-top text-right">
      {{ weapon.range_formatted }}
    </td>
    <td class="cell-pad-top">
      {{ weapon.trait_display_names }}</td>
    <td>
      <BButton @click="remove()">Delete</BButton>
    </td>
  </tr>
</template>
<style scoped>

</style>
