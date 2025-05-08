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
                        description: 'Once per Game, after you have activated an HE-V (but not a Support Asset or Unit), you may remain the Active Player and immediately activate a different HE-V that does not have an Activated Marker. They may only complete a single Order. Play then passes as normal.',
                    },
                    [[MT_COVERED_ADVANCES]]: {
                        display_name: 'Covered Advances',
                        description: 'Once per Game Turn, if you are not the Active Player and an allied HE-V or Support Asset Unit is targeted by an Engage Order, another allied HE-V in Line of Sight of the Active Unit may Return Fire instead of the Target Unit. The targeted unit still makes the Defense Roll and may re-roll dice of 1 as if it were Returning Fire, but it is the covering HE-V which receives the Activated token and may interrupt to Engage the Active Unit once its Engage Order is resolved.',
                    },
                    [[MT_ELITE_PILOT_PROGRAM]]: {
                        display_name: 'Elite Pilot Program',
                        description: 'Once per Game Turn,after the opposing Commander selects a unit to Activate and declares their Order, you may rotate a single HE-V up to 90°.',
                    },
                }),
            },
            [[POLITICAL_PRIORITY]]: {
                display_name: 'Political Priority',
                perks: makeFrozenStaticListIds({
                    [[PP_EXPANSIONIST]]: {
                        display_name: 'Expansionist',
                        description: 'In any Mission that requires calculation of Tonnage destroyed during a turn, any destroyed enemy HE-Vs count as 5 Tons more for determining which Commander has destroyed more. In any Mission that requires calculation of Tonnage in a Mission area during a turn, all enemy HE-Vs that have sustained damage are considered to be 5 Tons lighter for determining which Commander achieves the objective.',
                    },
                    [[PP_PROTECTIVIST]]: {
                        display_name: 'Protectivist',
                        description: 'In any Mission that requires calculation of Tonnage in the Mission area during a turn, all allied HE-V’s are considered to be 5 Tons heavier for determining which Commander achieves the objective. In any Mission that requires calculation of Tonnage destroyed during a mission, any enemy HE-Vs which are more than 12” from all friendly deployment edges which took damage that turn count as 5 Tons destroyed each.',
                    },
                    [[PP_IDEOLOGICAL]]: {
                        display_name: 'Ideological',
                        description: 'Once per Game, when the Enemy Commander selects a Unit or Support Asset to Activate, you may use faction propaganda to cause them to hesitate. All numerical values of Movement, Jump, Smash and Engage Damage Rating and Traits are halved, rounding up, for the duration of that Order. If the Order does not have any numeric values (such as Lock On), then its effects are simply canceled instead.',
                    },
                }),
            },
            [[OLD_INFRASTRUCTURE]]: {
                display_name: 'Old Infrastructure',
                perks: makeFrozenStaticListIds({
                    [[OI_ORBITAL_STOCKPILES]]: {
                        display_name: 'Orbital Stockpiles',
                        description: 'Off-Table Support Assets with the Limited trait have this value increased by 1.',
                    },
                    [[OI_STRATEGIC_ENERGY_RESERVES]]: {
                        display_name: 'Strategic Energy Reserves',
                        description: 'During the first Game Turn, increase the speed of all allied HE-V’s for the Move or Jump Order by 2”. For the duration of the first turn, the Move order may be taken twice.',
                    },
                    [[OI_MATERIEL_STOCKPILES]]: {
                        display_name: 'Materiel Stockpiles',
                        description: 'Increase the Limited trait of Mines, Rocket Packs and Missiles by 1 for all allied HE-Vs.',
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
                        description: 'During Deployment, the enemy Commander must deploy 2 Units or Support Units for every 1 allied Unit your force deploys.',
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
