import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import ArmyPrintCards from '../components/ArmyPrint/ArmyPrintCards.vue';
import ArmyPrintRef from '../components/ArmyPrint/ArmyPrintRef.vue';
import ArmyPrintAll from '../components/ArmyPrint/ArmyPrintAll.vue';

export const PRINT_MODE_CARDS = 'PRINT_MODE_CARDS';
export const PRINT_MODE_REF = 'PRINT_MODE_REF';
export const PRINT_MODE_ALL = 'PRINT_MODE_ALL';

export const PRINT_MODES = {
    [[PRINT_MODE_CARDS]]: {
        display_name: 'Cards',
        component: ArmyPrintCards,
    },
    [[PRINT_MODE_REF]]: {
        display_name: 'Reference',
        component: ArmyPrintRef,
    },
    [[PRINT_MODE_ALL]]: {
        display_name: 'All',
        component: ArmyPrintAll,
    },
};
export const usePrintSettingsStore = defineStore('print-settings', () => {

        const one_team_per_page = ref(false);
        const include_army_name_on_cards = ref(true);

        const print_mode = ref(PRINT_MODE_CARDS);

        const print_mode_display_name = computed(() => PRINT_MODES[print_mode.value].display_name);

        function $reset() {
            one_team_per_page.value = false;
            include_army_name_on_cards.value = true;
        }

        function getPrintModeComponent() {
            return PRINT_MODES[print_mode.value].component;
        }

        return {
            one_team_per_page,
            include_army_name_on_cards,
            print_mode,
            print_mode_display_name,
            getPrintModeComponent,
            $reset,
        };
    },
    {
        persist: {
            pick: [
                'one_team_per_page',
                'include_army_name_on_cards',
            ],
        },
    });