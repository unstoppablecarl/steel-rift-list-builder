import {computed, ref} from 'vue';
import {HEV_SIZES, SIZE_MEDIUM} from './mech-sizes.js';
import {HEV_BODY_MODS, MOD_STANDARD} from './mech-body.js';
import {HEV_ARMOR_UPGRADES, NO_ARMOR_UPGRADE} from './mech-armor-upgrades.js';

export function createMech() {

    const name = ref('f');
    const sizeId = ref(SIZE_MEDIUM);
    const size = computed(() => HEV_SIZES[sizeId.value]);

    const armorMod = ref(MOD_STANDARD);
    const structureMod = ref(MOD_STANDARD);
    const armorUpgradeValue = ref(NO_ARMOR_UPGRADE);

    const armorUpgrade = computed(() => HEV_ARMOR_UPGRADES[armorUpgradeValue.value]);

    const armorModTonnage = computed(() => HEV_BODY_MODS[armorMod.value].max_tons);
    const armorModArmor = computed(() => HEV_BODY_MODS[armorMod.value].modifier);

    const structureModTonnage = computed(() => HEV_BODY_MODS[structureMod.value].max_tons);
    const structureModStructure = computed(() => HEV_BODY_MODS[structureMod.value].modifier);

    const tonnageTotal = computed(() => size.value.max_tons + armorModTonnage.value + structureModTonnage.value);
    const armorTotal = computed(() => size.value.armor + armorModArmor.value);
    const structureTotal = computed(() => size.value.structure + structureModStructure.value);
    const slotsTotal = computed(() => size.value.slots - armorUpgrade.value.slots);


}