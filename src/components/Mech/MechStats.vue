<script>
import {BFormInput, BInput} from 'bootstrap-vue-next';
import {mapStores} from 'pinia';
import {useMechStore} from '../../store.js';
import {useFactionStore} from '../../store/faction-store.js';
import {
  DWC_TOP_END_HARDWARE,
  DWC_TOP_END_HARDWARE_BONUS_TONS,
  RD_ADVANCED_HARDPOINT_DESIGN,
  RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS,
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
    hasTopEndHardwarePerk() {
      return this.factionStore.hasPerk(DWC_TOP_END_HARDWARE);
    },
    hasAdvancedHardPoints() {
      return this.factionStore.hasPerk(RD_ADVANCED_HARDPOINT_DESIGN);
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
      <label class="col-sm-2 col-form-label" :for="'mech-input-name-' + mechId">Name</label>
      <div class="col-sm-4">
        <BFormInput :id="'mech-input-name-' + mechId" v-model="mech.name" :placeholder="info.placeholderName"/>
      </div>
      <div class="col-sm-1 col-form-label text-right pe-1 fw-medium border-bottom">
        Armor
      </div>
      <div class="col-sm-1 col-form-label text-right pe-1 fw-medium border-bottom">
        Structure
      </div>
      <div class="col-sm-1 col-form-label text-right pe-1 fw-medium border-bottom">
        Slots
      </div>
      <div class="col-sm-1 col-form-label text-right pe-1 fw-medium border-bottom">
        Tons
      </div>
      <div class="col-sm-2 col-form-label text-right pe-1 fw-medium border-bottom">

      </div>
    </div>
    <MechSizes
        :mech-id="mechId"
    />
    <MechBodyMods
        label="Armor Type"
        modifier-label="Armor"
        v-model="mech.armor_mod_id"
        :tonnage="info.armorMod.max_tons"
        :armor="info.armorMod.modifier"
        :structure="null"
        bg-color="bg-light-subtle"
    />
    <MechBodyMods
        label="Structure Type"
        modifier-label="Structure"
        v-model="mech.structure_mod_id"
        :tonnage="info.structureMod.max_tons"
        :armor="null"
        :structure="info.structureMod.modifier"

    />
    <MechArmorUpgrades
        label="Armor Upgrades"
        v-model="mech.armor_upgrade_id"
        :size="mech.size_id"
    />
    <div class="tab-content-divider-bottom"></div>

    <div v-if="hasTopEndHardwarePerk" class="row my-1">
      <div class="col-sm-2">
        <label class="form-label">Perk</label>
      </div>
      <div class="col-sm-4">
        <BInput model-value="Top End Hardware"/>
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
        <BInput model-value="Top End Hardware"/>
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
          {{ info.armorStat }}
        </strong>
      </div>
      <div class="col-sm-1 number-cell">
        <strong>
          {{ info.structureStat }}
        </strong>
      </div>
      <div class="col-sm-1 number-cell">
        <strong>
          {{ info.maxSlots }}
        </strong>
      </div>
      <div class="col-sm-1 number-cell">
        <strong>
          {{ info.maxTons }}
        </strong>
      </div>
    </div>
  </div>
</template>