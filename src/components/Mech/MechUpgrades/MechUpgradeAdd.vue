<script>
import {BDropdownDivider} from 'bootstrap-vue-next';
import {useMechStore} from '../../../store.js';
import {mapStores} from 'pinia';

export default {
  props: {
    mechId: Number,
  },
  computed: {
    ...mapStores(useMechStore),
    options() {
      return this.mechStore.getMechAvailableUpgradesInfo(this.mechId);
    },
  },
  methods: {
    addUpgrade(upgradeId) {
      this.mechStore.addMechUpgradeAttachment(this.mechId, upgradeId);
    },
  },
};
</script>
<template>
  <BDropdown variant="light" text="Add Upgrade" class="dropdown-block">
    <BDropdown-header>
      <BRow class="my-1">
        <BCol sm="3">
          Upgrade
        </BCol>
        <BCol sm="3" class="text-right">
          Slots
        </BCol>
        <BCol sm="3" class="text-right">
          Tons
        </BCol>
        <BCol sm="3">
          Notes
        </BCol>
      </BRow>
    </BDropdown-header>
    <BDropdownDivider/>
    <BDropdown-item
        v-for="item in options" :key="item.upgrade_id"
        @click="addUpgrade(item.upgrade_id)"
        :disabled="!item.valid"
    >
      <BRow class="my-1">
        <BCol sm="3">
          {{ item.display_name }}
        </BCol>
        <BCol sm="3" class="text-right">
          <number :val="item.slots" :positive-signed="false" :invert-color="true"/>
        </BCol>
        <BCol sm="3" class="text-right">
          <number :val="item.cost" :positive-signed="false" :invert-color="true"/>
        </BCol>
        <BCol sm="3">
          {{ item.notes.join(', ')}}
        </BCol>
      </BRow>
    </BDropdown-item>
  </BDropdown>
</template>
<style scoped>

</style>
