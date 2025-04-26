<script>
import {BFormInput} from 'bootstrap-vue-next';
import {mapStores} from 'pinia';
import {useMechStore} from '../store.js';
import {HEV_SIZES} from '../data/mech-sizes.js';
import {HEV_BODY_MODS} from '../data/mech-body.js';
import {HEV_ARMOR_UPGRADES} from '../data/mech-armor-upgrades.js';
import MechWeapons from './Mech/MechWeapons.vue';

export default {
  components: {MechWeapons},
  props: {
    mechId: Number,
  },
  data() {
    return {
      visible: true,
    };
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
  methods: {
    updateName(name) {
      this.mechStore.updateMech(this.mechId, {name});
    },
  },
};
</script>
<template>
  <BCard>
    <BRow>
      <BCol sm="2" class="collapse-header">
        HE-V {{ size.display_name }}
      </BCol>
      <BCol sm="4" class="collapse-header">
        <strong>{{ displayName }}</strong>
      </BCol>

      <div class="col-sm-1 number-cell collapse-header">
        <strong>Arm:</strong>
        {{ armorStat }}
      </div>
      <div class="col-sm-1 number-cell collapse-header">
        <strong>Str:</strong>
        {{ structureStat }}
      </div>
      <div class="col-sm-1 number-cell collapse-header">
        <strong>Slots:</strong>
        {{ maxSlots }}
      </div>
      <div class="col-sm-1 number-cell collapse-header">
        <strong>Tons:</strong>
        {{ maxTons }}
      </div>

      <BCol sm="2">
        <div class="d-flex flex-row-reverse">
          <BButton
              :class="'btn-collapse ' + (visible ? null : 'collapsed')"
              :aria-expanded="visible ? 'true' : 'false'"
              :aria-controls="'collapse-' + mechId"
              @click="visible = !visible"
          >
          </BButton>
        </div>
      </BCol>
    </BRow>


    <BCollapse :id="'collapse-' + mechId" v-model="visible">
      <hr>

      <BTabs content-class="mt-3">
        <BTab title="Stats" active>
          <MechStats :mech-id="mechId"/>
        </BTab>
        <BTab title="Weapons">
          <MechWeapons :mech-id="mechId"/>
        </BTab>
      </BTabs>
    </BCollapse>
  </BCard>
</template>

<style scoped>

</style>
