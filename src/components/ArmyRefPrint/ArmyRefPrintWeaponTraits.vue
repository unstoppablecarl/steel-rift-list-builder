<script setup>
import {computed} from 'vue';
import {useMechStore} from '../../store/mech-store.js';
import {traitDisplayName, WEAPON_TRAITS} from '../../data/weapon-traits.js';

const mechStore = useMechStore();

const weaponTraits = computed(() => {
  return mechStore.getUsedWeaponTraitIds.map(traitId => {
    return {
      display_name: traitDisplayName({id: traitId, number: 'X'}),
      description: WEAPON_TRAITS[traitId].description,
    };
  });
});
</script>
<template>
  <div class="">
    <div class="divider"></div>
    <div class="ref-heading">Weapon Traits</div>
    <div v-for="trait in weaponTraits">

      <p class="p-gap">
        <span class="fw-bold">
          {{ trait.display_name }}:
        </span>
        {{ trait.description }}</p>
    </div>

  </div>
</template>

