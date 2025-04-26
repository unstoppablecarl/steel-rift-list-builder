<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';
import {WEAPON_TRAITS} from '../../../data/weapon-traits.js';

export default {
  props: {
    mechId: Number,
    weaponId: String,
  },
  data() {
    return {};
  },
  computed: {
    ...mapStores(useMechStore),
    mech() {
      return this.mechStore.getMech(this.mechId);
    },
    weapon() {
      return this.mechStore.getWeaponInfo(this.mechId, this.weaponId);
    },
  },
};
</script>
<template>
  <tr>
    <th>{{ weapon.display_name }}</th>
    <td>{{ weapon.slots }}</td>
    <td>{{ weapon.cost }}</td>
    <td>{{ weapon.damage }}</td>
    <td>{{ weapon.range }}</td>
    <td>{{ weapon.trait_display_names }}</td>
  </tr>

</template>

<style scoped>

</style>
