<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';

export default {
  props: {
    mechId: Number,
    upgradeId: String,
  },
  computed: {
    ...mapStores(useMechStore),
    upgrade() {
      return this.mechStore.getUpgradeInfo(this.mechId, this.upgradeId);
    },
  },
};
</script>
<template>
  <tr>
    <td>{{ upgrade.displayName }}</td>
    <td>{{ upgrade.slots }}</td>
    <td>{{ upgrade.cost }}</td>
  </tr>

</template>

<style scoped>

</style>
