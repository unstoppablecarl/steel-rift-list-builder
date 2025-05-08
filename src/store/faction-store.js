import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {
    BLO_DISGRACED_TRILLIONAIRE_TOP_END_HARDWARE,
    DWC_TOP_END_HARDWARE,
    FACTION_PERKS,
    isMatchingPerkOrCopy,
    OI_MATERIEL_STOCKPILES,
    RD_ADVANCED_HARDPOINT_DESIGN,
    UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN,
} from '../data/faction-perks.js';
import {find} from 'lodash';
import {getter} from './helpers/store-helpers.js';
import {
    DWC_TOP_END_HARDWARE_BONUS_TONS,
    FACTIONS,
    NO_FACTION,
    RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS,
} from '../data/factions.js';

export const useFactionStore = defineStore('faction', () => {

        const defaultFactionId = NO_FACTION;

        const perk_1_id = ref(null);
        const perk_2_id = ref(null);
        const faction_id = ref(defaultFactionId);

        function $reset() {
            faction_id.value = defaultFactionId;
            perk_1_id.value = null;
            perk_2_id.value = null;
        }

        const faction_display_name = computed(() => FACTIONS[faction_id.value].display_name);

        const perkBelongsToFaction = getter((perkId) => {
            return !!find(FACTIONS[faction_id.value].faction_perk_groups, (perkGroup) => {
                return perkGroup.perk_ids.includes(perkId);
            });
        });

        const hasPerk = getter((perkId) => perkId === perk_1_id.value || perkId === perk_2_id.value);

        const hasPerkOrCopiedPerk = getter((perkId) => {
            return isMatchingPerkOrCopy(perkId, perk_1_id.value) || isMatchingPerkOrCopy(perkId, perk_2_id.value);
        });

        function groupContainsPerkId(perkGroupId, perkId) {
            const perk_ids = FACTIONS[faction_id.value].faction_perk_groups[perkGroupId].perk_ids;
            return perk_ids.includes(perkId);
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

            return Object.values(perkGroups).map(({id, display_name, perk_ids}) => {
                const disabled = groupContainsPerkId(id, otherPerkId.value);

                return {
                    id,
                    display_name,
                    perks: perk_ids.map((perkId) => {
                        const {
                            id,
                            display_name,
                        } = FACTION_PERKS[perkId];
                        return {
                            id,
                            display_name,
                            disabled,
                        };
                    }),
                };
            });
        });

        const hasAdvancedHardPoints = computed(() => {
            return hasPerkOrCopiedPerk.value(RD_ADVANCED_HARDPOINT_DESIGN);
        });

        const advancedHardPointsInfo = computed(() => {
            if (hasPerk.value(RD_ADVANCED_HARDPOINT_DESIGN)) {
                return FACTION_PERKS[RD_ADVANCED_HARDPOINT_DESIGN];
            }
            if (hasPerk.value(UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN)) {
                return FACTION_PERKS[UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN];
            }
        });

        const hasTopEndHardware = computed(() => {
            return hasPerkOrCopiedPerk.value(DWC_TOP_END_HARDWARE);
        });
        const topEndHardwareInfo = computed(() => {
            if (hasPerk.value(DWC_TOP_END_HARDWARE)) {
                return FACTION_PERKS[DWC_TOP_END_HARDWARE];
            }
            if (hasPerk.value(BLO_DISGRACED_TRILLIONAIRE_TOP_END_HARDWARE)) {
                return FACTION_PERKS[BLO_DISGRACED_TRILLIONAIRE_TOP_END_HARDWARE];
            }
        });

        const advancedHardPointsBonusSlots = computed(() => RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS);
        const topEndHardwareBonusTons = computed(() => DWC_TOP_END_HARDWARE_BONUS_TONS);

        const materielStockpilesPerk = computed(() => {
            return FACTION_PERKS[OI_MATERIEL_STOCKPILES];
        });

        return {
            perk_1_id,
            perk_2_id,
            faction_id,
            faction_display_name,
            perk_1_drop_down,
            perk_2_drop_down,
            clearInvalidPerks,
            hasAdvancedHardPoints,
            advancedHardPointsInfo,
            advancedHardPointsBonusSlots,
            topEndHardwareBonusTons,
            hasTopEndHardware,
            topEndHardwareInfo,
            materielStockpilesPerk,
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