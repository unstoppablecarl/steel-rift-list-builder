<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../store.js';
import MechUpgradeItem from './MechUpgrades/MechUpgradeItem.vue';
import MechUpgradeAdd from './MechUpgrades/MechUpgradeAdd.vue';

export default {
  components: {MechUpgradeItem, MechUpgradeAdd},
  props: {
    mechId: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    mech() {
      return this.mechStore.getMech(this.mechId);
    },
  },
  methods: {},
};
</script>
<template>

  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Slots</th>
      <th>Cost</th>
    </tr>
    </thead>
    <tbody>

    <MechUpgradeItem
        v-for="upgradeId in mech.upgrade_ids"
        :mech-id="mechId"
        :upgrade-id="upgradeId"
    />
    <MechUpgradeAdd :mech-id="mechId"/>
    </tbody>
  </table>

</template>

<style scoped>

</style>
