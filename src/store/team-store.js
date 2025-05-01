import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {findItemIndexById, move} from '../helpers/collection-helper.js';
import {MECH_TEAMS, TEAM_GENERAL} from '../data/mech-teams.js';
import {useMechStore} from './mech-store.js';
import {difference, find, findIndex, map} from 'lodash';
import {getter} from './store-helpers.js';

export const useTeamStore = defineStore('team', () => {

        const mechStore = useMechStore();

        const teams = ref([makeGeneralTeam()]);

        function $reset() {
            teams.value = [makeGeneralTeam()];
        }

        function makeGeneralTeam() {
            return {
                id: TEAM_GENERAL,
                groups: [
                    {
                        id: 'A',
                        mechs: [],
                    },
                ],
            };
        }

        const addable_teams = computed(() => {
            const currentTeamIds = map(teams.value, 'id');
            const teamIds = Object.keys(MECH_TEAMS);
            const availableTeamIds = difference(teamIds, currentTeamIds);
            return availableTeamIds.map((teamId) => {
                return {
                    id: teamId,
                    display_name: MECH_TEAMS[teamId].display_name,
                };
            });
        });

        function addTeam(teamId) {
            const teamDef = MECH_TEAMS[teamId];
            const groups = [];

            Object.keys(teamDef.groups)
                .forEach((groupId) => {
                    groups.push({
                        id: groupId,
                        mechs: [],
                    });
                });

            teams.value.push({
                id: teamId,
                groups,
            });
        }

        function findGroup(teamId, groupId) {
            const team = find(teams.value, {id: teamId});
            return find(team.groups, {id: groupId});
        }

        const addMechToTeam = getter((teamId, groupId) => {
            const mechOptions = MECH_TEAMS[teamId].groups[groupId].new_mech_defaults;
            const mech = mechStore.addMech(mechOptions ?? {});
            const group = findGroup(teamId, groupId);

            group.mechs.push({
                mech_id: mech.id,
                display_order: 0,
            });
        });

        const getTeamInfo = getter((teamId) => {
            return MECH_TEAMS[teamId];
        });

        const getTeamGroupInfo = computed(() => (teamId, groupId) => MECH_TEAMS[teamId].groups[groupId]);

        const getTeamGroupMechIds = getter((teamId, groupId) => {
            const group = findGroup(teamId, groupId);
            return map(group.mechs, 'mech_id');
        });

        function removeTeam(id) {
            let index = findItemIndexById(teams.value, id);
            teams.value.splice(index, 1);
        }

        function moveGroupMech(teamId, groupId, mechId, toIndex) {
            const group = findGroup(teamId, groupId);

            const index = findIndex(group.mechs, {mech_id: mechId});
            move(group.mechs, index, toIndex);

        }

        return {
            teams,
            addable_teams,
            addMechToTeam,
            getTeamGroupInfo,
            getTeamGroupMechIds,
            moveGroupMech,
            getTeamInfo,
            addTeam,
            removeTeam,
            $reset,
        };
    },
    {
        persist: {
            enabled: true,
        },
    },
);