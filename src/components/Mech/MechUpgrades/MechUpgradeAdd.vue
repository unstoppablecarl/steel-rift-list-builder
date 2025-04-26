<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';
import {HEV_UPGRADES_DROP_DOWN} from '../../../data/mech-upgrades.js';
import {HEV_ARMOR_UPGRADES_DROP_DOWN} from '../../../data/mech-armor-upgrades.js';

export default {
  props: {
    mechId: Number,
  },
  data() {
    return {
      upgradeId: null,
    };
  },
  computed: {
    ...mapStores(useMechStore),
    options() {
      return [{
        text: 'Add Upgrade',
        value: null,
      }].concat(HEV_ARMOR_UPGRADES_DROP_DOWN);
    },

  },
  methods: {
    addUpgrade(upgradeId) {
      this.mechStore.addMechUpgrade(this.mechId, upgradeId);
    },
  }
};
</script>
<template>
  <BFormSelect :options="options" :model-value="upgradeId" @update:model-value="addUpgrade($event)"/>
</template>

<style scoped>

</style>
