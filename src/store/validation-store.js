import {defineStore} from 'pinia';
import {computed} from 'vue';
import {useArmyListStore} from './army-list-store.js';
import {useTeamStore} from './team-store.js';
import {getter} from './helpers/store-helpers.js';
import {useMechStore} from './mech-store.js';
import {MECH_TEAMS, TEAM_GENERAL} from '../data/mech-teams.js';
import {useSupportAssetStore} from './support-asset-store.js';
import {MECH_WEAPONS} from '../data/mech-weapons.js';
import {countBy, find, max, min} from 'lodash';
import {WEAPON_TRAITS} from '../data/weapon-traits.js';
import {GAME_SIZE_BATTLE, GAME_SIZE_DUEL, GAME_SIZE_RECON, GAME_SIZE_STRIKE} from '../data/game-sizes.js';

export const useValidationStore = defineStore('validation', () => {

    const armyListStore = useArmyListStore();
    const teamStore = useTeamStore();
    const mechStore = useMechStore();
    const supportAssetStore = useSupportAssetStore();

    function $reset() {

    }

    const list_is_valid = computed(() => !list_validation.value.length);

    const list_validation = computed(() => {
        let messages = [
            invalid_number_of_teams.value,
            invalid_army_list_tons.value,
            invalid_number_of_support_assets.value,
        ];

        const sizeValidation = team_size_count_validation.value;
        if (!sizeValidation.valid) {
            messages.push(sizeValidation.validation_message + ' for this game size');
        }

        teamStore.teams.forEach(team => {
            team.groups.forEach((group) => {
                const {size_valid, size_validation_message} = getTeamGroupSizeValidation.value(team.id, group.id);

                const teamDisplayName = teamStore.getTeamInfo(team.id).display_name;
                const groupDisplayName = teamStore.getTeamGroupInfo(team.id, group.id).display_name;
                if (!size_valid) {
                    messages.push(`${teamDisplayName} ${groupDisplayName}: ${size_validation_message}`);
                }

                const mechIds = teamStore.getTeamGroupMechIds(team.id, group.id);

                mechIds.map(mechId => {
                    let mechMessages = invalid_mech_messages.value(mechId);
                    if (team.id !== TEAM_GENERAL) {
                        mechMessages = mechMessages.map(message => `[${teamDisplayName} ${groupDisplayName}] ${message}`);
                    }
                    messages = messages.concat(mechMessages);
                });
            });
        });
        return messages.filter(i => i);
    });

    const invalid_army_list_tons = computed(() => {
        const usedTons = armyListStore.used_tons;
        const maxTons = armyListStore.max_tons;
        if (usedTons > maxTons) {
            return `List uses ${usedTons}/${maxTons} tons`;
        }
        return false;
    });

    const invalid_mech_messages = getter(mechId => {
        const teamStore = useTeamStore();
        const mech = mechStore.getMech(mechId);
        const mechDisplayName = mechStore.getMechInfo(mechId).display_name;

        const tonsValidation = invalid_mech_tons.value(mechId);
        const messages = [];

        if (tonsValidation) {
            messages.push(`${mechDisplayName}: ${tonsValidation}`);
        }
        const slotsValidation = invalid_mech_slots.value(mechId);

        if (slotsValidation) {
            messages.push(`${mechDisplayName}: ${slotsValidation}`);
        }

        const {teamId, groupId} = teamStore.getMechTeamAndGroupIds(mechId);
        const groupInfo = teamStore.getTeamGroupInfo(teamId, groupId);

        const requiredAtLeastOneWithTraitId = groupInfo.required_at_least_one_weapon_with_trait_id;
        if (requiredAtLeastOneWithTraitId) {
            const result = find(mech.weapons, (weapon) => {
                const traitIds = MECH_WEAPONS[weapon.weapon_id].traits_by_size[mech.size_id];
                return traitIds.includes(requiredAtLeastOneWithTraitId);
            });

            if (!result) {
                const teamDisplayName = teamStore.getTeamInfo(teamId).display_name;
                const traitDisplayName = WEAPON_TRAITS[requiredAtLeastOneWithTraitId].display_name;

                messages.push(`${teamDisplayName} ${groupInfo.display_name} requires at least one weapon with the of the ${traitDisplayName} trait.`);
            }
        }

        return messages;
    });

    const invalid_mech = getter(mechId => invalid_mech_messages.value(mechId).join('. ') + '.');

    const invalid_mech_tons = getter(mechId => {
        const {max_tons, used_tons} = mechStore.getMechInfo(mechId);

        if (max_tons < used_tons) {
            return `uses ${used_tons}/${max_tons} tons`;
        }
        return false;
    });

    const invalid_mech_slots = getter(mechId => {
        const {max_slots, used_slots} = mechStore.getMechInfo(mechId);

        if (max_slots < used_slots) {
            return `uses ${used_slots}/${max_slots} slots`;
        }
        return false;
    });

    const invalid_number_of_teams = computed(() => {
        const usedTeams = teamStore.used_teams_count;
        const maxTeams = teamStore.max_teams_count;

        if (maxTeams < usedTeams) {
            return `List has ${usedTeams} teams but may only have ${maxTeams}`;
        }
        return false;
    });

    const invalid_number_of_support_assets = computed(() => {
        const {used_support_assets, max_support_assets} = supportAssetStore;

        if (max_support_assets < used_support_assets) {
            return `List has ${used_support_assets} Support Assets but may only have ${max_support_assets}`;
        }

        return false;
    });

    const getTeamGroupSizeValidation = getter((teamId, groupId) => {
        const {min_count, max_count} = MECH_TEAMS[teamId].groups[groupId];
        const group = teamStore.findGroup(teamId, groupId);
        const mechCount = group.mechs.length;

        let size_valid = true;
        let size_validation_message = 'Valid Group Size';
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

    const team_size_count_validation = computed(() => {
        const messageValid = {
            valid: true,
            validation_message: '',
        };
        const messageMin = (val) => ({
            valid: false,
            validation_message: `A team has less than the minimum of ${val} HE-Vs`,
        });
        const messageMax = (val) => ({
            valid: false,
            validation_message: `A team has more than the maximum of ${val} HE-Vs`,
        });

        const gameSizeId = armyListStore.game_size_id;

        if (gameSizeId === GAME_SIZE_DUEL) {
            return messageValid;
        }
        const teamCounts = teamStore.special_teams.map((team) => teamStore.getTeamMechCount(team.id));
        const smallestTeamCount = min(teamCounts);
        const largestTeamCount = max(teamCounts);

        if (smallestTeamCount < 2) {
            return messageMin(2);
        }

        if (gameSizeId === GAME_SIZE_RECON) {
            if (largestTeamCount > 2) {
                return messageMax(2);
            }
        }

        if (gameSizeId === GAME_SIZE_STRIKE) {
            if (largestTeamCount > 3) {
                return messageMax(3);
            }
        }

        if (gameSizeId === GAME_SIZE_BATTLE) {
            if (largestTeamCount > 4) {
                return messageMax(4);
            }
            const instancesOfCount = countBy(teamCounts);
            if (instancesOfCount[4] > 1) {
                return {
                    valid: false,
                    validation_message: `There may only be one team with a count of 4 HE-Vs`,
                };
            }
        }
        return messageValid;
    });

    return {
        list_validation,
        invalid_mech,
        invalid_mech_messages,
        list_is_valid,
        invalid_number_of_support_assets,
        team_size_count_validation,

        getTeamGroupSizeValidation,

        $reset,

    };
});