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
  <tr>
    <td>
      <label>{{ label }}</label>
    </td>
    <td colspan="3">
      <BInput :model-value="text" disabled/>
    </td>
    <td class="text-end">
      <number v-if="armor" :val="armor"/>
    </td>
    <td class="text-end">
      <number v-if="structure" :val="structure"/>
    </td>
    <td class="text-end">
      <number v-if="usedSlots" :val="usedSlots" invert-color/>
    </td>
    <td class="text-end">
      <number v-if="usedTons" :val="usedTons" invert-color/>
    </td>
    <td></td>
  </tr>
</template>

