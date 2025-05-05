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

    const secondary_agendas = computed(() => {
        const result = [];
        const factionId = factionStore.faction_id;
        if (factionId) {
            const agendaId1 = FACTIONS[factionId].secondary_agenda_id;
            if (agendaId1) {

                result.push(Object.assign({},
                    SECONDARY_AGENDAS[agendaId1],
                    {
                        type: 'Faction',
                        type_display_name: FACTIONS[factionId].display_name

                    },
                ));
            }
        }

        teamStore.teams.map(team => {
            if (teamStore.getTeamMechCount(team.id)) {
                const agendaId = MECH_TEAMS[team.id].secondary_agenda_id;
                if (agendaId) {
                    result.push(Object.assign({},
                        SECONDARY_AGENDAS[agendaId],
                        {
                            type: 'Team',
                            type_display_name: MECH_TEAMS[team.id].display_name
                        },
                    ));
                }
            }
        });
        console.log(result);
        return result;
    });

    return {
        secondary_agendas,
        $reset,
    };
});