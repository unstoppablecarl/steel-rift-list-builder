<script setup>
import {useMechStore} from '../store/mech-store.js';
import Fraction from './functional/fraction.vue';
import {computed, ref, watch} from 'vue';
import {BButton} from 'bootstrap-vue-next';

const mechStore = useMechStore();

const {
  mechId,
  collapseSignal,
  expandSignal,
} = defineProps({
  mechId: {
    type: Number,
    required: true,
  },
  collapseSignal: {
    type: Number,
  },
  expandSignal: {
    type: Number,
  },
});

const visible = ref(true);
const info = computed(() => mechStore.getMechInfo(mechId));

watch(() => collapseSignal, () => visible.value = false);
watch(() => expandSignal, () => visible.value = true);
</script>
<template>
  <div class="card card-mech">
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

            <BButton
                @click="mechStore.removeMech(mechId)"
                variant="danger"
                class="mx-1"
            >
              <span class="material-symbols-outlined">delete</span>
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
        <div class="d-flex justify-content-md-center">

        <MechStats :mech-id="mechId"/>

        </div>
      </BCollapse>
    </div>
  </div>
</template>