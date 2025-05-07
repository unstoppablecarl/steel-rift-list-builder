<script setup>
import {computed, ref} from 'vue';
import ArmyPrintCards from './ArmyPrint/ArmyPrintCards.vue';
import ArmyPrintRef from './ArmyPrint/ArmyPrintRef.vue';

const PRINT_MODE_CARDS = 'PRINT_MODE_CARDS';
const PRINT_MODE_REF = 'PRINT_MODE_REF';

const printView = ref(PRINT_MODE_CARDS);

const components = {
  [[PRINT_MODE_CARDS]]: ArmyPrintCards,
  [[PRINT_MODE_REF]]: ArmyPrintRef,
};

const printComponent = computed(() => {
  return components[printView.value];
});

</script>
<template>

  <div class="print-settings-container m-auto">
    <div class="container">
      <div class="card my-3">
        <div class="card-header">
          <div class="d-flex">

            <div class="flex-grow-1 py-1">
              Print Settings
            </div>
            <div class="flex-shrink-1">
              <div class="btn-group ms-1" role="group" aria-label="Basic example">
                <button :class="{
                  'btn btn-sm btn-light': true,
                  'active': printView === PRINT_MODE_CARDS
                }"
                        @click="printView = PRINT_MODE_CARDS">
                  Cards
                </button>
                <button :class="{
                  'btn btn-sm btn-light': true,
                  'active': printView === PRINT_MODE_REF
                }"
                        @click="printView = PRINT_MODE_REF">
                  Reference
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">

        </div>
      </div>
    </div>
  </div>

  <div class="page-previews-container" data-bs-theme="light">
    <div class="output-container">
      <component :is="printComponent"/>
    </div>
  </div>
</template>
