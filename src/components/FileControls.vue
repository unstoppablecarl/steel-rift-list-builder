<script setup>

import JSONFileSave from './UI/SaveJsonFile.vue';
import BtnReset from './UI/BtnReset.vue';
import JSONFileLoad from './UI/LoadJsonFile.vue';
</script>
<template>
  <div class="px-4 pt-2">


    <div class="row">
      <div class="col col-form-label fw-bold">
        <h4>
          Steel Rift Army Builder
        </h4>
      </div>
      <div class="col">
        <div class="float-end">
          <JSONFileLoad/>&nbsp;
          <JSONFileSave/>&nbsp;
          <BtnReset/>
        </div>
      </div>
    </div>
  </div>
</template>