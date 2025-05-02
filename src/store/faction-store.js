import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {
    CORPORATIONS,
    DEEP_WAR_CHEST,
    DWC_TOP_END_HARDWARE,
    DWC_TOP_END_HARDWARE_BONUS_TONS,
    FACTIONS,
    FREELANCERS,
    NO_FACTION,
    RD_ADVANCED_HARDPOINT_DESIGN,
    RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS,
    RESEARCH_AND_DEVELOPMENT,
    UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN,
    UNDERWORLD_AFFILIATIONS,
} from '../data/factions.js';
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

        function groupContainsPerkId(perkGroupId, perkId) {
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

        const hasAdvancedHardPoints = computed(() => {
            return hasPerk.value(RD_ADVANCED_HARDPOINT_DESIGN) ||
                hasPerk.value(UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN);
        });
        const advancedHardPointsLabel = computed(() => {
            if (hasPerk.value(RD_ADVANCED_HARDPOINT_DESIGN)) {
                return FACTIONS[CORPORATIONS]
                    .faction_perk_groups[RESEARCH_AND_DEVELOPMENT]
                    .perks[RD_ADVANCED_HARDPOINT_DESIGN]
                    .display_name;
            }
            if (hasPerk.value(UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN)) {
                return FACTIONS[FREELANCERS]
                    .faction_perk_groups[UNDERWORLD_AFFILIATIONS]
                    .perks[UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN]
                    .display_name;
            }
        });

        const hasTopEndHardware = computed(() => hasPerk.value(DWC_TOP_END_HARDWARE));
        const topEndHardwareLabel = computed(() => {
            return FACTIONS[CORPORATIONS]
                .faction_perk_groups[DEEP_WAR_CHEST]
                .perks[DWC_TOP_END_HARDWARE]
                .display_name;
        });

        const advancedHardPointsBonusSlots = computed(() => RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS);
        const topEndHardwareBonusTons = computed(() => DWC_TOP_END_HARDWARE_BONUS_TONS);

        return {
            perk_1_id,
            perk_2_id,
            faction_id,
            faction_display_name,
            perk_1_drop_down,
            perk_2_drop_down,
            clearInvalidPerks,
            hasAdvancedHardPoints,
            advancedHardPointsLabel,
            advancedHardPointsBonusSlots,
            topEndHardwareBonusTons,
            hasTopEndHardware,
            topEndHardwareLabel,
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