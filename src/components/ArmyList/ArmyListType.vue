<script setup>
import {BFormInput} from 'bootstrap-vue-next';
import {useArmyListStore} from '../../store/army-list-store.js';
import {storeToRefs} from 'pinia';
import {ref, watch} from 'vue';
import {find} from 'lodash';

const store = useArmyListStore();

const {max_tons} = storeToRefs(store);

const disabled = ref(false);
const armyTypeMaxTons = ref(100);
const options = [
  {
    text: 'Recon',
    value: 100,
  },
  {
    text: 'Strike',
    value: 150,
  },
  {
    text: 'Battle',
    value: 200,
  },
  {
    text: 'Custom',
    value: 'custom',
  },
];

watch(armyTypeMaxTons, () => {

  const isCustom = armyTypeMaxTons.value === 'custom';
  disabled.value = !isCustom;

  if (!isCustom) {
    max_tons.value = armyTypeMaxTons.value;
  }
});

function syncArmyType() {
  const result = find(options, (option) => option.value == max_tons.value);

  if (result) {
    armyTypeMaxTons.value = result.value;
  }
}

syncArmyType();
</script>
<template>
  <div class="form-floating mb-1">
    <BFormInput
        id="list_max_tons"
        v-model="max_tons"
        type="number"
        :disabled="disabled"
        @blur="syncArmyType"
    />
    <label for="list_max_tons">Tonnage</label>
  </div>

  <BFormRadioGroup
      v-model="armyTypeMaxTons"
      :options="options"
      name="radios-btn-default"
      buttons
      button-variant="secondary"
  />


</template>