import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {useMechStore} from './mech-store.js';
import {useSupportAssetStore} from './support-asset-store.js';
import {GAME_SIZES, getGameSizeId} from '../data/game-sizes.js';

export const useArmyListStore = defineStore('army-list', () => {

        const defaultArmyName = '';
        const defaultMaxTons = 100;

        const name = ref(defaultArmyName);
        const max_tons = ref(defaultMaxTons);

        function $reset() {
            name.value = defaultArmyName;
            max_tons.valie = defaultMaxTons;
        }

        const mechStore = useMechStore();
        const supportAssets = useSupportAssetStore();

        const game_size_id = computed(() => getGameSizeId(max_tons.value));
        const game_size_info = computed(() => GAME_SIZES[game_size_id.value]);

        const used_tons = computed(() => {
            return mechStore.totalTons +
                supportAssets.used_tons;
        });

        return {
            name,
            used_tons,
            max_tons,
            game_size_id,
            game_size_info,
            $reset,
        };
    },
    {
        persist: true,
    });