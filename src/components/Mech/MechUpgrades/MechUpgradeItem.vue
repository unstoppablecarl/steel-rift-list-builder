<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import {computed} from 'vue';
import TeamGroupPerkIcon from '../../UI/TeamGroupPerkIcon.vue';

const mechStore = useMechStore();

const {
  mechId,
  mechUpgradeAttachmentId,
  index,
} = defineProps({
  mechId: Number,
  mechUpgradeAttachmentId: Number,
  index: Number,
});

const upgrade = computed(() => mechStore.getMechUpgradeAttachmentInfo(mechId, mechUpgradeAttachmentId));

function remove() {
  mechStore.removeMechUpgradeAttachment(mechId, mechUpgradeAttachmentId);
}

</script>
<template>
  <tr>
    <td>
      {{ upgrade.display_name }}
    </td>
    <td colspan="3">

    </td>
    <td>
      <BButton
          v-if="!upgrade.required_by_group"
          @click="remove()"
          variant="danger"
          size="sm"
      >
        <span class="material-symbols-outlined">delete</span>
      </BButton>

      <span v-b-tooltip.hover.top="'Upgrade Required By Group'">
        <span
            class="btn btn-sm btn-danger disabled"
            v-if="upgrade.required_by_group"
        >
          <span class="material-symbols-outlined">lock</span>
        </span>
      </span>
    </td>
    <td>
      <TeamGroupPerkIcon
          :perk-id="upgrade.team_perk_id"
          :perk-desc="upgrade.team_perk_description"
      />
    </td>
    <td class="text-end">
      <number :val="upgrade.slots" :invert-color="true"/>
    </td>
    <td class="text-end">
      <number :val="upgrade.cost" :invert-color="true"/>
    </td>
    <td>
    </td>
  </tr>
</template>