<script setup>

const {valid, validation_message} = defineProps({
  valid: {
    type: Boolean,
  },
  validation_message: {
    type: String,
  },

});
</script>
<template>
  <span
      v-if="!valid"
      v-b-tooltip.hover.top="validation_message"
  >
    <span class="btn btn-sm btn-danger disabled">
      <span class="material-symbols-outlined">
        block
      </span>
    </span>
  </span>
</template>
