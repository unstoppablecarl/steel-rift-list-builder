<script setup>
import {BFormInput} from 'bootstrap-vue-next';
import {useMechStore} from '../../store/mech-store.js';
import {useFactionStore} from '../../store/faction-store.js';
import Number from '../functional/number.vue';
import MechStatRow from './MechStats/MechStatRow.vue';
import Fraction from '../functional/fraction.vue';
import MechWeapons from './MechWeapons.vue';
import MechUpgrades from './MechUpgrades.vue';
import {computed} from 'vue';
import {storeToRefs} from 'pinia';
import {useTeamStore} from '../../store/team-store.js';

const mechStore = useMechStore();
const factionStore = useFactionStore();
const teamStore = useTeamStore();

const {mechId} = defineProps({mechId: Number});

const mech = computed(() => mechStore.getMech(mechId));
const info = computed(() => mechStore.getMechInfo(mechId));

const {
  hasAdvancedHardPoints,
  advancedHardPointsLabel,
  advancedHardPointsBonusSlots,
  topEndHardwareBonusTons,
  hasTopEndHardware,
  topEndHardwareLabel,
} = storeToRefs(factionStore);

const structureModOptions = computed(() => teamStore.getMechStructureModOptions(mechId));
const armorModOptions = computed(() => teamStore.getMechArmorModOptions(mechId));

</script>
<template>
  <div class="mech-stats px-2 table-responsive">
    <table class="table w-auto">
      <thead>
      <tr>
        <td>
          <label class="col-form-label" :for="'mech-input-name-' + mechId">Name</label>
        </td>
        <td colspan="3">
          <BFormInput :id="'mech-input-name-' + mechId" v-model="mech.name" :placeholder="info.placeholder_name"/>
        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Armor</div>
          <small>Stat</small>
        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Structure</div>
          <small>Stat</small>
        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Slots</div>
          <small>Used</small>
        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Tons</div>
          <small>Used</small>
        </td>
        <td></td>
      </tr>
      </thead>
      <tbody>
      <MechSizes
          :mech-id="mechId"
      />
      <MechBodyMods
          label="Armor Type"
          modifier-label="Armor Stat"
          v-model="mech.armor_mod_id"
          :form-id="'mech-input-armor-mod-' + mechId"
          :tonnage="info.armor_mod.modifier"
          :armor="info.armor_mod.modifier"
          :structure="null"
          :options="armorModOptions"
      />
      <MechBodyMods
          label="Structure Type"
          modifier-label="Structure Stat"
          v-model="mech.structure_mod_id"
          :form-id="'mech-input-structure-mod-' + mechId"
          :tonnage="info.structure_mod.modifier"
          :armor="null"
          :structure="info.structure_mod.modifier"
          :options="structureModOptions"
      />
      <MechArmorUpgrades
          label="Armor Upgrades"
          v-model="mech.armor_upgrade_id"
          :size-id="mech.size_id"
          :mech-id="mech.id"
      />
      <MechStatRow
          v-if="hasTopEndHardware"
          label="Perk"
          :text="topEndHardwareLabel"
          :usedTons="topEndHardwareBonusTons"
      />

      <MechStatRow
          v-if="hasAdvancedHardPoints"
          label="Perk"
          :text="advancedHardPointsLabel"
          :usedSlots="advancedHardPointsBonusSlots"
      />
      <MechUpgrades
          :mech-id="mech.id"
      />
      <MechWeapons
          :mech-id="mech.id"
      />
      </tbody>
      <tfoot>
      <tr>
        <td>

        </td>
        <td colspan="3" class="text-end">

        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Armor</div>
          <small>Stat</small>
        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Structure</div>
          <small>Stat</small>
        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Slots</div>
          <small>Used</small>
        </td>
        <td class="text-end pe-1 border-bottom">
          <div class="fw-bold">Tons</div>
          <small>Used</small>
        </td>
        <td></td>
      </tr>
      <tr class="table-light">
        <td></td>
        <th colspan="3" class="text-end">
          Totals
        </th>
        <td class="text-end">
          {{ info.armor_stat }}
        </td>
        <td class="text-end">
          {{ info.structure_stat }}
        </td>
        <td class="text-end">
          <strong>
            <fraction :a="info.used_slots" :b="info.max_slots"/>
          </strong>
        </td>
        <td class="text-end">
          <strong>
            <fraction :a="info.used_tons" :b="info.max_tons"/>
          </strong>
        </td>
        <td></td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>