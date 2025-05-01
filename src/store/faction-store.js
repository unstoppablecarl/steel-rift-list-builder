import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {FACTIONS, NO_FACTION} from '../data/factions.js';
import {find} from 'lodash';
import {getter} from './store-helpers.js';

export const useFactionStore = defineStore('faction', () => {

        const perk_1_id = ref(null);
        const perk_2_id = ref(null);
        const faction_id = ref(NO_FACTION);

        function $reset() {
            faction_id.value = NO_FACTION;
            perk_1_id.value = null;
            perk_2_id.value = null;
        }

        const faction_display_name = computed(() => FACTIONS[faction_id.value].display_name);

        const perkBelongsToFaction = getter((perkId) => {

            let result = find(FACTIONS[faction_id.value].faction_perk_groups, (perkGroup) => {
                const validPerkIds = Object.keys(perkGroup.perks);
                return validPerkIds.includes(perkId);
            });

            return !!result;
        });

        const hasPerk = getter((perkId) => perkId == perk_1_id.value || perkId == perk_2_id.value);

        function groupContainsPerkId(perkGroupId, perkId)  {
            const perks = FACTIONS[faction_id.value].faction_perk_groups[perkGroupId].perks;
            return Object.keys(perks).includes(perkId);
        }

        function clearInvalidPerks() {
            if (!perkBelongsToFaction.value(perk_1_id)) {
                perk_1_id.value = null;
            }

            if (!perkBelongsToFaction.value(perk_2_id)) {
                perk_2_id.value = null;
            }
        }

        const perk_1_drop_down = computed(() => {
            return [{
                id: null,
                display_name: 'Select Perk',
            }].concat(makeDropdownData.value(perk_2_id));
        });

        const perk_2_drop_down = computed(() => {
            return [{
                id: null,
                display_name: 'Select Perk',
            }].concat(makeDropdownData.value(perk_1_id));
        });

        const makeDropdownData = getter((otherPerkId) => {
            let perkGroups = FACTIONS[faction_id.value].faction_perk_groups;
            let result = Object.values(perkGroups);
            result = result.map((perkGroup) => {
                perkGroups = Object.assign({}, perkGroup);
                let perks = Object.values(perkGroup.perks);
                perks = perks.map((perk) => {
                    perk = Object.assign({}, perk);
                    perk.disabled = groupContainsPerkId(perkGroup.id, otherPerkId.value);

                    return perk;
                });
                perkGroups.perks = perks;

                return perkGroups;
            });
            return result;
        });

        return {
            perk_1_id,
            perk_2_id,
            faction_id,
            faction_display_name,
            perk_1_drop_down,
            perk_2_drop_down,
            clearInvalidPerks,
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