<script setup>
import {storeToRefs} from 'pinia';
import {useMechStore} from '../../../store/mech-store.js';
import MechUpgradeItem from './MechUpgrades/MechUpgradeItem.vue';
import MechUpgradeAdd from './MechUpgrades/MechUpgradeAdd.vue';

const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});
const {mech} = storeToRefs(useMechStore());

</script>
<template>
  <tr class="table-light">
    <th>
      Upgrades
    </th>
    <th colspan="3">
      Traits
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