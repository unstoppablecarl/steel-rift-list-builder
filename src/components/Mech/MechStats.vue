<script>
import {BFormInput} from 'bootstrap-vue-next';
import {mapStores} from 'pinia';
import {useMechStore} from '../../store.js';
import {HEV_SIZES} from '../../data/mech-sizes.js';
import {HEV_BODY_MODS} from '../../data/mech-body.js';
import {HEV_ARMOR_UPGRADES} from '../../data/mech-armor-upgrades.js';

export default {
  props: {
    mechId: Number,
  },
  data() {
    return {};
  },
  computed: {
    ...mapStores(useMechStore),
    mech() {
      return this.mechStore.getMech(this.mechId);
    },
    placeholderName() {
      return 'Mech-' + this.mechId;
    },
    displayName() {
      if (this.mech.name) {
        return this.mech.name;
      }
      return this.placeholderName;
    },
    sizeId() {
      return this.mech.sizeId;
    },
    size() {
      return HEV_SIZES[this.mech.sizeId];
    },
    armorMod() {
      return HEV_BODY_MODS[this.mech.armorModId];
    },
    structureMod() {
      return HEV_BODY_MODS[this.mech.structureModId];
    },
    armorUpgrade() {
      return HEV_ARMOR_UPGRADES[this.mech.armorUpgradeId];
    },
    maxTons() {
      return this.size.max_tons + this.armorMod.max_tons + this.structureMod.max_tons;
    },
    armorStat() {
      return this.size.armor + this.armorMod.modifier;
    },
    structureStat() {
      return this.size.structure + this.armorMod.modifier;
    },
    maxSlots() {
      return this.size.slots - this.armorUpgrade.slots;
    },
  },
};
</script>
<template>

  <div class="form-group row header-row">
    <div class="col-sm-2">
      <label :for="'mech-input-name-' + mechId">Name</label>
    </div>
    <div class="col-sm-4">
      <BFormInput :id="'mech-input-name-' + mechId" v-model="mech.name" :placeholder="placeholderName"/>
    </div>

    <div class="col-sm-1 number-cell">
      Armor
    </div>
    <div class="col-sm-1 number-cell">
      Structure
    </div>
    <div class="col-sm-1 number-cell">
      Slots
    </div>
    <div class="col-sm-1 number-cell">
      Tons
    </div>
  </div>
  <MechSizes
      :mech-id="mechId"
  />
  <MechBodyMods
      label="Armor Type"
      modifier-label="Armor"
      v-model="mech.armorModId"
      :tonnage="armorMod.max_tons"
      :armor="armorMod.modifier"
  />
  <MechBodyMods
      label="Structure Type"
      modifier-label="Structure"
      v-model="mech.structureModId"
      :tonnage="structureMod.max_tons"
      :structure="structureMod.modifier"
  />
  <MechArmorUpgrades
      label="Armor Upgrades"
      v-model="mech.armorUpgradeId"
      :size="sizeId"
  />
  <div class="tab-content-divider-bottom"></div>
  <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-4 number-cell">
      <strong>Total</strong>
    </div>
    <div class="col-sm-1 number-cell">
      <strong>
        {{ armorStat }}
      </strong>
    </div>
    <div class="col-sm-1 number-cell">
      <strong>
        {{ structureStat }}
      </strong>
    </div>
    <div class="col-sm-1 number-cell">
      <strong>
        {{ maxSlots }}
      </strong>
    </div>
    <div class="col-sm-1 number-cell">
      <strong>
        {{ maxTons }}
      </strong>
    </div>
  </div>

</template>

<style scoped>

</style>
