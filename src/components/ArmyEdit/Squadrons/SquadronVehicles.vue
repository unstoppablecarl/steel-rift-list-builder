<script setup>
import {computed} from 'vue';
import {useSupportAssetUnitsStore} from '../../../store/support-asset-units-store.js';
import {BButton} from 'bootstrap-vue-next';

const {supportAssetAttachmentId} = defineProps({
  supportAssetAttachmentId: {
    type: Number,
    required: true,
  },
});

const unitStore = useSupportAssetUnitsStore();
const unit = computed(() => unitStore.getUnitAttachmentInfo(supportAssetAttachmentId));

</script>
<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th>
        Vehicle
      </th>
      <th class="text-end">
        Move
      </th>
      <th class="text-end">
        Armor
      </th>
      <th class="text-end">
        Structure
      </th>
      <th>
        Weapons
      </th>
      <th>
        Traits
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in unit.vehicles" :key="item.id"
    >
      <td class="text-nowrap">
        {{ item.display_name }}
      </td>
      <td class="text-end">
        {{ item.move }}"
      </td>
      <td class="text-end">
        {{ item.armor }}
      </td>
      <td class="text-end">
        {{ item.structure }}
      </td>
      <td>
        <template v-if="item.weapons">

        {{ item.weapons.map(w => w.display_name).join(', ') }}
        </template>
      </td>
      <td>
        <TraitList :traits="item.traits"/>
      </td>
      <td>
        <BButton
            size="sm"
            class="ms-1"
            variant="danger"
            @click="unitStore.removeVehicle(supportAssetAttachmentId, item.id)"
        >
          <span class="material-symbols-outlined">delete</span>
        </BButton>
      </td>
    </tr>
    </tbody>
  </table>
</template>
