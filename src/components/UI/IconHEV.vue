<script setup>
import svgIconLight from '/HEV-icon-light.svg';
import svgIconDark from '/HEV-icon-dark.svg';

const {light} = defineProps({
  light: {
    type: Boolean,
    default: false,
  },
});

</script>
<template>
  <img :src="light ? svgIconLight: svgIconDark"/>
</template>