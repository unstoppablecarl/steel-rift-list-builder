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
      <div class="row my-1">
        <div class="col-sm-2">
          Weapon
        </div>
        <div class="col-sm-1 text-end">
          Slots
        </div>
        <div class="col-sm-1 text-end">
          Tons
        </div>
        <div class="col-sm-1 text-end">
          Damage
        </div>
        <div class="col-sm-1 text-end">
          Range
        </div>
        <div class="col-sm-4">
          Traits
        </div>
        <div class="col-sm-2">
          Notes
        </div>
      </div>
    </BDropdown-header>
    <BDropdownDivider/>
    <BDropdown-item
        v-for="item in options" :key="item.weapon_id"
        @click="addWeapon(item.weapon_id)"
    >
      <div class="row my-1">
        <div class="col-sm-2">
          {{ item.display_name }}
        </div>
        <div class="col-sm-1 text-end">
          <number :val="item.slots" :positive-signed="false" :invert-color="true"/>
        </div>
        <div class="col-sm-1 text-end">
          <number :val="item.cost" :positive-signed="false" :invert-color="true"/>
        </div>
        <div class="col-sm-1 text-end">
          {{ item.damage }}
        </div>
        <div class="col-sm-1 text-end">
          {{ item.range_formatted }}
        </div>
        <div class="col-sm-2">
          {{ item.trait_display_names }}
        </div>
        <div class="col-sm-2">
        </div>
      </div>
    </BDropdown-item>
  </BDropdown>
</template>
