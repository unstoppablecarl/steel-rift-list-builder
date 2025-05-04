<script setup>

const teamPerk = defineProps({
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
>
  Team Perk
</span>
</template>