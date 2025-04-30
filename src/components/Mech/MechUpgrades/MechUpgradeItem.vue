<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store/mech-store.js';

export default {
  props: {
    mechId: Number,
    mechUpgradeAttachmentId: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    upgrade() {

      return this.mechStore.getMechUpgradeAttachmentInfo(this.mechId, this.mechUpgradeAttachmentId);
    },
  },
  methods: {
    remove() {
      this.mechStore.removeMechUpgradeAttachment(this.mechId, this.mechUpgradeAttachmentId);
    },
  },
};
</script>
<template>
  <tr>
    <td>
      {{ upgrade.display_name }}
    </td>
    <td colspan="3">

    </td>
    <td>
      <BButton @click="remove()" variant="danger" size="sm">X</BButton>
    </td>
    <td></td>

    <td class="text-end">
      <number :val="upgrade.slots" :invert-color="true"/>
    </td>
    <td class="text-end">
      <number :val="upgrade.cost" :invert-color="true"/>
    </td>
  </tr>

</template>