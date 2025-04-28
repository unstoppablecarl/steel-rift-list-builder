<script>
import {HEV_SIZES_DROP_DOWN} from '../../../data/mech-sizes.js';
import {BDropdownDivider} from 'bootstrap-vue-next';
import {mapStores} from 'pinia';
import {useMechStore} from '../../../store/mech-store.js';
import Number from '../../functional/number.vue';

export default {
  components: {Number},
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
    info() {
      return this.mechStore.getMechInfo(this.mechId);
    },
  },
  methods: {
    selectOption(size_id) {
      this.mechStore.updateMech(this.mechId, {size_id});
    },
  },
};

</script>

<template>
  <div class="row my-1">
    <label class="col-sm-2 col-form-label" :for="'mech-input-size-' + mechId">Size</label>
    <BCol sm="4">
      <BDropdown
          :id="'mech-input-size-' + mechId"
          class="dropdown-block"
          :text="info.size.display_name"
          variant="light"
      >
        <BDropdown-header class="w-100">
          <BRow class="my-1">
            <BCol sm="4">
              Type
            </BCol>
            <BCol sm="2" class="text-right">
              Armor
            </BCol>
            <BCol sm="2" class="text-right">
              Structure
            </BCol>
            <BCol sm="2" class="text-right">
              Slots
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
            :active="item.value == mech.size_id"
        >
          <BRow class="my-1">
            <BCol sm="4">
              {{ item.text }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.armor }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.structure }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.max_slots }}
            </BCol>
            <BCol sm="2" class="text-right">
              {{ item.max_tons }}
            </BCol>
          </BRow>
        </BDropdown-item>
      </BDropdown>
    </BCol>
    <div class="col-sm-1 col-form-label text-right">
      {{ info.size.armor }}
    </div>
    <div class="col-sm-1 col-form-label text-right">
      {{ info.size.structure }}
    </div>
    <div class="col-sm-1 col-form-label text-right">

    </div>
    <div class="col-sm-1 col-form-label text-right">
      <number :val="info.size.armor + info.size.structure" :invert-color="true"/>
    </div>
  </div>
</template>
