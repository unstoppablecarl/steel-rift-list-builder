<script setup>
import {useTeamStore} from '../../store/team-store.js';
import {computed, ref} from 'vue';
import MechTeamGroup from './MechTeamGroup.vue';
import {BButton} from 'bootstrap-vue-next';
import {MECH_SIZES} from '../../data/mech-sizes.js';
import {MECH_TEAM_PERKS} from '../../data/mech-team-perks.js';
import HEVIcon from '../UI/HEVIcon.vue';
import {useExpandCollapseAll} from '../functional/expand-collapse.js';

const teamStore = useTeamStore();

const {teamId} = defineProps({
  teamId: String,
  groupId: String,
});

const show = ref(false);
const teamInfo = computed(() => teamStore.getTeamInfo(teamId));
const teamMechCount = computed(() => teamStore.getTeamMechCount(teamId));
const teamPerkIdDisplayName = computed(() => perkId => MECH_TEAM_PERKS[perkId].desc);
const sizeDisplayNames = computed(() => sizeIds => {
  return sizeIds
      .map((sizeId) => MECH_SIZES[sizeId].display_name)
      .join('/');
});
const {
  expandAll,
  collapseAll,
} = useExpandCollapseAll();
</script>
<template>

  <div class="card">
    <div class="card-header d-flex ">
      <div class="flex-grow-1">
        <span class="d-inline-block py-1 ps-3 pe-1 fw-bold">
          {{ teamInfo.display_name }}
        </span>
        <span
            class="btn btn-sm btn-outline mx-1 btn-light"
            v-b-tooltip.hover.top="'Team Size'"
        >
        <HEVIcon/>
        {{ teamMechCount }}
        </span>
      </div>
      <div class="text-end">
        <BButton
            size="sm"
            class="ms-1"
            variant="light"
            @click="show = !show"
        >
          Show Team Perks
        </BButton>
        <BButton
            size="sm"
            class="ms-1"
            variant="danger"
            @click="teamStore.removeTeam(teamId)"
        >
          <span class="material-symbols-outlined">delete</span>
        </BButton>
        <BButton
            size="sm"
            class="ms-1"
            variant="light"
            @click="collapseAll"
        >
          <span class="material-symbols-outlined">keyboard_double_arrow_up</span>
        </BButton>
        <BButton
            size="sm"
            class="ms-1"
            variant="light"
            @click="expandAll"
        >
          <span class="material-symbols-outlined">keyboard_double_arrow_down</span>
        </BButton>
      </div>
    </div>
    <div class="card-body">
      <MechTeamGroup
          v-for="group in teamInfo.groups"
          :team-id="teamId"
          :group-id="group.id"
      />
    </div>
  </div>
  <BOffcanvas
      v-model="show"
      placement="bottom"
      :title="teamInfo.display_name + ' Perks'"
  >
    <table class="table table-sm table-striped">
      <thead>
      <tr>
        <th>Team Size</th>
        <th v-for="(sizeIds) in teamInfo.team_size_perk_columns">
          {{ sizeDisplayNames(sizeIds) }} HE-Vs
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, count) in teamInfo.team_size_perk_rows">
        <td>{{ count }}</td>
        <td v-for="teamPerkIds in row">
          <p class="p-gap" v-for="perkId in teamPerkIds">
            {{ teamPerkIdDisplayName(perkId) }}
          </p>
        </td>
      </tr>
      </tbody>
    </table>
  </BOffcanvas>
</template>