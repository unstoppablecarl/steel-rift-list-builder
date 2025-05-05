<script setup>

const {
  perkId,
  perkDesc,
} = defineProps({
  perkId: {
    type: String,
  },
  perkDesc: {
    type: String,
  },
});
</script>
<template>
  <span
      v-if="perkId"
      class="btn btn-sm btn-light"
      v-b-tooltip.hover.top="perkDesc"
  ><span class="material-symbols-outlined">
    star_rate
  </span>
  </span>
</template>