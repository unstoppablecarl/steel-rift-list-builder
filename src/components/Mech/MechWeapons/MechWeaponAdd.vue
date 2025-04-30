<script>
import {useMechStore} from '../../../store/mech-store.js';
import {mapStores} from 'pinia';
import NumberVal from '../../functional/number.vue';

export default {
  components: {NumberVal},
  props: {
    mechId: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    options() {
      return this.mechStore.getMechAvailableWeaponsInfo(this.mechId);
    },
  },
  methods: {
    addWeapon(weaponId) {
      this.mechStore.addMechWeaponAttachment(this.mechId, weaponId);
    },
  },
};
</script>

<template>
  <BDropdown
      :id="'mech-input-weapons-add-' + mechId"
      class="dropdown-table"
      text="Add"
  >
    <div class="position-relative">
      <table class="table table-hover table-borderless table-striped">
        <thead class="sticky-top top-0 shadow">
        <tr>
          <td>
            Weapon
          </td>
          <td class="text-end">
            Slots
          </td>
          <td class="text-end">
            Tons
          </td>
          <td class="text-end">
            Damage
          </td>
          <td class="text-end">
            Range
          </td>
          <td>
            Traits
          </td>
          <td>
            Notes
          </td>
        </tr>
        </thead>
        <tbody>
        <tr
            class="dropdown-row"
            v-for="item in options" :key="item.value"
            @click="selectOption(item.value)"
        >
          <td>
            {{ item.display_name }}
          </td>
          <td class="text-end">
            <number :val="item.slots" :positive-signed="false" :invert-color="true"/>
          </td>
          <td class="text-end">
            <number :val="item.cost" :positive-signed="false" :invert-color="true"/>
          </td>
          <td class="text-end">
            {{ item.damage }}
          </td>
          <td class="text-end">
            {{ item.range_formatted }}
          </td>
          <td>
            {{ item.trait_display_names }}
          </td>
          <td>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </BDropdown>
</template>
