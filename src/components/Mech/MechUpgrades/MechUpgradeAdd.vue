<script>
import {useMechStore} from '../../../store/mech-store.js';
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
  <BDropdown
      :id="'mech-input-upgrades-add-' + mechId"
      class="dropdown-table"
      text="Add"
      size="sm"
      variant="primary"
  >
    <div class="position-relative">
      <table class="table table-hover table-borderless table-striped">
        <thead class="sticky-top top-0 shadow">
        <tr>
          <td>
            Upgrade
          </td>
          <td class="text-end">
            Slots
          </td>
          <td class="text-end">
            Tons
          </td>
          <td>
            Notes
          </td>
        </tr>
        </thead>
        <tbody>
        <tr
            class="dropdown-row"
            v-for="item in options" :key="item.upgrade_id"
            @click="addUpgrade(item.upgrade_id)"
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
          <td>
            {{ item.notes.join(', ') }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </BDropdown>
</template>