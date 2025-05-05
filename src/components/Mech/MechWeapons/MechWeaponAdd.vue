<script setup>
import {useMechStore} from '../../../store/mech-store.js';
import {computed} from 'vue';
import IconTeamGroupPerks from '../../UI/IconTeamGroupPerks.vue';

const {mechId} = defineProps({
  mechId: {
    type: Number,
    required: true,
  },
});

const mechStore = useMechStore();
const options = computed(() => mechStore.getMechAvailableWeaponsInfo(mechId));

function addWeapon(upgradeId) {
  mechStore.addMechWeaponAttachment(mechId, upgradeId);
}

</script>

<template>
  <BDropdown
      :id="'mech-input-weapons-add-' + mechId"
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
            Weapon
          </td>
          <td class="text-end">
            Slots
          </td>
          <td class="text-end">
            Tons
          </td>
          <td class="text-end">
            Damage
          </td>
          <td class="text-end">
            Range
          </td>
          <td>
            Traits
          </td>
          <td>
            Notes
          </td>
        </tr>
        </thead>
        <tbody>
        <tr
            class="dropdown-row"
            v-for="item in options" :key="item.weapon_id"
            @click="addWeapon(item.weapon_id)"
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
          <td class="text-end">
            {{ item.damage }}
          </td>
          <td class="text-end">
            {{ item.range_formatted }}
          </td>
          <td>
            <div
                class="trait-tooltip"
                v-for="(trait, index) in item.traits"
                v-b-tooltip.hover.top="trait.description"
            >
              {{ trait.display_name }}<span v-if="index !== item.traits.length - 1">, </span>
            </div>
          </td>
          <td>
            <IconTeamGroupPerks
                :perks="item.team_perks"
            />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </BDropdown>
</template>
