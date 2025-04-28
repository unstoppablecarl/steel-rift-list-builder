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

export default {
  components: {BInput, Number},
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
  <div class="px-2">
    <div class="row header-row">
      <label class="col-sm-2 col-form-label border-bottom" :for="'mech-input-name-' + mechId">Name</label>
      <div class="col-sm-4 border-bottom">
        <BFormInput :id="'mech-input-name-' + mechId" v-model="mech.name" :placeholder="info.placeholder_name"/>
      </div>
      <div class="col-sm-1 text-right pe-1 border-bottom">
        <div class="fw-bold">Armor</div>
        <small>Stat</small>
      </div>
      <div class="col-sm-1 text-right pe-1 border-bottom">

        <div class="fw-bold">Structure</div>
        <small>Stat</small>
      </div>
      <div class="col-sm-1 text-right pe-1 border-bottom">

        <div class="fw-bold">Slots</div>
        <small>Available</small>
      </div>
      <div class="col-sm-1 text-right pe-1 border-bottom">
        <div class="fw-bold">Tons</div>
        <small>Available</small>
      </div>
      <div class="col-sm-2 text-right pe-1 border-bottom">

      </div>
    </div>
    <MechSizes
        :mech-id="mechId"
    />
    <MechBodyMods
        label="Armor Type"
        modifier-label="Armor"
        v-model="mech.armor_mod_id"
        :form-id="'mech-input-armor-mod-' + mechId"
        :tonnage="info.armor_mod.modifier"
        :armor="info.armor_mod.modifier"
        :structure="null"
        bg-color="bg-light-subtle"
    />
    <MechBodyMods
        label="Structure Type"
        modifier-label="Structure"
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
        :mech-id="mechId"
    />
    <div class="tab-content-divider-bottom"></div>

    <div v-if="hasTopEndHardware" class="row my-1">
      <div class="col-sm-2">
        <label class="form-label">Perk</label>
      </div>
      <div class="col-sm-4">
        <BInput :model-value="topEndHardwareLabel" disabled/>
      </div>
      <div class="col-sm-1 number-cell">

      </div>
      <div class="col-sm-1 number-cell">

      </div>
      <div class="col-sm-1 number-cell">

      </div>
      <div class="col-sm-1 number-cell">
        <number :val="topEndHardwareBonusTons"/>
      </div>
    </div>

    <div v-if="hasAdvancedHardPoints" class="row my-1">
      <div class="col-sm-2">
        <label>Perk</label>
      </div>
      <div class="col-sm-4">
        <BInput :model-value="advancedHardPointsLabel" disabled/>
      </div>
      <div class="col-sm-1 number-cell">

      </div>
      <div class="col-sm-1 number-cell">

      </div>
      <div class="col-sm-1 number-cell">
        <number :val="advancedHardPointsBonusSlots"/>
      </div>
      <div class="col-sm-1 number-cell">

      </div>
    </div>

    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-4 number-cell">
        <strong>Total</strong>
      </div>
      <div class="col-sm-1 number-cell">
        <strong>
          {{ info.armor_stat }}
        </strong>
      </div>
      <div class="col-sm-1 number-cell">
        <strong>
          {{ info.structure_stat }}
        </strong>
      </div>
      <div class="col-sm-1 number-cell">
        <strong>
          {{ info.max_slots - info.used_slots }}
        </strong>
      </div>
      <div class="col-sm-1 number-cell">
        <strong>
          {{ info.max_tons - info.used_tons }}
        </strong>
      </div>
    </div>
  </div>
</template>