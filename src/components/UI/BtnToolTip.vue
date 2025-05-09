<script setup>

const open = defineModel(false);

const {enabled} = defineProps({
  enabled: {
    type: Boolean,
    default: true,
  },
});

function mouseOver() {
  if (!enabled) {
    return;
  }
  open.value = true;
}

function mouseLeave() {
  if (!enabled) {
    return;
  }
  open.value = false;
}

</script>
<template>
  <BPopover
      :hover="true"
      :close-on-hide="true"
      :delay="{show: 0, hide: 0}"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #target>
      <slot name="target" :mouseover="mouseOver" :mouseleave="mouseLeave"/>
    </template>
    <template #default>
      <slot name="content"></slot>
    </template>
  </BPopover>
</template>
