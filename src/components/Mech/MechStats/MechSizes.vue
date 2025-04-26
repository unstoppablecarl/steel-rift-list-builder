<script>
import {HEV_SIZES, HEV_SIZES_DROP_DOWN} from '../../../data/mech-sizes.js';
import {BDropdownDivider} from 'bootstrap-vue-next';
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store.js';

export default {
  props: {
    mechId: Number,
  },

  data() {
    return {
      options: HEV_SIZES_DROP_DOWN,
    };
  },
  computed: {
    ...mapStores(useMechStore),
    mech() {
      return this.mechStore.getMech(this.mechId);
    },
    size() {
      return HEV_SIZES[this.mech.sizeId];
    },
  },
  methods: {
    selectOption(sizeId) {
      this.mechStore.updateMech(this.mechId, {sizeId});
    },
  },
};

</script>

<template>
  <BRow class="my-1">
    <BCol sm="2">
      <label>Size</label>
    </BCol>
    <BCol sm="4">
      <BDropdown variant="light" :text="size.display_name" class="dropdown-block">
        <BDropdown-header class="w-100">
          <BRow class="my-1">
            <BCol sm="4">
              Type
            </BCol>
            <BCol sm="2" class="text-right">
              Slots
            </BCol>
            <BCol sm="2" class="text-right">
              Armor
            </BCol>
            <BCol sm="2" class="text-right">
              Structure
            </BCol>
            <BCol sm="2" class="text-right">
              Tons
            </BCol>
          </BRow>
        </BDropdown-header>
        <BDropdownDivider/>
        <BDropdown-item
            v-for="item in options" :key="item.value"
            @click="selectOption(item.value)"
            :active="item.value == mech.sizeId"
        >
          <BRow class="my-1">
            <BCol sm="4">
              {{ item.text }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.slots }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.armor }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.structure }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.max_tons }}
            </BCol>
          </BRow>
        </BDropdown-item>
      </BDropdown>
    </BCol>
    <BCol sm="1" class="number-cell">
      {{ size.armor }}
    </BCol>
    <BCol sm="1" class="number-cell">
      {{ size.structure }}
    </BCol>
    <BCol sm="1" class="number-cell">
      {{ size.max_slots }}
    </BCol>
    <BCol sm="1" class="number-cell">
      {{ size.max_tons }}
    </BCol>
  </BRow>
</template>
<style scoped>

</style>
