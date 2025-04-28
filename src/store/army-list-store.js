import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {useMechStore} from './mech-store.js';

export const useArmyListStore = defineStore('army-list', () => {

        const name = ref('');

        const mechStore = useMechStore();

        const total_tons = computed(() => {

        });
        const max_tons = ref(20);

        return {
            name,
            total_tons,
            max_tons,
        };
    },
    {
        persist: true,
    });