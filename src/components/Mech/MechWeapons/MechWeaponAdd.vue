<script>
import {BDropdownDivider} from 'bootstrap-vue-next';
import {useMechStore} from '../../../store/mech-store.js';
import {mapStores} from 'pinia';

export default {
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
  <BDropdown variant="light" text="Add Weapon" class="dropdown-block">
    <BDropdown-header>
      <BRow class="my-1">
        <BCol sm="2">
          Weapon
        </BCol>
        <BCol sm="1" class="text-right">
          Slots
        </BCol>
        <BCol sm="1" class="text-right">
          Tons
        </BCol>
        <BCol sm="1" class="text-right">
          Damage
        </BCol>
        <BCol sm="1" class="text-right">
          Range
        </BCol>
        <BCol sm="4">
          Traits
        </BCol>
        <BCol sm="2">
          Notes
        </BCol>
      </BRow>
    </BDropdown-header>
    <BDropdownDivider/>
    <BDropdown-item
        v-for="item in options" :key="item.weapon_id"
        @click="addWeapon(item.weapon_id)"
    >
      <BRow class="my-1">
        <BCol sm="2">
          {{ item.display_name }}
        </BCol>
        <BCol sm="1" class="text-right">
          <number :val="item.slots" :positive-signed="false" :invert-color="true"/>
        </BCol>
        <BCol sm="1" class="text-right">
          <number :val="item.cost" :positive-signed="false" :invert-color="true"/>
        </BCol>
        <BCol sm="1" class="text-right">
          {{ item.damage }}
        </BCol>
        <BCol sm="1" class="text-right">
          {{ item.range_formatted }}
        </BCol>
        <BCol sm="2">
          {{ item.trait_display_names }}
        </BCol>
        <BCol sm="2">
        </BCol>
      </BRow>
    </BDropdown-item>
  </BDropdown>

</template>
<style scoped>

</style>
