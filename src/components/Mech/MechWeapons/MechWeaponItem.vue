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
  <tr>
    <td>
      {{ weapon.display_name }}
    </td>
    <td class="text-end">
      {{ weapon.damage }}
    </td>
    <td class="text-end">
      {{ weapon.range_formatted }}
    </td>
    <td>
      {{ weapon.trait_display_names }}
    </td>
    <td>
      <BButton @click="remove()" variant="danger" size="sm">X</BButton>
    </td>
    <td></td>
    <td class=" text-end">
      <number :val="weapon.slots" :invert-color="true"/>
    </td>
    <td class=" text-end">
      <number :val="weapon.cost" :invert-color="true"/>
    </td>
  </tr>
</template>