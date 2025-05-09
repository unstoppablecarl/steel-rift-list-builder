<script setup>

const {message, size} = defineProps({
  message: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
});
</script>
<template>
  <BPopover
      :close-on-hide="true"
  >
    <template #target>
      <button
          v-show="!!message"
          :class="`btn btn-${size} btn-danger`">
        <span class="material-symbols-outlined">
          warning
        </span>
      </button>
    </template>

    <template #title>
      Validation error
      <span class="material-symbols-outlined">
        warning
      </span>
    </template>

    {{ message }}
  </BPopover>
</template>