<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../store/mech-store.js';
import MechWeapons from './Mech/MechWeapons.vue';
import MechUpgrades from './Mech/MechUpgrades.vue';
import Fraction from './functional/fraction.vue';

export default {
  components: {Fraction, MechUpgrades, MechWeapons},
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
    info() {
      return this.mechStore.getMechInfo(this.mechId);
    },
  },
};
</script>
<template>
  <BCard>
    <BRow>
      <BCol sm="2">
        <span class="btn btn-light btn-grab">:::</span>
        <span class="collapse-header">
          HE-V {{ info.size.display_name }}
        </span>
      </BCol>
      <BCol sm="4" class="collapse-header">
        <strong>{{ info.display_name }}</strong>
      </BCol>
      <div class="col-sm-4 collapse-header">
        <span class="px-2">
          <strong>Arm:</strong>
          {{ info.armor_stat }}
        </span>
        <span class="px-2">
          <strong>Str:</strong>
          {{ info.structure_stat }}
        </span>
        <span class="px-2">
          <strong>Slots: </strong>
          <fraction :a="info.used_slots" :b="info.max_slots"/>
        </span>
        <span class="px-2">
          <strong>Tons: </strong>
          <fraction :a="info.used_tons" :b="info.max_tons"/>
        </span>
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
        <BTab title="Upgrades">
          <MechUpgrades :mech-id="mechId"/>
        </BTab>
      </BTabs>
    </BCollapse>
  </BCard>
</template>

<style scoped>

</style>
