<script setup>

import {computed} from 'vue';
import {useTeamStore} from '../../store/team-store.js';
import {useMechStore} from '../../store/mech-store.js';

const mechStore = useMechStore();
const teamStore = useTeamStore();

const {mechId} = defineProps({
  mechId: {
    type: String,
  },
});
const info = computed(() => mechStore.getMechInfo(mechId));

const team = computed(() => {
  const {teamId} = teamStore.getMechTeamAndGroupIds(mechId);
  return teamStore.getTeamInfo(teamId);
});

</script>
<template>
  <div class="row g-1 mb-1">
    <div class="col-5">
      <div class="unit-type px-2 py-1">
        <div class="hev-size">
          {{ info.size.display_name }} HE-V
        </div>
        <div class="hev-team">
          {{ team.display_name }}
        </div>
      </div>
    </div>
    <div class="col-7">
      <table class="table-card">
        <thead>
        <tr class="heading-row">
          <th class="ps-1">Tng</th>
          <th>Mov</th>
          <th>Jmp</th>
          <th class="pe-2">Def</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="ps-1">{{ info.tonnage_stat }}</td>
          <td>{{ info.move }}"</td>
          <td>
            <template v-if="info.jump">{{ info.jump }}"</template>
            <template v-else>-</template>
          </td>
          <td class="pe-2">{{ info.defense }}+</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>