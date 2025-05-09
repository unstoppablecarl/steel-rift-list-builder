import {defineStore} from 'pinia';
import {computed} from 'vue';
import {useArmyListStore} from './army-list-store.js';
import {useTeamStore} from './team-store.js';
import {getter} from './helpers/store-helpers.js';
import {useMechStore} from './mech-store.js';
import {TEAM_GENERAL} from '../data/mech-teams.js';
import {useSupportAssetStore} from './support-asset-store.js';

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

        const sizeValidation = teamStore.team_size_count_validation;
        if (!sizeValidation.valid) {
            messages.push(sizeValidation.validation_message + ' for this game size');
        }

        teamStore.teams.forEach(team => {
            team.groups.forEach((group) => {
                const {size_valid, size_validation_message} = teamStore.getTeamGroupSizeValidation(team.id, group.id);

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
        return false
    });

    const invalid_mech_messages = getter(mechId => {
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

        return messages;
    });

    const invalid_mech_tons = getter(mechId => {
        const {max_tons, used_tons} = mechStore.getMechInfo(mechId);

        if (max_tons < used_tons) {
            return `uses ${used_tons}/${max_tons} tons`;
        }
        return false
    });

    const invalid_mech_slots = getter(mechId => {
        const {max_slots, used_slots} = mechStore.getMechInfo(mechId);

        if (max_slots < used_slots) {
            return `uses ${used_slots}/${max_slots} slots`;
        }
        return false
    });

    const invalid_number_of_teams = computed(() => {
        const usedTeams = teamStore.used_teams_count;
        const maxTeams = teamStore.max_teams_count;

        if (maxTeams < usedTeams) {
            return `List has ${usedTeams} teams but may only have ${maxTeams}`;
        }
        return false
    });

    const invalid_number_of_support_assets = computed(() => {
        const {used_support_assets, max_support_assets} = supportAssetStore;

        if (max_support_assets < used_support_assets) {
            return `List has ${used_support_assets} Support Assets but may only have ${max_support_assets}`;
        }

        return false
    });

    return {
        list_validation,
        list_is_valid,
        invalid_number_of_support_assets,
        $reset,

    };
});