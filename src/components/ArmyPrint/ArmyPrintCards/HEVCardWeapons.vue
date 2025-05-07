<script setup>
import {computed, unref} from 'vue';
import {useMechStore} from '../../../store/mech-store.js';
import {TRAIT_LIMITED} from '../../../data/weapon-traits.js';

const mechStore = useMechStore();
const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});
const weapons = computed(() => mechStore.getMechWeaponsAttachmentInfo(mechId));

function filterLimited(traits) {
  return traits.filter((trait) => trait.id !== TRAIT_LIMITED);
}

</script>
<template>
  <table class="table-weapons">
    <thead>
    <tr>
      <th>Weapon</th>
      <th>Dmg</th>
      <th>Rng</th>
      <th class="text-start">Traits</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="weapon in weapons">
      <td>
        <div>
          {{ weapon.display_name }}
          <div class="weapon-uses" v-if="weapon.max_uses">
            <div class="weapon-use" v-for="i in Array(weapon.max_uses)">&nbsp;</div>
          </div>
        </div>
      </td>
      <td>{{ weapon.damage }}</td>
      <td>{{ weapon.range || '-' }}</td>
      <td class="text-start">
        <div v-for="(trait, index) in filterLimited(weapon.traits)">
          {{ trait.display_name }}<span v-if="index !== filterLimited(weapon.traits).length - 1">, </span>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>