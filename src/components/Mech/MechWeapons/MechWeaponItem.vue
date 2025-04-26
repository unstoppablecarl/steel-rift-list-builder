<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';

export default {
  props: {
    mechId: Number,
    weaponId: String,
    index: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    weapon() {
      return this.mechStore.getWeaponInfo(this.mechId, this.weaponId);
    },
    rangeFormatted(){
      let range = this.weapon.range
      if(range){
        return range + '"'
      }
      return '-'
    },
  },
  methods: {
    remove(){
      this.mechStore.removeMechWeapon(this.mechId, this.index);
    }
  }
};
</script>
<template>
  <tr>
    <td>{{ weapon.displayName }}</td>
    <td>{{ weapon.slots }}</td>
    <td>{{ weapon.cost }}</td>
    <td>{{ weapon.damage }}</td>
    <td>{{ rangeFormatted }}</td>
    <td>{{ weapon.traitDisplayNames }}</td>
    <td>
      <BButton @click="remove()">Delete</BButton>
    </td>
  </tr>

</template>

<style scoped>

</style>
