<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import {computed} from 'vue';
import IconTeamGroupPerks from '../../UI/IconTeamGroupPerks.vue';
import IconRequiredByGroup from '../../UI/IconRequiredByGroup.vue';

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

      <IconRequiredByGroup :required="upgrade.required_by_group"/>
    </td>
    <td>
      <IconTeamGroupPerks
          :perks="upgrade.team_perks"
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