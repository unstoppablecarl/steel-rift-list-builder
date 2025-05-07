<script setup>
import {useMechStore} from '../../store/mech-store.js';
import Fraction from '../functional/fraction.vue';
import {computed, ref, watch} from 'vue';
import {BButton} from 'bootstrap-vue-next';
import {useExpandCollapseAll} from '../functional/expand-collapse.js';

const mechStore = useMechStore();

const {
  mechId,
} = defineProps({
  mechId: {
    type: Number,
    required: true,
  },
});

const visible = ref(true);
const info = computed(() => mechStore.getMechInfo(mechId));

const {
  collapseSignal,
  expandSignal,
} = useExpandCollapseAll();

watch(collapseSignal, () => visible.value = false);
watch(expandSignal, () => visible.value = true);
</script>
<template>
  <div class="card card-mech">
    <div class="card-body">
      <div class="row">
        <div class="col-sm-2">
          <span class="btn btn-sm btn-light btn-grab">:::</span>
          <div class="d-inline-block py-1 ps-3">
            HE-V {{ info.size.display_name }}
          </div>
        </div>
        <div class="col-sm-2 py-1">
          <strong>{{ info.display_name }}</strong>
        </div>
        <div class="col-sm">
          <div class="d-flex flex-row-reverse">

            <BButton
                :class="'btn-sm btn-collapse ' + (visible ? null : 'collapsed')"
                variant="tertiary"
                :aria-expanded="visible ? 'true' : 'false'"
                :aria-controls="'collapse-' + mechId"
                @click="visible = !visible"
            >
            </BButton>

            <BButton
                size="sm"
                class="mx-1"
                variant="danger"
                @click="mechStore.removeMech(mechId)"
            >
              <span class="material-symbols-outlined">delete</span>
            </BButton>

            <div class="py-1">
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
        <hr class="mt-2">
        <div class="d-flex justify-content-md-center">
          <MechStats :mech-id="mechId"/>
        </div>
      </BCollapse>
    </div>
  </div>
</template>