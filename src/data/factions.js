import {listToDropDown, makeFrozenStaticListIds} from './data-helpers.js';
import {SA_ASSET_PROTECTION, SA_TERRITORIAL, SA_WILDCARDS} from './secondary-agendas.js';

export const NO_FACTION = 'NO_FACTION';
export const AUTHORITIES = 'AUTHORITIES';
export const CORPORATIONS = 'CORPORATIONS';
export const FREELANCERS = 'FREELANCERS';
export const MILITARY_TRAINING = 'MILITARY_TRAINING';
export const MT_COORDINATED_ASSAULTS = 'MT_COORDINATED_ASSAULTS';
export const MT_COVERED_ADVANCES = 'MT_COVERED_ADVANCES';
export const MT_ELITE_PILOT_PROGRAM = 'MT_ELITE_PILOT_PROGRAM';
export const POLITICAL_PRIORITY = 'POLITICAL_PRIORITY';
export const PP_EXPANSIONIST = 'PP_EXPANSIONIST';
export const PP_PROTECTIVIST = 'PP_PROTECTIVIST';
export const PP_IDEOLOGICAL = 'PP_IDEOLOGICAL';
export const OLD_INFRASTRUCTURE = 'OLD_INFRASTRUCTURE';
export const OI_ORBITAL_STOCKPILES = 'OI_ORBITAL_STOCKPILES';
export const OI_STRATEGIC_ENERGY_RESERVES = 'OI_STRATEGIC_ENERGY_RESERVES';
export const OI_MATERIEL_STOCKPILES = 'OI_MATERIEL_STOCKPILES';
export const ESPIONAGE = 'ESPIONAGE';
export const E_EMBEDDED_INFORMANTS = 'E_EMBEDDED_INFORMANTS';
export const E_PAID_SABOTEURS = 'E_PAID_SABOTEURS';
export const E_EXHAUSTIVE_INTEL_GATHERING = 'E_EXHAUSTIVE_INTEL_GATHERING';
export const RESEARCH_AND_DEVELOPMENT = 'RESEARCH_AND_DEVELOPMENT';
export const RD_ADVANCED_HARDPOINT_DESIGN = 'RD_ADVANCED_HARDPOINT_DESIGN';
export const RD_ADVANCED_ENERGY_MANAGEMENT_SYSTEMS = 'RD_ADVANCED_ENERGY_MANAGEMENT_SYSTEMS';
export const RD_ADVANCED_STRUCTURAL_COMPONENTS = 'RD_ADVANCED_STRUCTURAL_COMPONENTS';
export const DEEP_WAR_CHEST = 'DEEP_WAR_CHEST';
export const DWC_TOP_END_HARDWARE = 'DWC_TOP_END_HARDWARE';
export const DWC_OUTRAGEOUS_SUPPORT_BUDGET = 'DWC_OUTRAGEOUS_SUPPORT_BUDGET';
export const DWC_PURCHASED_OUTCOMES = 'DWC_PURCHASED_OUTCOMES';
export const ROGUE_AGENCY = 'ROGUE_AGENCY';
export const RA_UNPREDICTABLE_GAMBITS = 'RA_UNPREDICTABLE_GAMBITS';
export const RA_RECKLESS_PILOTING = 'RA_RECKLESS_PILOTING';
export const RA_BAIT_AND_SWITCH = 'RA_BAIT_AND_SWITCH';
export const UNDERWORLD_AFFILIATIONS = 'UNDERWORLD_AFFILIATIONS';
export const UA_NETWORK_HACKERS = 'UA_NETWORK_HACKERS';
export const UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN = 'UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN';
export const UA_TECH_PIRATES_ADVANCED_ENERGY_MANAGEMENT_SYSTEM = 'UA_TECH_PIRATES_ADVANCED_ENERGY_MANAGEMENT_SYSTEM';
export const UA_TECH_PIRATES_ADVANCED_STRUCTURAL_COMPONENTS = 'UA_TECH_PIRATES_ADVANCED_STRUCTURAL_COMPONENTS';

