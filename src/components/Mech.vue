<script>
import {mapStores} from 'pinia';
import {useMechStore} from '../store.js';
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
    info() {
      return this.mechStore.getMechInfo(this.mechId);
    },
  },
};
</script>
<template>
  <BCard>
    <BRow>
      <BCol sm="2" class="collapse-header">
        HE-V {{ info.size.display_name }}
      </BCol>
      <BCol sm="4" class="collapse-header">
        <strong>{{ info.displayName }}</strong>
      </BCol>
      <div class="col-sm-4 collapse-header">
        <span class="px-2">
          <strong>Arm:</strong>
          {{ info.armorStat }}
        </span>
        <span class="px-2">
          <strong>Str:</strong>
          {{ info.structureStat }}
        </span>
        <span class="px-2">
          <strong>Slots:</strong>
          {{ info.usedSlots }}/{{ info.maxSlots }}
        </span>
        <span class="px-2">
          <strong>Tons:</strong>
          {{ info.usedTons }}/{{ info.maxTons }}
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
      </BTabs>
    </BCollapse>
  </BCard>
</template>

<style scoped>

</style>
