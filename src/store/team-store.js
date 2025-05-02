import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {findItemIndexById, move, setDisplayOrders} from '../helpers/collection-helper.js';
import {MECH_TEAMS, TEAM_GENERAL} from '../data/mech-teams.js';
import {useMechStore} from './mech-store.js';
import {difference, find, findIndex, map} from 'lodash';
import {getter} from './store-helpers.js';
import {HEV_BODY_MODS_DROP_DOWN} from '../data/mech-body.js';

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

        const getMechTeamAndGroupIds = getter((mechId) => {
            let teamId = null;
            let groupId = null;

            find(teams.value, (team) => {
                find(team.groups, (group) => {
                    const found = find(group.mechs, {mech_id: mechId});

                    if (!!found) {
                        teamId = team.id;
                        groupId = group.id;
                    }
                });
            });
            if (!teamId) {
                throw new Error('Mech team not found!');
            }
            if (!groupId) {
                throw new Error('Mech group not found!');
            }
            return {
                teamId,
                groupId,
            };
        });

        const getMechSizeValid = getter((mechId, sizeId) => {
            const {teamId, groupId} = getMechTeamAndGroupIds.value(mechId);
            const info = getTeamGroupInfo.value(teamId, groupId);
            if (!info.size_ids || !info.size_ids.length) {
                return true;
            }

            return info.size_ids.includes(sizeId);
        });

        const getMechStructureModValid = getter((mechId, modId) => {
            const {teamId, groupId} = getMechTeamAndGroupIds.value(mechId);
            const info = getTeamGroupInfo.value(teamId, groupId);

            return getStructureModValid(info.limited_structure_mod_ids, modId);
        });

        const getMechArmorModValid = getter((mechId, modId) => {
            const {teamId, groupId} = getMechTeamAndGroupIds.value(mechId);
            const info = getTeamGroupInfo.value(teamId, groupId);

            return getStructureModValid(info.limited_armor_mod_ids, modId);
        });

        function getStructureModValid(limitedModIds, modId) {
            if (!limitedModIds || !limitedModIds.length) {
                return {
                    valid: true,
                    validation_message: null,
                };
            }

            if (!limitedModIds.includes(modId)) {
                return {
                    valid: false,
                    validation_message: 'Not available in Group',
                };
            }

            return {
                valid: true,
                validation_message: null,
            };
        }

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

        const getTeamMechIds = getter((teamId) => {
            const team = find(teams.value, {id: teamId});

            let mechIds = [];
            team.groups.forEach((group) => {
                mechIds = mechIds.concat(map(group.mechs, 'mech_id'));
            });
            return mechIds;
        });

        const getTeamGroupMechIds = getter((teamId, groupId) => {
            const group = findGroup.value(teamId, groupId);
            return map(group.mechs, 'mech_id');
        });

        const findGroup = getter((teamId, groupId) => {
            const team = find(teams.value, {id: teamId});
            return find(team.groups, {id: groupId});
        });

        const getMechStructureModOptions = getter((mechId) => {
            return HEV_BODY_MODS_DROP_DOWN.map((item) => {
                item = Object.assign({}, item);
                item.valid = getMechStructureModValid.value(mechId, item.id);
                return item;
            });
        });

        const getMechArmorModOptions = getter((mechId) => {
            return HEV_BODY_MODS_DROP_DOWN.map((item) => {
                item = Object.assign({}, item);
                item.valid = getMechArmorModValid.value(mechId, item.id);
                return item;
            });
        });

        function addMechToTeam(teamId, groupId) {
            const groupDef = MECH_TEAMS[teamId].groups[groupId];
            const mechOptions = {};

            if (groupDef?.size_ids?.length) {
                mechOptions.size_id = groupDef.size_ids[0];
            }
            if (groupDef?.limited_structure_mod_ids?.length) {
                mechOptions.structure_mod_id = groupDef.limited_structure_mod_ids[0];
            }
            if (groupDef?.limited_armor_mod_ids?.length) {
                mechOptions.armor_mod_id = groupDef.limited_armor_mod_ids[0];
            }
            if (groupDef?.limited_armor_upgrade_ids?.length) {
                mechOptions.armor_upgrade_id = groupDef.limited_armor_upgrade_ids[0];
            }

            const mech = mechStore.addMech(mechOptions);

            groupDef.required_weapon_ids.forEach((weaponId) => {
                mechStore.addMechWeaponAttachment(mech.id, weaponId);
            });
            groupDef.required_upgrade_ids.forEach((upgradeId) => {
                mechStore.addMechUpgradeAttachment(mech.id, upgradeId);
            });

            const group = findGroup.value(teamId, groupId);

            group.mechs.push({
                mech_id: mech.id,
            });
            setDisplayOrders(group.mechs);
        }

        function removeMechFromTeam(mechId) {
            const {teamId, groupId} = getMechTeamAndGroupIds.value(mechId);
            const group = findGroup.value(teamId, groupId);
            const index = findIndex(group.mechs, {'mech_id': mechId});
            group.mechs.splice(index, 1);
        }

        function removeTeam(teamId) {
            const mechIds = getTeamMechIds.value(teamId);
            console.log(mechIds)
            mechIds.forEach((mechId) => mechStore.removeMech(mechId));
            let index = findItemIndexById(teams.value, teamId);
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
            getMechTeamAndGroupIds,
            getMechSizeValid,
            getMechStructureModOptions,
            getMechArmorModOptions,
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