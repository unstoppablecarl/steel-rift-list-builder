<script setup>
import Number from '../../functional/number.vue';

const {
  label,
  text,
  armor,
  structure,
  usedTons,
  usedSlots,

} = defineProps({
  label: {
    type: String,
  },
  text: {
    type: String,
  },
  usedSlots: {
    default: 0,
  },
  usedTons: {
    default: 0,
  },
  armor: {
    default: 0,
  },
  structure: {
    default: 0,
  },
});

</script>

<template>

  <div class="row my-1">
    <div class="col-sm-2">
      <label>{{ label }}</label>
    </div>
    <div class="col-sm-4">
      <BInput :model-value="text" disabled/>
    </div>
    <div class="col-sm-1 number-cell">
      <number v-if="armor" :val="armor"/>
    </div>
    <div class="col-sm-1 number-cell">
      <number v-if="structure" :val="structure"/>
    </div>
    <div class="col-sm-1 number-cell">
      <number v-if="usedSlots" :val="usedSlots" invert-color/>
    </div>
    <div class="col-sm-1 number-cell">
      <number v-if="usedTons" :val="usedTons" invert-color/>
    </div>
  </div>
</template>

