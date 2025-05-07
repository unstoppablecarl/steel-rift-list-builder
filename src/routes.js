import ArmyEdit from './components/ArmyEdit.vue';
import ArmyCardsPrint from './components/ArmyCardsPrint.vue';
import ArmyRefPrint from './components/ArmyRefPrint.vue';

export const ROUTE_HOME = '/';
export const ROUTE_PRINT_CARDS = '/print-cards';
export const ROUTE_PRINT_REF = '/print-reference';

export const routes = {
    [[ROUTE_HOME]]: ArmyEdit,
    [[ROUTE_PRINT_CARDS]]: ArmyCardsPrint,
    [[ROUTE_PRINT_REF]]: ArmyRefPrint,
};