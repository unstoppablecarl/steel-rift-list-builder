<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../../store/mech-store.js';
import MechUpgradeItem from './MechUpgrades/MechUpgradeItem.vue';
import MechUpgradeAdd from './MechUpgrades/MechUpgradeAdd.vue';

import draggable from 'vuedraggable';
import MechWeaponItem from './MechWeapons/MechWeaponItem.vue';
import MechWeaponAdd from './MechWeapons/MechWeaponAdd.vue';

export default {
  components: {MechWeaponAdd, MechWeaponItem, draggable, MechUpgradeItem, MechUpgradeAdd},
  props: {
    mechId: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    mech() {
      return this.mechStore.getMech(this.mechId);
    },
  },
};
</script>
<template>
  <tr class="table-light">
    <th>
      Upgrades
    </th>
    <th colspan="3">

    </th>
    <td>
      <MechUpgradeAdd :mech-id="mechId"/>
    </td>
    <th>
    </th>
    <th class="fw-medium">
      Slots
    </th>
    <th class="fw-medium">
      Tons
    </th>
    <th></th>
  </tr>
  <MechUpgradeItem
      :mech-id="mechId"
      v-for="(upgrade, index) in mech.upgrades"
      :mech-upgrade-attachment-id="upgrade.id"
      :index="index"
  />
</template>