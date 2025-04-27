<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';

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
  <tr class="list-item-sortable">
    <td>
      <span class="btn btn-light btn-grab">:::</span>
    </td>
    <td>{{ upgrade.display_name }}</td>
    <td class="cell-pad-top text-right">
      <number :val="upgrade.slots" :positive-signed="false" :invert-color="true"/>

    </td>
    <td class="cell-pad-top text-right">
      <number :val="upgrade.cost" :positive-signed="false" :invert-color="true"/>
    </td>
    <td></td>
    <td>
      <BButton @click="remove()">Delete</BButton>
    </td>
  </tr>

</template>

<style scoped>

</style>