export const UA_INTIMIDATION_TACTICS = 'UA_INTIMIDATION_TACTICS';
export const BIG_LEAGUE_ORIGINS = 'BIG_LEAGUE_ORIGINS';
export const BLO_EX_MILITARY_VETERANS = 'BLO_EX_MILITARY_VETERANS';
export const BLO_POLITICAL_EXTREMISTS = 'BLO_POLITICAL_EXTREMISTS';
export const BLO_DISGRACED_TRILLIONAIRE = 'BLO_DISGRACED_TRILLIONAIRE';
export const DWC_TOP_END_HARDWARE_BONUS_TONS = -2;
export const RD_ADVANCED_HARDPOINT_DESIGN_BONUS_SLOTS = -1;
export const FACTIONS = makeFrozenStaticListIds({
    [[NO_FACTION]]: {
        display_name: 'None',
        faction_perk_groups: makeFrozenStaticListIds({}),
    },
    [[AUTHORITIES]]: {
        display_name: 'Authorities',
        secondary_agenda_id: SA_TERRITORIAL,
        faction_perk_groups: makeFrozenStaticListIds({
            [[MILITARY_TRAINING]]: {
                display_name: 'Military Training',
                perks: makeFrozenStaticListIds({
                    [[MT_COORDINATED_ASSAULTS]]: {
                        display_name: 'Coordinated Assaults',
                    },
                    [[MT_COVERED_ADVANCES]]: {
                        display_name: 'Covered Advances',
                    },
                    [[MT_ELITE_PILOT_PROGRAM]]: {
                        display_name: 'Elite Pilot Program',
                    },
                }),
            },
            [[POLITICAL_PRIORITY]]: {
                display_name: 'Political Priority',
                perks: makeFrozenStaticListIds({
                    [[PP_EXPANSIONIST]]: {
                        display_name: 'Expansionist',
                    },
                    [[PP_PROTECTIVIST]]: {
                        display_name: 'Protectivist',
                    },
                    [[PP_IDEOLOGICAL]]: {
                        display_name: 'Ideological',
                    },
                }),
            },
            [[OLD_INFRASTRUCTURE]]: {
                display_name: 'Old Infrastructure',
                perks: makeFrozenStaticListIds({
                    [[OI_ORBITAL_STOCKPILES]]: {
                        display_name: 'Orbital Stockpiles',
                    },
                    [[OI_STRATEGIC_ENERGY_RESERVES]]: {
                        display_name: 'Strategic Energy Reserves',
                    },
                    [[OI_MATERIEL_STOCKPILES]]: {
                        display_name: 'Materiel Stockpiles',
                    },
                }),
            },
        }),
    },
    [[CORPORATIONS]]: {
        display_name: 'Corporations',
        secondary_agenda_id: SA_ASSET_PROTECTION,
        faction_perk_groups: makeFrozenStaticListIds({
            [[ESPIONAGE]]: {
                display_name: 'Espionage',
                perks: makeFrozenStaticListIds({
                    [[E_EMBEDDED_INFORMANTS]]: {
                        display_name: 'Embedded Informants',
                    },
                    [[E_PAID_SABOTEURS]]: {
                        display_name: 'Paid Saboteurs',
                    },
                    [[E_EXHAUSTIVE_INTEL_GATHERING]]: {
                        display_name: 'Exhaustive Intel Gathering',
                    },
                }),
            },
            [[RESEARCH_AND_DEVELOPMENT]]: {
                display_name: 'Research and Development',
                perks: makeFrozenStaticListIds({
                    [[RD_ADVANCED_HARDPOINT_DESIGN]]: {
                        display_name: 'Advanced Hardpoint Design',
                    },
                    [[RD_ADVANCED_ENERGY_MANAGEMENT_SYSTEMS]]: {
                        display_name: 'Advanced Energy Management Systems',
                    },
                    [[RD_ADVANCED_STRUCTURAL_COMPONENTS]]: {
                        display_name: 'Advanced Structural Components',
                    },
                }),
            },
            [[DEEP_WAR_CHEST]]: {
                display_name: 'Deep War Chest',
                perks: makeFrozenStaticListIds({
                    [[DWC_TOP_END_HARDWARE]]: {
                        display_name: 'Top End Hardware',
                    },
                    [[DWC_OUTRAGEOUS_SUPPORT_BUDGET]]: {
                        display_name: 'Outrageous Support Budget',
                    },
                    [[DWC_PURCHASED_OUTCOMES]]: {
                        display_name: 'Purchased Outcomes',
                    },
                }),
            },
        }),
    },
    [[FREELANCERS]]: {
        display_name: 'Freelancers',
        secondary_agenda_id: SA_WILDCARDS,
        faction_perk_groups: makeFrozenStaticListIds({
            [[ROGUE_AGENCY]]: {
                display_name: 'Rogue Agency',
                perks: makeFrozenStaticListIds({
                    [[RA_UNPREDICTABLE_GAMBITS]]: {
                        display_name: 'Unpredictable Gambits',
                    },
                    [[RA_RECKLESS_PILOTING]]: {
                        display_name: 'Reckless Piloting',
                    },
                    [[RA_BAIT_AND_SWITCH]]: {
                        display_name: 'Bait & Switch',
                    },
                }),
            },
            [[UNDERWORLD_AFFILIATIONS]]: {
                display_name: 'Underworld Affiliations',
                perks: makeFrozenStaticListIds({
                    [[UA_NETWORK_HACKERS]]: {
                        display_name: 'Network Hackers',
                    },
                    [[UA_TECH_PIRATES_ADVANCED_HARDPOINT_DESIGN]]: {
                        display_name: 'Tech Pirates: Advanced Hardpoint Design',
                    },
                    [[UA_TECH_PIRATES_ADVANCED_ENERGY_MANAGEMENT_SYSTEM]]: {
                        display_name: 'Tech Pirates: Advanced Energy Management System Design',
                    },
                    [[UA_TECH_PIRATES_ADVANCED_STRUCTURAL_COMPONENTS]]: {
                        display_name: 'Tech Pirates: Advanced Structural Components',
                    },
                    [[UA_INTIMIDATION_TACTICS]]: {
                        display_name: 'Intimidation Tactics',
                    },
                }),
            },
            [[BIG_LEAGUE_ORIGINS]]: {
                display_name: 'Big League Origins',
                perks: makeFrozenStaticListIds({
                    [[BLO_EX_MILITARY_VETERANS]]: {
                        display_name: 'Ex-Military Veterans',
                    },
                    [[BLO_POLITICAL_EXTREMISTS]]: {
                        display_name: 'Political Extremists',
                    },
                    [[BLO_DISGRACED_TRILLIONAIRE]]: {
                        display_name: 'Disgraced Trillionaire',
                    },
                }),
            },
        }),
    },
});

export const FACTIONS_DROP_DOWN = listToDropDown(FACTIONS);
