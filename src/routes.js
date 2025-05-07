import ArmyEdit from './components/ArmyEdit.vue';
import ArmyPrint from './components/ArmyPrint.vue';

export const ROUTE_HOME = '/';
export const ROUTE_PRINT = '/print';

export const routes = {
    [[ROUTE_HOME]]: ArmyEdit,
    [[ROUTE_PRINT]]: ArmyPrint,
};