<script setup>
import {useMechStore} from '../../../../store/mech-store.js';
import {computed} from 'vue';
import IconTeamGroupPerks from '../../../UI/IconTeamGroupPerks.vue';
import IconRequiredByGroup from '../../../UI/IconRequiredByGroup.vue';
import TraitList from '../../../UI/TraitList.vue';

const mechStore = useMechStore();

const {
  mechId,
  mechWeaponAttachmentId,
  index,
} = defineProps({
  mechId: Number,
  mechWeaponAttachmentId: Number,
  index: Number,
});

const weapon = computed(() => mechStore.getMechWeaponAttachmentInfo(mechId, mechWeaponAttachmentId));

function remove() {
  mechStore.removeMechWeaponAttachment(mechId, mechWeaponAttachmentId);
}
</script>
<template>
  <tr>
    <td>
      {{ weapon.display_name }}
    </td>
    <td class="text-end">
      {{ weapon.damage }}
    </td>
    <td class="text-end">
      {{ weapon.range_formatted }}
    </td>
    <td>
      <TraitList :traits="weapon.traits"/>
    </td>
    <td>
      <BButton
          v-if="!weapon.required_by_group"
          @click="remove()"
          variant="danger"
          size="sm"
      >
        <span class="material-symbols-outlined">delete</span>
      </BButton>
      <IconRequiredByGroup :required="weapon.required_by_group"/>
    </td>
    <td>
      <IconTeamGroupPerks
          :perks="weapon.team_perks"
      />
    </td>
    <td class=" text-end">
      <number :val="weapon.slots" :invert-color="true"/>
    </td>
    <td class=" text-end">
      <number :val="weapon.cost" :invert-color="true"/>
    </td>
    <td>
      <small v-if="weapon.duplicate_cost">
        +{{ weapon.duplicate_percent }}%
        ({{ weapon.base_cost }} + {{ weapon.duplicate_cost }})
      </small>
    </td>
  </tr>
</template>