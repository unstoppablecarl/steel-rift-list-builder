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
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-2">
          <span class="btn btn-light btn-grab">:::</span>
          <span class="collapse-header">
          HE-V {{ info.size.display_name }}
        </span>
        </div>
        <div class="col-sm-2 collapse-header">
          <strong>{{ info.display_name }}</strong>
        </div>
        <div class="col-sm-8">
          <div class="d-flex flex-row-reverse">
            <BButton
                :class="'btn-collapse ' + (visible ? null : 'collapsed')"
                variant="light"
                :aria-expanded="visible ? 'true' : 'false'"
                :aria-controls="'collapse-' + mechId"
                @click="visible = !visible"
            >
            </BButton>
            <div class="collapse-header">
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
          </div>
        </div>
      </div>
      <BCollapse :id="'collapse-' + mechId" v-model="visible">
        <hr>
        <MechStats :mech-id="mechId"/>
      </BCollapse>
    </div>
  </div>
</template>