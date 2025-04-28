import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import {useMechStore} from './mech-store.js';

export const useArmyListStore = defineStore('army-list', () => {

        const mechStore = useMechStore();

        const total_tons = computed(() => {

        });
        const max_tons = ref(20);

        function setPerkId(index, perkId) {
            perk_ids[index] = perkId;
        }

        function hasPerk(perkId) {
            return Object.values(perk_ids).includes(perkId);
        }

        return {
            faction_id,
            faction_display_name,
            perk_groups,
            perk_ids,
            hasPerk,
            setPerkId,
        };
    },
    {
        persist: true,
    });