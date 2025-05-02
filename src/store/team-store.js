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
        const getTeamGroupInfo = getter((teamId, groupId) => MECH_TEAMS[teamId].groups[groupId]);

        const getWeaponIsRequired = getter((teamId, groupId, weaponId) => {
            const groupDef = MECH_TEAMS[teamId].groups[groupId];
            return groupDef.required_weapon_ids.includes(weaponId);
        });
        const getUpgradeIsRequired = getter((teamId, groupId, upgradeId) => {
            const groupDef = MECH_TEAMS[teamId].groups[groupId];
            return groupDef.required_upgrade_ids.includes(upgradeId);
        });

        const getTeamGroupSizeValidation = getter((teamId, groupId) => {
            const {min_count, max_count} = MECH_TEAMS[teamId].groups[groupId];
            const group = findGroup.value(teamId, groupId);
            const mechCount = group.mechs.length;

            let size_valid = true;
            let size_validation_message = 'Group Size Valid';
            if (min_count !== false) {
                if (min_count > mechCount) {
                    size_valid = false;
                    size_validation_message = 'Group has less than the minimum number of HE-V: ' + min_count;
                }
            }

            if (max_count !== false) {
                if (max_count < mechCount) {
                    size_valid = false;
                    size_validation_message = 'Group has more than the maximum number of HE-V: ' + max_count;
                }
            }

            return {
                min_count,
                max_count,
                size_valid,
                size_validation_message,
            };
        });

        const getTeamGroupMechIds = getter((teamId, groupId) => {
            const group = findGroup.value(teamId, groupId);
            return map(group.mechs, 'mech_id');
        });

        const findGroup = getter((teamId, groupId) => {
            const team = find(teams.value, {id: teamId});
            return find(team.groups, {id: groupId});
        });

        function addMechToTeam(teamId, groupId) {
            const groupDef = MECH_TEAMS[teamId].groups[groupId];
            const mechOptions = groupDef.new_mech_defaults;
            const mech = mechStore.addMech(mechOptions ?? {});
            const group = findGroup.value(teamId, groupId);

            groupDef.required_weapon_ids.forEach((weaponId) => {
                mechStore.addMechWeaponAttachment(mech.id, weaponId);
            });
            groupDef.required_upgrade_ids.forEach((upgradeId) => {
                mechStore.addMechUpgradeAttachment(mech.id, upgradeId);
            });

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
            getTeamInfo,
            getTeamGroupInfo,
            getTeamGroupMechIds,
            getTeamGroupSizeValidation,
            getWeaponIsRequired,
            getUpgradeIsRequired,
            addMechToTeam,
            removeMechFromTeam,
            moveGroupMech,
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