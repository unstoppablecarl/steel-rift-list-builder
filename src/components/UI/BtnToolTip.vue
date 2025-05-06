<script setup>

const open = defineModel(false)


function mouseOver(){
  open.value = true
}

function mouseLeave(){
  open.value = false
}

</script>
<template>
  <BPopover
      v-model="open"
      :click="true"
      :close-on-hide="true"
      :delay="{show: 0, hide: 0}"
  >
    <template #target>
        <slot name="target" :mouseover="mouseOver" :mouseleave="mouseLeave"/>
    </template>
    <template #default>
      <slot name="content"></slot>
    </template>
  </BPopover>
</template>
