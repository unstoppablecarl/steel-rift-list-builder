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

        const getTeamInfo = getter((teamId) => MECH_TEAMS[teamId]);

        const getTeamGroupInfo = getter((teamId, groupId) => {
            const groupDef = MECH_TEAMS[teamId].groups[groupId];
            const group = findGroup.value(teamId, groupId);

            const {
                size_valid,
                size_validation_message,
            } = validateGroupSize(groupDef, group.mechs.length);

            console.log({
                size_valid,
                size_validation_message,
            })


            return Object.assign({
                size_valid,
                size_validation_message,
            }, groupDef);
        });

        function validateGroupSize(groupDef, mechCount) {
            let size_valid = true;
            let size_validation_message = 'Group Size Valid';
            if (groupDef.min_count !== false) {
                if (groupDef.min_count > mechCount) {
                    size_valid = false;
                    size_validation_message = 'Group has less than the minimum number of HE-V: ' + groupDef.min_count;
                }
            }

            if (groupDef.max_count !== false) {
                if (groupDef.max_count < mechCount) {
                    size_valid = false;
                    size_validation_message = 'Group has more than the maximum number of HE-V: ' + groupDef.max_count;
                }
            }

            return {
                size_valid,
                size_validation_message,
            };
        }

        const getTeamGroupMechIds = getter((teamId, groupId) => {
            const group = findGroup.value(teamId, groupId);
            return map(group.mechs, 'mech_id');
        });

        const findGroup = getter((teamId, groupId) => {
            const team = find(teams.value, {id: teamId});
            return find(team.groups, {id: groupId});
        });

        function addMechToTeam(teamId, groupId) {
            const mechOptions = MECH_TEAMS[teamId].groups[groupId].new_mech_defaults;
            const mech = mechStore.addMech(mechOptions ?? {});
            const group = findGroup.value(teamId, groupId);

            group.mechs.push({
                mech_id: mech.id,
                display_order: 0,
            });
        }

        function removeMechFromTeam(teamId, groupId, mechId) {
            const group = findGroup.value(teamId, groupId);
            const index = findIndex(group.mechs, {'mech_id': mechId});

            group.mechs.splice(index, 1);
            mechStore.removeMech(mechId);
        }

        function removeTeam(id) {
            let index = findItemIndexById(teams.value, id);
            teams.value.splice(index, 1);
        }

        function moveGroupMech(teamId, groupId, mechId, toIndex) {
            const group = findGroup.value(teamId, groupId);

            const index = findIndex(group.mechs, {mech_id: mechId});
            move(group.mechs, index, toIndex);

        }

        return {
            teams,
            addable_teams,
            addMechToTeam,
            removeMechFromTeam,
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