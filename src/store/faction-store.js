import {defineStore} from 'pinia';
import {computed, ref, watch} from 'vue';
import {FACTIONS, NO_FACTION} from '../data/factions.js';
import {find} from 'lodash';

export const useFactionStore = defineStore('faction', () => {

        const faction_id = ref(NO_FACTION);

        const perk_1_id = ref(null);
        const perk_2_id = ref(null);

        function $reset() {
            faction_id.value = NO_FACTION;
            perk_1_id.value = null;
            perk_2_id.value = null;
        }

        const faction_display_name = computed(() => FACTIONS[faction_id.value].display_name);

        const perk_groups = computed(() => {
            let perkGroups = FACTIONS[faction_id.value].faction_perk_groups;

            let result = Object.values(perkGroups);
            result = result.map((perkGroup) => {
                let perks = Object.values(perkGroup.perks);
                perks = perks.map((perk) => {
                    return Object.assign({}, perk, {
                        disabled: hasPerkInGroup(perkGroup.id),
                    });
                });

                return Object.assign({}, perkGroup, {
                    perks: perks,
                });
            });

            return result;
        });

        function perkBelongsToFaction(perkId) {

            let result = find(FACTIONS[faction_id.value].faction_perk_groups, (perkGroup) => {
                const validPerkIds = Object.keys(perkGroup.perks);
                return validPerkIds.includes(perkId);
            });

            return !!result;
        }

        function hasPerk(perkId) {
            return perkId == perk_1_id.value || perkId == perk_2_id.value;
        }

        function hasPerkInGroup(perkGroupId) {
            const perks = FACTIONS[faction_id.value].faction_perk_groups[perkGroupId].perks;
            let result = Object.keys(perks).find((perkId) => hasPerk(perkId));
            return !!result;

        }

        watch(faction_id, (newValue) => {
            if (!perkBelongsToFaction(perk_1_id)) {
                perk_1_id.value = null;
            }

            if (!perkBelongsToFaction(perk_2_id)) {
                perk_2_id.value = null;
            }
        });

        const perks_drop_down = computed(() => {
            return [{
                id: null,
                display_name: 'Select Perk',
            }].concat(perk_groups.value);
        });

        return {
            faction_id,
            faction_display_name,
            perks_drop_down,
            perk_1_id,
            perk_2_id,
            hasPerk,
            $reset,
        };
    },
    {
        persist: {
            enabled: true,
        },
    },
);