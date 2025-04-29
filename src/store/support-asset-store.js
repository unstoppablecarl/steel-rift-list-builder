import {defineStore} from 'pinia';
import {computed, reactive, ref} from 'vue';
import {sumBy} from 'lodash';
import {SUPPORT_ASSETS} from '../data/support-assets.js';
import {useArmyListStore} from './army-list-store.js';
import {findItemIndexById} from '../helpers/collection-helper.js';

export const useSupportAssetStore = defineStore('support-asset', () => {

        const armyList = useArmyListStore();

        const support_assets_ids = reactive([]);
        const custom_max_support_assets = ref(null);

        function $reset() {
            support_assets_ids.value = [];
            custom_max_support_assets.value = null;
        }

        const support_assets = computed(() => {
            return support_assets_ids.map(id => {
                return SUPPORT_ASSETS[id];
            });
        });

        const support_assets_drop_down = computed(() => Object.values(SUPPORT_ASSETS));

        const used_tons = computed(() => sumBy(support_assets.value, 'cost'));

        const used_support_assets = computed(() => support_assets_ids.length);
        const max_support_assets_based_on_tons = computed(() => {
            if (armyList.max_tons >= 350) {
                return 5;
            }
            if (armyList.max_tons >= 200) {
                return 3;
            }
            if (armyList.max_tons >= 150) {
                return 2;
            }
            if (armyList.max_tons >= 100) {
                return 1;
            }
            return 0;
        });

        const max_support_assets = computed(() => {
            if (custom_max_support_assets.value) {
                return custom_max_support_assets.value;
            }
            return max_support_assets_based_on_tons.value;
        });

        function removeSupportAssetId(id) {
            let index = findItemIndexById(support_assets_ids, id);
            support_assets_ids.splice(index, 1);
        }

        function canAddSupportAssetId(id) {
            return !support_assets_ids.includes(id);
        }

        function addSupportAsset(id) {
            support_assets_ids.push(id);
        }

        return {
            support_assets_ids,
            support_assets,
            used_tons,
            used_support_assets,
            max_support_assets_based_on_tons,
            max_support_assets,
            custom_max_support_assets,
            canAddSupportAssetId,
            removeSupportAssetId,
            addSupportAsset,
            support_assets_drop_down,
            $reset,
        };
    },
    {
        persist: true,
    },
);