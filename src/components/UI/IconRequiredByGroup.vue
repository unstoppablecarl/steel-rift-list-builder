<script setup>
const {required} = defineProps({
  required: {
    type: Boolean
  }
})
</script>
<template>
  <span v-b-tooltip.hover.top="'Upgrade Required By Group'">
    <span
        class="btn btn-sm btn-danger disabled"
        v-if="required"
    >
      <span class="material-symbols-outlined">lock</span>
    </span>
  </span>
</template>