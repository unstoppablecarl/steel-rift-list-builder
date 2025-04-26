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
    info() {
      return this.mechStore.getMechInfo(this.mechId);
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
      <BFormInput :id="'mech-input-name-' + mechId" v-model="mech.name" :placeholder="info.placeholderName"/>
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
      v-model="mech.armor_mod_id"
      :tonnage="info.armorMod.max_tons"
      :armor="info.armorMod.modifier"
  />
  <MechBodyMods
      label="Structure Type"
      modifier-label="Structure"
      v-model="mech.structure_mod_id"
      :tonnage="info.structureMod.max_tons"
      :structure="info.structureMod.modifier"
  />
  <MechArmorUpgrades
      label="Armor Upgrades"
      v-model="mech.armor_upgrade_id"
      :size="mech.size_id"
  />
  <div class="tab-content-divider-bottom"></div>
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

</template>

<style scoped>

</style>
