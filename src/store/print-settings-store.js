import {defineStore} from 'pinia';
import {ref} from 'vue';

export const usePrintSettingsStore = defineStore('print-settings', () => {

        const one_team_per_page = ref(false);
        const include_army_name_on_cards = ref(true);

        function $reset() {
            one_team_per_page.value = false;
            include_army_name_on_cards.value = true;
        }

        return {
            one_team_per_page,
            include_army_name_on_cards,
            $reset,
        };
    },
    {
        persist: true,
    });