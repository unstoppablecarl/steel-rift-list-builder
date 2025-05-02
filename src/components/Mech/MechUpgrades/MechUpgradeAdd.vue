<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import {computed} from 'vue';

const {mechId} = defineProps({
  mechId: {
    type: Number,
    required: true,
  },
});

const mechStore = useMechStore();
const options = computed(() => {
  return mechStore.getMechAvailableUpgradesInfo(mechId)
});

function addUpgrade(upgradeId, valid) {
  if (!valid) {
    return;
  }
  mechStore.addMechUpgradeAttachment(mechId, upgradeId);
}
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
            :class="{
              'dropdown-row': true,
              'disabled': !item.valid
            }"
            v-for="item in options" :key="item.upgrade_id"
            @click="addUpgrade(item.upgrade_id, item.valid)"
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