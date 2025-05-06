<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import {computed, ref} from 'vue';
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

const popOverOpen = ref(false);


function remove() {
  mechStore.removeMechUpgradeAttachment(mechId, mechUpgradeAttachmentId);
}

</script>
<template>
  <tr>
    <td>

      <BPopover
          v-model="popOverOpen"
          :click="true"
          :close-on-hide="true"
          :delay="{show: 0, hide: 0}"
      >
        <template #target>
          <span
              @mouseover="popOverOpen = true"
              @mouseleave="popOverOpen = false"
              class="text-tooltip"
          >
            {{ upgrade.display_name }}
          </span>
        </template>

        <template #default>
          {{ upgrade.description }}
        </template>
      </BPopover>


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