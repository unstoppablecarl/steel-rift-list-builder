export const SA_MISSION_MOMENTUM = 'SA_MISSION_MOMENTUM';
export const SA_DONT_GIVE_AN_INCH = 'SA_DONT_GIVE_AN_INCH';
export const SA_DEATH_FROM_ABOVE = 'SA_DEATH_FROM_ABOVE';
export const SA_FIRE_FOR_EFFECT = 'SA_FIRE_FOR_EFFECT';
export const SA_WILDCARDS = 'SA_WILDCARDS';
export const SA_ASSET_PROTECTION = 'SA_ASSET_PROTECTION';
export const SA_TERRITORIAL = 'SA_TERRITORIAL';

export const SECONDARY_AGENDAS = {
    [[SA_MISSION_MOMENTUM]]: {
        display_name: 'Mission Momentum',
        description: 'At the end of the Mission, score an additional 1 VP on turns 2 and 3 if your Force scored VP from the primary Mission Objective.',
    },
    [[SA_DONT_GIVE_AN_INCH]]: {
        display_name: 'Don’t Give an Inch',
        description: 'At the end of the Mission, score 1 VP if there are more Friendly HE-Vs than Enemy HE-Vs within 12” of your Deployment Corners or Edge. In the case of multiple Corners, there must be a friendly HE-V in range of all of them for this Agenda to be scored.',
    },
    [[SA_DEATH_FROM_ABOVE]]: {
        display_name: 'Death from Above',
        description: 'At the end of the Mission, score 1 VP if 2 or more enemy HE-Vs have been destroyed while resolving an Off-Table Asset called in using a Target Designator from a Unit on this Team.',
    },
    [[SA_FIRE_FOR_EFFECT]]: {
        display_name: 'Fire for Effect',
        description: 'At the end of the Mission, score 1 VP if 2 or more enemy HE-Vs have been destroyed while resolving a Weapon System actively using the Smart Trait for Line of Sight.',
    },
    [[SA_WILDCARDS]]: {
        display_name: 'Wildcards',
        description: 'Score 1 VP at the end of the Mission if over the course of the game two or more enemy HE-Vs were destroyed during an Order while you are the Active Player under the effect of any of the following Perks: Unpredictable Gambits, Reckless Piloting, Network Hackers or Intimidation Tactics.',
    },
    [[SA_ASSET_PROTECTION]]: {
        display_name: 'Asset Protection',
        description: 'Score 1 VP at the end of the Mission if the opposing Force has had more overall Tonnage in Units destroyed than your Force has.',
    },
    [[SA_TERRITORIAL]]: {
        display_name: 'Territorial',
        description: 'Score 1 VP if there are no active enemy Units within 10” of any of your deployment edges or corners at the end of the Mission.',
    },
};