<script setup>

import {computed} from 'vue';
import {useMechStore} from '../../../store/mech-store.js';

const mechStore = useMechStore();

const {mechId} = defineProps({
  mechId: {
    type: Number,
  },
});
const upgrades = computed(() => mechStore.getMechUpgradesAttachmentInfo(mechId));

</script>
<template>
  <div v-if="upgrades.length">

    <div class="upgrades-heading">
      Upgrades
    </div>
    <div class="upgrades">
      <template v-for="(upgrade, index) in upgrades">
        {{ upgrade.display_name }}<span v-if="index !== upgrades.length -1">, </span>
      </template>
    </div>
  </div>
</template>