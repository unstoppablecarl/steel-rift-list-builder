<script>
import {HEV_SIZES_DROP_DOWN} from '../../../data/mech-sizes.js';
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
  <tr>
    <td>
      <label class="col-form-label" :for="'mech-input-size-' + mechId">Size</label>
    </td>
    <td>
      <BDropdown
          :id="'mech-input-size-' + mechId"
          class="dropdown-table"
          :text="info.size.display_name"
          variant="light"
      >
        <table class="table table-hover table-borderless">
          <thead>
          <tr>
            <td>
              Type
            </td>
            <td class="text-end">
              Armor
            </td>
            <td class="text-end">
              Structure
            </td>
            <td class="text-end">
              Slots
            </td>
            <td class="text-end">
              Tons
            </td>
          </tr>
          </thead>
          <tbody>
          <tr
              :class="{
                'dropdown-row': true,
                'table-primary':   (item.value == mech.size_id)
              }"
              v-for="item in options" :key="item.value"
              @click="selectOption(item.value)"
          >
            <td>
              {{ item.text }}
            </td>
            <td class="text-end">
              {{ item.armor }}
            </td>
            <td class="text-end">
              {{ item.structure }}
            </td>
            <td class="text-end">
              {{ item.max_slots }}
            </td>
            <td class="text-end">
              {{ item.max_tons }}
            </td>
          </tr>
          </tbody>
        </table>
      </BDropdown>
    </td>
    <td class="col-form-label text-end">
      {{ info.size.armor }}
    </td>
    <td class="col-form-label text-end">
      {{ info.size.structure }}
    </td>
    <td class="col-form-label text-end">

    </td>
    <td class="col-form-label text-end">
      <number :val="info.size.armor + info.size.structure" :invert-color="true"/>
    </td>
  </tr>
</template>
