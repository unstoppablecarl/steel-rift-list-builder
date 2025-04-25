<script setup>
import {computed, ref} from 'vue';
import {BFormInput} from 'bootstrap-vue-next';
import {HEV_SIZES, HEV_SIZES_DROP_DOWN, SIZE_MEDIUM} from '../data/mech-sizes.js';
import MechBodyMods from './MechBodyMods.vue';
import {HEV_BODY_MODS, MOD_STANDARD} from '../data/mech-body.js';
import MechSizes from './MechSizes.vue';
import MechArmorUpgrades from './MechArmorUpgrades.vue';
import {CERAMIC_ARMOR_UPGRADE, HEV_ARMOR_UPGRADES, NO_ARMOR_UPGRADE} from '../data/mech-armor-upgrades.js';
import {mechStore} from '../store.js';

const sizeOptions = HEV_SIZES_DROP_DOWN;

const mech = mechStore

const name = ref('f');
const sizeId = ref(SIZE_MEDIUM);
const size = computed( () => HEV_SIZES[sizeId.value])

const armorMod = ref(MOD_STANDARD);
const structureMod = ref(MOD_STANDARD);
const armorUpgradeValue = ref(NO_ARMOR_UPGRADE)

const armorUpgrade = computed( () => HEV_ARMOR_UPGRADES[armorUpgradeValue.value])

const armorModTonnage = computed(() => HEV_BODY_MODS[armorMod.value].max_tons);
const armorModArmor = computed(() => HEV_BODY_MODS[armorMod.value].modifier);

const structureModTonnage = computed(() => HEV_BODY_MODS[structureMod.value].max_tons);
const structureModStructure = computed(() => HEV_BODY_MODS[structureMod.value].modifier);

const tonnageTotal = computed(() => size.value.max_tons + armorModTonnage.value + structureModTonnage.value);
const armorTotal = computed(() => size.value.armor + armorModArmor.value);
const structureTotal = computed(() => size.value.structure + structureModStructure.value);
const slotsTotal = computed(() => size.value.slots - armorUpgrade.value.slots);

</script>

<template>
  <div class="card">
    <div class="card-body">
      <h3>Mech</h3>
      <BRow class="my-1">
        <BCol sm="2">
          <label for="input-name">Name</label>
        </BCol>
        <BCol sm="4">
          <BFormInput id="input-name" v-model="name"/>
        </BCol>
      </BRow>
      <div class="form-group row header-row">
        <div class="col-sm-6 col-form-label">
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          Armor
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          Structure
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          Slots
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          Tons
        </div>
      </div>
      <MechSizes
          v-model="sizeId"
      />
      <MechBodyMods
          label="Armor Type"
          modifier-label="Armor"
          v-model="armorMod"
          :tonnage="armorModTonnage"
          :armor="armorModArmor"
      />
      <MechBodyMods
          label="Structure Type"
          modifier-label="Structure"
          v-model="structureMod"
          :tonnage="structureModTonnage"
          :structure="structureModStructure"
      />
      <MechArmorUpgrades
          label="Armor Upgrades"
          v-model="armorUpgradeValue"
          :size="sizeId"
      />

      <div class="tab-content-divider-bottom"></div>
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-4 col-form-label number-cell">
          <strong>Total</strong>
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          <strong>
            {{ armorTotal }}
          </strong>
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          <strong>
            {{ structureTotal }}
          </strong>
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          <strong>
            {{ slotsTotal }}
          </strong>
        </div>
        <div class="col-sm-1 col-form-label number-cell">
          <strong>
            {{ tonnageTotal }}
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
