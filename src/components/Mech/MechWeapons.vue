<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../store.js';
import MechWeaponItem from './MechWeapons/MechWeaponItem.vue';
import MechWeaponAdd from './MechWeapons/MechWeaponAdd.vue';

export default {
  components: {MechWeaponAdd, MechWeaponItem},
  props: {
    mechId: Number,
  },
  data() {
    return {
      visible: true,
    };
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
      <th>Damage</th>
      <th>Range</th>
      <th>Traits</th>
    </tr>
    </thead>
    <tbody>

    <MechWeaponItem
        v-for="weaponId in mech.weapons"
        :mech-id="mechId"
        :weapon-id="weaponId"
    />
    <MechWeaponAdd :mech-id="mechId"/>
    </tbody>
  </table>

</template>

<style scoped>

</style>
