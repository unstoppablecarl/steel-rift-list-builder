import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {useMechStore} from './mech-store.js';

export const useArmyListStore = defineStore('army-list', () => {

        const name = ref('Army Name');

        const mechStore = useMechStore();

        const used_tons = computed(() => {
            return mechStore.totalTons;
        });

        const max_tons = ref(100);

        return {
            name,
            used_tons,
            max_tons,
        };
    },
    {
        persist: true,
    });