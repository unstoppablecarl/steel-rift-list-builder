<script setup>
const {a, b} = defineProps({
  a: {
    required: true,
  },
  b: {
    required: true,
  },
});
</script>
<template>
  <span :class="{
        'text-success-emphasis': (a == b),
        }">
          <span :class="{
            'text-danger': (a > b)
          }">
          {{ a }}
          </span>/{{ b }}
  </span>
</template>