<script setup>

import {computed} from 'vue';
import {SIZE_LIGHT, SIZE_ULTRA} from '../../data/mech-sizes.js';
import {useMechStore} from '../../store/mech-store.js';
import {chunk} from 'lodash';

const mechStore = useMechStore();

const {mechId} = defineProps({
  mechId: {
    type: String,
  },
});
const info = computed(() => mechStore.getMechInfo(mechId));

const structureSystem = computed(() => {
  if (info.value.size.id === SIZE_LIGHT) {
    return 'Fragile Systems';
  }
  if (info.value.size.id === SIZE_ULTRA) {
    return 'Backup Systems';
  }
});

const armor6PerRow = computed(() => {
  const armorStat = info.value.armor_stat;
  return armorStat > 15;
});

const armorHp = computed(() => {
  const armorStat = info.value.armor_stat;
  const points = new Array(armorStat);
  if (armor6PerRow.value) {
    return chunk(points, 6);
  }
  return chunk(points, 5);
});

function splitIntoChunkCounts(total) {
  const parts = 4;
  const base = Math.floor(total / parts);
  const remainder = total % parts;

  const chunks = Array(parts).fill(base);

  for (let i = 0; i < remainder; i++) {
    chunks[i] += 1;
  }

  return chunks;
}

const structureHp = computed(() => {
  const structure = info.value.structure_stat;
  const chunkCounts = splitIntoChunkCounts(structure);

  let points = [];
  const map = [
    'M',
    'D',
    'Ø',
  ];

  chunkCounts.forEach((count, index) => {
    points = points.concat(Array(count).fill(map[index]));
  });

  return chunk(points, 5);
});

</script>
<template>
  <div class="row g-1 mb-1 px-2 row-hp">
    <div class="col-5">
      <div class="hp-heading">
        Armor
      </div>
      <div :class="{'hp-container': true, 'armor-6-per-row': armor6PerRow}">
        <div v-for="row in armorHp">
          <span class="hp" v-for="i in row"></span>
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="row g-1">
        <div class="col-8">
          <div class="hp-heading">
            Structure
          </div>
          <div class="hp-container">
            <div v-for="row in structureHp">
              <span class="hp" v-for="i in row">
                <span v-if="i">{{ i }}</span>
                <span v-else>&nbsp;</span>
              </span>
            </div>
          </div>
          <div class="structure-systems" v-if="structureSystem">
            {{ structureSystem }}
          </div>
        </div>
        <div class="col-4">
          <div class="hp-heading">&nbsp;</div>
          <div class="crit-box">
            <div class="crit-heading">
              CRIT
            </div>
            <div>
              (M)ove -1
            </div>
            <div>
              (D)mg -1
            </div>
            <div>
              (O)rders -1
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>