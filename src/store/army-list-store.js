import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {useMechStore} from './mech-store.js';
import {useSupportAssetStore} from './support-asset-store.js';

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

        const used_tons = computed(() => {
            return mechStore.totalTons +
                supportAssets.used_tons;
        });

        return {
            name,
            used_tons,
            max_tons,
            $reset,
        };
    },
    {
        persist: true,
    });