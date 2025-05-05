import {defineStore} from 'pinia';
import {computed} from 'vue';
import {useFactionStore} from './faction-store.js';
import {FACTIONS} from '../data/factions.js';
import {useTeamStore} from './team-store.js';
import {MECH_TEAMS} from '../data/mech-teams.js';
import {SECONDARY_AGENDAS} from '../data/secondary-agendas.js';

export const useSecondaryAgendaStore = defineStore('secondary-agenda', () => {

    const factionStore = useFactionStore();
    const teamStore = useTeamStore();

    function $reset() {

    }

    const secondary_agenda_ids = computed(() => {
        const ids = [];
        const factionId = factionStore.faction_id;
        if (factionId) {
            ids.push(FACTIONS[factionId].secondary_agenda_id);
        }

        teamStore.teams.map(team => {
            if (team.mechs.length) {
                ids.push(MECH_TEAMS[team.id].secondary_agenda_id);
            }
        });

        return ids;
    });

    const secondary_agendas = computed(() => secondary_agenda_ids.value.map(id => SECONDARY_AGENDAS[id]));

    return {
        secondary_agenda_ids,
        secondary_agendas,
        $reset,
    };
});