<script setup>
import {useTeamStore} from '../../store/team-store.js';
import {computed, ref} from 'vue';
import MechTeamGroup from './MechTeamGroup.vue';
import {BButton} from 'bootstrap-vue-next';
import {MECH_SIZES} from '../../data/mech-sizes.js';
import {MECH_TEAM_PERKS} from '../../data/mech-team-perks.js';

const teamStore = useTeamStore();

const {teamId} = defineProps({
  teamId: String,
  groupId: String,
});

const show = ref(false);
const teamInfo = computed(() => teamStore.getTeamInfo(teamId));

const teamPerkIdDisplayName = computed(() => perkId => MECH_TEAM_PERKS[perkId].desc);

const sizeDisplayNames = computed(() => sizeIds => {
  return sizeIds
      .map((sizeId) => MECH_SIZES[sizeId].display_name)
      .join('/');
});

</script>
<template>

  <div class="card">
    <div class="card-header d-flex ">
      <div class="flex-grow-1">
        <div class="d-inline-block py-1 fw-bold">
          {{ teamInfo.display_name }}&nbsp;
        </div>
      </div>
      <div class="text-end">
        <BButton
            size="sm"
            variant="light"
            @click="show = !show"
        >
          Show Team Perks
        </BButton>
        <BButton
            @click="teamStore.removeTeam(teamId)"
            size="sm"
            variant="danger"
            class="mx-1"
        >
          <span class="material-symbols-outlined">delete</span>
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