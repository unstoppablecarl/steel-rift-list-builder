import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {useMechStore} from './mech-store.js';
import {GAME_SIZES, getGameSizeId} from '../data/game-sizes.js';
import {find} from 'lodash';
import {MINEFIELD_DRONE_CARRIER_SYSTEM} from '../data/mech-upgrades.js';
import {MINE_DRONE_BARRAGE} from '../data/support-asset-weapons.js';
import {useSupportAssetWeaponsStore} from './support-asset-weapons-store.js';
import {useSupportAssetCountsStore} from './support-asset-count-store.js';

export const useArmyListStore = defineStore('army-list', () => {
        const supportAssetWeaponsStore = useSupportAssetWeaponsStore();

        const defaultArmyName = '';
        const defaultMaxTons = 100;

        const name = ref(defaultArmyName);
        const max_tons = ref(defaultMaxTons);

        function $reset() {
            name.value = defaultArmyName;
            max_tons.valie = defaultMaxTons;
        }

        const mechStore = useMechStore();
        const supportAssetCounts = useSupportAssetCountsStore();

        const game_size_id = computed(() => getGameSizeId(max_tons.value));
        const game_size_info = computed(() => GAME_SIZES[game_size_id.value]);

        const used_tons = computed(() => {
            return mechStore.totalTons +
                supportAssetCounts.used_tons;
        });

        const includes_mine_drones = computed(() => {

            const match = find(mechStore.mechs, (mech) => {
                return find(mech.upgrades, {upgrade_id: MINEFIELD_DRONE_CARRIER_SYSTEM});
            });

            if (match) {
                return true;
            }

            return supportAssetWeaponsStore.hasSupportAssetId(MINE_DRONE_BARRAGE);
        });

        return {
            name,
            used_tons,
            max_tons,
            game_size_id,
            game_size_info,
            includes_mine_drones,
            $reset,
        };
    },
    {
        persist: true,
    });