<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import {computed} from 'vue';
import IconTeamGroupPerk from '../../UI/IconTeamGroupPerk.vue';
import IconRequiredByGroup from '../../UI/IconRequiredByGroup.vue';

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
      <span
          class="trait-tooltip"
          v-for="(trait, index) in weapon.traits"
          v-b-tooltip.hover.top="trait.desc"
      >
        {{ trait.display_name }}
        <template v-if="index !== weapon.traits.length - 1">,</template>
      </span>
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
      <IconTeamGroupPerk
          :perk-id="weapon.team_perk_id"
          :perk-desc="weapon.team_perk_description"
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