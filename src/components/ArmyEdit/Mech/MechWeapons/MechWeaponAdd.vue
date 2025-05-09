<script setup>
import {useMechStore} from '../../../../store/mech-store.js';
import {computed} from 'vue';
import IconTeamGroupPerks from '../../../UI/IconTeamGroupPerks.vue';
import TraitList from '../../../UI/TraitList.vue';
import IconNotAvailable from '../../../UI/IconNotAvailable.vue';
import IconFactionPerks from '../../../UI/IconFactionPerks.vue';

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
          <td colspan="3">
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
            <number :val="item.slots" ::invert-color="true"/>
          </td>
          <td class="text-end">
            <number :val="item.cost" ::invert-color="true"/>
          </td>
          <td class="text-end">
            {{ item.damage }}
          </td>
          <td class="text-end">
            {{ item.range_formatted }}
          </td>
          <td>
            <TraitList :traits="item.traits"/>
          </td>
          <td class="notes">
            <IconNotAvailable
                :valid="item.valid"
                :validation_message="item.validation_message"
            />
          </td>
          <td class="notes">
            <IconTeamGroupPerks
                class="ms-1"
                :perks="item.team_perks"
            />
          </td>
          <td class="notes">
            <IconFactionPerks
                class="ms-1"
                :perks="item.faction_perks"
            />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </BDropdown>
</template>
