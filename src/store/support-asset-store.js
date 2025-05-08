import {defineStore, storeToRefs} from 'pinia';
import {computed, ref, watch} from 'vue';
import {indexOf, sumBy} from 'lodash';
import {SUPPORT_ASSETS} from '../data/support-assets.js';
import {useArmyListStore} from './army-list-store.js';
import {useFactionStore} from './faction-store.js';
import {
    AUTHORITIES,
    CORPORATIONS,
    DEEP_WAR_CHEST,
    DWC_OUTRAGEOUS_SUPPORT_BUDGET,
    FACTIONS,
    OI_ORBITAL_STOCKPILES,
    OLD_INFRASTRUCTURE,
} from '../data/factions.js';
import {TRAIT_LIMITED, traitDisplayName, WEAPON_TRAITS} from '../data/weapon-traits.js';
import {GAME_SIZES} from '../data/game-sizes.js';

export const useSupportAssetStore = defineStore('support-asset', () => {

        const armyList = useArmyListStore();
        const factionStore = useFactionStore();

        const outrageous_budget_perk_support_asset_id = ref(null);
        const support_asset_ids = ref([]);
        const custom_max_support_assets = ref(null);

        function $reset() {
            support_asset_ids.value = [];
            custom_max_support_assets.value = null;
            outrageous_budget_perk_support_asset_id.value = null;
        }

        const support_assets_info = computed(() => {
            return Object.values(SUPPORT_ASSETS)
                .map((asset) => {
                    asset = Object.assign({}, asset);
                    asset.notes = [];
                    asset.traits = asset.traits.map((trait) => Object.assign({}, trait));

                    if (factionStore.hasPerk(OI_ORBITAL_STOCKPILES)) {
                        asset.traits.forEach((trait) => {
                            if (trait.id == TRAIT_LIMITED) {
                                trait.number += 1;
                            }
                        });
                        const note = FACTIONS[AUTHORITIES]
                            .faction_perk_groups[OLD_INFRASTRUCTURE]
                            .perks[OI_ORBITAL_STOCKPILES]
                            .display_name;

                        asset.notes.push(`${note} Limit(+1)`);
                    }

                    if (factionStore.hasPerk(DWC_OUTRAGEOUS_SUPPORT_BUDGET)) {
                        if (asset.id == outrageous_budget_perk_support_asset_id.value) {
                            asset.cost = 0;
                            if (asset.damage > 0) {
                                asset.damage -= 1;
                            }

                            asset.traits.forEach((trait) => {
                                if (trait.number) {
                                    trait.number -= 1;
                                }
                            });

                            const note = FACTIONS[CORPORATIONS]
                                .faction_perk_groups[DEEP_WAR_CHEST]
                                .perks[DWC_OUTRAGEOUS_SUPPORT_BUDGET]
                                .display_name;

                            asset.notes.push(note);
                        }
                    }

                    asset.traits.forEach(trait => Object.assign(
                        trait,
                        WEAPON_TRAITS[trait.id],
                        {display_name: traitDisplayName(trait)},
                    ));

                    return asset;
                });
        });

        const support_assets = computed(() => {
            return support_assets_info.value.filter(item => {
                return support_asset_ids.value.includes(item.id);
            });
        });

        const available_support_assets = computed(() => {
            return support_assets_info.value.filter(item => {
                return !support_asset_ids.value.includes(item.id);
            });
        });
        const used_tons = computed(() => sumBy(support_assets.value, 'cost'));
        const used_support_assets = computed(() => support_asset_ids.value.length);
        const max_support_assets_based_on_tons = computed(() => {
            const sizeId = armyList.game_size_id;
            return GAME_SIZES[sizeId].max_support_assets;
        });

        const max_support_assets = computed(() => {
            if (custom_max_support_assets.value) {
                return custom_max_support_assets.value;
            }
            return max_support_assets_based_on_tons.value;
        });

        function removeSupportAssetId(id) {
            let index = indexOf(support_asset_ids.value, id);
            support_asset_ids.value.splice(index, 1);

            syncOutrageousSupportBudget();
        }

        function addSupportAsset(id) {
            support_asset_ids.value.push(id);
        }

        function syncOutrageousSupportBudget() {
            if (!support_asset_ids.value.includes(outrageous_budget_perk_support_asset_id.value)) {
                outrageous_budget_perk_support_asset_id.value = null;
            }
        }

        const {perk_1_id, perk_2_id} = storeToRefs(factionStore);

        function syncOutrageousSupportBudgetPerk() {
            if (!factionStore.hasPerk(DWC_OUTRAGEOUS_SUPPORT_BUDGET)) {
                outrageous_budget_perk_support_asset_id.value = null;
            }
        }

        watch(perk_1_id, syncOutrageousSupportBudgetPerk);
        watch(perk_2_id, syncOutrageousSupportBudgetPerk);
        return {
            support_asset_ids,
            support_assets,
            used_tons,
            used_support_assets,
            max_support_assets_based_on_tons,
            max_support_assets,
            custom_max_support_assets,
            removeSupportAssetId,
            addSupportAsset,
            support_assets_info,
            available_support_assets,
            outrageous_budget_perk_support_asset_id,
            $reset,
        };
    },
    {
        persist: true,
        afterHydrate() {
            console.log('after');
        },
    },
);