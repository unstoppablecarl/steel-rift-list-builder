<script>
import {BFormInput, BInput} from 'bootstrap-vue-next';
import {mapStores} from 'pinia';
import {useMechStore} from '../../store/mech-store.js';
import {useFactionStore} from '../../store/faction-store.js';
import {
  CORPORATIONS,
  DEEP_WAR_CHEST,
  DWC_TOP_END_HARDWARE,
  DWC_TOP_END_HARDWARE_BONUS_TONS,
  FACTIONS,
  FREELANCERS,
  RD_ADVANCED_HARDPOINT_DESIGN,
  RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS,
  RESEARCH_AND_DEVELOPMENT,
  UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN,
  UNDERWORLD_AFFILIATIONS,
} from '../../data/factions.js';
import Number from '../functional/number.vue';
import MechStatRow from './MechStats/MechStatRow.vue';
import Fraction from '../functional/fraction.vue';
import MechWeapons from './MechWeapons.vue';

export default {
  components: {MechWeapons, Fraction, MechStatRow, BInput, Number},
  props: {
    mechId: Number,
  },
  data() {
    return {};
  },
  computed: {
    ...mapStores(useMechStore),
    ...mapStores(useFactionStore),
    mech() {
      return this.mechStore.getMech(this.mechId);
    },
    info() {
      return this.mechStore.getMechInfo(this.mechId);
    },
    hasTopEndHardware() {
      return this.factionStore.hasPerk(DWC_TOP_END_HARDWARE);
    },
    topEndHardwareLabel() {
      return FACTIONS[CORPORATIONS]
          .faction_perk_groups[DEEP_WAR_CHEST]
          .perks[DWC_TOP_END_HARDWARE]
          .display_name;
    },
    hasAdvancedHardPoints() {
      return this.factionStore.hasPerk(RD_ADVANCED_HARDPOINT_DESIGN) ||
          this.factionStore.hasPerk(UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN);
    },
    advancedHardPointsLabel() {
      if (this.factionStore.hasPerk(RD_ADVANCED_HARDPOINT_DESIGN)) {
        return FACTIONS[CORPORATIONS]
            .faction_perk_groups[RESEARCH_AND_DEVELOPMENT]
            .perks[RD_ADVANCED_HARDPOINT_DESIGN]
            .display_name;
      }
      if (this.factionStore.hasPerk(UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN)) {
        return FACTIONS[FREELANCERS]
            .faction_perk_groups[UNDERWORLD_AFFILIATIONS]
            .perks[UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN]
            .display_name;
      }
    },
    advancedHardPointsBonusSlots() {
      return RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS;
    },
    topEndHardwareBonusTons() {
      return DWC_TOP_END_HARDWARE_BONUS_TONS;
    },
  },
};
</script>
<template>
  <div class="mech-stats px-2">
    <table class="table w-auto">
      <thead>
      <tr>
        <td>
          <label class="col-form-label" :for="'mech-input-name-' + mechId">Name</label>
        </td>
        <td colspan="3">
          <BFormInput :id="'mech-input-name-' + mechId" v-model="mech.name" :placeholder="info.placeholder_name"/>
        </td>
        <td class="text-right pe-1 border-bottom">
          <div class="fw-bold">Armor</div>
          <small>Stat</small>
        </td>
        <td class="text-right pe-1 border-bottom">
          <div class="fw-bold">Structure</div>
          <small>Stat</small>
        </td>
        <td class="text-right pe-1 border-bottom">
          <div class="fw-bold">Slots</div>
          <small>Used</small>
        </td>
        <td class="text-right pe-1 border-bottom">
          <div class="fw-bold">Tons</div>
          <small>Used</small>
        </td>
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
      />
      <MechBodyMods
          label="Structure Type"
          modifier-label="Structure Stat"
          v-model="mech.structure_mod_id"
          :form-id="'mech-input-structure-mod-' + mechId"
          :tonnage="info.structure_mod.modifier"
          :armor="null"
          :structure="info.structure_mod.modifier"

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
          :usedSlots="topEndHardwareBonusTons"
      />

      <MechStatRow
          v-if="hasAdvancedHardPoints"
          label="Perk"
          :text="advancedHardPointsLabel"
          :usedSlots="advancedHardPointsBonusSlots"
      />
      <MechWeapons
          :mech-id="mech.id"
      />
      </tbody>
      <tfoot>
      <tr>
        <td></td>
        <td class="text-end">
          Totals
        </td>
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
      </tr>
      </tfoot>
    </table>
  </div>
</template>