import {defineStore} from 'pinia';
import {computed, reactive, ref, watch} from 'vue';
import {FACTIONS, NO_FACTION} from '../data/factions.js';

export const useFactionStore = defineStore('faction', () => {

    const faction_id = ref(NO_FACTION);
    const faction_display_name = computed(() => FACTIONS[faction_id.value].display_name);
    const perk_ids = reactive({});

    const perk_groups = computed(() => {
        let perkGroups = FACTIONS[faction_id.value].faction_perk_groups;

        let result = Object.values(perkGroups);
        result.forEach((perkGroup) => {
            perkGroup.perks = Object.values(perkGroup.perks);
        });

        return result;
    });

    watch(faction_id, (newValue) => {
        perk_groups.value.forEach((perkGroup, index) => {
            perk_ids[index] = Object.values(perkGroup.perks)[0].id
        })
    })

    function setPerkId(index, perkId) {
        perk_ids[index] = perkId;
    }

    function hasPerk(perkId){
        perk_ids.value.includes(perkId)
    }

    return {
        faction_id,
        faction_display_name,
        perk_groups,
        perk_ids,
        hasPerk,
        setPerkId
    };
});