<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import {computed} from 'vue';

const mechStore = useMechStore();

const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});

const mech = computed(() => mechStore.getMech(mechId));
</script>
<template>
  <tr class="table-light">
    <th>
      Weapons
    </th>
    <th class="text-end pe-1">
      Damage
    </th>
    <th class="text-end pe-1">
      Range
    </th>
    <th>
      Traits
    </th>
    <td>
      <MechWeaponAdd :mech-id="mechId"/>
    </td>
    <th></th>
    <th class="fw-medium">
      Slots
    </th>
    <th class="fw-medium">
      Tons
    </th>
    <th></th>
  </tr>
  <MechWeaponItem
      :mech-id="mechId"
      v-for="weaponAttachment in mech.weapons"
      :mech-weapon-attachment-id="weaponAttachment.id"
      :index="weaponAttachment.display_order"
  />
</template>
