<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';

export default {
  props: {
    mechId: Number,
    mechUpgradeAttachmentId: String,
  },
  computed: {
    ...mapStores(useMechStore),
    upgrade() {

      return this.mechStore.getMechUpgradeAttachmentInfo(this.mechId, this.mechUpgradeAttachmentId);
    },
  },
};
</script>
<template>
  <tr class="list-item-sortable">
    <td><span class="btn btn-light btn-grab">:::</span> {{ upgrade.display_name }}</td>
    <td class="text-right">
      <number :val="upgrade.slots" :positive-signed="false" :invert-color="true"/>

    </td>
    <td class="text-right">
      <number :val="upgrade.cost" :positive-signed="false" :invert-color="true"/>

    </td>
    <td></td>
  </tr>

</template>

<style scoped>

</style>
