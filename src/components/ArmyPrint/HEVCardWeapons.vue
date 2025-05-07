<script setup>
import {computed} from 'vue';
import {useMechStore} from '../../store/mech-store.js';

const mechStore = useMechStore();
const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});
const weapons = computed(() => mechStore.getMechWeaponsAttachmentInfo(mechId));
</script>
<template>
  <table class="table-card table-weapons">
    <thead>
    <tr>
      <th class="text-start ps-2">Weapon</th>
      <th>Dmg</th>
      <th>Rng</th>
      <th class="pe-2">Traits</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="weapon in weapons">
      <td>
        <div class="weapon_display_name">
          {{ weapon.display_name }}
        </div>
      </td>
      <td>{{ weapon.damage }}</td>
      <td>{{ weapon.range || '-' }}</td>
      <td>
        <template v-for="trait in weapon.traits">
          {{ trait.display_name }}
        </template>
      </td>
    </tr>
    </tbody>
  </table>
</template>