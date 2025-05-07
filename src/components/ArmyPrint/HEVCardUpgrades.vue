<script setup>

import {computed} from 'vue';
import {useMechStore} from '../../store/mech-store.js';

const mechStore = useMechStore();

const {mechId} = defineProps({
  mechId: {
    type: String,
  },
});
const upgrades = computed(() => mechStore.getMechUpgradesAttachmentInfo(mechId));

</script>
<template>

  <div class="heading px-2 py-1">
    Upgrades
  </div>
  <div class="py-1 px-2 upgrades">
    <template v-for="(upgrade, index) in upgrades">
      {{ upgrade.display_name }}<span v-if="index !== upgrades.length -1">, </span>
    </template>
  </div>
</template>