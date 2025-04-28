import {defineStore} from 'pinia';
import {computed, reactive, ref, watch} from 'vue';
import {FACTIONS, NO_FACTION} from '../data/factions.js';

export const useFactionStore = defineStore('faction', () => {

        const faction_id = ref(NO_FACTION);
        const perk_ids = reactive({});

        function $reset() {
            faction_id.value = NO_FACTION;
            perk_ids.value = {};
        }

        const faction_display_name = computed(() => FACTIONS[faction_id.value].display_name);

        const perk_groups = computed(() => {
            let perkGroups = FACTIONS[faction_id.value].faction_perk_groups;

            let result = Object.values(perkGroups);
            result = result.map((perkGroup) => {
                return Object.assign({}, perkGroup, {
                    perks: Object.values(perkGroup.perks),
                });
            });

            return result;
        });

        function perkBelongsToGroup(perkGroupIndex, perkId) {

            const perkGroupId = perk_groups.value[perkGroupIndex].id;
            const perks = FACTIONS[faction_id.value].faction_perk_groups[perkGroupId].perks;
            const perkIds = Object.keys(perks);

            return perkIds.includes(perkId);
        }

        watch(faction_id, (newValue) => {
            perk_groups.value.forEach((perkGroup, index) => {
                const perkId = perk_ids[index];
                const defaultPerkId = Object.values(perkGroup.perks)[0].id;

                if (!perkBelongsToGroup(index, perkId)) {
                    perk_ids[index] = defaultPerkId;
                }
            });
        });

        function setPerkId(index, perkId) {
            perk_ids[index] = perkId;
        }

        function hasPerk(perkId) {
            return Object.values(perk_ids).includes(perkId);
        }

        return {
            faction_id,
            faction_display_name,
            perk_groups,
            perk_ids,
            hasPerk,
            setPerkId,
            $reset,
        };
    },
    {
        persist: {
            enabled: true,

        },
    },
);