<script setup>
import {computed} from 'vue';
import {useMechStore} from '../../../store/mech-store.js';
import {TRAIT_LIMITED, TRAIT_SHORT} from '../../../data/weapon-traits.js';
import {find} from 'lodash';
import {MINEFIELD_DRONE_CARRIER_SYSTEM} from '../../../data/mech-upgrades.js';
import {TRAIT_UPGRADE_LIMITED} from '../../../data/upgrade-traits.js';

const mechStore = useMechStore();
const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});
const weapons = computed(() => {
  let results = mechStore.getMechWeaponsAttachmentInfo(mechId);
  let mineDroneUpgrade = find(mechStore.getMechUpgradesAttachmentInfo(mechId), {upgrade_id: MINEFIELD_DRONE_CARRIER_SYSTEM});

  if (mineDroneUpgrade) {
    mineDroneUpgrade.display_name = 'Mine Drones';
    mineDroneUpgrade.traits = mineDroneUpgrade.traits.filter(trait => trait.id !== TRAIT_UPGRADE_LIMITED);
    results.push(mineDroneUpgrade);
  }

  return results;
});

function filterTraits(traits) {
  return traits.filter((trait) => trait.id !== TRAIT_LIMITED && trait.id !== TRAIT_SHORT);
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
        <div v-for="(trait, index) in filterTraits(weapon.traits)">
          {{ trait.display_name }}<span v-if="index !== filterTraits(weapon.traits).length - 1">, </span>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>