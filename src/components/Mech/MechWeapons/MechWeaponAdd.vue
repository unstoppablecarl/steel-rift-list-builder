<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';
import {HEV_WEAPONS_DROP_DOWN} from '../../../data/mech-weapons.js';

export default {
  props: {
    mechId: Number,
  },
  data() {
    return {
      weaponId: null,
    };
  },
  computed: {
    ...mapStores(useMechStore),
    options() {

      return [{
        text: 'Add Weapon',
        value: null,
      }].concat(HEV_WEAPONS_DROP_DOWN);
    },

  },
  methods: {
    addWeapon(weaponId) {

      this.mechStore.addMechWeapon(this.mechId, weaponId);
    },
  }
};
</script>
<template>
  <BFormSelect :options="options" :model-value="weaponId" @update:model-value="addWeapon($event)"/>
</template>

<style scoped>

</style>
