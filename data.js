
	const autharray = ["faction_authorities_mt", "faction_authorities_pp", "faction_authorities_oi"];
	const corparray = ["faction_corporations_e", "faction_corporations_rnd", "faction_corporations_dwc"];
	const freearray = ["faction_freelancers_ra", "faction_freelancers_ua", "faction_freelancers_blo"];
	const perksthatsteal = ["Tech Pirates", "Ex-Military Veterans", "Political Extremists", "Disgraced Trillionaire"];
	const stolenperks = ["faction_stolen_corporations_rnd", "faction_stolen_authorities_mt", "faction_stolen_authorities_pp", "faction_stolen_corporations_dwc"];

	const weaponlistJSON = '[{"Attachment":"","Damage":{"Light":"","Medium":"","Heavy":"","Ultra":""},"Cost":{"Light":"","Medium":"","Heavy":"","Ultra":""},"Range":{"Light":"","Medium":"","Heavy":"","Ultra":""},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"","Medium":"","Heavy":"","Ultra":""},"Type":"","Unique":""},{"Attachment":"Auto-Cannon","Damage":{"Light":"3","Medium":"4","Heavy":"5","Ultra":"6"},"Cost":{"Light":3,"Medium":4,"Heavy":5,"Ultra":6},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Kinetic"],"Medium":["Kinetic"],"Heavy":["Kinetic"],"Ultra":["Kinetic"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Howitzer","Damage":{"Light":"1","Medium":"2","Heavy":"3","Ultra":"4"},"Cost":{"Light":2,"Medium":3,"Heavy":4,"Ultra":5},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Blast 3","Kinetic"],"Medium":["Blast 3","Kinetic"],"Heavy":["Blast 3","Kinetic"],"Ultra":["Blast 3","Kinetic"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Laser","Damage":{"Light":"2","Medium":"2","Heavy":"2","Ultra":"2"},"Cost":{"Light":3,"Medium":4,"Heavy":5,"Ultra":7},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["AP(1)","Draining"],"Medium":["AP(1)","Draining"],"Heavy":["AP(2)","Draining"],"Ultra":["AP(3)","Draining"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Melee Weapon","Damage":{"Light":"1","Medium":"1","Heavy":"2","Ultra":"2"},"Cost":{"Light":1,"Medium":2,"Heavy":3,"Ultra":4},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Melee"],"Medium":["Melee"],"Heavy":["Melee"],"Ultra":["Melee"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Missiles","Damage":{"Light":"2","Medium":"4","Heavy":"6","Ultra":"8"},"Cost":{"Light":2,"Medium":3,"Heavy":4,"Ultra":5},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Smart"],"Medium":["Smart"],"Heavy":["Smart"],"Ultra":["Smart"]},"Limited":{"Light":3,"Medium":3,"Heavy":3,"Ultra":3},"Type":"Weapon","Unique":""},{"Attachment":"Paritcle Cannon","Damage":{"Light":"2","Medium":"4","Heavy":"6","Ultra":"8"},"Cost":{"Light":2,"Medium":3,"Heavy":5,"Ultra":6},"Range":{"Light":"18","Medium":"18","Heavy":"18","Ultra":"18"},"Traits":{"Light":["Short","Draining","Disruptive"],"Medium":["Short","Draining","Disruptive"],"Heavy":["Short","Draining","Disruptive"],"Ultra":["Short","Draining","Disruptive"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Rail Gun","Damage":{"Light":"1","Medium":"1","Heavy":"1","Ultra":"1"},"Cost":{"Light":2,"Medium":2,"Heavy":4,"Ultra":5},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["AP(1)","Kinetic"],"Medium":["AP(1)","Kinetic"],"Heavy":["AP(2)","Kinetic"],"Ultra":["AP(3)","Kinetic"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Rocket Pack","Damage":{"Light":"2","Medium":"4","Heavy":"6","Ultra":"8"},"Cost":{"Light":2,"Medium":3,"Heavy":4,"Ultra":5},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Smart","Blast 3"],"Medium":["Smart","Blast 3"],"Heavy":["Smart","Blast 3"],"Ultra":["Smart","Blast 3"]},"Limited":{"Light":2,"Medium":2,"Heavy":2,"Ultra":2},"Type":"Weapon","Unique":""},{"Attachment":"Rotary Cannon","Damage":{"Light":"5","Medium":"7","Heavy":"11","Ultra":"13"},"Cost":{"Light":2,"Medium":4,"Heavy":6,"Ultra":8},"Range":{"Light":"12","Medium":"12","Heavy":"12","Ultra":"12"},"Traits":{"Light":["Short","Light"],"Medium":["Short","Light"],"Heavy":["Short","Light"],"Ultra":["Short","Light"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Shot Cannon","Damage":{"Light":"6","Medium":"8","Heavy":"10","Ultra":"12"},"Cost":{"Light":2,"Medium":4,"Heavy":5,"Ultra":6},"Range":{"Light":"6","Medium":"6","Heavy":"6","Ultra":"6"},"Traits":{"Light":["Short","Light","Frag"],"Medium":["Short","Light","Frag"],"Heavy":["Short","Light","Frag"],"Ultra":["Short","Light","Frag"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Submunitions","Damage":{"Light":"1","Medium":"2","Heavy":"3","Ultra":"4"},"Cost":{"Light":1,"Medium":2,"Heavy":3,"Ultra":4},"Range":{"Light":"6","Medium":"6","Heavy":"6","Ultra":"6"},"Traits":{"Light":["Short","Flak"],"Medium":["Short","Flak"],"Heavy":["Short","Flak"],"Ultra":["Short","Flak"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Ablative Armor","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":1,"Medium":1,"Heavy":1,"Ultra":1},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Armor"},{"Attachment":"Anti Missile System","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":1,"Medium":1,"Heavy":2,"Ultra":2},"Range":"-","Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade"},{"Attachment":"Electronic Countermeasures","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":1,"Medium":1,"Heavy":1,"Ultra":1},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Heavy Reactor","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":1,"Medium":1,"Heavy":2,"Ultra":2},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Jump Jets","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":3,"Medium":3,"Heavy":2,"Ultra":2},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Minefield Drone Carrier System","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Medium":2,"Heavy":4,"Ultra":4},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Medium":1,"Heavy":2,"Ultra":2},"Type":"Upgrade","Unique":""},{"Attachment":"Mine Drone Tracking Submunitions","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":3,"Medium":3,"Heavy":6,"Ultra":6},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Optic Camoflage","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":5,"Medium":4,"Heavy":3,"Ultra":2},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Reactive Armor","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":1,"Medium":1,"Heavy":1,"Ultra":1},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Armor"},{"Attachment":"Ceramic Plating","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":2,"Medium":2,"Heavy":1,"Ultra":1},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Armor"},{"Attachment":"Target Designator","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":1,"Medium":1,"Heavy":1,"Ultra":1},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Arc Gun","Damage":{"Light":"6","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":2},"Range":{"Light":"6","Medium":"6","Heavy":"6","Ultra":"6"},"Traits":{"Light":["Light","Short","Stagger"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Combat Blade","Damage":{"Light":"1","Medium":"1","Heavy":"2","Ultra":"2"},"Cost":{"Light":2,"Medium":3,"Heavy":4,"Ultra":5},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Melee","Parry"],"Medium":["Melee","Parry"],"Heavy":["Melee","Parry"],"Ultra":["Melee","Parry"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Demolition Cutter","Damage":{"Light":"1","Medium":"1","Heavy":"2","Ultra":"2"},"Cost":{"Light":2,"Medium":3,"Heavy":4,"Ultra":5},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Melee","AP(1)"],"Medium":["Melee","AP(2)"],"Heavy":["Melee","AP(2)"],"Ultra":["Melee","AP(3)"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Harpoon Gun","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"6"},"Cost":{"Ultra":7},"Range":{"Light":"12","Medium":"12","Heavy":"12","Ultra":"12"},"Traits":{"Ultra":["Short","Drag","Tether"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Impact Hammer","Damage":{"Light":"2","Medium":"2","Heavy":"3","Ultra":"3"},"Cost":{"Light":3,"Medium":4,"Heavy":5,"Ultra":6},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Melee","Bulky","Concussive(4)"],"Medium":["Melee","Bulky","Concussive(4)"],"Heavy":["Melee","Bulky","Concussive(4)"],"Ultra":["Melee","Bulky","Concussive(4)"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Mag Tether","Damage":{"Light":"2","Medium":"3","Heavy":"4","Ultra":"5"},"Cost":{"Light":3,"Medium":4,"Heavy":5,"Ultra":6},"Range":{"Light":"12","Medium":"12","Heavy":"12","Ultra":"12"},"Traits":{"Light":["Short","Tether"],"Medium":["Short","Tether"],"Heavy":["Short","Tether"],"Ultra":["Short","Tether"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Mass Tetsubo","Damage":{"Light":"2","Medium":"2","Heavy":"3","Ultra":"3"},"Cost":{"Light":3,"Medium":4,"Heavy":5,"Ultra":6},"Range":{"Light":"-","Medium":"1","Heavy":"1","Ultra":"2"},"Traits":{"Light":["Melee","Bulky","Reach","Concussive(2)"],"Medium":["Melee","Bulky","Reach","Concussive(2)"],"Heavy":["Melee","Bulky","Reach","Concussive(2)"],"Ultra":["Melee","Bulky","Reach","Concussive(2)"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Mega Glaive","Damage":{"Light":"3","Medium":"3","Heavy":"4","Ultra":"4"},"Cost":{"Light":4,"Medium":5,"Heavy":6,"Ultra":7},"Range":{"Light":"1","Medium":"2","Heavy":"2","Ultra":"3"},"Traits":{"Light":["Melee","Bulky","Reach"],"Medium":["Melee","Bulky","Reach"],"Heavy":["Melee","Bulky","Reach"],"Ultra":["Melee","Bulky","Reach"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Plasma Blade","Damage":{"Light":"2","Medium":"2","Heavy":"3","Ultra":"3"},"Cost":{"Light":4,"Medium":5,"Heavy":6,"Ultra":7},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Melee","AP(1)","Disruptive"],"Medium":["Melee","AP(2)","Disruptive"],"Heavy":["Melee","AP(2)","Disruptive"],"Ultra":["Melee","AP(3)","Disruptive"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Pulse Salvo","Damage":{"Light":"1","Medium":"4","Heavy":"6","Ultra":"8"},"Cost":{"Light":2,"Medium":3,"Heavy":4,"Ultra":5},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Disruptive"],"Medium":["Disruptive"],"Heavy":["Disruptive"],"Ultra":["Disruptive"]},"Limited":{"Light":"2","Medium":"2","Heavy":"2","Ultra":"2"},"Type":"Weapon","Unique":""},{"Attachment":"Shock Net","Damage":{"Light":"1","Medium":"1","Heavy":"1","Ultra":"1"},"Cost":{"Light":3,"Medium":4,"Heavy":5,"Ultra":6},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Melee","Stagger","Tether"],"Medium":["Melee","Stagger","Tether"],"Heavy":["Melee","Stagger","Tether"],"Ultra":["Melee","Stagger","Tether"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Weapon","Unique":""},{"Attachment":"Coolant Tanks","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"1","Medium":"1","Heavy":"2","Ultra":"2"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Directional Thrusters","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"1","Medium":"2","Heavy":"3","Ultra":"4"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":["Dash(2)"],"Medium":["Dash(2)"],"Heavy":["Dash(2)"],"Ultra":["Dash(2)"]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Haptic Suit","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"2","Medium":"2","Heavy":"1","Ultra":"1"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Compact"},{"Attachment":"High Speed Servos","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"2","Medium":"3","Heavy":"4","Ultra":"5"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Neural Input","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"2","Medium":"2","Heavy":"1","Ultra":"1"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Compact"},{"Attachment":"Nitro Boost","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"1","Medium":"1","Heavy":"2","Ultra":"2"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Combat Shield","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"-","Medium":"3","Heavy":"4","Ultra":"5"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":""},{"Attachment":"Claymore Armor","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"2","Medium":"2","Heavy":"2","Ultra":"2"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Armor"},{"Attachment":"Extra Plating","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"1","Medium":"1","Heavy":"1","Ultra":"1"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Armor"},{"Attachment":"Heavy Plating","Damage":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Cost":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"2"},"Range":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Traits":{"Light":[],"Medium":[],"Heavy":[],"Ultra":[]},"Limited":{"Light":"-","Medium":"-","Heavy":"-","Ultra":"-"},"Type":"Upgrade","Unique":"Armor"}]';
	
	const offtablesupportlistJSON ='[{"Attachment":"","Damage":"","Cost":"","Traits":"","Limited":"","Token":""},{"Attachment":"Artillery Barrage","Damage":"4","Cost":"10","Traits":"Blast 6","Limited":"3","Token":""},{"Attachment":"Mass Driver","Damage":"6","Cost":"10","Traits":"Kinetic","Limited":"3","Token":""},{"Attachment":"Mine-Drone Barrage","Damage":"","Cost":"10","Traits":"Once before Deployment","Limited":"","Token":"3"},{"Attachment":"Orbital Laser","Damage":"3","Cost":"10","Traits":"","Limited":"3","Token":""}]';

	const ulhevlistJSON ='[{"Name":"","Speed":"","Armor":"","Traits":""},{"Name":"Brawler","Speed":"7","Armor":"3","Traits":"Magnetic Grapples"},{"Name":"Pyro","Speed":"6","Armor":"3","Traits":"Inferno Gear"},{"Name":"Commando","Speed":"7","Armor":"3","Traits":"Scrablers, Target Designator"},{"Name":"Rifleman","Speed":"6","Armor":"3","Traits":"Suppressive Fire"}]';
	const ulweaponlistJSON ='[{"Weapon":"","Damage":"","Range":"","Traits":"","Limited":""},{"Weapon":"UL Autocannon","Damage":"2 x (X)","Range":"10","Traits":"Kinetic","Limited":"-"},{"Weapon":"UL Gernades","Damage":"3 x (X)","Range":"6","Traits":"Blast 2 light","Limited":"1"},{"Weapon":"UL Incinerators","Damage":"4 x (X)","Range":"4","Traits":"Disruptive Light","Limited":"-"},{"Weapon":"UL Melee Weapons","Damage":"-","Range":"-","Traits":"Melee (X) AP 1 x(X)","Limited":"-"},{"Weapon":"Submunitions","Damage":"1 x (X)","Range":"6","Traits":"Flank","Limited":"-"}]';
	const ulpodlistJSON ='[{"Name":"","Damage":"","Range":"","Traits":"","Limited":""},{"Name":"Short Range Missile Pack","Damage":"3 x (X)","Range":"12","Traits":"Smart","Limited":"2"},{"Name":"Rocket Pack","Damage":"2 x (X)","Range":"-","Traits":"Smart, Blast(3)","Limited":"2"},{"Name":"Launch Gear","Damage":"-","Range":"-","Traits":"Jump (+2 move value)","Limited":"-"}]';

	const ulvehiclelistJSON ='[{"Name":"","Speed":"","Armor":"","Traits":[]},{"Name":"Recon","Speed":"12","Armor":"1","Traits":["Target Designator","Outrider"]},{"Name":"Fire Support","Speed":"8","Armor":"2","Traits":["-"]},{"Name":"Tactical","Speed":"10","Armor":"2","Traits":["Suppressive Fire"]},{"Name":"Engineering","Speed":"8","Armor":"3","Traits":["Minesweeper"]}]';
	const ulvehicleweaponlistJSON ='[{"Weapon":"","Damage":"","Range":"","Traits":"","Limited":""},{"Weapon":"Autocannon","Damage":"2 x (X)","Range":"12","Traits":"Kinetic","Limited":"-"},{"Weapon":"Short Range Missile Pack","Damage":"3 x (X)","Range":"12","Traits":"Smart","Limited":"2"},{"Weapon":"Rocket Pack","Damage":"2 x (X)","Range":"-","Traits":"Smart, Blast(3)","Limited":"2"},{"Weapon":"Submunitions","Damage":"1 x (X)","Range":"6","Traits":"Flank","Limited":"-"}]';

	const ulbunkerlistJSON ='[{"Name":"","Armor":"","Structure":"","Traits":""},{"Name":"Bunker","Armor":"8","Structure":"2","Traits":"Command(2), Fortification, Garrison(6)"}]';
	const ulinfantrylistJSON ='[{"Name":"","Speed":"","Structure":"","Traits":""},{"Name":"Rifle","Speed":"3","Structure":"3","Traits":"Suppressive Fire"},{"Name":"Anti-Tank","Speed":"3","Structure":"3","Traits":"-"},{"Name":"Recon","Speed":"3","Structure":"3","Traits":"Target Designator"},{"Name":"Engineers","Speed":"3","Structure":"3","Traits":"Minesweeper"},{"Name":"Mine Drones","Speed":"-","Structure":"-","Traits":"MineField"}]';
	const ulinfantryweaponlistJSON ='[{"Weapon":"","Damage":"","Range":"","Traits":"","Limited":""},{"Weapon":"Infantry Rifles","Damage":"2 x (X)","Range":"6","Traits":"Light","Limited":"-"},{"Weapon":"Missile Launcher","Damage":"3 x (X)","Range":"12","Traits":"Smart","Limited":"2"},{"Weapon":"Mine Field","Damage":"4","Range":"-","Traits":"AP(1) Blast 4","Limited":"1"}]';
	const ulbunkerweaponlistJSON ='[{"Weapon":"","Damage":"","Range":"","Traits":"","Limited":""},{"Weapon":"Autocannon","Damage":"2","Range":"12","Traits":"Kinetic","Limited":"-"},{"Weapon":"Missile Pack","Damage":"3","Range":"-","Traits":"Smart","Limited":"2"},{"Weapon":"Rocket Pack","Damage":"2","Range":"-","Traits":"Smart, Blast(3)","Limited":"2"}]';

	const weaponlist=JSON.parse(weaponlistJSON);
	const bulkyattachmentsobjs=weaponlist.filter(weapon => Object.values(weapon.Traits).some(traitsArray => traitsArray.includes('Bulky')));
	const bulkyattachments=bulkyattachmentsobjs.map(weapon => weapon.Attachment);
	const compactattachmentsobjs=weaponlist.filter(weapon => weapon.Unique == ('Compact'));
	const compactattachments=compactattachmentsobjs.map(weapon => weapon.Attachment);
	const armorattachmentsobjs=weaponlist.filter(weapon => weapon.Unique == ('Armor'));
	const armorattachments=armorattachmentsobjs.map(weapon => weapon.Attachment);
	
	const offtablesupportlist=JSON.parse(offtablesupportlistJSON);

	const ulhevlist=JSON.parse(ulhevlistJSON);
	const ulweaponlist=JSON.parse(ulweaponlistJSON);
	const ulpodlist=JSON.parse(ulpodlistJSON);

	const ulvehiclelist=JSON.parse(ulvehiclelistJSON);
	const ulvehicleweaponlist=JSON.parse(ulvehicleweaponlistJSON);

	const ulbunkerlist=JSON.parse(ulbunkerlistJSON);
	const ulbunkerweaponlist=JSON.parse(ulbunkerweaponlistJSON);
	const ulinfantrylist=JSON.parse(ulinfantrylistJSON);
	const ulinfantryweaponlist=JSON.parse(ulinfantryweaponlistJSON);

	var hevTemplate = document.getElementById("hev_template");
	var teamTemplate = document.getElementById("team_template");

	var hevNumber = 1;
	var supNumber = 1;
	var teamNumber = 1;

	//Global perk tracking traits, since we have to update existing and new hevs
	var AHD = false;
	var TEH = false;
	var MS = false;
	var OS = false;
	var OSB = false;

	//Add hevs to the hevList as the user needs them.
	function addHEV( hevTeam = "hevList", teamType = "hevList" ) {
		//Creates the HE-V form
		let newhev = document.createElement("form");
		newhev.setAttribute("id","hev "+hevNumber);
		newhev.setAttribute("name","hev");
		newhev.setAttribute("class","no-page-break list-hev-form page-break");

		//Creates the main fieldset for HE-V
		let mainField = document.createElement("fieldset");
		mainField.setAttribute("id","mainField");
		mainField.setAttribute("class","list-hev grid");
		newhev.appendChild(mainField);

		//Sets the legend on the main fieldset
		let legend = document.createElement("legend");
		legend.setAttribute("id","mainLegend");
		legend.setAttribute("class","list-header-main");
		legend.innerHTML="HEV "+hevNumber;
		mainField.appendChild(legend);

		//Creates the first div
		let div = document.createElement("div");
		div.setAttribute("id","stack-info-chasis");
		div.setAttribute("class","stack-info-chasis");
		mainField.appendChild(div);

		//Creates second div
		let div2 = document.createElement("div");
		div2.setAttribute("id","hev-info-list-div");
		div2.setAttribute("class","hev-info-list-div");
		div.appendChild(div2);

		//Creates fieldset for hevData
		let fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","hevData");
		fieldset.setAttribute("class","list-hevInfo");
		div2.appendChild(fieldset);

		//Sets the legend for hevData
		legend = document.createElement("legend");
		legend.setAttribute("id","hevInfo");
		legend.setAttribute("class","list-header");
		legend.innerHTML="HE-V Info";
		fieldset.appendChild(legend);

		//Add hidden inputs for data hevData
		let element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('id', 'hevTeamName');
		element.setAttribute('hidden', '');
		fieldset.appendChild(element);

		element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('id', 'hevTeamType');
		element.setAttribute('hidden', '');
		fieldset.appendChild(element);

		// Adds new table for HEV details
		let table = document.createElement('table');
		table.setAttribute("class","hev_table");
		fieldset.appendChild(table);
		let row = table.createTBody().insertRow();
		let cell = row.insertCell();

		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Name : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('id', 'hev_name');
		element.setAttribute('name', 'hev_name');
		element.setAttribute('maxlength', '18');
		element.setAttribute('size', '16');
		element.setAttribute('class', 'list-hev-text');
		cell.appendChild(element);

		row = table.insertRow();
		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Size : ';
		cell.appendChild(element);

		cell = row.insertCell();
		//Creates the drop down for HEV size
		let select = document.createElement('select');
		select.setAttribute('id','hevType');
		select.setAttribute('class','list-hev-text');
		select.setAttribute('onchange','HVEWeightChange(this)');
			let option = document.createElement("option");
			option.setAttribute('selected','true');
			option.setAttribute('value','none');
			option.innerText=' -- select -- ';
			select.appendChild(option);
			option = document.createElement("option");
			option.setAttribute('value','Light');
			option.innerText='Light';
			select.appendChild(option);
			option = document.createElement("option");
			option.setAttribute('value','Medium');
			option.innerText='Medium';
			select.appendChild(option);
			option = document.createElement("option");
			option.setAttribute('value','Heavy');
			option.innerText='Heavy';
			select.appendChild(option);
			option = document.createElement("option");
			option.setAttribute('value','Ultra');
			option.innerText='Ultra';
			select.appendChild(option);
		cell.appendChild(select);

		row = table.insertRow();
		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Motion : ';
		cell.appendChild(element);

		cell = row.insertCell();
		//Creates the drop down for motion type
		select = document.createElement('select');
		select.setAttribute('id','hevMotionType');
		select.setAttribute('class','list-hev-text');
		select.setAttribute('disabled','true');
		select.setAttribute('onchange','HVEMotion(this)');
			option = document.createElement("option");
			option.setAttribute('selected','true');
			option.setAttribute('value','Bi-Pedal');
			option.innerText='Bi-Pedal';
			select.appendChild(option);
			option = document.createElement("option");
			option.setAttribute('value','Tracked');
			option.innerText='Tracked';
			select.appendChild(option);
			option = document.createElement("option");
			option.setAttribute('value','Multi-Limb');
			option.innerText='Multi-Limb';
			select.appendChild(option);
		cell.appendChild(select);

		// Adds new table for HEV tonnage
		table = document.createElement('table');
		table.setAttribute("class","tonnage_table");
		fieldset.appendChild(table);
		row = table.createTBody().insertRow();
		cell = row.insertCell();

		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Current Tonnage : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('id','tonnage_used');
		element.setAttribute('name','tonnage_used');
		element.setAttribute('value','0');
		element.setAttribute('class','par_table_margin');
		cell.appendChild(element);

		row = table.insertRow();
		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Total Tonnage : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('id','tonnage_max');
		element.setAttribute('name','tonnage_max');
		element.setAttribute('value','0');
		element.setAttribute('class','jslist-point_counter list-hev-text par_table_margin');
		cell.appendChild(element);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","chasis");
		fieldset.setAttribute("class","list-hevInfo");
		div2.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Chasis";
		fieldset.appendChild(legend);

		// Adds new table for HEV details
		table = document.createElement('table');
		table.setAttribute("class","chasis-stat-table");
		fieldset.appendChild(table);
		row = table.createTBody().insertRow();
		cell = row.insertCell();

		element = document.createElement('p');
		element.setAttribute('class','list-chasisLabel chasis par_table_margin');
		element.innerText = 'Armor : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('id','armor_display');
		element.setAttribute('name','armor_display');
		element.setAttribute('class','list-hev-text par_table_margin');
		cell.appendChild(element);

		cell = row.insertCell();
		cell.colSpan=2;
		//Creates the drop down for motion type
		select = document.createElement('select');
		select.setAttribute('id','armor_mod');
		select.setAttribute('class','list-hev-text armor-struc-DropDown');
		select.setAttribute('length','14');
		select.setAttribute('disabled','true');
		select.setAttribute('onchange','updateArmor(this)');
		cell.appendChild(select);

		row = table.insertRow();
		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('class','list-chasisLabel chasis par_table_margin');
		element.innerText = 'Structure : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('id','structure_display');
		element.setAttribute('name','structure_display');
		element.setAttribute('class','list-hev-text par_table_margin');
		cell.appendChild(element);

		cell = row.insertCell();
		cell.colSpan=2;
		//Creates the drop down for motion type
		select = document.createElement('select');
		select.setAttribute('id','structure_mod');
		select.setAttribute('class','list-hev-text armor-struc-DropDown');
		select.setAttribute('length','14');
		select.setAttribute('disabled','true');
		select.setAttribute('onchange','updateStructure(this)');
		cell.appendChild(select);

		row = table.insertRow();
		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('class','list-chasisLabel chasis par_table_margin');
		element.innerText = 'Move : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('id','move');
		element.setAttribute('name','move');
		element.setAttribute('class','list-hev-text par_table_margin');
		cell.appendChild(element);

		row = table.insertRow();
		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Jump : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('id','jump');
		element.setAttribute('name','jump');
		element.setAttribute('class','list-hev-text jump par_table_margin');
		cell.appendChild(element);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","chasis");
		fieldset.setAttribute("class","list-hevInfo");
		div2.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Chasis";
		fieldset.appendChild(legend);

		// Adds new table for HEV Pips
		table = document.createElement('table');
		table.setAttribute("class","chasis-pip-table");
		fieldset.appendChild(table);
		row = table.createTBody().insertRow();
		cell = row.insertCell();

		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Armor : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('div');
		element.setAttribute('id','armorcell');
		element.setAttribute('name','armorcell');
		element.setAttribute('class','');
		cell.appendChild(element);

		row = table.insertRow();
		cell = row.insertCell();
		element = document.createElement('p');
		element.setAttribute('class','par_table_margin');
		element.innerText = 'Structure : ';
		cell.appendChild(element);

		cell = row.insertCell();
		element = document.createElement('div');
		element.setAttribute('id','struccell');
		element.setAttribute('name','struccell');
		element.setAttribute('class','');
		cell.appendChild(element);

		div = document.createElement("div");
		div.setAttribute("id","attachtable");
		div.setAttribute("hidden","true");
		div.setAttribute("class","attach-table");
		mainField.appendChild(div);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","attachments");
		fieldset.setAttribute("class","attach-field");
		div.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Hard Points";
		fieldset.appendChild(legend);

		// Adds new table for HEV Hard Points
		table = document.createElement('table');
		table.setAttribute("id","attach_table");
		table.setAttribute("align","center");
		table.setAttribute("class","list-attachmentsTable");
		fieldset.appendChild(table);

		div = document.createElement("div");
		div.setAttribute("id","attachtableprint");
		div.setAttribute("hidden","true"); //Line to comment out for seeing the print area
		div.setAttribute("class","attach-table-print");
		mainField.appendChild(div);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","attachmentsprint");
		fieldset.setAttribute("class","");
		div.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Hard Points";
		fieldset.appendChild(legend);

		// Adds new table for HEV Hard Points printing
		table = document.createElement('table');
		table.setAttribute("id","attach_table_print");
		table.setAttribute("align","center");
		table.setAttribute("class","list-attachmentsTable");
		fieldset.appendChild(table);

		// Adds new table for team HEV Hard Points printing
		table = document.createElement('table');
		table.setAttribute("id","team_attach_table_print");
		table.setAttribute("align","center");
		table.setAttribute("class","list-attachmentsTable");
		fieldset.appendChild(table);

		// Adds new table for compact HEV Hard Points printing
		table = document.createElement('table');
		table.setAttribute("id","compact_attach_table_print");
		table.setAttribute("align","center");
		table.setAttribute("class","list-attachmentsTable");
		fieldset.appendChild(table);

		//Sets up notes for additional rules
		div = document.createElement("div");
		div.setAttribute("id","notesdiv");
		div.setAttribute("name","notesdiv");
		div.setAttribute("class","notesdiv");
		mainField.appendChild(div);

		//Creates div for HE-V Team Attachments
		div2 = document.createElement("div");
		div2.setAttribute("id","team_attach_div");
		div2.setAttribute("name","team_attach_div");
		div2.setAttribute("hidden","true");
		div2.setAttribute("class","team-attach-table");
		div.appendChild(div2);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","teamattachments");
		fieldset.setAttribute("class","");
		div2.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Team Hard Points";
		fieldset.appendChild(legend);

		// Adds new table for HE-V Team Attachments
		table = document.createElement('table');
		table.setAttribute("id","team_attach_table");
		table.setAttribute("align","center");
		table.setAttribute("class","list-attachmentsTable");
		fieldset.appendChild(table);

		//Sets up notes for team rules
		div2 = document.createElement("div");
		div2.setAttribute("id","team_rules_div");
		div2.setAttribute("name","team_rules_div");
		div2.setAttribute("hidden","true");
		div2.setAttribute("class","team_rules_div");
		div.appendChild(div2);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","teamrules");
		fieldset.setAttribute("class","team-rules");
		div2.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Team Rules";
		fieldset.appendChild(legend);

		div2 = document.createElement("div");
		div2.setAttribute("id","team_rules_text");
		fieldset.appendChild(div2);

		//Creates div for HE-V Compact table
		div2 = document.createElement("div");
		div2.setAttribute("id","compact_attach_div");
		div2.setAttribute("name","compact_attach_div");
		div2.setAttribute("hidden","true");
		div2.setAttribute("class","team-attach-table");
		div.appendChild(div2);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","compactattachments");
		fieldset.setAttribute("class","");
		div2.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Compact Hard Point";
		fieldset.appendChild(legend);

		// Adds new table for HE-V Compact Attachments
		table = document.createElement('table');
		table.setAttribute("id","compact_attach_table");
		table.setAttribute("align","center");
		table.setAttribute("class","list-attachmentsTable");
		fieldset.appendChild(table);

		//Sets up notes for motion rules
		div2 = document.createElement("div");
		div2.setAttribute("id","motion_rules_div");
		div2.setAttribute("name","motion_rules_div");
		div2.setAttribute("hidden","true");
		div2.setAttribute("class","motion_rules_div");
		div.appendChild(div2);

		fieldset = document.createElement("fieldset");
		fieldset.setAttribute("id","motionrules");
		fieldset.setAttribute("class","team-rules");
		div2.appendChild(fieldset);

		legend = document.createElement("legend");
		legend.setAttribute("class","list-header");
		legend.innerHTML="Motion Rules";
		fieldset.appendChild(legend);

		div2 = document.createElement("div");
		div2.setAttribute("id","motion_rules_text");
		fieldset.appendChild(div2);

		//Adds delete button
		div = document.createElement("div");
		div.setAttribute("class","remove-hve-button-div");
		mainField.appendChild(div);

		//Adds delete HEV button
		element = document.createElement('button');
		element.setAttribute('type', 'button');
		element.innerHTML = 'Remove HE-V';
		element.setAttribute('id', 'delete_hev_button');
		element.setAttribute('value', 'Remove HE-V');
		element.setAttribute("onclick","deletehev("+hevNumber+")");
		element.setAttribute("class","removehevbutton noprint");
		div.appendChild(element);

		//Sets some default values depending on how creation was triggered
		newhev.setAttribute("id","hev "+hevNumber);
		newhev.setAttribute("name","hev");
		newhev.setAttribute("class","list-hev-form page-break");
		newhev.hevTeamType.setAttribute("value",teamType);
		newhev.hevTeamName.setAttribute("value",hevTeam);

		allowedWeight(newhev);
		hevNumber++;
		document.getElementById(hevTeam).appendChild(newhev);
		if( hevTeam != "hevList" ) {
		teamHEVCount(hevTeam); }
			//checkTeamBonus(hevTeam); } //in both places add/size change to update all
	}

	///////////////////////should check again and add helper functions
	//Update new hev with right number of options and that will look good table wise. 
	//Calls addCell function.
	function HVEWeightChange(size) {
		//Get the hev tied to the select box.
		let hev = size.form;
		//Initialize default for HVE weight change.
		let hevSize = hev.hevType.value;

		if( hevSize != "none" ) {
		let tonnage_max = 0;
		let armor = 0;
		let structure = 0;
		let move = 0;
		let hevAttachments = 0;

		if( hevSize == "Light" ) {
			if( TEH == true ) {
				tonnage_max=22;
			} else if( TEH == false ) {
				tonnage_max=20; }
			armor=6;
			structure=4;
			move=12;
		} else if( hevSize == "Medium" ) {
			if( TEH == true ) {
				tonnage_max=32;
			} else if( TEH == false ) {
				tonnage_max=30; }
			armor=8;
			structure=6;
			move=10;
		} else if( hevSize == "Heavy" ) {
			if( TEH == true ) {
				tonnage_max=42;
			} else if( TEH == false ) {
				tonnage_max=40; }
			armor=10;
			structure=8;
			move=8;
		} else if( hevSize == "Ultra" ) {
			if( TEH == true ) {
				tonnage_max=52;
			} else if( TEH == false ) {
				tonnage_max=50; }
			armor=12;
			structure=10;
			move=6;
		}

		hev.querySelector('#tonnage_max').innerText = Number(tonnage_max);
		hev.querySelector('#tonnage_used').innerText = Number(structure) + Number(armor);
		hev.querySelector('#armor_display').innerText = Number(armor);
		hev.querySelector('#structure_display').innerText = Number(structure);
		hev.querySelector('#move').innerText = Number(move);
		hev.querySelector('#jump').innerText = "-";
		pipsTracker( hev.querySelector('#armor_display').innerText, hev.querySelector('#armorcell'));
		pipsTracker( hev.querySelector('#structure_display').innerText, hev.querySelector('#struccell'));
		//End initializaion block.

		hev.querySelector('#attachtable').removeAttribute("hidden");
		clearAttacTable(hev);
		clearTeamAttacTable(hev);
		clearCompactTable(hev);
		initialArmorStructorMod(hev);
		//Figures out the size of attachments per weight
		if( hevSize == "Light" ) {
			hevAttachments = 4;
		} else if( hevSize == "Medium" ) {
			hevAttachments = 5;
		} else if( hevSize == "Heavy" ) {
			hevAttachments = 6;
		} else if(  hevSize == "Ultra" ) {
			hevAttachments = 7 ; }

		//Insert first row into table attachments table
		let row = hev.querySelector("#attach_table").insertRow();
		//If hevAttachments is four, one row of three, one row of one.
		if(  hevAttachments == 4 ) {
			for( var i = 1; i <= 3; i++) {
				addCell(hev, i, row, "attach"); }
			row = hev.querySelector("#attach_table").insertRow();
			for( var i = 4; i <= 4; i++) {
				addCell(hev, i, row, "attach"); }
		//If hevAttachments is five, one row with three items, one row of two items.
		} else if(  hevAttachments == 5 ) {
			for( var i = 1; i <= 3; i++) {
				addCell(hev, i, row, "attach"); }
			row = hev.querySelector("#attach_table").insertRow();
			for( var i = 4; i <= 5; i++) {
				addCell(hev, i, row, "attach"); }
		//If hevAttachments is six, two rows of three.
		} else if(  hevAttachments == 6 ) {
			for( var i = 1; i <= 3; i++) {
				addCell(hev, i, row, "attach"); }
			row = hev.querySelector("#attach_table").insertRow();
			for( var i = 4; i <= 6; i++) {
				addCell(hev, i, row, "attach"); }
		//If hevAttachments is seven two rows of three and one row of one
		} else if(  hevAttachments == 7 ) {
			for( var i = 1; i <= 3; i++) {
				addCell(hev, i, row, "attach"); }
			row = hev.querySelector("#attach_table").insertRow();
			for( var i = 4; i <= 6; i++) {
				addCell(hev, i, row, "attach"); }
			row = hev.querySelector("#attach_table").insertRow();
			for( var i = 7; i <= 7; i++) {
				addCell(hev, i, row, "attach"); }
		//If hevAttachments is eight two rows of three and one row of two
		} else if(  hevAttachments == 8 ) {
			for( let i = 1; i <= 3; i++ ) {
				addCell(hev, i, row, "attach"); }
			row = hev.querySelector("#attach_table").insertRow();
			for( let i = 4; i <= 6; i++) {
				addCell(hev, i, row, "attach"); }
			row = hev.querySelector("#attach_table").insertRow();
			for( let i = 7; i <= 8; i++ ) {
				addCell(hev, i, row, "attach"); }
		}

		hev.hevMotionType.disabled = false;

		/////should add default for teams here.
		if( hev.hevTeamType.value == "Fire Support Team" ) {
			setTeamFSTDefault(hev);
		}else if ( hev.hevTeamType.value == "Reconnaissance Team" ) {
			setTeamRTDefault(hev);
		}else if( hev.hevTeamType.value == "Security Team" ) {
			setTeamSTDefault(hev);
		}else if( hev.hevTeamType.value == "Tactical Team" ) {
			setTeamTTDefault(hev);
		}else if( hev.hevTeamType.value == "Berserker Team" ) {
			setTeamBTDefault(hev);
		}else if( hev.hevTeamType.value == "Gunslinger Team" ) {
			setTeamGSTDefault(hev);
		}else if( hev.hevTeamType.value == "Assasination Team" ) {
			setTeamATDefault(hev);
		}
		//Applies perks to new hevSize
		if( AHD == true ) {
			addHardPoint(hev);
			}
		topEndHardwarePerk();
		calculatePageTonnage();

		if( hev.hevTeamName.value != "hevList" ) {
			checkTeamComposition(hev.hevTeamName.value); }
		checkTeamBonus(hev.hevTeamName.value);
		}
	}

	//Add cells to the hev attachments table for wep/systems/
	//Also creates team attachments cells
	//location is attach vs team table in the call
	function addCell(hev, hevAttachments, tablerowtoinsert, location) {
		fullcell = tablerowtoinsert.insertCell();

		//Creates the drop down, appended later
		let attachdropdown = document.createElement("select");
		attachdropdown.setAttribute("class","list-attachmentDropDown list-hev-text");
		attachdropdown.setAttribute("id",location + hevAttachments);
		attachdropdown.setAttribute("onchange", "updateSlot(this)");
		attachdropdown.setAttribute('max-width', '25ch');
		addSelectOptions( hev, attachdropdown );

		// Adds new table for inside the cell
		let table = document.createElement('table');
		table.setAttribute("class","attachcelltable");
		let row = table.insertRow();

		//Adds the header to the first row and only cell at the top of the table header
		let header = table.createTHead();
		let headerrow = header.insertRow();
		let cell= document.createElement('th');
		cell.colSpan=4;
		if( location == "attach" ) {
			cell.innerText = 'Hard Point ' + hevAttachments;
		} else if( location == "teamattach" ) {
			cell.innerText = 'Team Hard Point ' + hevAttachments; 
		}else if( location == "compactattach" ) {
			cell.innerText = 'Compact Hard Point ' + hevAttachments; }
		headerrow.appendChild(cell);

		//Adds new row and cell for the drop down selection of attachments
		cell = row.insertCell();
		cell.colSpan=4;
		cell.appendChild(attachdropdown)

		//Adds new row with one cell for damage label
		row = table.insertRow();
		cell = row.insertCell();
		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_damage_label');
		paragraph.setAttribute("class","par_table_margin");
		let element = document.createTextNode('Damage :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Adds new row with one cell for damage input
		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_damage');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Add a new cell on the same row for range label
		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_range_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Range :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Add a new cell on the same row for range input
		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_range');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Adds new row with one cell for "limited" aka use
		row = table.insertRow();
		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_limited_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Limit :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Add a new cell on the same row for limited input
		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_limited');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Add a new cell on the same row for cost
		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_cost_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Cost :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Add a new cell on the same row for cost input
		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_cost');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//Adds final rows for the traits field
		row = table.insertRow();
		cell = row.insertCell();
		cell.colSpan=4;
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_traits_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Traits :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		row = table.insertRow();
		cell = row.insertCell();
		cell.colSpan=4;
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_traits');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		fullcell.appendChild(table);

		//Creates the table row to display during printing
		if( location == "attach" ) {
			table = hev.querySelector("#attach_table_print");
		} else if( location == "teamattach" ) {
			table = hev.querySelector("#team_attach_table_print"); 
		} else if( location == "compactattach" ) {
			table = hev.querySelector("#compact_attach_table_print"); }
		row = table.insertRow();
		cell = row.insertCell();

		//Adds items to table
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_select_value');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_cost_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Cost : ');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_cost_value');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_damage_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Damage : ');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_damage_value');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_range_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Range : ');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_range_value');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_traits_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Traits : ');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_traits_value');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(' ');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_limited_label');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Limit : ');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		cell = row.insertCell();
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', hev.id + location + hevAttachments + '_print_limited_value');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
	}

	//Helper function that adds options to a select.
	function addSelectOptions( hev, attachdropdown ) {
		let hevSize = hev.hevType.value;
		let weaponlistmap = HEVAttachList( hev );
		let weap; //placeholder for attachment object
		let selectplaceholder = ""; //placeholder for value if select has one

		if( attachdropdown.selectedIndex > 0 ) {
			selectplaceholder = attachdropdown.options[attachdropdown.selectedIndex].value; }
		
		//Removes combat shield selected if team drops below three HE-V for mediums
		if( selectplaceholder == "Combat Shield" ) {
			if( hev.hevType.value == "Medium" && hev.hevTeamType.value == "Berserker Team" && getTeamsHEV(hev.hevTeamName.value).length < 3 ) {
				selectplaceholder = ""; } }
		//Wipe out all existing options
		attachdropdown.innerHTML = '';

		if( attachdropdown.id == "compactattach1" ) {
			weaponlistmap = HEVCompactAttachList( hevSize );
			}

		for( let i = 0; i < weaponlistmap.length; i++ ) {
			let inst = document.createElement("option")
			inst.setAttribute("value",weaponlistmap[i]);
			weap = weaponlist.filter(weapon => weapon.Attachment == weaponlistmap[i])[0];
			if( weap.Cost[hevSize] > 0 ) {
				inst.innerHTML=weap.Attachment+' ['+weap.Cost[hevSize]+']';}
			else if( weap.Attachment == "" ){
				inst.innerHTML="";}
			else { continue; }
			attachdropdown.appendChild(inst.cloneNode(true));
		}

		attachdropdown.value = selectplaceholder;

		if( ( hev.hevType.value == "Light" || hev.hevType.value == "Medium" ) && hev.hevTeamType.value == "Berserker Team" && attachdropdown.id == "attach1" ) {
			HEVMeleeOnlyOption(hev, attachdropdown);
		} else if( hev.hevType.value == "Heavy" && hev.hevTeamType.value == "Berserker Team" && attachdropdown.id == "attach2" ) {
			HEVMeleeOnlyOption(hev, attachdropdown);
		} else if( hev.hevType.value == "Medium" && hev.hevTeamType.value == "Tactical Team" && attachdropdown.id == "attach1" ) {
			HEVMeleeOnlyOption(hev, attachdropdown);
		} else if( hev.hevType.value == "Medium" && hev.hevTeamType.value == "Assasination Team" && attachdropdown.id == "attach2" ) {
			HEVMeleeOnlyOption(hev, attachdropdown);
			disableSelectOptionTeam(hev, attachdropdown);
		} else if( hev.hevType.value == "Light" && hev.hevTeamType.value == "Assasination Team" && attachdropdown.id == "attach2" && getTeamsHEV(hev.hevTeamName.value).length <= 2 ) {
			HEVMeleeOnlyOption(hev, attachdropdown);
			disableSelectOptionTeam(hev, attachdropdown);
		} else if( hev.hevType.value == "Light" && hev.hevTeamType.value == "Assasination Team" && attachdropdown.id == "attach1" && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
			HEVMeleeOnlyOption(hev, attachdropdown);
			disableSelectOptionTeam(hev, attachdropdown);
		} else {
			disableSelectOptionTeam(hev, attachdropdown); }
	}

	//Calculate the cost of weapon attachments then calls updateAttachmentValue to set the values
	//Calls updateAttachmentValue
	function checkAttachmentsWeapons(slot) {
		//Get the hev tied to the select box.
		let hev = slot.form;
		//Initialize default for HVE weight change.
		let hevSize = hev.hevType.value;
		//Gets the details for item selected
		let weap = weaponlist.filter(weapon => weapon.Attachment==slot.value)[0];
		let weapfilter; //placeholder for attachment object
		//Default cost for each attachment.
		let cost = 1.0;
		//Prep the array for cost calculation
		let otherattachmentsarray = Array.from(slot.form.querySelectorAll('[class~="list-attachmentDropDown"]'));
		//array for all matching items
		let repeatattachmentsarry = [];
		let weaponlistmap =  HEVAttachList( hev );
		let notselectedweapons = HEVWeaponList( hev );

		//Create array of items not selected
		for( let i = 0; i < otherattachmentsarray.length; i++ ) {
			if( otherattachmentsarray[i].selectedIndex > 0 ) {
			notselectedweapons.splice(notselectedweapons.indexOf(otherattachmentsarray[i].value),1); }
		}

		//Loop though each attachment and reset unselected items to base cost
		for( let i = 0; i < otherattachmentsarray.length; i++ ) {
			for( let x = 0; x < notselectedweapons.length; x++ ) {
				weapfilter = weaponlist.filter(weapon => weapon.Attachment == notselectedweapons[x])[0];
				if( hasOptionWithValue(otherattachmentsarray[i], notselectedweapons[x]) ) {
					otherattachmentsarray[i].options[weaponlistmap.indexOf(notselectedweapons[x])].innerHTML = weapfilter.Attachment+' [' + Math.floor( weapfilter.Cost[hevSize]* cost ) + ']'; }
			}
		} 
		//Create loop of all attachments that match
		for( let i = 0; i < otherattachmentsarray.length; i++ ) {
			if( weap.Attachment == otherattachmentsarray[i].value ) {
				repeatattachmentsarry.push(otherattachmentsarray[i]); }
		}
		//Loop updates the slot, then any that match the same selction so if costs go down it does.
		for( let i = 0; i < repeatattachmentsarry.length; i++ ) {
			updateAttachmentValue(repeatattachmentsarry[i],cost);
			weapfilter = weaponlist.filter(weapon => weapon.Attachment == repeatattachmentsarry[i].options[repeatattachmentsarry[i].selectedIndex].value)[0];
			repeatattachmentsarry[i].options[weaponlistmap.indexOf(repeatattachmentsarry[i].options[repeatattachmentsarry[i].selectedIndex].value)].innerHTML = weapfilter.Attachment+' [' + Math.floor( weapfilter.Cost[hevSize]* cost ) + ']';
			cost = Number(cost) + Number(0.5);
		}
		//create loop of all attachments that don't match and update the weapon cost shown
		for( let i = 0; i < otherattachmentsarray.length; i++ ) {
			if( otherattachmentsarray[i].id != "compactattach1" ) {
				if( weap.Attachment != otherattachmentsarray[i].value ) {
					otherattachmentsarray[i].options[weaponlistmap.indexOf(weap.Attachment)].innerHTML = weap.Attachment+' [' + Math.floor( weap.Cost[hevSize]* cost ) + ']'; }
			}
		}
	}

	//Disables upgrade attachments then calls updateAttachmentValue to set the values
	//Calls updateAttachmentValue
	function checkAttachmentsUpgrade(slot) {
		let weaponlistmap =  HEVAttachList( slot.form );
		let weap = weaponlist.filter(weapon => weapon.Attachment==slot.value)[0];

		//prep new array for all items.
		let attachmentsarray = Array.from(slot.form.querySelectorAll('[class~="list-attachmentDropDown"]'));

		//Removes compact so we don't add other options to it.
		if( attachmentsarray.indexOf("compactattach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("compactattach1"),1); }

		//Loop to create array of selected attachment names
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			//If this is the selected value of a do the stuff needed for Compact items.
			if( attachmentsarray[i].options[attachmentsarray[i].selectedIndex].value == weap.Attachment ) {
					if( compactattachments.includes(weap.Attachment) ) {
						//move slot to compact table
						if( slot.form.querySelector("#compact_attach_table").rows.length == 0 ) {
							addCompactHardPoint(slot.form);
							slot.selectedIndex="";
							slot.form.querySelector("#compactattach1").value = weap.Attachment;
							slot.form.querySelector("#compactattach1").dispatchEvent(new Event('change'));
							for( let x = 0; x < compactattachments.length; x++ ) {
								if( weaponlistmap.includes(compactattachments[x]) ) {
									attachmentsarray[i].options[weaponlistmap.indexOf(compactattachments[x])].disabled = true; } }
						} else {
							updateAttachmentValue(slot,1); }
					} else {
						updateAttachmentValue(slot,1); }//Sets values.
			//If the upgrade is taken, disable it for other slots.
			} else if( weap.Type == "Upgrade" ) {
				if( attachmentsarray[i].id != "compactattach1" ) {
					attachmentsarray[i].options[weaponlistmap.indexOf(weap.Attachment)].disabled = true; //this disables the drop down option.
					//Disable any other armor plates if one was selected.
					if( armorattachments.includes(weap.Attachment) ) {
							for( let x = 0; x < armorattachments.length; x++ ) {
								if( weaponlistmap.includes(armorattachments[x]) ) {
									attachmentsarray[i].options[weaponlistmap.indexOf(armorattachments[x])].disabled = true; } } }
					//Disable any other Compact upgrades if one was selected.
					if( compactattachments.includes(weap.Attachment) ) {
							for( let x = 0; x < compactattachments.length; x++ ) {
								if( weaponlistmap.includes(compactattachments[x]) ) {
									attachmentsarray[i].options[weaponlistmap.indexOf(compactattachments[x])].disabled = true; } }
					}
				}
			}
		}
	}

	//Helper function that updates the fields for a attachment.
	function updateAttachmentValue(slot,cost) {
		//Get the hev tied to the select box.
		let hev = slot.form;
		//Initialize default for HVE weight change.
		let hevSize = hev.hevType.value;

		//Gets the details for item selected
		let weap = weaponlist.filter(weapon => weapon.Attachment==slot.value)[0];

		//Updates this HEV's stats for selected attachment
		document.getElementById(hev.id + slot.id + "_print_select_value").innerText=weap.Attachment;
		document.getElementById(hev.id + slot.id + "_damage").innerText=weap.Damage[hevSize];
		document.getElementById(hev.id + slot.id + "_print_damage_value").innerText=weap.Damage[hevSize];
		document.getElementById(hev.id + slot.id + "_traits").innerText=weap.Traits[hevSize];
		document.getElementById(hev.id + slot.id + "_print_traits_value").innerText=weap.Traits[hevSize];
		document.getElementById(hev.id + slot.id + "_range").innerText=weap.Range[hevSize];
		document.getElementById(hev.id + slot.id + "_print_range_value").innerText=weap.Range[hevSize];
		document.getElementById(hev.id + slot.id + "_limited").innerText= weap.Limited[hevSize];
		pipsTracker(document.getElementById(hev.id + slot.id + "_print_limited_value").innerText= weap.Limited[hevSize], document.getElementById(hev.id + slot.id + "_print_limited_value") );
		//document.getElementById(hev.id + slot.id + "_print_limited_value").innerText= weap.Limited[hevSize];
		document.getElementById(hev.id + slot.id + "_cost").innerText=Math.floor(weap.Cost[hevSize] * cost);
		document.getElementById(hev.id + slot.id + "_print_cost_value").innerText=Math.floor(weap.Cost[hevSize] * cost);
		//Sets cost to blank
		if( weap.Cost[hevSize] == "" ) {
			document.getElementById(hev.id + slot.id + "_cost").innerText=weap.Cost[hevSize]; }
		//Sets cost to 0 for Armor or Plating based on team and HEV
		if( armorattachments.includes(weap.Attachment) ) {
			if( hev.hevTeamType.value == "Security Team" && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
				document.getElementById(hev.id + slot.id + "_cost").innerText= Number(0);
			} else if( hev.hevTeamType.value == "Berserker Team" && getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				document.getElementById(hev.id + slot.id + "_cost").innerText= Number(0); }
		}
		//Sets cost to 0 for Target Designator based on team and HEV
		if( weap.Attachment == "Target Designator" ) {
			if( ( hev.hevTeamType.value == "Fire Support Team" || hev.hevTeamType.value == "Reconnaissance Team" ) && hevSize == "Light" && getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				document.getElementById(hev.id + slot.id + "_cost").innerText= Number(0); }
		}

		//Sets cost to 0 for Electronic Countermeasures based on team and HEV
		if( weap.Attachment == "Electronic Countermeasures" ) {
			if( hev.hevTeamType.value == "Reconnaissance Team" && hevSize == "Light" && getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				document.getElementById(hev.id + slot.id + "_cost").innerText= Number(0); }
		}

		//Adds the Smart trait to the Howitzer based on team and HEV
		if( weap.Attachment == "Howitzer" ) {
			if( hev.hevTeamType.value == "Fire Support Team" && hevSize != "Light" && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
				document.getElementById(hev.id + slot.id + "_traits").innerText="Smart," + weap.Traits[hevSize]; }
		}

		//Adds +2 range for Gunslinger Team
		if( hev.hevTeamType.value == "Gunslinger Team" ) {
			if( ( hevSize == "Light" && getTeamsHEV(hev.hevTeamName.value).length == 4 ) || ( hevSize == "Heavy" && getTeamsHEV(hev.hevTeamName.value).length == 4 ) ) {
				if( Object.values(weap.Traits[hevSize]).some(traits=>traits.includes("Short")) ) {
					document.getElementById(hev.id + slot.id + "_range").innerText = Number(weap.Range[hevSize]) + Number(2);
					document.getElementById(hev.id + slot.id + "_print_range_value").innerText = Number(weap.Range[hevSize]) + Number(2); } }
			if( hevSize == "Medium" && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
				if( Object.values(weap.Traits[hevSize]).some(traits=>traits.includes("Short")) ) {
					document.getElementById(hev.id + slot.id + "_range").innerText = Number(weap.Range[hevSize]) + Number(2);
					document.getElementById(hev.id + slot.id + "_print_range_value").innerText = Number(weap.Range[hevSize]) + Number(2); } }
		}

		//If Materiel Stockpiles is selected add one for Minefield Drone Carrier System, Missiles and Rocket Pack handled after we set the default.
		if( MS == true ) {
			if( weap.Attachment == "Minefield Drone Carrier System" ) {
			document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(1); }
		} else { //use default
			document.getElementById(hev.id + slot.id + "_limited").innerText=weap.Limited[hevSize]; }

		//Check if Missles or Rocket Packs to adjust the value of Limited
		if( weap.Attachment == "Missiles" || weap.Attachment == "Rocket Pack" ) {
			if( hev.hevTeamType.value == "Fire Support Team" && hevSize != "Light" ) {
				if( getTeamsHEV(hev.hevTeamName.value).length == 2 || getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
					if( MS == true ) { //If Materiel Stockpiles is selected add one for perk and one for team of 2/3
						document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(2); 
					} else { //If Materiel Stockpiles is not selected add only one for team of 2/3
						document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(1); }
				} else { //Gotta be a team of 4
					if( MS == true ) { //If Materiel Stockpiles is selected add one for perk and two for team of 4
						document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(3); 
					} else { //If Materiel Stockpiles is not selected add two for team of 4
						document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(2); }
				}
			} else if( hev.hevTeamType.value == "Tactical Team" && hevSize == "Heavy" ){
				if( getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
					if( MS == true ) { //If Materiel Stockpiles is selected add one for perk and one for team of 2/3
						document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(2); 
					} else { //If Materiel Stockpiles is not selected add only one for team of 2/3
						document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(1); }
					}
			} else {
				if( MS == true ) { //If Materiel Stockpiles is selected add one for perk
					document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]) + Number(1); }
				else {
					document.getElementById(hev.id + slot.id + "_limited").innerText= Number(weap.Limited[hevSize]); }
				}
		}
	}

	//Helper function, ensures options of drop downs are correctly enabled
	function updateAttachmentOptions(hev) {
		//prep new array for all items.
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		let attachmentsarraymap = attachmentsarray.map(element => element.id);

		//All upgrades list
		let weaponlistmap = HEVAttachList( hev );
		let upgrade = weaponlist.filter(weapon => weapon.Type=="Upgrade");
		let upgrademap = upgrade.map(upgrade => upgrade.Attachment);
		let seloptions = [];

		//Loop to create array of selected attachment names
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			if( attachmentsarray[i].selectedIndex > 0 ) {
				seloptions.push(attachmentsarray[i].options[attachmentsarray[i].selectedIndex].value); }
		}

		//Removes compact so we don't add other options to it.
		if( attachmentsarraymap.indexOf("compactattach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("compactattach1"),1); }

		//Removes user selected items from upgrade array so we know what options to re-enable
		for( let i = 0; i < seloptions.length; i++ ) {
			//Remove all the plate mods if any are selected
			if( armorattachments.includes(seloptions[i]) ) {
				for( let x = 0; x < armorattachments.length; x++ ) {
					if( weaponlistmap.includes(armorattachments[x]) ) {
						upgrade.splice(upgrademap.indexOf(armorattachments[x]), 1);
						upgrademap.splice(upgrademap.indexOf(armorattachments[x]), 1); } }
			}
			//Remove all the Compact mods if any are selected
			if( compactattachments.includes(seloptions[i]) ) {
				for( let x = 0; x < compactattachments.length; x++ ) {
					if( weaponlistmap.includes(compactattachments[x]) ) {
						upgrade.splice(upgrademap.indexOf(compactattachments[x]), 1);
						upgrademap.splice(upgrademap.indexOf(compactattachments[x]), 1); } }
			}
			//Just remove the single item if not armor mod
			else if( upgrademap.indexOf(seloptions[i]) > -1 ) {
				upgrade.splice(upgrademap.indexOf(seloptions[i]), 1);
				upgrademap.splice(upgrademap.indexOf(seloptions[i]), 1);
			}
		}

		//Skip the Heavy and Medium first attachment to ensure it is only Rocket Pack or missles
		if( hev.hevTeamType.value == "Tactical Team" && ( hev.hevType.value == "Heavy" || hev.hevType.value == "Medium" ) ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); } }
		//Skip the first attachment to ensure it is always armor
		if( hev.hevTeamType.value == "Security Team" ) {
			if( attachmentsarraymap.indexOf("teamattach1") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach1"),1); } }
		//Skip the first attachment for Berserker Team Light HE-V
		if( hev.hevTeamType.value == "Berserker Team" && hev.hevType.value == "Light" ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); }
			if( attachmentsarraymap.indexOf("teamattach1") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach1"),1); } }
		//Skip the first and second attachment for Berserker Team Medium HE-V
		if( hev.hevTeamType.value == "Berserker Team" && hev.hevType.value == "Medium" ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); }
			if( attachmentsarraymap.indexOf("teamattach1") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach1"),1); }
			if( attachmentsarraymap.indexOf("teamattach2") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach2"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach2"),1); }
		}else if( hev.hevTeamType.value == "Berserker Team" && hev.hevType.value == "Heavy" ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); }
			if( attachmentsarraymap.indexOf("attach2") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach2"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach2"),1);}
			if( attachmentsarraymap.indexOf("teamattach1") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach1"),1); }
			if( attachmentsarraymap.indexOf("teamattach2") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach2"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach2"),1); }
		}else if( hev.hevTeamType.value == "Berserker Team" && hev.hevType.value == "Ultra" ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); }
			if( attachmentsarraymap.indexOf("attach2") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach2"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach2"),1);}
			if( attachmentsarraymap.indexOf("teamattach1") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach1"),1); }
		}else if( hev.hevTeamType.value == "Assasination Team" && hev.hevType.value == "Light" && getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); }
			if( attachmentsarraymap.indexOf("attach2") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach2"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach2"),1); }
		}else if( hev.hevTeamType.value == "Assasination Team" && hev.hevType.value == "Light" && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); }
		}else if( hev.hevTeamType.value == "Assasination Team" && hev.hevType.value == "Medium" ) {
			if( attachmentsarraymap.indexOf("attach1") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach1"),1); }
			if( attachmentsarraymap.indexOf("attach2") !== -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("attach2"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("attach2"),1); } }
		//Skip the first team attachment since it should be just Electronic Countermeasures
		if( hev.hevTeamType.value == "Reconnaissance Team" ) {
			if( attachmentsarraymap.indexOf("teamattach1") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach1"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach1"),1); }
			if( attachmentsarraymap.indexOf("teamattach2") > -1 ) {
				attachmentsarray.splice(attachmentsarraymap.indexOf("teamattach2"),1);
				attachmentsarraymap.splice(attachmentsarraymap.indexOf("teamattach2"),1); } }

		//Loops though each item on each attachment and ensures it is enabled
		for( let i = 1; i < weaponlistmap.length; i++ ) {
			if( weaponlist.filter(weapon => weapon.Attachment==weaponlistmap[i])[0].Type == "Upgrade" ) {
				for( let y = 0; y < attachmentsarray.length; y++ ) {
					for( let x = 0; x < upgrade.length; x++ ) {
						if( attachmentsarray[y].options[i].value == upgrade[x].Attachment ) {
							attachmentsarray[y].options[i].disabled = false; } } } } }
	}

	//Deals with attachment slots
	//Calls updateAttachmentValue/checkAttachmentsWeapons/checkAttachmentsUpgrade/calculateHEVTonnage/calculatePageTonnage
	function updateSlot(slot) {
		let hev = slot.form;
		//Gets the details for item selected
		let weap = weaponlist.filter(weapon => weapon.Attachment==slot.value)[0];

		if( weap.Attachment == "" ) {
			if( slot.id == "compactattach1" ) {
				clearCompactTable(hev); 
				updateAttachmentOptions(hev);
				hev.querySelector("#compact_attach_div").setAttribute('hidden','');
				return; //exit early since all we have to do is clear table
			} else {
				updateAttachmentValue(slot,1); } }

		//prep new array for all items.
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		//If blank line selected wipe out fields

		//Sets values for all slots 
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			if( attachmentsarray[i].selectedIndex != 0 ) {
				if( weaponlist.filter(weapon => weapon.Attachment==attachmentsarray[i].value)[0].Type == "Weapon" ) {
					checkAttachmentsWeapons(attachmentsarray[i]); }
				else if ( weaponlist.filter(weapon => weapon.Attachment==attachmentsarray[i].value)[0].Type == "Upgrade" ) {
					checkAttachmentsUpgrade(attachmentsarray[i]);
				}
			}
		}

		if( bulkyattachments.includes(weap.Attachment) ) {
			bulkyAttachment( slot ); 
		}else { //if( bulkyattachments.includes(sacrificeslot.value) )  {
			cleanBulkyAttachment( slot ); }

		updateArmor( hev.querySelector('#armor_mod') );

		updateJumpJets(hev);
		updateAttachmentOptions(hev);
		calculateHEVTonnage(hev);
		calculatePageTonnage();
	}

	//Helper function to enable all slots before recheck due to bulky options.
	function enableSlot( hev ) {
		//prep new array for all items.
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		//Enable all slots
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			attachmentsarray[i].disabled = false; }
	}


	///////////////needs rewrite
	//Helper function to adjust the attachment slots due to motion.
	function HVEMotion(a) {
		let hev = a.form;
		let cellcnt = countAttachTableCells(hev);
		let hevAttachments = HEVBaseTableCount(hev);

		//Should be default, has all attachments
		if( hev.hevMotionType.value == "Bi-Pedal" ) {
			if( cellcnt < hevAttachments ) {
				addHardPoint(hev); }
			hev.querySelector("#motion_rules_div").setAttribute("hidden",true);
		//Should lose one attachment for non-standard motion type
		} else if(  hev.hevMotionType.value == "Tracked" ) {
			if( cellcnt == hevAttachments ) {
				removeLastHardPoint(hev); }
			hev.querySelector("#motion_rules_div").removeAttribute("hidden");
			hev.querySelector("#motion_rules_text").replaceChildren(document.createTextNode('Plow Through(Order)'));
		//Should lose one attachment for non-standard motion type
		} else if(  hev.hevMotionType.value == "Multi-Limb" ) {
			if( cellcnt == hevAttachments ) {
				removeLastHardPoint(hev); }
			hev.querySelector("#motion_rules_div").removeAttribute("hidden");
			hev.querySelector("#motion_rules_text").replaceChildren(document.createTextNode('Hunker Down(Order)'));
		}
	}

	//Helper function to figure out how many attachments a HEV should have base
	//Returns hevAttachments
	function HEVBaseTableCount(hev) {
		//let hev = a.form;
		let hevAttachments = 0;
		//Figures out the size of attachments per weight
		if( hev.hevType.value == "Light" ) {
			hevAttachments = 4;
		} else if( hev.hevType.value == "Medium" ) {
			hevAttachments = 5;
		} else if( hev.hevType.value == "Heavy" ) {
			hevAttachments = 6;
		} else if(  hev.hevType.value == "Ultra" ) {
			hevAttachments = 7 ; }
		if( AHD == true ) {
			hevAttachments += Number(1); }
		return hevAttachments;
	}

	//Helper function to count cells in the attach table
	//Returns cell count
	function countAttachTableCells(hev) {
		cellcnt = 0;
		table = hev.querySelector("#attach_table");
		//count cells in table so we can add onto the end
		for( let x = 0; x < table.rows.length; x++ ) {
			cellcnt = cellcnt + table.rows[x].cells.length; }
		return cellcnt;
	}

	//Helper function that gets the compact attachment list for a HE-V size
	//Returns array of options for attachments.
	function HEVCompactAttachList( hevSize ) {
		let attachlistmap = weaponlist.filter(weapon => weapon.Unique=="Compact").map(weaponlist => weaponlist.Attachment);
		attachlistmap.unshift(weaponlist.filter(weapon => weapon.Attachment=="").map(weaponlist => weaponlist.Attachment)[0]);
		return( attachlistmap );
	}

	//Helper function that gets the attachment list for a HE-V size
	//Returns array of options for attachments.
	function HEVAttachList( hev ) {
		let attachlistmap = weaponlist.map(weaponlist => weaponlist.Attachment);
		//If Light HVE remove option it can not have.
		if( hev.hevType.value == "Light" ) {
			if( attachlistmap.indexOf("Minefield Drone Carrier System") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Minefield Drone Carrier System"),1); }
			if( attachlistmap.indexOf("Combat Shield") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Combat Shield"),1); }
			if( attachlistmap.indexOf("Harpoon Gun") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Harpoon Gun"),1); }
			if( attachlistmap.indexOf("Heavy Plating") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Heavy Plating"),1); }
		} else if( hev.hevType.value == "Medium" ) {
			if( hev.hevTeamType.value != "Berserker Team" || ( hev.hevTeamType.value == "Berserker Team" && getTeamsHEV(hev.hevTeamName.value).length < 3 ) ) {
				attachlistmap.splice(attachlistmap.indexOf("Combat Shield"),1); }
			if( attachlistmap.indexOf("Arc Gun") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Arc Gun"),1); }
			if( attachlistmap.indexOf("Harpoon Gun") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Harpoon Gun"),1); }
			if( attachlistmap.indexOf("Heavy Plating") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Heavy Plating"),1); }
		} else if ( hev.hevType.value == "Heavy" ) {
			if( attachlistmap.indexOf("Arc Gun") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Arc Gun"),1); }
			if( attachlistmap.indexOf("Harpoon Gun") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Harpoon Gun"),1); }
			if( attachlistmap.indexOf("Heavy Plating") != -1 ) {
				attachlistmap.splice(attachlistmap.indexOf("Heavy Plating"),1); }
		} else if( hev.hevType.value == "Ultra" ) {
			if( attachlistmap.indexOf("Arc Gun") != -1 ) {
			attachlistmap.splice(attachlistmap.indexOf("Arc Gun"),1); }
		}
		return( attachlistmap );
	}

	//Helper function that gets the weapon list for a HE-V size
	//Returns array of options for attachments.
	function HEVWeaponList( hev ) {
		let weaponlistmap = weaponlist.filter(weapon => weapon.Type=="Weapon").map(weaponlist => weaponlist.Attachment);
		if( hev.hevType.value == "Light" ) {
			if( weaponlistmap.indexOf("Minefield Drone Carrier System") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Minefield Drone Carrier System"),1); }
			if( weaponlistmap.indexOf("Combat Shield") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Combat Shield"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
			if( weaponlistmap.indexOf("Heavy Plating") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Heavy Plating"),1); }
		} else if( hev.hevType.value == "Medium" ) {
			if( hev.hevTeamType.value != "Berserker Team" || ( hev.hevTeamType.value == "Berserker Team" && getTeamsHEV(hev.hevTeamName.value).length < 3 ) ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Combat Shield"),1); }
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
			if( weaponlistmap.indexOf("Heavy Plating") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Heavy Plating"),1); }
		} else if ( hev.hevType.value == "Heavy" ) {
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
			if( weaponlistmap.indexOf("Heavy Plating") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Heavy Plating"),1); }
		} else if( hev.hevType.value == "Ultra" ) {
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
			weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
		}
		return( weaponlistmap );
	}

	//Helper function that gets the weapon list for a HE-V size with a specific trait
	//Returns array of options for attachments.
	function HEVWeaponListTrait( hev, trait ) {
		let weaponlistmap = weaponlist.filter(weapon => weapon.Type=="Weapon" && Object.values(weapon.Traits).some(traits => traits.includes(trait))).map(weaponlist => weaponlist.Attachment);
		//If Light HVE remove option it can not have.
		if( hev.hevType.value == "Light" ) {
			if( weaponlistmap.indexOf("Minefield Drone Carrier System") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Minefield Drone Carrier System"),1); }
			if( weaponlistmap.indexOf("Combat Shield") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Combat Shield"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
			if( weaponlistmap.indexOf("Heavy Plating") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Heavy Plating"),1); }
		} else if( hev.hevType.value == "Medium" ) {
			if( hev.hevTeamType.value != "Berserker Team" || ( hev.hevTeamType.value == "Berserker Team" && getTeamsHEV(hev.hevTeamName.value).length < 3 ) ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Combat Shield"),1); }
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
			if( weaponlistmap.indexOf("Heavy Plating") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Heavy Plating"),1); }
		} else if ( hev.hevType.value == "Heavy" ) {
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
			if( weaponlistmap.indexOf("Heavy Plating") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Heavy Plating"),1); }
		} else if( hev.hevType.value == "Ultra" ) {
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
			weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
		}
		return( weaponlistmap );
	}


	//Helper Function to disable a slot due to a bulky option.
	function bulkyAttachment( slot ) {
		let cellcount = countAttachTableCells( slot.form );
		let slotnum = Number(slot.id.slice(6,7));
		let sacrificeslot;
		//If the slot is not the last one, disable the next one
		if( slotnum < cellcount ) {
			sacrificeslot = slot.form.querySelector("#attach"+Number(slotnum+1));
			if( sacrificeslot.disabled && slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_traits").innerText == "Disabled for Bulky" ) {
				slot.value = "";
				slot.dispatchEvent(new Event('change'));
			} else {
				sacrificeslot.value = "";
				sacrificeslot.dispatchEvent(new Event('change'));
				slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_traits").innerText="Disabled for Bulky";
				slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_print_traits_value").innerText="Disabled for Bulky";
				sacrificeslot.disabled=true; }
		}else if( slotnum == cellcount ) {
			sacrificeslot = slot.form.querySelector("#attach"+Number(slotnum-1));
			if( sacrificeslot.disabled ) {
				slot.value = "";
				slot.dispatchEvent(new Event('change'));
			} else {
				sacrificeslot.value = "";
				sacrificeslot.dispatchEvent(new Event('change'));
				slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_traits").innerText="Disabled for Bulky";
				slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_print_traits_value").innerText="Disabled for Bulky";
				sacrificeslot.disabled=true; }
		}
	}

	//Helper Function to clean up an item that is bulky.
	function cleanBulkyAttachment( slot ) {
		let cellcount = countAttachTableCells( slot.form );
		let slotnum = Number(slot.id.slice(6,7));
		let sacrificeslot;
		let competingslot = Number(slotnum) + Number(1);
			if( slotnum < cellcount && competingslot <= cellcount ) {
					if( slotnum ==  (cellcount - 1) ) {
						sacrificeslot = slot.form.querySelector("#attach"+Number(slotnum+1));
						competingslot = slot.form.querySelector("#attach"+Number(slotnum+1));
					} else {
						sacrificeslot = slot.form.querySelector("#attach"+Number(slotnum+1));
						competingslot = slot.form.querySelector("#attach"+Number(slotnum+2)); }
				if( !(bulkyattachments.includes(competingslot.options[competingslot.selectedIndex].value)) && slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_traits").innerText == "Disabled for Bulky" ) {
					slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_traits").innerText="";
					slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_print_traits_value").innerText="";
					sacrificeslot.disabled=false; 
					}
			} else if( slotnum == cellcount ) {
				sacrificeslot = slot.form.querySelector("#attach"+Number(slotnum-1));
				competingslot = slot.form.querySelector("#attach"+Number(slotnum-2));
				if( !(bulkyattachments.includes(competingslot.options[competingslot.selectedIndex].value)) ) {
					if( sacrificeslot.disabled && slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_traits").innerText == "Disabled for Bulky" ) {
						slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_traits").innerText="";
						slot.form.querySelector("p#"+slot.form.id.replace(' ','\\ ')+sacrificeslot.id+"_print_traits_value").innerText="";
						sacrificeslot.disabled=false;
						}
				}
			}
	}

	//Helper function to add Armor for plating mods
	function armorMod( hev ) {
		let modarmor = Number(hev.querySelector('#armor_display').innerText);
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		let seloptions = [];
		//Loop to create array of selected attachment names
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			if( attachmentsarray[i].selectedIndex > 0 ) {
				seloptions.push(attachmentsarray[i].options[attachmentsarray[i].selectedIndex].value); } }
		if( seloptions.includes("Extra Plating") ) {
			modarmor = modarmor + Number(2);
		}else if( seloptions.includes("Heavy Plating") ) {
			modarmor = modarmor + Number(4);
		} else {
			updateArmor(hev.querySelector('#armor_mod')); }
		hev.querySelector('#armor_display').innerText=modarmor;
		pipsTracker( hev.querySelector('#armor_display').innerText, hev.querySelector('#armorcell'));
	}

	//Helper function, adds a free hard point to the Compact Hard Point Table
	//Calls addCell/checkAttachmentsUpgrade
	function addCompactHardPoint(hev) {
		cellcnt = 0;
		table = hev.querySelector("#compact_attach_table");
		//Insert first row into compact attachments table
		if( table.rows.length == 0 ) {
			let row = hev.querySelector("#compact_attach_table").insertRow(); }
		//count cells in table so we can add onto the end
		for( let x = 0; x < table.rows.length; x++ ) {
			cellcnt = cellcnt + table.rows[x].cells.length;
		}
		if( cellcnt == 0 ) {
			addCell(hev, cellcnt+1, table.rows[table.rows.length - 1], "compactattach"); }
		hev.querySelector("#compact_attach_div").removeAttribute('hidden');
	}

	//Helper function that checks an option value is in a select
	function hasOptionWithValue(selectElement, value) {
		for (let i = 0; i < selectElement.options.length; i++) {
			if (selectElement.options[i].value === value) {
				return true; } }
		return false;
	}

////Team stuff

	//Helper function that checks team has right count of HEV sizes allowedTeamCount
	function checkTeamComposition(hevTeam) {
		let hev = getTeamsHEV(hevTeam);
		let teamtype = document.getElementById(hevTeam).parentNode.querySelector('#TeamType').value;
		if ( teamtype == "Fire Support Team" ) { //needs help
			if( hev.length == 4 ) {
				if( ( getHEVSize(hev[2]) == "Medium" || getHEVSize(hev[2]) == "Heavy" ) && getHEVSize(hev[3]) != "Light") {
					addSize(hev[3],"Light");
					hev[3].hevType.value = "Light";
					hev[3].hevType.dispatchEvent(new Event('change'));
					removeSize(hev[3], "Medium");
					removeSize(hev[3], "Heavy");
				} else if( getHEVSize(hev[2]) == "Light" && ( getHEVSize(hev[3]) != "Medium" && getHEVSize(hev[3]) != "Heavy" ) ) {
					addSize(hev[3], "Medium");
					addSize(hev[3], "Heavy");
					hev[3].hevType.value = "Medium";
					hev[3].hevType.dispatchEvent(new Event('change'));
					removeSize(hev[3], "Light");
				}
			} //maybe here check if team of three and update options to ensure they have selections?
		} else if ( teamtype == "Reconnaissance Team" ) { //done?
			if( hev.length == 4 ) {
				if( getHEVSize(hev[1]) == "Light" || getHEVSize(hev[2]) == "Light" || getHEVSize(hev[3]) == "Light" ) {
					addSize(hev[1], "Medium");
					addSize(hev[1], "Heavy");
					addSize(hev[2], "Medium");
					addSize(hev[2], "Heavy");
					addSize(hev[3], "Medium");
					addSize(hev[3], "Heavy");
					}
				if( (getHEVSize(hev[1]) == "Medium" || getHEVSize(hev[1]) == "Heavy") && (getHEVSize(hev[2]) == "Medium" || getHEVSize(hev[2]) == "Heavy") ) {
					removeSize(hev[3], "Medium");
					removeSize(hev[3], "Heavy");
				}
				if( (getHEVSize(hev[1]) == "Medium" || getHEVSize(hev[1]) == "Heavy") && (getHEVSize(hev[3]) == "Medium" || getHEVSize(hev[3]) == "Heavy") ) {
					removeSize(hev[2], "Medium");
					removeSize(hev[2], "Heavy");
				} 
				if( (getHEVSize(hev[2]) == "Medium" || getHEVSize(hev[2]) == "Heavy") && (getHEVSize(hev[3]) == "Medium" || getHEVSize(hev[3]) == "Heavy") ) {
					removeSize(hev[1], "Medium");
					removeSize(hev[1], "Heavy");
				}
			}
		} else if ( teamtype == "Security Team" ) { //done?
			if( hev.length == 4 ) {
				if( getHEVSize(hev[2]) == "Heavy" ) {
					removeSize(hev[3], "Heavy");
				} else if( getHEVSize(hev[3]) == "Heavy" ) {
					removeSize(hev[2], "Heavy"); }
				if( getHEVSize(hev[2]) == "Medium" || getHEVSize(hev[2]) == "Ultra" ) {
					addSize(hev[3], "Heavy"); }
				if( getHEVSize(hev[3]) == "Medium" || getHEVSize(hev[3]) == "Ultra" ) {
					addSize(hev[2], "Heavy"); }
			}
		} else if ( teamtype == "Tactical Team" ) { //done?
			//do nothing, can only add a med
		} else if ( teamtype == "Berserker Team" ) { //done?
			if( hev.length == 4 ) {
				if( getHEVSize(hev[2]) == "Heavy" ) {
					removeSize(hev[3], "Heavy");
					addSize(hev[3], "Ultra");
				} else if( getHEVSize(hev[3]) == "Ultra" ) {
					removeSize(hev[2], "Ultra");
					addSize(hev[2], "Heavy"); }
			}
		} else if ( teamtype == "Gunslinger Team" ) { //done?
			if( hev.length == 4 ) {
				if( getHEVSize(hev[2]) == "Medium" ) {
					removeSize(hev[3], "Medium");
					addSize(hev[3], "Heavy");
				} else if( getHEVSize(hev[2]) == "Heavy" ) {
					removeSize(hev[3], "Heavy");
					addSize(hev[2], "Medium"); }
			}
		} else if ( teamtype == "Assasination Team" ) { //done?
			if( hev.length == 4 ) {
				if( getHEVSize(hev[2]) == "Medium" ) {
					removeSize(hev[3], "Medium");
				} else if( getHEVSize(hev[3]) == "Medium" ) {
					removeSize(hev[2], "Medium"); 
				} else if( getHEVSize(hev[2]) == "Light" ) {
					addSize(hev[3], "Medium");
				} else if( getHEVSize(hev[3]) == "Light" ) {
					addSize(hev[2], "Medium"); }
			}
		}
	}

	//Function that disables all items in a select based on team.
	function teamOptionDisable(hev) {
		//Gets array of all options for the slot
		let weaponlistmap = HEVAttachList( hev );
		//Prob have to check size too in this to make sure.
		if( hev.hevTeamType.value == "Tactical Team" ) {
			weaponlistmap.splice(weaponlistmap.indexOf("Rocket Pack"),1); 
			weaponlistmap.splice(weaponlistmap.indexOf("Missiles"),1); 
		}else if( hev.hevTeamType.value == "Security Team" ) {
			for( let x = 0; x < armorattachments.length; x++ ) {
				if( weaponlistmap.includes(armorattachments[x]) ) {
					weaponlistmap.splice(weaponlistmap.indexOf(armorattachments[x]),1); } }
		}
		for( let i = 0; i < weaponlistmap.length; i++ ) {
			disableOption(hev.attach1,weaponlistmap[i]);
		}
	}

	//Helper function, disables option for select box
	function disableOption(select, optiontodisable) {
		for( let i = 0; i < select.options.length; i++ ) {
			if( select.options[i].value == optiontodisable ) {
				select.options[i].disabled = true; 
				}
		}
	}


	//Helper function sets Fire Support Team default equipment
	function setTeamFSTDefault(hev) {
		if( getHEVSize(hev) == "Light" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				hev.attach1.value = "Target Designator";
				hev.attach1.disabled = true;
				hev.attach1.dispatchEvent(new Event('change'));
				hev.querySelector("#team_attach_div").setAttribute("hidden",true);
			} else {
				rebuildFSTLight(hev); }
		} else if( getHEVSize(hev) == "Medium" || getHEVSize(hev) == "Heavy" ) {
			hev.attach1.value = "Rocket Pack";
			hev.attach1.disabled = true;
			hev.attach1.dispatchEvent(new Event('change'));
			hev.attach2.value = "Missiles";
			hev.attach2.disabled = true;
			hev.attach2.dispatchEvent(new Event('change'));
			hev.attach3.value = "Howitzer";
			hev.attach3.disabled = true;
			hev.attach3.dispatchEvent(new Event('change'));
			hev.querySelector("#team_attach_div").setAttribute("hidden",true);
		}
	}

	//Helper function sets Reconnaissance Team default equipment
	function setTeamRTDefault(hev) {
		if( getHEVSize(hev) == "Light" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 1 ) {
				hev.attach1.value = "Target Designator";
				hev.attach1.disabled = true;
				hev.attach1.dispatchEvent(new Event('change'));
				hev.querySelector("#team_rules_div").setAttribute("hidden",true);
			} else {
				rebuildRTLight(hev); }
		} else if( getHEVSize(hev) == "Medium" || getHEVSize(hev) == "Heavy" ) {
			hev.attach1.value = "Target Designator";
			hev.attach1.disabled = true;
			hev.attach1.dispatchEvent(new Event('change'));
			hev.armor_mod.value = "Stripped";
			hev.armor_mod.disabled = true;
			hev.armor_mod.dispatchEvent(new Event('change'));
			hev.structure_mod.value == "Stripped"
			hev.structure_mod.disabled = true;
			hev.structure_mod.dispatchEvent(new Event('change'));
			hev.querySelector("#team_attach_div").setAttribute("hidden",true);
		}
	}

	//Helper function sets Security Team default equipment
	function setTeamSTDefault(hev) {
		if( getHEVSize(hev) == "Medium" ) {
			removeArmorOption(hev, "Stripped");
			removeStructorOption(hev, "Stripped");
			hev.armor_mod.value = "Reinforced";
			hev.armor_mod.dispatchEvent(new Event('change'));
			//at least one reenforement
		} else if( getHEVSize(hev) == "Heavy" || getHEVSize(hev) == "Ultra") {
			removeArmorOption(hev, "Stripped");
			removeStructorOption(hev, "Stripped"); }
	}

	//Helper function sets Tactical Team default equipment
	function setTeamTTDefault(hev) {
		if( getHEVSize(hev) == "Medium" ) {
			hev.attach1.value = "Melee Weapon";
			hev.attach1.dispatchEvent(new Event('change'));
			removeArmorOption(hev, "Stripped");
			removeStructorOption(hev, "Stripped");
		} else if( getHEVSize(hev) == "Heavy" ) {
			hev.attach1.value = "Rocket Pack";
			hev.attach1.dispatchEvent(new Event('change'))
			teamOptionDisable(hev);
			removeArmorOption(hev, "Stripped");
			removeStructorOption(hev, "Stripped");
		}
	}

	//Helper function sets Berserker Team default equipment
	function setTeamBTDefault(hev) {
		if( getHEVSize(hev) == "Light" ) {
			hev.attach1.value = "Melee Weapon";
			//hev.attach1.disabled = true;
			hev.attach1.dispatchEvent(new Event('change'));
		}else if( getHEVSize(hev) == "Medium" ) {
			hev.attach1.value = "Melee Weapon";
			//hev.attach1.disabled = true;
			hev.attach1.dispatchEvent(new Event('change'));
		} else if( getHEVSize(hev) == "Heavy" ) {
			hev.attach1.value = "Nitro Boost";
			hev.attach1.disabled = true;
			hev.attach1.dispatchEvent(new Event('change'));
			hev.attach2.value = "Melee Weapon";
			//hev.attach2.disabled = true;
			hev.attach2.dispatchEvent(new Event('change'));
		} else if( getHEVSize(hev) == "Ultra" ) {
			hev.attach1.value = "Heavy Plating";
			hev.attach1.disabled = true;
			hev.attach1.dispatchEvent(new Event('change'));
			hev.attach2.value = "Nitro Boost";
			hev.attach2.disabled = true;
			hev.attach2.dispatchEvent(new Event('change'));
		}
	}

	//Helper function sets Gunslinger Team default equipment
	function setTeamGSTDefault(hev) {
		addCompact(hev, "Haptic Suit");
	}

	//Helper function sets Assasination Team default equipment
	function setTeamATDefault(hev) {
		if( getHEVSize(hev) == "Light" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length < 3 ) {
				hev.attach1.value = "Directional Thrusters";
				hev.attach1.disabled = true;
				hev.attach1.dispatchEvent(new Event('change'));
				hev.attach2.value = "Melee Weapon";
				hev.attach2.dispatchEvent(new Event('change'));
				hev.querySelector("#team_attach_div").setAttribute("hidden",true);
			} else {
				rebuildATLight(hev); }
		} else if( getHEVSize(hev) == "Medium" ) {
			hev.attach1.value = "Directional Thrusters";
			hev.attach1.disabled = true;
			hev.attach1.dispatchEvent(new Event('change'));
			hev.attach2.value = "Melee Weapon";
			hev.attach2.dispatchEvent(new Event('change'));
			hev.querySelector("#team_attach_div").setAttribute("hidden",true);
		}
	}



	//Helper function to add Haptic Suit for Gunslinger Team
	//hev, first cell, compat table new row, compatattach
	//valuetoset is the compact select option.
	function addCompact(hev, valuetoset) {
		if( hev.querySelector("#compact_attach_table").rows.length == 0 ) {
		hev.querySelector("#compact_attach_div").removeAttribute("hidden");
		addCell(hev, 1, hev.querySelector("#compact_attach_table").insertRow(), "compactattach");
		hev.compactattach1.value = valuetoset;
		hev.compactattach1.dispatchEvent(new Event('change'));
		hev.compactattach1.disabled = true;
		}
	}

	//Helper function to disable options based on team.
	function disableSelectOptionTeam(hev, selecttomodify) {
		let weaponlistmap = HEVAttachList( hev );
		let weaponlistallowed = [];
		let weaponlistdisable = HEVWeaponList( hev );

		//Sets the allowed list of weapons.
		if( hev.hevTeamType.value == "Gunslinger Team" ) {
			weaponlistallowed = HEVWeaponListTrait( hev, "Short");
			weaponlistallowed = weaponlistallowed.concat(HEVWeaponListTrait( hev, "Melee")); }

		if( hev.hevTeamType.value == "Assasination Team" ) {
			weaponlistallowed = HEVWeaponListWithoutTrait( hev, "Reach"); }

		if( !(weaponlistallowed.length === 0) ) {
			for( let i = 0; i < weaponlistallowed.length; i++ ) {
			if( weaponlistdisable.includes(weaponlistallowed[i]) > -1 ) {
					weaponlistdisable.splice(weaponlistdisable.indexOf(weaponlistallowed[i]),1); } }

			//Loops though each Weapon on each attachment and ensures it is disabled
			for( let i = 1; i < weaponlistmap.length; i++ ) {
				if( weaponlist.filter(weapon => weapon.Attachment==weaponlistmap[i])[0].Type == "Weapon" ) {
						if( selecttomodify.id != "compactattach1" ) {
							for( let x = 0; x < weaponlistdisable.length; x++ ) {
								if( selecttomodify.options[i].value == weaponlistdisable[x] ) {
									selecttomodify.options[i].disabled = true; } } } } }
		}
	}

	//Helper function that gets the weapon list for a HE-V size without a specific trait
	//Returns array of options for attachments.
	function HEVWeaponListWithoutTrait( hev, trait ) {
		let weaponlistmap = weaponlist.filter(weapon => weapon.Type=="Weapon" && !Object.values(weapon.Traits).some(traitArray => traitArray.includes(trait))).map(weaponlist => weaponlist.Attachment);

		if( hev.hevType.value == "Light" ) {
			if( weaponlistmap.indexOf("Minefield Drone Carrier System") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Minefield Drone Carrier System"),1); }
			if( weaponlistmap.indexOf("Combat Shield") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Combat Shield"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
		} else if( hev.hevType.value == "Medium" ) {
			if( hev.hevTeamType.value != "Berserker Team" || ( hev.hevTeamType.value == "Berserker Team" && getTeamsHEV(hev.hevTeamName.value).length < 3 ) ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Combat Shield"),1); }
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
		} else if ( hev.hevType.value == "Heavy" ) {
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
			if( weaponlistmap.indexOf("Harpoon Gun") != -1 ) {
				weaponlistmap.splice(weaponlistmap.indexOf("Harpoon Gun"),1); }
		} else if( hev.hevType.value == "Ultra" ) {
			if( weaponlistmap.indexOf("Arc Gun") != -1 ) {
			weaponlistmap.splice(weaponlistmap.indexOf("Arc Gun"),1); }
		}
		return( weaponlistmap );
	}

	//Helper function to disable all but melee options
	function HEVMeleeOnlyOption( hev, selecttomodify ) {
		let attachmentlist = HEVAttachList( hev );
		let attachmentlistdisable = HEVWeaponList( hev );

		let attachmentlistallowed = HEVWeaponListTrait( hev, "Melee");
		attachmentlistdisable = attachmentlistdisable.concat(weaponlist.filter(weapon => weapon.Type=="Upgrade").map(weaponlist => weaponlist.Attachment));

		if( !(attachmentlistallowed.length === 0) ) {
			for( let i = 0; i < attachmentlistallowed.length; i++ ) {
			if( attachmentlistdisable.includes(attachmentlistallowed[i]) > -1 ) {
					attachmentlistdisable.splice(attachmentlistdisable.indexOf(attachmentlistallowed[i]),1); } }

			//Loops though each Weapon on each attachment and ensures it is disabled
			for( let i = 1; i < attachmentlist.length; i++ ) {
					if( selecttomodify.id != "compactattach1" ) {
						for( let x = 0; x < attachmentlistdisable.length; x++ ) {
							if( selecttomodify.options[i].value == attachmentlistdisable[x] ) {
								selecttomodify.options[i].disabled = true; } } } }
		}
	}

//Need to export all items

	//Helper function takes an HEV object and returns the size selected
	function getHEVSize(hev) {
		return hev.hevType.options[hev.hevType.selectedIndex].value;
	}

	//Helper function that removes structor option sent from the HEV
	function removeStructorOption(hev, sizetoremove) {
		for( let i = 0; i < hev.structure_mod.options.length; i++ ) {
			if( hev.structure_mod.options[i].value == sizetoremove ) {
				hev.structure_mod.options[i].remove(); }
		}
	}

	//Helper function that removes armor option sent from the HEV
	function removeArmorOption(hev, sizetoremove) {
		for( let i = 0; i < hev.armor_mod.options.length; i++ ) {
			if( hev.armor_mod.options[i].value == sizetoremove ) {
				hev.armor_mod.options[i].remove(); }
		}
	}

	//onclick listener for armor mods
	function updateStructure(structor) {
		let hev = structor.form;
		if( hev.hevType.value == "Light" ) {
			hev.querySelector('#structure_display').innerText=4;
		} else if( hev.hevType.value == "Medium" ) {
			hev.querySelector('#structure_display').innerText=6;
		} else if( hev.hevType.value == "Heavy" ) {
			hev.querySelector('#structure_display').innerText=8;
		} else if( hev.hevType.value == "Ultra" ) {
			hev.querySelector('#structure_display').innerText=10;
		}
		if( hev.structure_mod.value == "Stripped" ) {
			hev.querySelector('#structure_display').innerText= Number(hev.querySelector('#structure_display').innerText) - Number('2');
		} else if( hev.structure_mod.value == "Reinforced" ) {
			hev.querySelector('#structure_display').innerText= Number(hev.querySelector('#structure_display').innerText) + Number('2');
		} else if( hev.structure_mod.value == "Standard" ) {
			//Nothing to do here, just logic check.
		}
		//Ensures the Security Team has one renforcement for medium
		if( hev.hevTeamType.value == "Security Team" && hev.structure_mod.value == "Standard" && hev.hevType.value == "Medium" ) {
			hev.armor_mod.value = "Reinforced";
			hev.armor_mod.dispatchEvent(new Event('change'));
		}
		pipsTracker( hev.querySelector('#structure_display').innerText, hev.querySelector('#struccell'));
		calculateHEVTonnage(hev);
	}

	//onclick listener for armor mods
	function updateArmor(armor) {
		let hev = armor.form;
		let modarmor;
		
		if( hev.hevType.value == "Light" ) {
			modarmor = 6;
		} else if( hev.hevType.value == "Medium" ) {
			modarmor = 8;
		} else if( hev.hevType.value == "Heavy" ) {
			modarmor = 10;
		} else if( hev.hevType.value == "Ultra" ) {
			modarmor = 12;
		}
		if( hev.armor_mod.value == "Stripped" ) {
			hev.querySelector('#armor_display').innerText = modarmor - Number('2');
		} else if( hev.armor_mod.value == "Reinforced" ) {
			hev.querySelector('#armor_display').innerText = modarmor + Number('2');
		} else if( hev.armor_mod.value == "Standard" ) {
			hev.querySelector('#armor_display').innerText = modarmor;
		}
		//Ensures the Security Team has one renforcement for medium
		if( hev.hevTeamType.value == "Security Team" && hev.armor_mod.value == "Standard" && hev.hevType.value == "Medium" ) {
			hev.structure_mod.value = "Reinforced";
			hev.structure_mod.dispatchEvent(new Event('change'));
		}
		
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		let seloptions = [];
		//Loop to create array of selected attachment names
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			if( attachmentsarray[i].selectedIndex > 0 ) {
				seloptions.push(attachmentsarray[i].options[attachmentsarray[i].selectedIndex].value); }
		}

		if( seloptions.includes("Extra Plating") || seloptions.includes("Heavy Plating") ) {
			armorMod( hev );
		}

		pipsTracker( hev.querySelector('#armor_display').innerText, hev.querySelector('#armorcell'));
		calculateHEVTonnage(hev);
	}

	//Sets up the armor/structor for new HEV's
	function initialArmorStructorMod(hev) {
		//Removes the armor and structure drop down to rebuild
		while( hev.armor_mod.options.length > 0 ) {
			hev.armor_mod.remove(0); }
		while( hev.structure_mod.options.length > 0 ) {
			hev.structure_mod.remove(0); }
		//Rebuilds the armor/structure drop downs when changed.
		hev.armor_mod.options.add(new Option('Stripped','Stripped'));
		hev.armor_mod.options.add(new Option('Standard','Standard'));
		hev.armor_mod.options.add(new Option('Reinforced','Reinforced'));
		hev.structure_mod.options.add(new Option('Stripped','Stripped'));
		hev.structure_mod.options.add(new Option('Standard','Standard'));
		hev.structure_mod.options.add(new Option('Reinforced','Reinforced'));
		hev.armor_mod.value = "Standard";
		hev.structure_mod.value = "Standard";
		//Ensures Lights can't strip structor, Ultras can't reinforce armor.
		if( hev.hevType.value == "Light" ) {
			 hev.structure_mod.remove(0); //needs help coudl use remove functions to be more clear
		} else if( hev.hevType.value == "Ultra" ) {
			hev.armor_mod.remove(2); //needs help could use remove functions to be mroe clear
		}
		//Enable the armor/structor boxes
		hev.structure_mod.removeAttribute("disabled");
		hev.armor_mod.removeAttribute("disabled");
	}

	//Helper function to show or hide HEV's jump jets status
	function updateJumpJets(hev) {
		let hevSize = hev.hevType.value;
		let jump = "-";
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		let seloptions = [];
		//Loop to create array of selected attachment names
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			if( attachmentsarray[i].selectedIndex > 0 ) {
				seloptions.push(attachmentsarray[i].options[attachmentsarray[i].selectedIndex].value); }
		}
		if( seloptions.indexOf("Jump Jets") > - 1 ) {
			if( hevSize == "Light" ) {
				jump=10;
			} else if( hevSize == "Medium" ) {
				if( hev.hevTeamType.value == "Assasination Team" ) {
					jump=9; 
				} else {
					jump=8; }
			} else if( hevSize == "Heavy" ) {
				jump=6;
			} else if( hevSize == "Ultra" ) {
				jump=4; }
		}
		hev.querySelector('#jump').innerText = jump;
	}

	//Update tonnage of single hev
	function calculateHEVTonnage(hev) {
		//Prep the array for cost celulation
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		let count = attachmentsarray.length;
		let hevSize = hev.hevType.value;
		let hevArmorValue = 0;
		let hevStructureValue = 0;
		
		//Gets the right value for HEV size and struc/armor so you don't get double charged for plating mods
		if( hev.hevType.value == "Light" ) {
			hevArmorValue = 6;
			hevStructureValue = 4;
		} else if( hev.hevType.value == "Medium" ) {
			hevArmorValue = 8;
			hevStructureValue = 6;
		} else if( hev.hevType.value == "Heavy" ) {
			hevArmorValue = 10;
			hevStructureValue = 8;
		} else if( hev.hevType.value == "Ultra" ) {
			hevArmorValue = 12;
			hevStructureValue = 10;
		}
		if( hev.armor_mod.value == "Stripped" ) {
			hevArmorValue = hevArmorValue - Number('2');
		} else if( hev.armor_mod.value == "Reinforced" ) {
			hevArmorValue = hevArmorValue + Number('2');
		} else if( hev.armor_mod.value == "Standard" ) {
			//Nothing to do here, just logic check.
		}
		
		if( hev.structure_mod.value == "Stripped" ) {
			hevStructureValue = hevStructureValue - Number('2');
		} else if( hev.structure_mod.value == "Reinforced" ) {
			hevStructureValue = hevStructureValue + Number('2');
		} else if( hev.structure_mod.value == "Standard" ) {
			//Nothing to do here, just logic check.
		}

		hev.querySelector('#tonnage_used').innerText = Number(hevArmorValue) + Number(hevStructureValue);
		//Loop though all attachments and add up the value for tonnage
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			hev.querySelector('#tonnage_used').innerText = Number(hev.querySelector('#tonnage_used').innerText) + Number(document.getElementById(hev.id + attachmentsarray[i].id + "_cost").innerText); }
		if( hev.querySelector('#tonnage_max').innerText < hev.querySelector('#tonnage_used').innerText ) {
			hev.querySelector("#tonnage_used").style.backgroundColor="#FF8080";
		} else {
			hev.querySelector("#tonnage_used").style.backgroundColor="initial"; }
		calculatePageTonnage();
	}

	//Helper function that removes size sent from the HEV
	function removeSize(hev, sizetoremove) {
		for( let i = 0; i < hev.hevType.options.length; i++ ) {
			if( hev.hevType.options[i].value == sizetoremove ) {
				hev.hevType.options[i].remove(); }
		}
	}

	//Helper function that adds size sent to the HEV and orders them
	function addSize(hev, sizetoadd) {
		//Adds the size if it isn't already an option
		if( Array.from(hev.hevType.options).filter( option => option.value == sizetoadd).length == 0 ) {
			hev.hevType.options.add(new Option(sizetoadd,sizetoadd)); }
		//sets up temp array for all items
		var tmparray = [];
		for( let i = 0; i < hev.hevType.options.length; i++ ) {
			tmparray.push( hev.hevType.item(i)); }
		//removes all items from select
		for( let i = hev.hevType.options.length -1; i >= 0; i-- ) {
			hev.hevType.remove(i); }
		//Adds all options back that are in the tmp array in proper order
		if ( tmparray.findIndex( option => option.value == "none") != -1 ) {
			hev.hevType.add(tmparray[tmparray.findIndex( option => option.value == "none")],null); }
		if ( tmparray.findIndex( option => option.value == "Light") != -1 ) {
			hev.hevType.add(tmparray[tmparray.findIndex( option => option.value == "Light")],null); }
		if ( tmparray.findIndex( option => option.value == "Medium") != -1 ) {
			hev.hevType.add(tmparray[tmparray.findIndex( option => option.value == "Medium")],null); }
		if ( tmparray.findIndex( option => option.value == "Heavy") != -1 ) {
			hev.hevType.add(tmparray[tmparray.findIndex( option => option.value == "Heavy")],null); }
		if ( tmparray.findIndex( option => option.value == "Ultra") != -1 ) {
			hev.hevType.add(tmparray[tmparray.findIndex( option => option.value == "Ultra")],null); }
	}

	//Helper function to clear Team Attachment table
	function clearTeamAttacTable(hev) {
		if( hev.querySelector("#team_attach_table").rows.length != 0 ) {
			while( hev.querySelector("#team_attach_table").rows.length > 0 ) 
				hev.querySelector("#team_attach_table").rows[0].remove(); }
		if( hev.querySelector("#team_attach_table_print").rows.length != 0 ) {
			while( hev.querySelector("#team_attach_table_print").rows.length > 0 )
				hev.querySelector("#team_attach_table_print").rows[0].remove(); }
	}

	//Helper function to clear Attachment table
	function clearAttacTable(hev) {
		if( hev.querySelector("#attach_table").rows.length != 0 ) {
			while( hev.querySelector("#attach_table").rows.length > 0 )
				hev.querySelector("#attach_table").rows[0].remove(); }
		if( hev.querySelector("#attach_table_print").rows.length != 0 ) {
			while( hev.querySelector("#attach_table_print").rows.length > 0 )
				hev.querySelector("#attach_table_print").rows[0].remove(); }
	}

	//Helper function to clear Compact table
	function clearCompactTable(hev) {
		if( hev.querySelector("#compact_attach_table").rows.length != 0 ) {
			while( hev.querySelector("#compact_attach_table").rows.length > 0 )
				hev.querySelector("#compact_attach_table").rows[0].remove(); }
		if( hev.querySelector("#compact_attach_table_print").rows.length != 0 ) {
			while( hev.querySelector("#compact_attach_table_print").rows.length > 0 )
				hev.querySelector("#compact_attach_table_print").rows[0].remove(); }
		hev.querySelector("#compact_attach_div").setAttribute('hidden','');
	}

	//Helper function that takes a number and fills in the pips
	function pipsTracker( numb, div ) {
		div.replaceChildren();
		for( let i = 0; i < numb; i++ ) {
			div.insertAdjacentHTML('beforeend', '&#9898 '); }
	}

	//Helper function, removes last hard point in the table
	function removeLastHardPoint(hev) {
		let table = hev.querySelector('#attach_table');
		let cellcnt = table.rows[table.rows.length - 1].cells.length;
		//Deletes last cell in table
		table.rows[table.rows.length -1].deleteCell(cellcnt-1);
		if( HEVBaseTableCount(hev) == 7 ) {
			table.deleteRow(-1); }

		//Adjust the table for printing
		table = hev.querySelector('#attach_table_print');
		table.deleteRow(table.rows.length-1);

		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			updateSlot(attachmentsarray[i]); }

		updateAttachmentOptions(hev);
		updateJumpJets(hev);
	}

	//////////////////needs rewrite
	//Removes hev from the hev array
	function deletehev(numb) {
		if( document.getElementById("hev "+numb).hevTeamName.value != "hevList" ) {
			
			let placholderTeamName = document.getElementById("hev "+numb).hevTeamName.value;
			let placholderTeamType;
			if( document.getElementById("hev "+numb).hevTeamType.value == "Berserker Team" ) {
				placholderTeamType = "Berserker Team";
				placholderTeamName = document.getElementById("hev "+numb).hevTeamName.value; }

			let placeholder = document.getElementById("hev "+numb).hevTeamName.value;
			document.getElementById("hev "+numb).remove();
			teamHEVCount(placeholder);
			//if( placholderTeamType== "Berserker Team" ) {
				checkTeamBonus(placholderTeamName);// }
		} else {
			document.getElementById("hev "+numb).remove(); }

		calculatePageTonnage();
	}
	
//Need to export outrageousSupportBudgetPerk && cleanUpOutrageousSupportBudget

	//Deals with the perk
	//Calls addOutrageousSupportBudget / removeOutrageousSupportBudget
	function outrageousSupportBudgetPerk() {
		if(  document.getElementById("OSB").checked || document.getElementById("SOSB").checked ) {
			if( OSB == false ) {
					//Change global state for flag
					OSB = true; 
					addOutrageousSupportBudget();
				}
			//Check if we clicked off the perk and remove extra Support
			} else if( document.getElementById("OSB").checked == false || document.getElementById("SOSB").checked == false ) {
				if( OSB == true ) {
					//Change global state for flag
					OSB = false;
					removeOutrageousSupportBudget();
				}
			}
	}

	//Helper function, adds a special Support Asset for the perk.
	function addOutrageousSupportBudget() {
		//Calls AddOffTableSupport to make the item for us.
		AddOffTableSupport( true );		
	}

	//Helper function, removes a special Support Asset for the perk.
	function removeOutrageousSupportBudget() {
		deleteSupport();
	}

	//Helper function, used to ensure when changing faction we reset Outrageous Support Budget
	//Calls removeOutrageousSupportBudget
	function cleanUpOutrageousSupportBudget() {
		if( OSB == true ) {
			//Change global state for flag
			OSB = false;
			removeOutrageousSupportBudget();
		}
	}
	
//Need to export orbitalStockpilesPerk

	//Deals with the perk
	//Calls addOrbitalStockpiles / removeOrbitalStockpiles
	function orbitalStockpilesPerk() {
		if(  document.getElementById("OS").checked ) {
			if( OS == false ) {
					//Change global state for flag
					OS = true; 
					addOrbitalStockpiles();
			}
		//Check if we clicked off the perk and remove extra Support
		} else if( document.getElementById("OS").checked == false ) {
			if( OS == true ) {
				//Change global state for flag
				OS = false;
				removeOrbitalStockpiles();
			}
		}
	}

	//Helper function, adds one to Limited value of all Supports assests
	function addOrbitalStockpiles() {
		let support = document.querySelectorAll("[type='form'],[name ='Support']"); 
		//Loops though all Supports and adds one to the Limted field if it has a value
		for( let i = 0; i < support.length; i++ ) {
			//If the value is zero, don't add to it.
			if( support[i].querySelector('#limited').value > 0 ) {
				support[i].querySelector('#limited').value = Number(support[i].querySelector('#limited').value) + Number(1);
			}
		}
	}

	//Helper function, removes a single Limited value from all supports
	function removeOrbitalStockpiles() {
		var support = document.querySelectorAll("[type='form'],[name ='Support']"); 
		//Loops though all Supports and removes one to the Limted field if it has a value
		for( var i = 0; i < support.length; i++ ) {
			//If the value is zero, don't subtract
			if( support[i].querySelector('#limited').value > 0 ) {
				support[i].querySelector('#limited').value = Number(support[i].querySelector('#limited').value) - Number(1);
			}
		}
	}

	//Helper function, used to ensure when changing faction we reset Orbital Stockpiles
	//Calls removeOrbitalStockpiles
	function cleanUpOrbitalStockpiles() {
		if( OS == true ) {
			//Change global state for flag
			OS = false;
			removeOrbitalStockpiles();
		}
	}
	
//Need to export materielStockpilesPerk && cleanUpMaterielStockpiles

	//Deals with the perk
	//Calls addLimitedToAttachment / removeLimitedToAttachment
	function materielStockpilesPerk() {
		//Checks if each hev gets extra slot.
		if(  document.getElementById("MS").checked ) {
			if( MS == false ) {
				//Change global state for flag
				MS = true; 
				addLimitedToAttachment("Missiles");
				addLimitedToAttachment("Rocket Pack");
				addLimitedToAttachment("Minefield Drone Carrier System");
				addLimitedToPod("Short range Missile Pack");
				addLimitedToPod("Rocket Pack");
			}
		//Check if we clicked off the perk and remove extra attachment
		} else if( document.getElementById("MS").checked == false ) {
			if( MS == true ) {
				//Change global state for flag
				MS = false;
				removeLimitedToAttachment("Missiles");
				removeLimitedToAttachment("Rocket Pack");
				removeLimitedToAttachment("Minefield Drone Carrier System");
				removeLimitedToPod("Short range Missile Pack");
				removeLimitedToPod("Rocket Pack");
			}
		}
	}

	//Helper function, adds one to the limited fields for attachments
	function addLimitedToAttachment( attachmentName ) {
		let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
		//Loops over all HEV too adjust Limted value
		for( let i = 0; i < hev.length; i++ ) {
			let table = hev[i].querySelector('#attach_table');
			let select = table.getElementsByTagName( 'select' );
			//Loop though all options to add one if needed
			for( let x = 0; x < select.length; x++ ) {
					if( select[x].options[select[x].selectedIndex].value == attachmentName ) {
					//Updates the Limited value to add one
					document.getElementById(hev[i].id + select[x].id + "_limited").value = Number(document.getElementById(hev[i].id + select[x].id + "_limited").value) + Number(1);
				}
			}
		}
	}

	//Helper function to add one to UL HE-V pods
	function addLimitedToPod( podName ) {
		//Loops over UL HE-V to adjust pod if needed
		let hev = document.querySelectorAll("[type='form'],[name ='ulhev']"); 
		for( let i = 0; i < hev.length; i++ ) {
			let select = hev[i].querySelector("#ulpodtype");
			if( select.options[select.selectedIndex].value == podName ) {
				for( ulhevnum = 1; ulhevnum <= 3; ulhevnum++ ) {
					document.getElementById('limited' + ulhevnum).innerText = Number(document.getElementById('limited' + ulhevnum).innerText) + Number(1); }
			}
		}
	}

	//Helper function, removes one from the limited fields for attachments
	function removeLimitedToAttachment( attachmentName ) {
		let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
		//Loops over all HEV to adjust Limted value
		for( let i = 0; i < hev.length; i++ ) {
			let table = hev[i].querySelector('#attach_table');
			let select = table.getElementsByTagName( 'select' );
			//Loop though all options to add one if needed
			for( let x = 0; x < select.length; x++ ) {
					if( select[x].options[select[x].selectedIndex].value == attachmentName ) {
					//Updates the Limited value to add one
					document.getElementById(hev[i].id + select[x].id + "_limited").value = Number(document.getElementById(hev[i].id + select[x].id + "_limited").value) - Number(1);
				}
			}
		}
	}

	//Helper function to remove one to UL HE-V pods
	function removeLimitedToPod( podName ) {
		//Loops over UL HE-V to adjust pod if needed
		let hev = document.querySelectorAll("[type='form'],[name ='ulhev']"); 
		for( let i = 0; i < hev.length; i++ ) {
			let select = hev[i].querySelector("#ulpodtype");
			if( select.options[select.selectedIndex].value == podName ) {
				for( ulhevnum = 1; ulhevnum <= 3; ulhevnum++ ) {
					document.getElementById('limited' + ulhevnum).innerText = Number(document.getElementById('limited' + ulhevnum).innerText) - Number(1); }
			}
		}
	}

	//Helper function, used to ensure when changing faction we reset Materiel Stockpiles
	//Calls removeLimitedToAttachment
	function cleanUpMaterielStockpiles() {
		if( MS == true ) {
			//Change global state for flag
			MS = false;
			removeLimitedToAttachment("Missiles");
			removeLimitedToAttachment("Rocket Pack");
			removeLimitedToAttachment("Minefield Drone Carrier System");
		}
	}
	
//Need to export topEndHardwarePerk

	//Deals with the perk
	//Calls addTopEndHardware / removeTopEndHardware
	function topEndHardwarePerk() {
		if(  document.getElementById("TEH").checked || document.getElementById("STEH").checked ) {
			if( TEH == false ) {
				//Change global state for flag
				TEH = true; 
				addTopEndHardware();
			}
		//Check if we clicked off the perk and remove extra attachment
		} else if( document.getElementById("TEH").checked == false || document.getElementById("STEH").checked == false ) {
			if( TEH == true ) {
				//Change global state for flag
				TEH = false;
				removeTopEndHardware();
			}
		}
	}

	//Helper function, adds two tons to each hev's max tonnage
	function addTopEndHardware() {
		let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
		//Loops though all hevs and adds 2 tons to the total
		for( let i = 0; i < hev.length; i++ ) {
			//If the value is zero, no size is selected, dont add the extra tons.
			if( hev[i].querySelector('#tonnage_max').innerText > 0 ) {
				hev[i].querySelector('#tonnage_max').innerText = Number(hev[i].querySelector('#tonnage_max').innerText) + 2;
			}
		}
	}

	//Helper function, removes two tons to each hev's max tonnage
	function removeTopEndHardware() {
		let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
		//Loops though all hev and removes 2 tons to the total
		for( let i = 0; i < hev.length; i++ ) {
			//If the value is zero, no size is selected, dont remove the extra tons.
			if( hev[i].querySelector('#tonnage_max').innerText > 0 ) {
				hev[i].querySelector('#tonnage_max').innerText = Number(hev[i].querySelector('#tonnage_max').innerText) - 2;
			}
		}
	}

	//Helper function, used to ensure when changing faction we reset hardpoints
	//Calls removeTopEndHardware
	function cleanUpTopEndHardware() {
		if( TEH == true ) {
			//Change global state for flag
			TEH = false;
			removeTopEndHardware();
		}
	}
	
//Need to export advancedHardPointPerk && addHardPoint

	//Deals with the perk 
	//Calls addHardPoint / removeLastHardPoint
	function advancedHardPointPerk() {
		//Checks if each hev gets extra slot.
		if(  document.getElementById("AHD").checked || document.getElementById("SAHD").checked ) {
			if( AHD == false ) {
				//Change global state for flag
				AHD = true; 
				let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value != "none" ) {
						addHardPoint(hev[i]); }
				}
			}
		//Check if we clicked off the perk and remove extra attachment
		} else if( document.getElementById("AHD").checked == false || document.getElementById("SAHD").checked == false ) {
			if( AHD == true ) {
				//Change global state for flag
				AHD = false;
				let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value != "none" ) {
						removeLastHardPoint(hev[i]); }
				}
			}
		}
	}

	//Helper function, adds a hard point at the end of the table per hev
	//Calls addCell/updateSlot
	function addHardPoint(hev) {
		cellcnt = 0;
		table = hev.querySelector("#attach_table");
		//count cells in table so we can add onto the end
		for( let x = 0; x < table.rows.length; x++ ) {
			cellcnt = cellcnt + table.rows[x].cells.length;
		}
		if( cellcnt == 6 ) {
			table.insertRow(); }
		addCell(hev, cellcnt+1, table.rows[table.rows.length-1], "attach");
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		enableSlot(hev);
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			updateSlot(attachmentsarray[i]); }
	}

	//Helper function, used to ensure when changing faction we reset hardpoints
	//Calls removeLastHardPoint
	function cleanUpAdvancedHardPointPerk() {
		if( AHD == true ) {
			//Change global state for flag
			AHD = false;
			let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
			for( let i = 0; i < hev.length; i++ ) {
				if( hev[i].hevType.value != "none" ) {
					removeLastHardPoint(hev[i]); }
			}
		}
	}
	
//Need to export deleteSupport && AllowedSupportCount

	//Adds a Support Assest option.
	//Takes optional OSBSupportAsset set to false, when true it goes in at the top
	function AddOffTableSupport( OSBSupportAsset = false ) {
		let newSupport = document.createElement("form");

		//Sets up for OSBSupportAsset if the perk is selected
		if( OSBSupportAsset == true ) {
			newSupport.setAttribute("id","Support_OSBSupportAsset");
		} else {
			newSupport.setAttribute("id","Support_"+supNumber); }

		newSupport.removeAttribute("hidden");
		newSupport.setAttribute("name","Support");
		newSupport.setAttribute('class', 'support_list off_table_support_list');

		//Adds div
		let div = document.createElement('div');
		div.setAttribute('class', 'list-support-div');
		newSupport.appendChild(div);

		//Creates the table to display
		let table = document.createElement('table');
		table.setAttribute("class","support-table");
		row = table.insertRow();
		let cell = row.insertCell();

		//Adds the first label
		let element = document.createElement('label');
		element.setAttribute('for', 'attachment');
		element.innerHTML = 'Support : ';
		cell.appendChild(element);
		cell.setAttribute("class","stc-label-support noprint");
		cell = row.insertCell();

		//Adds the select
		element = document.createElement("select");
		element.setAttribute('id', 'attachment');

		//Adds the drop down and options
		for( let i=0; i < offtablesupportlist.length; i++ ) {
			let inst = document.createElement("option");
			inst.setAttribute("value",offtablesupportlist[i].Attachment);
			inst.innerHTML=offtablesupportlist[i].Attachment;
			element.appendChild(inst.cloneNode(true));
		}

		element.setAttribute('id', 'attachment');

		//Sets up for OSBSupportAsset if the perk is selected
		if( OSBSupportAsset == true ) {
			element.setAttribute('onchange', 'updateSupport(this,true)');
		} else {
			element.setAttribute('onchange', 'updateSupport(this)'); }

		cell.appendChild(element);
		cell.setAttribute("class","stc-select");
		cell = row.insertCell();

		//Adds cost
		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'cost_label_par');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Cost :');
		cell.setAttribute("class","stc-label-cost");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'cost');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","stc-input-cost");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds damage
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'damage_label_par');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Damage :');
		cell.setAttribute("class","stc-label-damage");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'damage');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","stc-input-damage");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits_label_par');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Traits :');
		cell.setAttribute("class","stc-label-traits");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");//stc-input-traits");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds limited label
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'limited_label_par');
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Limited :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds token label
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'token_label_par');
		paragraph.setAttribute("class","par_table_margin");
		paragraph.setAttribute("hidden","true");
		element = document.createTextNode('Token :');
		cell.setAttribute("class","");//stc-label-limit-token");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds limited counter
		paragraph = document.createElement('div');
		paragraph.setAttribute('id', 'limited');
		paragraph.setAttribute("class","");//par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds token counter
		paragraph = document.createElement('div');
		paragraph.setAttribute('id', 'token');
		paragraph.setAttribute("class","par_table_margin");
		paragraph.setAttribute("hidden","true");
		element = document.createTextNode('');
		cell.setAttribute("class","");//stc-input-limit-token");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Sets up for OSBSupportAsset if the perk is selected, no delete button for perk
		if( OSBSupportAsset == false ) {
			//Adds delete button
			element = document.createElement('button');
			element.setAttribute('type', 'button');
			element.innerHTML = 'Delete Support';
			element.setAttribute('id', 'delete_support');
			element.setAttribute('name', 'Delete Support');
			element.setAttribute('value', 'Delete Support');
			element.setAttribute("onclick","deleteSupport(\"Support_"+supNumber+"\")");
			element.setAttribute("class","noprint");
			cell.setAttribute("class","stc-delete");
			cell.appendChild(element);
		}
		else {
		cell.setAttribute("class","stc-delete");
		 }
		div.appendChild(table);
		//Sets up for OSBSupportAsset if the perk is selected
		if( OSBSupportAsset == true ) {
			document.getElementById("OffTableSupportList").insertBefore(newSupport, document.getElementById("OffTableSupportList").firstChild);
		} else {
			document.getElementById("OffTableSupportList").appendChild(newSupport); }
		supNumber++;
		AllowedSupportCount();
		updateSupportOption();
	}

	//Removes Support Assests.
	//If no number is passed, assume we are removing the OSB perk asset
	function deleteSupport(numb = "Support_OSBSupportAsset") {
		let ontablesupportselect = document.getElementById("onTableSupportSelect");

		if( document.getElementById(numb).name == "ulhev" ) {
			for( let i = 0; i < ontablesupportselect.options.length; i++ ) {
				if( ontablesupportselect.options[i].value == "Ultra Light HE-V" ) {
					ontablesupportselect.options[i].disabled = false; }
			}
		} else if( document.getElementById(numb).name == "vehicle" ) {
			for( let i = 0; i < ontablesupportselect.options.length; i++ ) {
				if( ontablesupportselect.options[i].value == "Vehicle" ) {
					ontablesupportselect.options[i].disabled = false; }
			}
		} else if( document.getElementById(numb).name == "infantry" ) {
			for( let i = 0; i < ontablesupportselect.options.length; i++ ) {
				if( ontablesupportselect.options[i].value == "Infantry" ) {
					ontablesupportselect.options[i].disabled = false; }
			}
		}
		
		document.getElementById(numb).remove();
		calculatePageTonnage();
		AllowedSupportCount();
		updateSupportOption();
	}

	//Helper function, allows set number of support assets per game size
	//Needs to take into account perks
	function AllowedSupportCount() {
		let supportcount = getGameSizeCount();
		//Convert to array
		let supportassets = Array.from(document.getElementsByClassName("support_list"));
		//Checks if Outrageous Support Budget Perk is taken, add +1 for the free Support Asset
		if( OSB == true ) {
			supportcount = supportcount + 1; }
		//If we reach supportcount disable the button
		if( supportassets.length  == supportcount ) {
			document.getElementById("addOffTableSupport").setAttribute("disabled","true");
			document.getElementById("onTableSupportSelect").setAttribute("disabled","true"); }
		else{
			document.getElementById("addOffTableSupport").removeAttribute("disabled");
			document.getElementById("onTableSupportSelect").removeAttribute("disabled"); }

		//If we change game size remove support assets
		if( supportassets.length  > supportcount ) {
			deleteSupport(supportassets[supportassets.length-1].id);
			updateSupportOption();
		}
	}

	/////////////could you a small tweek
	//Helper function called often to ensure the Support Options are enabled
	// or disabled depending on selections
	function updateSupportOption() {
		let supportassets = document.getElementsByClassName("off_table_support_list");
		let supportassetsarray = Array.from(document.getElementsByClassName("off_table_support_list"));
		let seloptions = [];

		//Create offtablesupportlist map so I have static name list;
		let offtablesupportlistmap = offtablesupportlist.map(offtablesupportlist => offtablesupportlist.Attachment);
		let offtablesupportlistmapturnon = offtablesupportlist.map(offtablesupportlist => offtablesupportlist.Attachment);

		//Loop to create array of selected values, if 0, ignore it's the default
		for( let y = 0; y < supportassetsarray.length; y++ ) {
			if( supportassetsarray[y].attachment.selectedIndex > 0 ) {
				seloptions.push(supportassetsarray[y].attachment.value); }
		}

		//Loop over each assest and disable any that are already selected.
		for( let x = 0; x < supportassetsarray.length; x++ ) {
			for( let i = 0; i < seloptions.length; i++) {
				//If this is the selected value of a drop down don't touch it
				if( supportassetsarray[x].value == seloptions[i] ) {
					//do nothing, but update it eventually
					supportassets[x].attachment.options[offtablesupportlistmap.indexOf(seloptions[i])].disabled = false; }
				//Not current drop down, disable item from other selects
				else {
					//This disables the drop down option.
					supportassets[x].attachment.options[offtablesupportlistmap.indexOf(seloptions[i])].disabled = true; }
			}
		} 

		//Loop to turn on assest if no longer selected
		for( let x = 0; x < seloptions.length; x++ ) {
			offtablesupportlistmapturnon.splice(offtablesupportlistmapturnon.indexOf(seloptions[x]),1); }

		for( let x = 0; x < supportassetsarray.length; x++ ) {
			for( let i = 0; i < offtablesupportlistmapturnon.length; i++) {
					//This disables the drop down option.
					supportassets[x].attachment.options[offtablesupportlistmap.indexOf(offtablesupportlistmapturnon[i])].disabled = false; }
		}
	}

	//Updates a Support option with the values of the asset
	//Takes optional OSBSupportAsset set to false, when true adjust values for the perk
	function updateSupport(support, OSBSupportAsset = false) {
		let sup = offtablesupportlist.filter(asset => asset.Attachment==support.value)[0];
		let form = support.form;

		//Sets up for OSBSupportAsset perk
		if( OSBSupportAsset == true ) {
			if( sup.Attachment == "Mine-Drone Barrage" ) {
				form.querySelector('#limited_label_par').setAttribute("hidden","true");
				form.querySelector('#limited').setAttribute("hidden","true");
				form.querySelector('#token_label_par').removeAttribute("hidden");
				form.querySelector('#token').removeAttribute("hidden");
				//form.querySelector('#token').innerText = sup.Token - 1;
				pipsTracker( sup.Token - 1, form.querySelector('#token') );
				form.querySelector('#damage').innerText = sup.Damage;
				form.querySelector('#cost').innerText = Number(0);
			} else if( sup.Attachment == "" ) {
				form.querySelector('#limited_label_par').removeAttribute("hidden");
				form.querySelector('#limited').removeAttribute("hidden");
				form.querySelector('#token_label_par').setAttribute("hidden","true");
				form.querySelector('#token').setAttribute("hidden","true");
				form.querySelector('#limited').innerText = sup.Limited;
				form.querySelector('#damage').innerText = sup.Damage;
				form.querySelector('#cost').innerText = sup.Cost;
			} else {
				form.querySelector('#limited_label_par').removeAttribute("hidden");
				form.querySelector('#limited').removeAttribute("hidden");
				form.querySelector('#token_label_par').setAttribute("hidden","true");
				form.querySelector('#token').setAttribute("hidden","true");
				//form.querySelector('#limited').innerText = Number(sup.Limited) - Number(1);
				pipsTracker( Number(sup.Limited) - Number(1), form.querySelector('#limited') );
				form.querySelector('#damage').innerText = sup.Damage - 1;
				form.querySelector('#cost').innerText = Number(0);
			}

			form.querySelector('#traits').innerText = sup.Traits;
		} else { // Not the OSBSupportAsset 
			if( sup.Attachment == "Mine-Drone Barrage" ) {
				form.querySelector('#limited_label_par').setAttribute("hidden","true");
				form.querySelector('#limited').setAttribute("hidden","true");
				form.querySelector('#token_label_par').removeAttribute("hidden");
				form.querySelector('#token').removeAttribute("hidden");
				//form.querySelector('#token').innerText = sup.Token;
				pipsTracker( sup.Token, form.querySelector('#token') );
			} else {
				form.querySelector('#limited_label_par').removeAttribute("hidden");
				form.querySelector('#limited').removeAttribute("hidden");
				form.querySelector('#token_label_par').setAttribute("hidden","true");
				form.querySelector('#token').setAttribute("hidden","true");
			}

			form.querySelector('#cost').innerText = sup.Cost;
			form.querySelector('#damage').innerText = sup.Damage;
			form.querySelector('#traits').innerText = sup.Traits;

			//Adds one if Orbital Stockpiles Budget Perk is taken.
			if( OS == true ) {
				if( sup.Limited > 0 ) {
					//form.querySelector('#limited').innerText = Number(sup.Limited) + Number(1);
					pipsTracker( Number(sup.Limited) + Number(1), form.querySelector('#limited') );
				} else {
					//form.querySelector('#limited').innerText = sup.Limited;
					pipsTracker( Number(sup.Limited), form.querySelector('#limited') ); }
			} else if( OS == false ) {
				//form.querySelector('#limited').innerText = sup.Limited;
				pipsTracker( Number(sup.Limited), form.querySelector('#limited') ); }
		}

		updateSupportOption();
		calculatePageTonnage();
	}
	
//Export addOnTableSupport

	//Adds on table Support
	function addOnTableSupport(ontablesupportselect) {
		let newSupport = document.createElement("form");
		let fieldset = document.createElement("fieldset");
		let legend = document.createElement("legend");
		fieldset.setAttribute("id","mainField");
		legend.setAttribute("id","mainLegend");
		legend.setAttribute("class","list-header-main");
		newSupport.appendChild(fieldset);
		fieldset.appendChild(legend);

		if( ontablesupportselect.options[ontablesupportselect.selectedIndex].value == "Ultra Light HE-V" ) {
			addOnTableSupportULHEV(newSupport);
			ontablesupportselect.options[ontablesupportselect.selectedIndex].disabled = true;
		} else if( ontablesupportselect.options[ontablesupportselect.selectedIndex].value == "Vehicle" ) {
			addOnTableSupportVehicle(newSupport);
			ontablesupportselect.options[ontablesupportselect.selectedIndex].disabled = true;
		} else if( ontablesupportselect.options[ontablesupportselect.selectedIndex].value == "Infantry" ) {
			addOnTableSupportInfantry(newSupport);
			ontablesupportselect.options[ontablesupportselect.selectedIndex].disabled = true; }

		//reset select box
		ontablesupportselect.selectedIndex = 0;

		supNumber++;
		calculatePageTonnage();
		AllowedSupportCount();
	}

	//Function to add on table support UL HE-V
	//Calls addULHEV / calculatePageTonnage / AllowedSupportCount / deleteSupport
	function addOnTableSupportULHEV(newSupport) {
		newSupport.setAttribute("id","ulhev"+supNumber);
		newSupport.setAttribute("name","ulhev");
		newSupport.setAttribute('class', 'support_list on_table_support_list support_list_ulhev  page-break-after');
		newSupport.querySelector("#mainLegend").innerHTML="UL HE-V";

		let element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('disabled', '');
		element.setAttribute('id', 'cost');
		element.setAttribute('name', 'cost');
		element.setAttribute('value', '10');
		element.setAttribute('hidden', '');
		newSupport.mainField.appendChild(element);

		addULHEV( newSupport.mainField, 1 );
		addULHEV( newSupport.mainField, 2 );
		addULHEV( newSupport.mainField, 3 );

		//Create div for pod, modification and delete
		let div = document.createElement('div');
		div.setAttribute('class', 'list-support-div padding');

		element = document.createElement('label');
		element.setAttribute('for', 'ulpodtype');
		element.setAttribute('class', 'par_table_margin');
		element.innerHTML = 'UL HE-V Pod : ';
		div.appendChild(element);

		//Adds the select
		element = document.createElement("select");
		element.setAttribute('id', 'ulpodtype');
		element.setAttribute('onchange', 'updateULHEVPod(this)');

		//Adds the drop down and options
		for( let i=0; i < ulpodlist.length; i++ ) {
			let inst = document.createElement("option");
			inst.setAttribute("value",ulpodlist[i].Name);
			inst.innerHTML=ulpodlist[i].Name;
			element.appendChild(inst.cloneNode(true));
		}
		div.appendChild(element);

		//Adds delete button
		element = document.createElement('button');
		element.setAttribute('type', 'button');
		element.innerHTML = 'Delete UL HE-V';
		element.setAttribute('id', 'delete_support');
		element.setAttribute('name', 'Delete UL HE-V');
		element.setAttribute('value', 'Delete UL HE-V');
		element.setAttribute("onclick","deleteSupport(\"ulhev"+supNumber+"\")");
		element.setAttribute("class","noprint button-space-left");
		div.appendChild(element);

		newSupport.mainField.appendChild(div);

		//Creates Rule div
		div = document.createElement('div');
		div.setAttribute('class', 'list-support-div grid padding');
		let squadtext = document.createTextNode("This Squadron also has the following traits : Ultra Light, Squadron, Close Support, All-Terrian");
		div.appendChild(squadtext);
		newSupport.mainField.appendChild(div);
		document.getElementById("OnTableSupportList").appendChild(newSupport);
	}

	//Helper function that adds UL HE-V
	function addULHEV( mainField, ulhevnum ) {
		let div = document.createElement('div');
		div.setAttribute('class', 'no-page-break list-support-div grid');
		mainField.appendChild(div);

		//Creates the table to display
		let table = document.createElement('table');
		table.setAttribute("class","on_table_ul_support_table");
		let header = table.createTHead();
		let headerrow = header.insertRow();
		let cell = headerrow.insertCell();

		//Adds the first label
		let element = document.createElement('label');
		element.setAttribute('for', 'ulhevtype' + ulhevnum);
		element.innerHTML = 'UL HE-V ' +  ulhevnum + ' : ';
		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = headerrow.insertCell();

		//Adds label for Speed
		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'label_speed' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Speed :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'label_traits' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Traits :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Armor
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'label_armor' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Armor :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Starts second row in the table body
		row = table.createTBody().insertRow();
		cell = row.insertCell();

		//Adds the select
		element = document.createElement("select");
		element.setAttribute('id', 'ulhevtype' + ulhevnum);

		//Adds the drop down and options
		for( let i=0; i < ulhevlist.length; i++ ) {
			let inst = document.createElement("option");
			inst.setAttribute("value",ulhevlist[i].Name);
			inst.innerHTML=ulhevlist[i].Name;
			element.appendChild(inst.cloneNode(true));
		}

		element.setAttribute('onchange', 'updateULHEVSupport(this)');
		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = row.insertCell();

		//Adds input for Speed
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'speed' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds input for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds input for Armor
		paragraph = document.createElement('div');
		paragraph.setAttribute('id', 'armor' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		div.appendChild(table);

		//Creates the table to display weapons
		table = document.createElement('table');
		table.setAttribute("class","on_table_support_weapon_table");
		table.setAttribute('id', 'weapon' + ulhevnum);

		header = table.createTHead();
		headerrow = header.insertRow();
		cell = headerrow.insertCell();

		element = document.createTextNode("Weapon/Pod");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Damage");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Range");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Traits");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();
		
		element = document.createTextNode("Limited");
		cell.setAttribute("class","");
		cell.appendChild(element);

		//Creates table body for weapons
		table.createTBody();

		//Creates table body for Pod
		table.createTBody();

		div.appendChild(table);
	}

	//Helper function to fill in UL HE-V fields
	//Calls equiptULHEVSupport
	function updateULHEVSupport( ulhev ) {
		let num = ulhev.id.slice(9,10);
		let sup = ulhevlist.filter(asset => asset.Name == ulhev.value)[0];
		ulhev.form.querySelector('#speed' + num ).innerText = sup.Speed;
		//ulhev.form.querySelector('#armor' + num ).innerText = sup.Armor;
		pipsTracker( Number(sup.Armor), ulhev.form.querySelector('#armor' + num ) );
		ulhev.form.querySelector('#traits' + num ).innerText = sup.Traits;
		equiptULHEVSupport(ulhev);
	}

	//Helper function that adds the pod to each UL HE-Veterans
	//Calls updateULHEVPodTable
	function updateULHEVPod( podselected ) {
		updateULHEVPodTable( podselected, 1 );
		updateULHEVPodTable( podselected, 2 );
		updateULHEVPodTable( podselected, 3 );
	}

	//Helper function to fill each UL HE-V pods table
	function updateULHEVPodTable( podselected, ulhevnum ) {
		let	table = podselected.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[1];
		let pod = ulpodlist.filter(asset => asset.Name == podselected[podselected.selectedIndex].value)[0];

		//Removes everything in the pod table body
		if( podselected.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[1].rows.length != 0 ) {
			while( podselected.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[1].rows.length > 0 ) 
				podselected.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[1].rows[0].remove(); }

		let row = table.insertRow();
		let cell = row.insertCell();

		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'name' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		let element = document.createTextNode(pod.Name);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'damage' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(pod.Damage);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'range' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(pod.Range);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(pod.Traits);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('div');
		paragraph.setAttribute('id', 'limited' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		cell.appendChild(paragraph);
		if( pod.Limited == "-" ) {
			podselected.form.querySelector('#limited' + ulhevnum).insertAdjacentHTML('beforeend', '-');
		//If Material Stockpiles is true add one for Missles and Rockets
		} else if( MS == true ) {
			if( pod.Name == "Short range Missile Pack" || pod.Name == "Rocket Pack" ) {
				//element = document.createTextNode(Number(pod.Limited) + Number(1));
				pipsTracker( Number(pod.Limited) + Number(1), podselected.form.querySelector('#limited' + ulhevnum) );
			} else {
				//element = document.createTextNode(pod.Limited);
				pipsTracker( Number(pod.Limited), podselected.form.querySelector('#limited' + ulhevnum) ); }
		} else {
			//element = document.createTextNode(pod.Limited); 
			pipsTracker( Number(pod.Limited), podselected.form.querySelector('#limited' + ulhevnum) ); }
		cell.setAttribute("class","");
		//paragraph.appendChild(element);
	}

	//Helper function to fill in UL HE-V fields
	//Calls updateULHEVWeapon
	function equiptULHEVSupport( ulhev ) {
		let ulhevnum = ulhev.id.slice(9,10);

		//Removes everything in the weapon table body
		if( ulhev.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[0].rows.length != 0 ) {
			while( ulhev.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[0].rows.length > 0 ) 
				ulhev.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[0].rows[0].remove(); }

		if( ulhev.value == "Brawler" ) {
			updateULHEVWeapon(ulhev,"UL Melee Weapons");
			updateULHEVWeapon(ulhev,"Submunitions");
		} else if( ulhev.value == "Pyro" ) {
			updateULHEVWeapon(ulhev,"UL Incinerators");
			updateULHEVWeapon(ulhev,"Submunitions");
		} else if( ulhev.value == "Commando" ) {
			updateULHEVWeapon(ulhev,"Submunitions");
		} else if( ulhev.value == "Rifleman" ) {
			updateULHEVWeapon(ulhev,"UL Autocannon");
			updateULHEVWeapon(ulhev,"UL Gernades");
		}
	}

	//Helper function to fill in UL HE-V fields
	function updateULHEVWeapon( ulhev, weapon ) {
		let ulhevnum = ulhev.id.slice(9,10);
		let	table = ulhev.form.querySelector('#weapon' + ulhevnum ).getElementsByTagName('tbody')[0];
		let wep = ulweaponlist.filter(asset => asset.Weapon == weapon)[0];
		let row = table.insertRow();
		let cell = row.insertCell();

		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'weapon' + ulhevnum);
		paragraph.setAttribute("class","par_table_margin");
		let element = document.createTextNode(wep.Weapon);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'damage' + ulhevnum + table.rows.length)
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Damage);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'range' + ulhevnum + table.rows.length);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Range);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph)
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits' + ulhevnum + table.rows.length);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Traits);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('div');
		paragraph.setAttribute('id', 'limited' + ulhevnum + table.rows.length);
		paragraph.setAttribute("class","par_table_margin");
		//element = document.createTextNode(wep.Limited);
		cell.setAttribute("class","");
		//paragraph.appendChild(element);
		cell.appendChild(paragraph);
		if( wep.Limited == "-" ) {
			ulhev.form.querySelector('#limited' + ulhevnum + table.rows.length).insertAdjacentHTML('beforeend', '-');
		} else {
		pipsTracker( Number(wep.Limited), ulhev.form.querySelector('#limited' + ulhevnum + table.rows.length) ); }
	}

	//Function to add on table support vehicle
	//Calls addULVehicle / deleteSupport
	function addOnTableSupportVehicle( newSupport ) {
		newSupport.setAttribute("id","vehicle"+supNumber);
		newSupport.setAttribute("name","vehicle");
		newSupport.setAttribute('class', 'no-page-break flex support_list on_table_support_list support_list_vehicle  page-break-after');
		newSupport.querySelector("#mainLegend").innerHTML="Vehicle";

		let element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('disabled', '');
		element.setAttribute('id', 'cost');
		element.setAttribute('name', 'cost');
		element.setAttribute('value', '10');
		element.setAttribute('hidden', '');
		newSupport.appendChild(element);

		//Create div for vehicles
		let vehiclediv = document.createElement('div');
		vehiclediv.setAttribute('class', 'list-vehicle-support-div padding');
		newSupport.mainField.appendChild(vehiclediv);
		let table = document.createElement('table');
		let row = table.insertRow();
		table.setAttribute("class","vehicletable");
		table.setAttribute("id","vehicletable");
		vehiclediv.appendChild(table);

		//Create div for buttons
		let div = document.createElement('div');
		div.setAttribute('class', 'list-support-div-buttons padding');
		div.appendChild(element);
		newSupport.mainField.appendChild(div);

		//Adds add vehicle button
		element = document.createElement('button');
		element.setAttribute('type', 'button');
		element.innerHTML = 'Add UL Vehicle';
		element.setAttribute('id', 'add_support_vehicle');
		element.setAttribute('name', 'Add UL Vehicle');
		element.setAttribute('value', 'Add UL Vehicle');
		element.setAttribute("onclick","addULVehicle(this)");
		element.setAttribute("class","noprint");
		div.appendChild(element);

		//Adds delete button
		element = document.createElement('button');
		element.setAttribute('type', 'button');
		element.innerHTML = 'Delete UL Vehicle';
		element.setAttribute('id', 'delete_support_vehicle');
		element.setAttribute('name', 'Delete UL Vehicle');
		element.setAttribute('value', 'Delete UL Vehicle');
		element.setAttribute("onclick","deleteSupport(\"vehicle"+supNumber+"\")");
		element.setAttribute("class","noprint");
		div.appendChild(element);

		//Creates Rule div
		div = document.createElement('div');
		div.setAttribute('class', 'list-support-div grid padding');
		let squadtext = document.createTextNode("This Squadron also has the following traits : Ultra Light, Squadron, Vehicle, Close Support");
		div.appendChild(squadtext);
		newSupport.mainField.appendChild(div);

		document.getElementById("OnTableSupportList").appendChild(newSupport);
	}
	
	//Helper function to add a Vehicle
	function addULVehicle( supportbutton ) {
		let vehicletable = supportbutton.form.querySelector("#vehicletable");
		let ulvnum = 0;
		let row = vehicletable.rows[vehicletable.rows.length - 1];

		if( row.cells.length == 2 ) {
			row = vehicletable.insertRow(); }

		let cell = row.insertCell();

		for( let x = 0; x < vehicletable.rows.length; x++ ) {
			 ulvnum = ulvnum + vehicletable.rows[x].cells.length;
		}

		//Create div for Vehicle button
		let div = document.createElement('div');
		div.setAttribute('class', 'vehicle-support-div padding');
		cell.appendChild(div);

		//Creates the table to display
		let table = document.createElement('table');
		table.setAttribute("class","on_table_ul_support_table");
		let header = table.createTHead();
		let headerrow = header.insertRow();
		cell = headerrow.insertCell();

		//Adds the first label
		let element = document.createElement('label');
		element.setAttribute('for', 'ulvehicletype' + ulvnum);
		element.innerHTML = 'UL Vehicle ' +  ulvnum + ' : ';
		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = headerrow.insertCell();

		//Adds label for Speed
		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'speed_label_par' + ulvnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Speed :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits_label_par' + ulvnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Traits :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Armor
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'armor_label_par' + ulvnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Armor :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Starts second row in the table body
		row = table.createTBody().insertRow();
		cell = row.insertCell();

		//Adds the select
		element = document.createElement("select");
		element.setAttribute('id', 'ulvehicletype' + ulvnum);
		element.setAttribute('onchange', 'updateULVehicle(this)');

		//Adds the drop down and options
		for( let i = 0; i < ulvehiclelist.length; i++ ) {
			let inst = document.createElement("option");
			inst.setAttribute("value",ulvehiclelist[i].Name);
			if( i == 0 ) {
					inst.setAttribute('selected','');
					inst.setAttribute('disabled',''); 
				}
			inst.innerHTML=ulvehiclelist[i].Name;
			element.appendChild(inst.cloneNode(true));
		}
		div.appendChild(element);

		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = row.insertCell();

		//Adds input for Speed
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'speed' + ulvnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds input for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits' + ulvnum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();
		div.appendChild(table);

		//Adds input for Armor Pips
		paragraph = document.createElement('div');
		paragraph.setAttribute('id', 'armorpip' + ulvnum);
		paragraph.setAttribute("class","par_table_margin");
		//element = document.createTextNode('');
		cell.setAttribute("class","");
		//paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Creates the table to display weapons
		table = document.createElement('table');
		table.setAttribute("class","on_table_support_weapon_table");
		table.setAttribute('id', 'weapon' + ulvnum);

		header = table.createTHead();
		headerrow = header.insertRow();
		cell = headerrow.insertCell();

		element = document.createTextNode("Weapon");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Damage");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Range");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Traits");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Limited");
		cell.setAttribute("class","");
		cell.appendChild(element);

		//Creates table body for weapons
		table.createTBody();
		div.appendChild(table);
		
		//Adds input for Armor that is hidden for tracking
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'armor' + ulvnum);
		element = document.createTextNode('');
		paragraph.appendChild(element);
		div.appendChild(paragraph);
		supportbutton.form.querySelector('#armor' + ulvnum).style.display="none";
		
		
		checkVehicleTonnage( supportbutton.form );
	}

	//Helper function to fill in UL Vehicle fields
	//Calls equiptULVehicleSupport / checkVehicleTonnage
	function updateULVehicle( ulvehicle ) {
		let num = ulvehicle.id;
		num = num.slice(13,14);
		let sup = ulvehiclelist.filter(asset => asset.Name == ulvehicle.value)[0];
		let form = ulvehicle.form;
		form.querySelector('#speed' + num ).innerText = sup.Speed;
		
		if( sup.Traits.length == 1 ) {
			form.querySelector('#traits' + num ).innerText = sup.Traits;
		} else {
			form.querySelector('#traits' + num ).innerHTML = sup.Traits[0];
			for( let i = 1; i < sup.Traits.length; i++ ) {
				
				form.querySelector('#traits' + num ).innerHTML += "<br/>";
				form.querySelector('#traits' + num ).innerHTML += sup.Traits[i];
			}
		}
		form.querySelector('#armor' + num ).innerText = sup.Armor;
		pipsTracker( Number(sup.Armor), form.querySelector('#armorpip' + num ) );

		equiptULVehicleSupport(ulvehicle);
		checkVehicleTonnage(ulvehicle.form);
	}

	//Helper function to fill in UL Vehicle weapons fields
	//Calls updateULVehicleWeapon
	function equiptULVehicleSupport( ulvehicle ) {
		let ulvehiclenum = ulvehicle.id.slice(13,14);
		let form = ulvehicle.form;
		//Removes everything in the weapon table body
		if( form.querySelector('#weapon' + ulvehiclenum ).getElementsByTagName('tbody')[0].rows.length != 0 ) {
			while( form.querySelector('#weapon' + ulvehiclenum ).getElementsByTagName('tbody')[0].rows.length > 0 ) 
				form.querySelector('#weapon' + ulvehiclenum ).getElementsByTagName('tbody')[0].rows[0].remove(); }
		if( ulvehicle.value == "Recon" ) {
			updateULVehicleWeapon(ulvehicle,"Submunitions");
		} else if( ulvehicle.value == "Fire Support" ) {
			updateULVehicleWeapon(ulvehicle,"Autocannon");
			updateULVehicleWeapon(ulvehicle,"Short Range Missile Pack");
		} else if( ulvehicle.value == "Tactical" ) {
			updateULVehicleWeapon(ulvehicle,"Autocannon");
		} else if( ulvehicle.value == "Engineering" ) {
			updateULVehicleWeapon(ulvehicle,"Submunitions"); }
	}

	//Helper function to fill in UL Vchicle fields
	function updateULVehicleWeapon( ulvehicle, weapon ) {
		let ulvehiclenum = ulvehicle.id.slice(13,14);
		let	table = ulvehicle.form.querySelector('#weapon' + ulvehiclenum ).getElementsByTagName('tbody')[0];
		let wep = ulvehicleweaponlist.filter(asset => asset.Weapon == weapon)[0];
		let row = table.insertRow();
		let cell = row.insertCell();

		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'weapon' + ulvehiclenum);
		paragraph.setAttribute("class","par_table_margin");
		console.log(wep);
		if( wep.Weapon == "Short Range Missile Pack" ) {
			let element = document.createTextNode('');
			paragraph.appendChild(element);
			paragraph.innerHTML = "Short Range";
			paragraph.innerHTML += "<br/>";
			paragraph.innerHTML += "Missile Pack";
		} else {
			let element = document.createTextNode(wep.Weapon);
			paragraph.appendChild(element);
		}
		
		cell.setAttribute("class","");
		//paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'damage' + ulvehiclenum)
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Damage);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'range' + ulvehiclenum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Range);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph)
		cell = row.insertCell();
	
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'traits' + ulvehiclenum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Traits);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);		
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'limited' + ulvehiclenum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Limited);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		//If Fire Support allow both option
		if( wep.Weapon == "Short Range Missile Pack" ) {
			element = document.createElement('button');
			element.setAttribute('type', 'button');
			element.innerHTML = 'Rocket Pack';
			element.setAttribute('id', 'change_fire_support');
			element.setAttribute('name', 'Change Fire Support');
			element.setAttribute('value', 'Change Fire Support');
			element.setAttribute("onclick","changeFireSupportV("+ulvehicle.id+",\"Rocket Pack\")");
			//element.setAttribute("onclick","changeFireSupportV(`ulvehicle.id`, \"Rocket Pack\")");
			element.setAttribute("class","noprint");
			cell.appendChild(element);
		} else if( wep.Weapon == "Rocket Pack" ) {
			element = document.createElement('button');
			element.setAttribute('type', 'button');
			element.innerHTML = 'Missile Pack';
			element.setAttribute('id', 'change_fire_support');
			element.setAttribute('name', 'Change Fire Support');
			element.setAttribute('value', 'Change Fire Support');
			element.setAttribute("onclick","changeFireSupportV("+ulvehicle.id+",\"Short Range Missile Pack\")");
			element.setAttribute("class","noprint");
			cell.appendChild(element);
		}
	}

	//Helper function to deal with Fire Support Vehicle option
	//Calls updateULVehicleWeapon
	function changeFireSupportV( ulvehicle, wep ) {
		let ulvehiclenum = ulvehicle.id.slice(13,14);
		//Removes everything in the weapon table body
		if( ulvehicle.form.querySelector('#weapon' + ulvehiclenum ).getElementsByTagName('tbody')[0].rows.length != 0 ) {
			while( ulvehicle.form.querySelector('#weapon' + ulvehiclenum ).getElementsByTagName('tbody')[0].rows.length > 0 ) 
				ulvehicle.form.querySelector('#weapon' + ulvehiclenum ).getElementsByTagName('tbody')[0].rows[0].remove(); }
		if( ulvehicle.value == "Fire Support" && wep == "Short Range Missile Pack" ) {
			updateULVehicleWeapon(ulvehicle,"Autocannon");
			updateULVehicleWeapon(ulvehicle,"Short Range Missile Pack");
		} else if( ulvehicle.value == "Fire Support" && wep == "Rocket Pack" ) {
			updateULVehicleWeapon(ulvehicle,"Autocannon");
			updateULVehicleWeapon(ulvehicle,"Rocket Pack");
		}
	}

	//Helper function to check tonnage of all vehicle for a total of 10 armor
	function checkVehicleTonnage( supportvehicleform ) {
		let vehicletable = supportvehicleform.querySelector('#vehicletable');
		let vnum = 0;
		for( let x = 0; x < vehicletable.rows.length; x++ ) {
			vnum = vnum + vehicletable.rows[x].cells.length; }

		let armorTotal = 0;
		for( let i = 0; i < vnum; i++ ) {
			armorTotal += parseInt(vehicletable.querySelector("#armor"+Number(i+1)).innerText) || 0; }
		while ( armorTotal > Number(10) ) {
			armorTotal -= parseInt(vehicletable.querySelector("#armor"+Number(vnum)).innerText) || 0; 
			vehicletable.rows[vehicletable.rows.length - 1].deleteCell(-1);
			if( vehicletable.rows[vehicletable.rows.length - 1].cells.length == 0 ) {
				vehicletable.deleteRow(-1); }
			vnum = vnum - 1;
		}
		if( armorTotal == Number(10) ) {
			supportvehicleform.querySelector("#add_support_vehicle").setAttribute('disabled', ''); 
		} else {
			supportvehicleform.querySelector("#add_support_vehicle").removeAttribute("disabled"); 
			}

	}

	//Function to add on table support infantry
	function addOnTableSupportInfantry( newSupport ) {
		newSupport.setAttribute("id","infantry"+supNumber);
		newSupport.setAttribute("name","infantry");
		newSupport.setAttribute('class', 'no-page-break flex support_list on_table_support_list support_list_infantry  page-break-after');
		newSupport.querySelector("#mainLegend").innerHTML="Bunkers & Infantry";

		let element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('disabled', '');
		element.setAttribute('id', 'cost');
		element.setAttribute('name', 'cost');
		element.setAttribute('value', '10');
		element.setAttribute('hidden', '');
		newSupport.mainField.appendChild(element);

		//Create div for bunker
		let infantrydiv = document.createElement('div');
		infantrydiv.setAttribute('class', 'list-infantry-support-div padding');
		newSupport.mainField.appendChild(infantrydiv);

		let table = document.createElement('table');
		table.setAttribute("class","infantrytable");
		infantrydiv.appendChild(table);
		let row = table.insertRow();
		let cell = row.insertCell();
		addULInfantryBunker(cell, 1);
		cell = row.insertCell();
		addULInfantryBunker(cell, 2);

		row = table.insertRow();
		cell = row.insertCell();
		addULInfantry(cell, 1);
		cell = row.insertCell();
		addULInfantry(cell, 2);

		row = table.insertRow();
		cell = row.insertCell();
		addULInfantry(cell, 3);
		cell = row.insertCell();
		addULInfantry(cell, 4);

		row = table.insertRow();
		cell = row.insertCell();
		addULInfantry(cell, 5);
		cell = row.insertCell();
		addULInfantry(cell, 6);

		//Create div for buttons
		let div = document.createElement('div');
		div.setAttribute('class', 'list-support-div-buttons padding');
		newSupport.mainField.appendChild(div);

		//Adds delete button
		element = document.createElement('button');
		element.setAttribute('type', 'button');
		element.innerHTML = 'Delete UL Infantry';
		element.setAttribute('id', 'delete_support_vehicle');
		element.setAttribute('name', 'Delete UL Infantry');
		element.setAttribute('value', 'Delete UL Infantry');
		element.setAttribute("onclick","deleteSupport(\"infantry"+supNumber+"\")");
		element.setAttribute("class","noprint");
		div.appendChild(element);

		//Creates Rule div
		div = document.createElement('div');
		div.setAttribute('class', 'list-support-div grid padding');
		let squadtext = document.createTextNode("All Infantry (not Mine Drones) have the following Traits : Infantry, Squadron, All-Terrian");
		div.appendChild(squadtext);
		newSupport.mainField.appendChild(div);

		document.getElementById("OnTableSupportList").appendChild(newSupport);
	}

	//Helper function that adds UL Infantry Bunker
	function addULInfantryBunker( mainField, ulbunkernum ) {
		//Adds div
		let div = document.createElement('div');
		div.setAttribute('class', 'list-support-div grid');
		mainField.appendChild(div);

		//Creates the table to display
		let table = document.createElement('table');
		table.setAttribute("class","on_table_ul_support_table");
		let header = table.createTHead();
		let headerrow = header.insertRow();
		let cell = headerrow.insertCell();

		//Adds the first label
		let element = document.createElement('label');
		element.setAttribute('for', 'bunker' + ulbunkernum);
		element.innerHTML = 'Bunker ' +  ulbunkernum + ' : ';
		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = headerrow.insertCell();

		//Adds label for Armor
		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'par_bunkerarmor_label' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Armor :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Structure
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'par_bunkerstructure_label' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Structure :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'par_bunkertraits_label' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Traits :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Starts second row in the table body
		row = table.createTBody().insertRow();
		cell = row.insertCell();
		//Adds the select
		element = document.createElement("select");
		element.setAttribute('id', 'bunker' + ulbunkernum);

		//Adds the drop down and options
		for( let i=0; i < ulbunkerweaponlist.length; i++ ) {
			let inst = document.createElement("option");
			inst.setAttribute("value",ulbunkerweaponlist[i].Weapon);
			inst.innerHTML=ulbunkerweaponlist[i].Weapon;
			element.appendChild(inst.cloneNode(true));
		}

		element.setAttribute('onchange', 'updateULBunkerWeapon(this)');
		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = row.insertCell();

		//Adds input for Armor
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkerarmor' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds input for Structure
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkerstructure' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds input for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkertraits' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();
		div.appendChild(table);

		//Creates the table to display weapons
		table = document.createElement('table');
		table.setAttribute("class","on_table_support_weapon_table");
		table.setAttribute('id', 'bunkerweapon' + ulbunkernum);
		
		header = table.createTHead();
		headerrow = header.insertRow();
		cell = headerrow.insertCell();
		
		element = document.createTextNode("Weapon");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Damage");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Range");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Limited");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Traits");
		cell.setAttribute("class","");
		cell.appendChild(element);

		//Creates table body for weapons
		table.createTBody();

		div.appendChild(table);
	}

	//Helper function that updates Bunker
	function updateULBunker( bunkerbutton ) {
		let num = bunkerbutton.id.slice(6,7);
		let sup = ulbunkerlist.filter(asset => asset.Name == "Bunker")[0];
		let form = bunkerbutton.form;
		form.querySelector('#bunkerarmor' + num ).innerText = sup.Armor;
		form.querySelector('#bunkerstructure' + num ).innerText = sup.Structure;
		form.querySelector('#bunkerarmor' + num ).innerText = sup.Armor;
		form.querySelector('#bunkertraits' + num ).innerText = sup.Traits;
	}

	//Helper function that updates Bunker Weapon
	//Calls updateULBunker
	function updateULBunkerWeapon( bunkerbutton ) {
		let ulbunkernum = bunkerbutton.id.slice(6,7);
		let	table = bunkerbutton.form.querySelector('#bunkerweapon' + ulbunkernum ).getElementsByTagName('tbody')[0];
		let wep = ulbunkerweaponlist.filter(asset => asset.Weapon == bunkerbutton[bunkerbutton.selectedIndex].value)[0];

		//Removes everything in the weapon table body
		if( bunkerbutton.form.querySelector('#bunkerweapon' + ulbunkernum ).getElementsByTagName('tbody')[0].rows.length != 0 ) {
			while( bunkerbutton.form.querySelector('#bunkerweapon' + ulbunkernum ).getElementsByTagName('tbody')[0].rows.length > 0 ) 
				bunkerbutton.form.querySelector('#bunkerweapon' + ulbunkernum ).getElementsByTagName('tbody')[0].rows[0].remove(); }

		let row = table.insertRow();
		let cell = row.insertCell();

		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkerweapon' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		let element = document.createTextNode(wep.Weapon);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkerdamage' + ulbunkernum)
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Damage);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkerrange' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Range);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph)
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkerlimited' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Limited);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'bunkertraits' + ulbunkernum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Traits);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);

		updateULBunker(bunkerbutton);
	}

	//Helper function that adds UL Infantry
	function addULInfantry( mainField, ulinfantrynum ) {
		//Adds div
		let div = document.createElement('div');
		div.setAttribute('class', 'list-support-div grid');
		mainField.appendChild(div);

		//Creates the table to display
		let table = document.createElement('table');
		table.setAttribute("class","on_table_ul_support_table");
		let header = table.createTHead();
		let headerrow = header.insertRow();
		let cell = headerrow.insertCell();
		
		//Adds the first label
		let element = document.createElement('label');
		element.setAttribute('for', 'ulinfantrytype' + ulinfantrynum);
		element.innerHTML = 'UL Squad ' +  ulinfantrynum + ' : ';
		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = headerrow.insertCell();

		//Adds label for Speed
		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'par_infantryspeed_label' + ulinfantrynum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Speed :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Structure
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'par_infantrystructure_label' + ulinfantrynum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Structure :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Adds label for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'par_infantrytraits_label' + ulinfantrynum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('Traits :');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = headerrow.insertCell();

		//Starts second row in the table body
		row = table.createTBody().insertRow();
		cell = row.insertCell();

		//Adds the select
		element = document.createElement("select");
		element.setAttribute('id', 'ulinfantrytype' + ulinfantrynum);

		//Adds the drop down and options
		for( let i=0; i < ulinfantrylist.length; i++ ) {
			let inst = document.createElement("option");
			inst.setAttribute("value",ulinfantrylist[i].Name);
			inst.innerHTML=ulinfantrylist[i].Name;
			element.appendChild(inst.cloneNode(true));
		}

		element.setAttribute('onchange', 'updateULInfantrySupport(this)');
		cell.appendChild(element);
		cell.setAttribute("class","");
		cell = row.insertCell();

		//Adds input for Speed
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantryspeed' + ulinfantrynum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds input for Structure
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantrystructure' + ulinfantrynum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		//Adds input for Traits
		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantrytraits' + ulinfantrynum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode('');
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();
		div.appendChild(table);

		//Creates the table to display weapons
		table = document.createElement('table');
		table.setAttribute("class","on_table_support_weapon_table");
		table.setAttribute('id', 'infantryweapon' + ulinfantrynum);

		header = table.createTHead();
		headerrow = header.insertRow();
		cell = headerrow.insertCell();

		element = document.createTextNode("Weapon");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Damage");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Range");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Limited");
		cell.setAttribute("class","");
		cell.appendChild(element);
		cell = headerrow.insertCell();

		element = document.createTextNode("Traits");
		cell.setAttribute("class","");
		cell.appendChild(element);

		//Creates table body for weapons
		table.createTBody();

		div.appendChild(table);
	}

	//Helper function to fill in UL Infantry fields
	//Calls equiptULInfantrySupport
	function updateULInfantrySupport( infantry ) {
		let num = infantry.id.slice(14,15);
		let sup = ulinfantrylist.filter(asset => asset.Name == infantry.value)[0];
		infantry.form.querySelector('#infantryspeed' + num ).innerText = sup.Speed;
		infantry.form.querySelector('#infantrystructure' + num ).innerText = sup.Structure;
		infantry.form.querySelector('#infantrytraits' + num ).innerText = sup.Traits;
		equiptULInfantrySupport(infantry);
		checkULInfantryMines(infantry.form);
	}

	//Helper function to fill in UL Infantry weapons fields
	function equiptULInfantrySupport( infantry ) {
		let ulinfantryenum = infantry.id.slice(14,15);
		//Removes everything in the weapon table body
		if( infantry.form.querySelector('#infantryweapon' + ulinfantryenum ).getElementsByTagName('tbody')[0].rows.length != 0 ) {
			while( infantry.form.querySelector('#infantryweapon' + ulinfantryenum ).getElementsByTagName('tbody')[0].rows.length > 0 ) 
				infantry.form.querySelector('#infantryweapon' + ulinfantryenum ).getElementsByTagName('tbody')[0].rows[0].remove(); }
		if( infantry.value == "Rifle" ) {
			updateULInfantryWeapon(infantry,"Infantry Rifles");
		} else if( infantry.value == "Anti-Tank" ) {
			updateULInfantryWeapon(infantry,"Infantry Rifles");
			updateULInfantryWeapon(infantry,"Missile Launcher");
		} else if( infantry.value == "Recon" ) {
			updateULInfantryWeapon(infantry,"Infantry Rifles");
		} else if( infantry.value == "Engineers" ) {
			updateULInfantryWeapon(infantry,"Infantry Rifles");
		}else if( infantry.value == "Mine Drones" ) {
			updateULInfantryWeapon(infantry,"Mine Field");
		}
	}

	//Helper function to fill in UL Infantry fields
	function updateULInfantryWeapon( infantry, weapon ) {
		let ulinfantryenum = infantry.id.slice(14,15);
		let	table = infantry.form.querySelector('#infantryweapon' + ulinfantryenum ).getElementsByTagName('tbody')[0];
		let wep = ulinfantryweaponlist.filter(asset => asset.Weapon == weapon)[0];

		let row = table.insertRow();
		let cell = row.insertCell();

		let paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantryweapon' + ulinfantryenum);
		paragraph.setAttribute("class","par_table_margin");
		let element = document.createTextNode(wep.Weapon);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantrydamage' + ulinfantryenum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Damage);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantryrange' + ulinfantryenum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Range);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph)
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantrylimited' + ulinfantryenum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Limited);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
		cell = row.insertCell();

		paragraph = document.createElement('p');
		paragraph.setAttribute('id', 'infantrytraits' + ulinfantryenum);
		paragraph.setAttribute("class","par_table_margin");
		element = document.createTextNode(wep.Traits);
		cell.setAttribute("class","");
		paragraph.appendChild(element);
		cell.appendChild(paragraph);
	}

	//Helper function to limit infantry mine choice to four total
	function checkULInfantryMines( infantryform ) {
		let infantryselects = Array.from(infantryform.querySelectorAll('[id^="ulinfantrytype"]'));
		let ulinfantrylistmap = ulinfantrylist.map(ulinfantrylist => ulinfantrylist.Name);
		let selectoptions = [];
		let count = 0;
		
		//Create array of items not selected
		for( let i = 0; i < infantryselects.length; i++ ) {
			if( infantryselects[i].selectedIndex > 0 ) {
			selectoptions.push(infantryselects[i].options[infantryselects[i].selectedIndex].value); }
		}
		selectoptions.forEach((option) => (option === 'Mine Drones' && count++));
		if( count == 4 ) {
			for( let i = 0; i < infantryselects.length; i++ ) {
				if( infantryselects[i].options[infantryselects[i].selectedIndex].value != 'Mine Drones' ) {
					infantryselects[i].options[ulinfantrylistmap.indexOf('Mine Drones')].disabled = true; }
			}
		} else {
			for( let i = 0; i < infantryselects.length; i++ ) {
				infantryselects[i].options[ulinfantrylistmap.indexOf('Mine Drones')].disabled = false; } }
	}

//Need to export all

	//Allows the quick selection of game size
	function GameSize() {
		let tonnage = getGameSize();
		document.getElementById("max_tonnage").value=tonnage;
		document.getElementById("max_tonnage_print").innerText=tonnage;
		document.getElementById("hevTeamSelect").disabled = false;
		AllowedSupportCount();
		allowedTeamCount();
	}

	//Helper function checks GameSize
	//Returns tonnage
	function getGameSize() {
		let game_size_tonnage = document.getElementsByName("game_size");
		let tonnage;
		for( var i = 0; i < game_size_tonnage.length; i++ ) {
			if( game_size_tonnage[i].checked ) {
				switch ( game_size_tonnage[i].value ){
					case "Recon":
						tonnage=100;
						document.getElementById("game_size_print").innerText="Game Size : Recon";
						document.getElementById("max_tonnage").disabled=true;
						document.getElementById("addHEV").removeAttribute("disabled");
						document.querySelectorAll("#hevTeamSelect option").forEach( opt => {
							if( opt.value == "Tactical Team" ) {
								opt.disabled = true; } } );
						break;
					case "Strike":
						tonnage=150;
						document.getElementById("game_size_print").innerText="Game Size : Strike";
						document.getElementById("max_tonnage").disabled=true;
						document.getElementById("addHEV").removeAttribute("disabled");
						document.querySelectorAll("#hevTeamSelect option").forEach( opt => {
							if( opt.value == "Tactical Team" ) {
								opt.disabled = false; } } );
						break;
					case "Battle":
						tonnage=200;
						document.getElementById("game_size_print").innerText="Game Size : Battle";
						document.getElementById("max_tonnage").disabled=true;
						document.getElementById("addHEV").removeAttribute("disabled");
						document.querySelectorAll("#hevTeamSelect option").forEach( opt => {
							if( opt.value == "Tactical Team" ) {
								opt.disabled = false; } } );
						break;
					case "Custom":
						document.getElementById("max_tonnage").disabled=false;
						document.querySelectorAll("#hevTeamSelect option").forEach( opt => {
							if( opt.value == "Tactical Team" ) {
								opt.disabled = false; } } );
						break;
					default:
						tonnage=0;
				} 
			}
		}
		return(tonnage);
	}

	//Helper function checks GameSize
	//Returns how many support or teams can be gotten
	function getGameSizeCount() {
		let game_size_points = document.getElementsByName("game_size");
		let count;
		//How many support assets or teams can be had per game size
		for(let i = 0; i < game_size_points.length; i++) {
			if(game_size_points[i].checked) {
				switch (game_size_points[i].value) {
					case "Recon":
					count = 1;
				break;
					case "Strike":
					count = 2;
				break;
					case "Battle":
					count = 3;
				break;
					case "Custom":
					//Custom, maybe do calc figurre something?!?!
					break;
				default:
				count = 0;
				}
			}
		}
		return count;
	}

	//Shows faction perks
	function FactionSeletion() {
		let faction_options = document.getElementsByName("faction");
		 for( let i = 0; i < faction_options.length; i++ ) {
		  if( faction_options[i].checked ) {
			switch (faction_options[i].value) {
				case "N/A":
					document.getElementById("faction_authorities_div").style.display='none';
					document.getElementById("faction_corporations_div").style.display='none';
					document.getElementById("faction_freelancers_div").style.display='none';
					ResetCheckboxes(autharray);
					ResetCheckboxes(corparray);
					ResetCheckboxes(freearray);
					ResetCheckboxes(stolenperks);
					document.getElementById("faction_par_stolen_corporations_rnd").style.display="none";		
					document.getElementById("faction_par_stolen_authorities_pp").style.display="none";
					document.getElementById("faction_par_stolen_corporations_dwc").style.display="none";
					cleanUpAdvancedHardPointPerk();
					cleanUpTopEndHardware();
					cleanUpMaterielStockpiles();
					cleanUpOrbitalStockpiles();
					cleanUpOutrageousSupportBudget();
					clearPrintFaction();
					break;
				case "Authorities":
					document.getElementById("faction_authorities_div").style.display='block';
					document.getElementById("faction_corporations_div").style.display='none';
					document.getElementById("faction_freelancers_div").style.display='none';
					ResetCheckboxes(corparray);
					ResetCheckboxes(freearray);
					ResetCheckboxes(stolenperks);
					document.getElementById("faction_par_stolen_corporations_rnd").style.display="none";
					document.getElementById("faction_par_stolen_authorities_mt").style.display="none";
					document.getElementById("faction_par_stolen_authorities_pp").style.display="none";
					document.getElementById("faction_par_stolen_corporations_dwc").style.display="none";
					cleanUpAdvancedHardPointPerk();
					cleanUpTopEndHardware();
					cleanUpMaterielStockpiles();
					cleanUpOrbitalStockpiles();
					cleanUpOutrageousSupportBudget();
					clearPrintFaction();
					document.getElementById("faction_name_print").innerText='Authorities';
					document.getElementById("faction_secondary_print").innerText='Territorial';
					break;
				case "Corporations":
					document.getElementById("faction_authorities_div").style.display='none';
					document.getElementById("faction_corporations_div").style.display='block';
					document.getElementById("faction_freelancers_div").style.display='none';
					ResetCheckboxes(autharray);
					ResetCheckboxes(freearray);
					ResetCheckboxes(stolenperks);
					document.getElementById("faction_par_stolen_corporations_rnd").style.display="none";
					document.getElementById("faction_par_stolen_authorities_mt").style.display="none";
					document.getElementById("faction_par_stolen_authorities_pp").style.display="none";
					document.getElementById("faction_par_stolen_corporations_dwc").style.display="none";
					cleanUpAdvancedHardPointPerk();
					cleanUpTopEndHardware();
					cleanUpMaterielStockpiles();
					cleanUpOrbitalStockpiles();
					cleanUpOutrageousSupportBudget();
					clearPrintFaction();
					document.getElementById("faction_name_print").innerText='Corporations';
					document.getElementById("faction_secondary_print").innerText='Asset Protection';
					break;
				case "Freelancers":
					document.getElementById("faction_authorities_div").style.display='none';
					document.getElementById("faction_corporations_div").style.display='none';
					document.getElementById("faction_freelancers_div").style.display='block';
					ResetCheckboxes(autharray);
					ResetCheckboxes(corparray);
					cleanUpAdvancedHardPointPerk();
					cleanUpTopEndHardware();
					cleanUpMaterielStockpiles();
					cleanUpOrbitalStockpiles();
					cleanUpOutrageousSupportBudget();
					clearPrintFaction();
					document.getElementById("faction_name_print").innerText='Freelancers';
					document.getElementById("faction_secondary_print").innerText='Wildcards';
					break;
				default:
					//console.log("hide all")
				}
			}
		}
	}

	//Helper function to reset checkboxes for perks by array
	function ResetCheckboxes(array) {
		for( let i = 0; i < array.length; i++ ) {
			let checkboxesList = document.getElementsByClassName(array[i]);
			for( let x = 0; x < checkboxesList.length; x++ ) {
				checkboxesList[x].disabled=false;
				checkboxesList[x].checked=false;
			}
		}
	}

	//Helper function to reset checkboxes for stolen perks by classname
	function ResetCheckboxesstolen(classname) {
		for( let i = 0; i < document.getElementsByClassName(classname).length; i++ ) {
			document.getElementsByClassName(classname)[i].disabled=false;
			document.getElementsByClassName(classname)[i].checked=false;
		}
	}

	//Helper function takes in perk, unhids the stolen option
	function StolenPerk(perkthatsteals) {
		if( perkthatsteals == "Tech Pirates" ) {
			document.getElementById("faction_par_stolen_corporations_rnd").style.display="block";
		} else if( perkthatsteals == "Ex-Military Veterans" ) { 
			document.getElementById("faction_par_stolen_authorities_mt").style.display="block";
			document.getElementById("faction_par_stolen_authorities_pp").style.display="none";
			document.getElementById("faction_par_stolen_corporations_dwc").style.display="none";
			ResetCheckboxesstolen("faction_stolen_corporations_dwc");
			ResetCheckboxesstolen("faction_stolen_authorities_pp");
		} else if( perkthatsteals == "Political Extremists" ) {
			document.getElementById("faction_par_stolen_authorities_mt").style.display="none";
			document.getElementById("faction_par_stolen_authorities_pp").style.display="block";
			document.getElementById("faction_par_stolen_corporations_dwc").style.display="none";
			ResetCheckboxesstolen("faction_stolen_authorities_mt");
			ResetCheckboxesstolen("faction_stolen_corporations_dwc");
		} else if( perkthatsteals == "Disgraced Trillionaire" ) {
			document.getElementById("faction_par_stolen_authorities_mt").style.display="none";
			document.getElementById("faction_par_stolen_authorities_pp").style.display="none";
			document.getElementById("faction_par_stolen_corporations_dwc").style.display="block";
			ResetCheckboxesstolen("faction_stolen_authorities_mt");
			ResetCheckboxesstolen("faction_stolen_authorities_pp");
		}
	}

	//Deals with perks, makes sure only one is checked per group and allows for stolen perks
	 function checkPerkOnClick(perk) {;
		 let index;
		 let disablearray = [];
		 let subfac = [];
		 //Makes sure only one checkbox per group is selected
		for( let i = 0; i < document.getElementsByClassName(perk.className).length; i++ ) {
			document.getElementsByClassName(perk.className).item(i).checked = false; } // Uncheck all checkboxes
		perk.checked = true; // Checked clicked checkbox
		perkPrintPage(perk);
		 //show secondary perk form other faction
		for( let i = 0; i < perksthatsteal.length; i++ ) {
			if( perksthatsteal[i] == perk.value ) {
				StolenPerk(perk.value);	}
		}
		//could be function
		if( perk.value == "Network Hackers" || perk.value == "Intimidation Tatics" ) {
			document.getElementById("faction_par_stolen_corporations_rnd").style.display="none";
			ResetCheckboxesstolen("faction_stolen_corporations_rnd");
		}
		 //Builds array for what two groups out of three are selected
		for( let i = 0; i < document.getElementsByName(perk.name).length; i++ ) {
			if( document.getElementsByName(perk.name)[i].checked == true ) {
				disablearray.push( document.getElementsByName(perk.name)[i] ); }
		}
		 //If two items are selected, disable the third group
		if( disablearray.length == 2 ) {
			//Finds what faction is selected
			for( let i = 0; i < document.getElementsByName("faction").length; i++) {
				if( document.getElementsByName("faction")[i].checked ) {
					switch (document.getElementsByName("faction")[i].value) {
						case "N/A":
							break;
						case "Authorities":
							subfac = autharray.slice();
							break;
						case "Corporations":
							subfac = corparray.slice();
							break;
						case "Freelancers":
							subfac = freearray.slice();
							break;
						default:
						//console.log("hide all")
					}
				}
			}
			//Finds what group is not selected to disable that group
			for( let i = 0; i < disablearray.length; i++ ) {
				index = subfac.indexOf(disablearray[i].className);
				if(index > -1 ) {
					subfac.splice(index, 1); } // 2nd parameter means remove
			}
			//Disable the third group
			for( let i = 0; i < document.getElementsByClassName(subfac).length; i++) {
				document.getElementsByClassName(subfac)[i].disabled=true; }
		}
		//Adds checks for perks that change hevs
		advancedHardPointPerk();
		topEndHardwarePerk();
		materielStockpilesPerk();
		orbitalStockpilesPerk();
		outrageousSupportBudgetPerk();
	}

	//Gets the total tonnage on page, accounts for TopEndHardwarePerk
	function calculatePageTonnage() {
		let used_points = 0;
		let ontablesupport = document.querySelectorAll("[type='form'],[name ='ulhev'],[name ='vehicle'],[name ='infantry']");
		let offtablesupport = document.querySelectorAll("[type='form'],[name ='Support']");
		let hev = document.querySelectorAll("[type='form'],[name ='hev']"); 
		//Adds the value of each support asset
		for( let i = 0; i < ontablesupport.length; i++ ) {
			if( Number(ontablesupport[i].cost.value) > 0 ) {
				used_points += Number(ontablesupport[i].cost.value); }
		}
		for( let i = 0; i < offtablesupport.length; i++ ) {
			if( parseInt(offtablesupport[i].querySelector("#cost").innerText) > 0 ) {
				used_points += parseInt(offtablesupport[i].querySelector("#cost").innerText); }
		}
		//Adds the value of each hev.
		for( let i = 0; i < hev.length; i++ ) {
			if( Number(hev[i].querySelector('#tonnage_max').innerText) > 0 ) {
				if( TEH == true ) {
					used_points += Number(hev[i].querySelector('#tonnage_max').innerText) - Number(2);
				} else if( TEH == false ) {
					used_points += Number(hev[i].querySelector('#tonnage_max').innerText);
				}
			}
		}
		document.getElementById("total_tonnage").value=used_points;	
		document.getElementById("total_tonnage_print").innerText=used_points;
	}

	//Helper function to clear print page Faction Stuff.
	function clearPrintFaction() {
		document.getElementById("faction_name_print").innerText='';
		document.getElementById("faction_secondary_print").innerText='';
		document.getElementById("faction_name_print").innerText="";
		document.getElementById("faction_perk_rowone_print").innerText="";
		document.getElementById("faction_perk_rowtwo_print").innerText="";
		document.getElementById("faction_perk_rowtwo_stolen_print").innerText="";
		document.getElementById("faction_perk_rowthree_print").innerText="";
		document.getElementById("faction_perk_rowthree_stolen_print").innerText="";
	}

	//Helper function to put chosen perks into the print page
	function perkPrintPage(perk) {
		//first
		if( perk.id == "CAS" || perk.id == "CAD" || perk.id == "EPP" || perk.id == "EI" || perk.id == "PS" || perk.id == "EIG" || perk.id == "UG" || perk.id == "RP" || perk.id == "BS" ) {
			document.getElementById("faction_perk_rowone_print").innerText=perk.value; 
		//second
		}else if( perk.id == "PPE" || perk.id == "PPP" || perk.id == "PPI" || perk.id == "AHD" || perk.id == "AEMS" || perk.id == "ASC" || perk.id == "NH" || perk.id == "TP" || perk.id == "IT" ) {
			document.getElementById("faction_perk_rowtwo_print").innerText=perk.value; 
		//third
		}else if( perk.id == "OS" || perk.id == "SE" || perk.id == "MS" || perk.id == "TEH" || perk.id == "OSB" || perk.id == "PO" || perk.id == "EMV" || perk.id == "PE" || perk.id == "DT" ) {
			document.getElementById("faction_perk_rowthree_print").innerText=perk.value;
		//Stolen trate for TP (freelance row two)
		}else if( perk.id == "SAHD" || perk.id == "SAEMS" || perk.id == "SASC" ) {
			document.getElementById("faction_perk_rowtwo_stolen_print").innerText=perk.value; 
		//Stolen trates for freelance row three
		}else if( perk.id == "SCAS" || perk.id == "SCAD" || perk.id == "SEPP" || perk.id == "SPPE" || perk.id == "SPPP" || perk.id == "SPPI" || perk.id == "STEH" || perk.id == "SOSB" || perk.id == "SPO" ) {
			document.getElementById("faction_perk_rowthree_stolen_print").innerText=perk.value; }
	}
	
//Need export all

	//Adds a team grouping as user needs them
	function addTeam(team) {
		let newteam = document.createElement("form");
		let fieldset = document.createElement("fieldset");
		let legend = document.createElement("legend");
		fieldset.setAttribute("id","mainTeamField");
		fieldset.setAttribute("class","list-hev grid");
		legend.setAttribute("id","mainLegend");
		legend.setAttribute("class","list-header-main");
		newteam.appendChild(fieldset);
		fieldset.appendChild(legend);

		let element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('id', 'TeamType');
		element.setAttribute('hidden', '');
		fieldset.appendChild(element);

		let div = document.createElement("div");
		div.setAttribute("id","team"+teamNumber+"buttons");
		div.setAttribute("class","add_buttons noprint");
		fieldset.appendChild(div);

		//Adds add HE-V button
		element = document.createElement('button');
		element.setAttribute('type', 'button');
		element.innerHTML = 'Add HE-V';
		element.setAttribute('id', 'add_HEV_team_button');
		element.setAttribute('name', 'Add HE-V');
		element.setAttribute('value', 'Add HE-V');
		element.setAttribute("onclick","addHEV(\"team"+teamNumber+"HEVList\",\""+team.options[team.selectedIndex].value+"\")");
		element.setAttribute("class","addHEV-button noprint");
		div.appendChild(element);

		//Adds delete button
		element = document.createElement('button');
		element.setAttribute('type', 'button');
		element.innerHTML = 'Remove Team';
		element.setAttribute('id', 'delete_team_button');
		element.setAttribute('name', 'Remove Team');
		element.setAttribute('value', 'Remove Team');
		element.setAttribute("onclick","deleteTeam(\"team"+teamNumber+"\")");
		element.setAttribute("class","noprint");
		div.appendChild(element);

		newteam.setAttribute("id","team"+teamNumber);
		newteam.setAttribute("name","team"+teamNumber);
		newteam.setAttribute("class","team_list grid");
		newteam.TeamType.setAttribute("value",team.options[team.selectedIndex].value);
		newteam.getElementsByTagName("legend")[0].innerHTML=team.options[team.selectedIndex].value + " " +teamNumber;
		div = document.createElement("div");
		div.setAttribute("id","team"+teamNumber+"HEVList");
		div.setAttribute("class","grid");
		newteam.mainTeamField.appendChild(div);
		teamNumber++;
		document.getElementById("teamList").appendChild(newteam);
		addDefaultHEVtoTeam(newteam);

		//Set team secondary
		if( team.options[team.selectedIndex].value == "Fire Support Team" ) {
			document.getElementById("fs_team_secondary_print").innerText="Fire for Effect";
		}else if ( team.options[team.selectedIndex].value == "Reconnaissance Team" ) {
			document.getElementById("rt_team_secondary_print").innerText="Death from Above";
		}else if( team.options[team.selectedIndex].value == "Security Team" ) {
			document.getElementById("st_team_secondary_print").innerText="Don't Give an Inch";
		}else if( team.options[team.selectedIndex].value == "Tactical Team" ) {
			document.getElementById("tt_team_secondary_print").innerText="Mission Monentium";
		}else if( team.options[team.selectedIndex].value == "Berserker Team" ) {
			document.getElementById("bt_team_secondary_print").innerText="Drive Them Out!";
		}

		//reset select box
		team.selectedIndex = 0;
		allowedTeamCount();
	}

	//Adds default HEV's to the team based on selection
	function addDefaultHEVtoTeam(newteam) {
		if( newteam.TeamType.value == "Fire Support Team" ) {
			//Ensures team has 1 Light and 1 Medium/Heavy
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			let hev = getTeamsHEV(newteam.name+"HEVList");
			hev[0].hevType.value = "Light";
			hev[0].hevType.disabled = true;
			hev[0].hevType.dispatchEvent(new Event('change'));
			hev[0].delete_hev_button.remove();
			hev[1].hevType.value = "Medium";
			removeSize(hev[1],"Light");
			hev[1].hevType.dispatchEvent(new Event('change'));
			hev[1].delete_hev_button.remove();
		} else if( newteam.TeamType.value == "Reconnaissance Team" ) {
			//Ensures team has 1 Light
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			let hev = getTeamsHEV(newteam.name+"HEVList");
			hev[0].hevType.value = "Light";
			hev[0].hevType.disabled = true;
			hev[0].hevType.dispatchEvent(new Event('change'));
			hev[0].delete_hev_button.remove();
		}else if( newteam.TeamType.value == "Security Team" ) {
			//Ensures team has 1 Medium and 1 Heavy
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			let hev = getTeamsHEV(newteam.name+"HEVList");
			hev[0].hevType.value = "Medium";
			hev[0].hevType.disabled = true;
			hev[0].hevType.dispatchEvent(new Event('change'));
			hev[0].delete_hev_button.remove();
			hev[1].hevType.value = "Heavy";
			hev[1].hevType.disabled = true;
			hev[1].hevType.dispatchEvent(new Event('change'));
			hev[1].delete_hev_button.remove();
		}else if( newteam.TeamType.value == "Tactical Team" ) {
			//Ensures team has 1 Light, 1 Medium, 1 Heavy
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			let hev = getTeamsHEV(newteam.name+"HEVList");
			hev[0].hevType.value = "Light";
			hev[0].hevType.disabled = true;
			hev[0].hevType.dispatchEvent(new Event('change'));
			hev[0].delete_hev_button.remove();
			hev[1].hevType.value = "Medium";
			hev[1].hevType.disabled = true;
			hev[1].hevType.dispatchEvent(new Event('change'));
			hev[1].delete_hev_button.remove();
			hev[2].hevType.value = "Heavy";
			hev[2].hevType.disabled = true;
			hev[2].hevType.dispatchEvent(new Event('change'));
			hev[2].delete_hev_button.remove();
		}else if( newteam.TeamType.value == "Berserker Team" ) {
			//Ensures team has 1 Medium, 1 Heavy
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			let hev = getTeamsHEV(newteam.name+"HEVList");
			hev[0].hevType.value = "Medium";
			hev[0].hevType.disabled = true;
			hev[0].hevType.dispatchEvent(new Event('change'));
			hev[0].delete_hev_button.remove();
			hev[1].hevType.value = "Heavy";
			hev[1].hevType.disabled = true;
			hev[1].hevType.dispatchEvent(new Event('change'));
			hev[1].delete_hev_button.remove();
		}else if( newteam.TeamType.value == "Gunslinger Team" ) {
			//Ensures team has 1 Medium, 1 Heavy
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			let hev = getTeamsHEV(newteam.name+"HEVList");
			hev[0].hevType.value = "Medium";
			hev[0].hevType.disabled = true;
			hev[0].hevType.dispatchEvent(new Event('change'));
			hev[0].delete_hev_button.remove();
			hev[1].hevType.value = "Heavy";
			hev[1].hevType.disabled = true;
			hev[1].hevType.dispatchEvent(new Event('change'));
			hev[1].delete_hev_button.remove();
		}else if( newteam.TeamType.value == "Assasination Team" ) {
			//Ensures team has 1 Light, 1 Medium
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			addHEV( newteam.name+"HEVList", newteam.TeamType.value );
			let hev = getTeamsHEV(newteam.name+"HEVList");
			hev[0].hevType.value = "Light";
			hev[0].hevType.disabled = true;
			hev[0].hevType.dispatchEvent(new Event('change'));
			hev[0].delete_hev_button.remove();
			hev[1].hevType.value = "Medium";
			hev[1].hevType.disabled = true;
			hev[1].hevType.dispatchEvent(new Event('change'));
			hev[1].delete_hev_button.remove();
		}
	}

	//Helper function that sets the weight options for an HEV based on teams
	function allowedWeight(hev) {
		if ( hev.hevTeamType.value == "Fire Support Team" ||  hev.hevTeamType.value == "Reconnaissance Team" ) {
			removeSize(hev, "Ultra");
		} else if ( hev.hevTeamType.value == "Security Team" ) {
			removeSize(hev, "Light");
		} else if ( hev.hevTeamType.value == "Tactical Team" ) {
			removeSize(hev, "Ultra");
			//Makes sure team only adds the single option of a second medium
			if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				removeSize(hev, "Light");
				removeSize(hev, "Heavy");
			}
		} else if ( hev.hevTeamType.value == "Gunslinger Team" ) {
			removeSize(hev, "Ultra");
		} else if ( hev.hevTeamType.value == "Assasination Team" ) {
			removeSize(hev, "Heavy");
			removeSize(hev, "Ultra");
		}
	}

	//Helper function that checks how many teams we can have, removes last teams if we have too many
	function allowedTeamCount() {
		let game_size_points = document.getElementsByName("game_size");
		let teamcount = getGameSizeCount();

		let teams = getTeams();

		if( teamcount >= teams.length ) {
			document.getElementById("hevTeamSelect").disabled = true;
		} 
		//If we reach teamcount disable the button
		if( teams.length == teamcount ) {
			document.getElementById("hevTeamSelect").setAttribute("disabled","true"); }
		else{
			document.getElementById("hevTeamSelect").removeAttribute("disabled"); }

		//If we change to Recon remove all Tactical Teams
		if( getGameSize() == 100 ) {
			for( let i = 0; i < teams.length; i++ ) {
				if( teams[i].TeamType.value == "Tactical Team" ) {
					deleteTeam(teams[i].id); }
			}
			teams = getTeams();
		}

		//If we change game size remove support assets
		if( teams.length  > teamcount ) {
			//have to write function to delete last team deleteSupport(supportassets[supportassets.length-1].parentNode.id);
			deleteTeam(teams[teams.length-1].id);
			//updateSupportOption();
		}
	}

	//Helper function that ensures the team has the correct amount of HEV for game size
	function teamHEVCount(hevTeam) {
		let teamcount = getGameSizeCount();
		let hev = getTeamsHEV(hevTeam);
		if( teamcount == 1 ) {
			if( hev.length == 2 ) { 
				document.getElementById(hevTeam).parentNode.querySelector('#add_HEV_team_button').setAttribute('disabled','true'); }
			else {
				document.getElementById(hevTeam).parentNode.querySelector('#add_HEV_team_button').removeAttribute("disabled"); }
		} else if ( teamcount == 2 ) {
			if( hev.length == 3 ) { 
				document.getElementById(hevTeam).parentNode.querySelector('#add_HEV_team_button').setAttribute('disabled','true'); }
			else {
				document.getElementById(hevTeam).parentNode.querySelector('#add_HEV_team_button').removeAttribute("disabled"); }
		} else if ( teamcount == 3 ) {
			if( hev.length == 4 ) { 
				document.getElementById(hevTeam).parentNode.querySelector('#add_HEV_team_button').setAttribute('disabled','true'); }
			else {
				document.getElementById(hevTeam).parentNode.querySelector('#add_HEV_team_button').removeAttribute("disabled"); }
		}
		checkForFullTeam();
	}

	//Helper funtion to figure out if we have another team at four HEV, if so prevent the others.
	function checkForFullTeam() {
		let teams = getTeams();
		for( let i = 0; i < teams.length; i++ ) {
			let hevcount = getTeamsHEV(teams[i].name+"HEVList");
			if( hevcount.length == 4 ) {
				for( let x = 0; x < teams.length; x++ ) {
					hevcount = getTeamsHEV(teams[x].name+"HEVList");
					if( hevcount.length == 3 ) {
						//disable teams of three
						teams[x].querySelector('#add_HEV_team_button').setAttribute('disabled','true'); }
				}
			}
		}
	}

	//Helper function takes a team
	//Returns an array of HEV's
	function getTeamsHEV(hevTeam) {
		let hev = Array.from(document.querySelectorAll("[type='form'],[name ='hev']"));
		for( let i = hev.length - 1; i >= 0; i-- ) {
			if( hev[i].hevTeamName.value != hevTeam ) {
				hev.splice(i,1); }
			}
		return hev;
	}

	//Helper function gets all teams
	//Returns array of teams
	function getTeams() {
		let team = document.getElementsByClassName("team_list");
		return team;
	}

	//Empty the rule div for an HEV
	function clearRuleDiv(hev) {
		if( hev.querySelector("#team_rules_text").firstChild ) {
			hev.querySelector("#team_rules_text").replaceChildren(); }
	}

	//Helper function to delete a team 
	function deleteTeam(numb) {
		document.getElementById(numb).remove();
		calculatePageTonnage();
		allowedTeamCount();
		cleanTeamSecondaryPrint();
	}

	//Helper function, adds a free hard point at the end of the team table per hev
	//Calls addCell/checkAttachmentsUpgrade
	function addTeamHardPoint(hev) {
		cellcnt = 0;
		table = hev.querySelector("#team_attach_table");
		//Insert first row into table attachments table
		if( table.rows.length == 0 ) {
			let row = hev.querySelector("#team_attach_table").insertRow(); }
		else {
			let row = table.rows[table.rows.length - 1]; }
		//count cells in table so we can add onto the end
		for( let x = 0; x < table.rows.length; x++ ) {
			cellcnt = cellcnt + table.rows[x].cells.length;
		}
		addCell(hev, cellcnt+1, table.rows[table.rows.length - 1], "teamattach");
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			checkAttachmentsUpgrade(attachmentsarray[i]); }
	}

	//Helper for setting cells on Fire Support Team for Team Rules items.
	function setTeamFSTcells(hev) {
		if( getHEVSize(hev) == "Light" ) {
			setTeamFSTDefault(hev);
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('None.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('None.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Target Designator does not use a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('None.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Target Designator does not use a slot.')); 
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Target Designator cost 0.'));
			}
		} else if( getHEVSize(hev) == "Medium" || getHEVSize(hev) == "Heavy" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Missles and Rocket Packs +1 Limited.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Missles and Rocket Packs +1 Limited.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Howitzer gains Smart Trait.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Missles and Rocket Packs +1 Limited.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Howitzer gains Smart Trait.')); 
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Missles and Rocket Packs +1 Limited.'));
			}
		}
	}

	//Helper function to rebuild the Light Mech for Fire Support Team if they have 3 or more HEV
	function rebuildFSTLight(hev) {
		//If the Team Attachment table has a row we can skip this. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			hev.attach1.selectedIndex = 0;
			hev.attach1.disabled = false;
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Target Designator";
			hev.teamattach1.disabled = true;
			//hev.teamattach1.dispatchEvent(new Event('change'));
		}
		hev.teamattach1.dispatchEvent(new Event('change'));
	}

	//Helper for setting cells on Reconnaissance Team for Team Rules items.
	function setTeamRTcells(hev) {
		if( getHEVSize(hev) == "Light" ) {
			setTeamRTDefault(hev);
			if( getTeamsHEV(hev.hevTeamName.value).length == 1 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").setAttribute("hidden",true);
			} else if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('ECM does not use a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('ECM does not use a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('TD does not use a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('ECM does not use a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('TD does not use a slot.')); 
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('ECM/TD cost 0.'));
			}
		} else if( getHEVSize(hev) == "Medium" || getHEVSize(hev) == "Heavy" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+1 Ini roll if one or more are with 18" of enemy depoyment zone.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+1 Ini roll if one or more are with 18" of enemy depoyment zone.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Off-Table Support gain +1 dmg.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+1 Ini roll if one or more are with 18" of enemy depoyment zone.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Off-Table Support gain +1 dmg.')); 
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Off-Table Support directed by unit can come from any direction.'));
			}
		}
	}

	//Helper function to rebuild the Light Mech for Reconnaissance Team if they have 2 or more HEV
	function rebuildRTLight(hev) {
		//If the Team Attachment table is empty it needs the ECM option. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 && getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Electronic Countermeasures";
			hev.teamattach1.dispatchEvent(new Event('change'));
			//remove all option from this teamhardpoint
			let weaponlistmap = weaponlist.map(weaponlist => weaponlist.Attachment);
			weaponlistmap.splice(0,1); //Leaves the first blank
			weaponlistmap.splice(weaponlistmap.indexOf("Electronic Countermeasures"),1);
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach1,weaponlistmap[x]); }
		//If we have the ECM option move it to second slot and add TD option
		} else if( hev.querySelector("#team_attach_table").rows.length == 1 && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			let placeholder = hev.teamattach1[hev.teamattach1.selectedIndex].value;
			
			clearTeamAttacTable(hev);
			hev.attach1.selectedIndex = 0;
			hev.attach1.disabled = false;
			
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Target Designator";
			hev.teamattach1.disabled = true;
			hev.teamattach1.dispatchEvent(new Event('change'));
			
			addTeamHardPoint(hev);
			hev.teamattach2.value = "Electronic Countermeasures";
			hev.teamattach2.dispatchEvent(new Event('change'));
			//remove all option from this teamhardpoint
			let weaponlistmap = weaponlist.map(weaponlist => weaponlist.Attachment);
			weaponlistmap.splice(0,1); //Leaves the first blank
			weaponlistmap.splice(weaponlistmap.indexOf("Electronic Countermeasures"),1);
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach2,weaponlistmap[x]); }
			//hev.teamattach2.value = placeholder;
			//hev.teamattach2.dispatchEvent(new Event('change'));
		//If the table is empty add both options
		} else if( hev.querySelector("#team_attach_table").rows.length == 0 && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			hev.attach1.selectedIndex = 0;
			hev.attach1.disabled = false;
			
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Target Designator";
			hev.teamattach1.disabled = true;
			hev.teamattach1.dispatchEvent(new Event('change'));
			
			addTeamHardPoint(hev);
			hev.teamattach2.value = "Electronic Countermeasures";
			hev.teamattach2.dispatchEvent(new Event('change'));
			//remove all option from this teamhardpoint
			let weaponlistmap = weaponlist.map(weaponlist => weaponlist.Attachment);
			weaponlistmap.splice(0,1); //Leaves the first blank
			weaponlistmap.splice(weaponlistmap.indexOf("Electronic Countermeasures"),1);
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach2,weaponlistmap[x]); }
			//hev.teamattach2.dispatchEvent(new Event('change'));
		}
		if( hev.querySelector("#team_attach_table").rows.length == 2 ) {
			hev.teamattach1.dispatchEvent(new Event('change'));
			hev.teamattach2.dispatchEvent(new Event('change')); }
	}

	//Helper for setting cells on Security Team for Team Rules items.
	function setTeamSTcells(hev) {
		if( getHEVSize(hev) == "Medium" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating cost 0.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+5 Tons on Security Obj.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating cost 0.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+5 Tons on Security Obj.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Enimies do not get side arc bonus dmg.'));
			}
			//at least one reenforement
		} else if( getHEVSize(hev) == "Heavy" || getHEVSize(hev) == "Ultra") {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+5 Tons on Security Obj.')); 
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+5 Tons on Security Obj.')); 
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating cost 0.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Enimies do not get side arc bonus dmg.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+5 Tons on Security Obj.')); 
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating cost 0.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Enimies do not get side arc bonus dmg.'));
			}
		}
	}

	//Helper function to rebuild the All HEV for Security Team if they have 2 or more HEV
	function rebuildST(hev) {
		//If the Team Attachment table has a row we can skip this. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			//remove all option from this teamhardpoint
			let weaponlistmap = HEVAttachList( hev );
			weaponlistmap.splice(0,1); //Leaves the first blank
			for( let x = 0; x < armorattachments.length; x++ ) {
				if( weaponlistmap.includes(armorattachments[x]) ) {
					weaponlistmap.splice(weaponlistmap.indexOf(armorattachments[x]),1); } }
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach1,weaponlistmap[x]); }
			hev.teamattach1.value = "Ablative Armor";
			hev.teamattach1.dispatchEvent(new Event('change'));
		}
	}

	//Helper for setting cells on Tactical Team for Team Rules items.
	function setTeamTTcells(hev) {
		if( getHEVSize(hev) == "Light" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Target Designator does not use a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Target Designator does not use a slot.'));
			}
		}else if( getHEVSize(hev) == "Medium" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+5 Tons on Security Obj.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+5 Tons on Security Obj.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Enimies do not get Flank bonus.'));
			}
		} else if( getHEVSize(hev) == "Heavy" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Missles and Rocket Packs +1 Limited.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Missles and Rocket Packs +1 Limited.'));
			}
		}
	}

	//Helper function to rebuild All HEV for Tactical Team
	function rebuildTTLight(hev) {
		//If the Team Attachment table has a row we can skip this. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Target Designator";
			hev.teamattach1.disabled = true;
			hev.teamattach1.dispatchEvent(new Event('change'));
		}
	}

	//Helper for setting cells on Berserker Team for Team Rules items.
	function setTeamBTcells(hev) {
		if( getHEVSize(hev) == "Light" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating does not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Armor or Plating cost 0.'));
			}
		}else if( getHEVSize(hev) == "Medium" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('May purchase a Shield for 3 Tons.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('May purchase a Shield for 3 Tons.'));
			}
		} else if( getHEVSize(hev) == "Heavy" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Nitro Boost may be used a second time during the game.'));
			}
		} else if( getHEVSize(hev) == "Ultra" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_attach_div").setAttribute("hidden",true);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Nitro Boost may be used a second time during the game.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Nitro Boost may be used a second time during the game.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
			}
		}
	}

	//Helper function to rebuild the Light HEV for Berserker Team if they have 2 or more HEV
	function rebuildBTLight(hev) {
		//If the Team Attachment table is empty it needs the Armor/Plating options. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			//remove all option from this teamhardpoint
			let weaponlistmap = HEVAttachList( hev );
			weaponlistmap.splice(0,1); //Leaves the first blank
			for( let x = 0; x < armorattachments.length; x++ ) {
				if( weaponlistmap.includes(armorattachments[x]) ) {
					weaponlistmap.splice(weaponlistmap.indexOf(armorattachments[x]),1); } }
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach1,weaponlistmap[x]); }
			hev.teamattach1.value = "Ablative Armor";
			hev.teamattach1.dispatchEvent(new Event('change'));
		}
		if( hev.querySelector("#team_attach_table").rows.length == 1 ) {
			hev.teamattach1.dispatchEvent(new Event('change')); }
	}

	//Helper function to rebuild the Medium HEV for Berserker Team if they have 2 or more HEV
	function rebuildBTMedium(hev) {
		//Rebuild selects since the options can change
		let attachmentsarray = Array.from(hev.querySelectorAll('[class~="list-attachmentDropDown"]'));
		attachmentsarray.splice(0,1);
		for( let i = 0; i < attachmentsarray.length; i++ ) {
			addSelectOptions( hev, attachmentsarray[i] ); }

		//If the Team Attachment table is empty it needs the Directional Thrusters option. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Directional Thrusters";
			hev.teamattach1.dispatchEvent(new Event('change'));
			//remove all option from this teamhardpoint
			let weaponlistmap = weaponlist.map(weaponlist => weaponlist.Attachment);
			weaponlistmap.splice(0,1); //Leaves the first blank
			weaponlistmap.splice(weaponlistmap.indexOf("Directional Thrusters"),1);
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach1,weaponlistmap[x]); }
		}
	}

	//Helper function to rebuild the Heavy HEV for Berserker Team if they have 2 or more HEV
	function rebuildBTHeavy(hev) {
		//If the Team Attachment table is empty it needs the Directional Thrusters option. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Directional Thrusters";
			hev.teamattach1.dispatchEvent(new Event('change'));
			//remove all option from this teamhardpoint
			let weaponlistmap = weaponlist.map(weaponlist => weaponlist.Attachment);
			weaponlistmap.splice(0,1); //Leaves the first blank
			weaponlistmap.splice(weaponlistmap.indexOf("Directional Thrusters"),1);
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach1,weaponlistmap[x]); }
		}
	}

	//Helper function to rebuild the Ultra HEV for Berserker Team if they have 2 or more HEV
	function rebuildBTUltra(hev) {
		//If the Team Attachment table is empty it needs the Directional Thrusters option. 
		if( hev.querySelector("#team_attach_table").rows.length == 0 && getTeamsHEV(hev.hevTeamName.value).length ==4 ) {
			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Directional Thrusters";
			hev.teamattach1.dispatchEvent(new Event('change'));
			//remove all option from this teamhardpoint
			let weaponlistmap = weaponlist.map(weaponlist => weaponlist.Attachment);
			weaponlistmap.splice(0,1); //Leaves the first blank
			weaponlistmap.splice(weaponlistmap.indexOf("Directional Thrusters"),1);
			for( let x = 0; x < weaponlistmap.length; x++ ) {
				disableOption(hev.teamattach1,weaponlistmap[x]); }
		} else {
			clearTeamAttacTable(hev); }
	}

	//Helper for setting cells on Gunslinger Team for Team Rules items.
	function setTeamGSTcells(hev) {
		if( getHEVSize(hev) == "Light" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Short (X) weapons gain +2 range.'));
			}
		}else if( getHEVSize(hev) == "Medium" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Short (X) weapons gain +2 range.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Short (X) weapons gain +2 range.'));
			}
		} else if( getHEVSize(hev) == "Heavy" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Returning Fire Generates a Redline Maker instead of an Activation Marker.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Short (X) weapons gain +2 range.'));
			}
		}
	}

	//Helper for setting cells on Assasination Team for Team Rules items.
	function setTeamATcells(hev) {
		if( getHEVSize(hev) == "Light" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('HE-V\'s in this Team may deploy as Support Assests.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('HE-V\'s in this Team may deploy as Support Assests.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Weapons with the Melee Trait targeting HE-V\'s gain Frag when base 2 base with 2 or more units from this Team'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('HE-V\'s in this Team may deploy as Support Assests.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Weapons with the Melee Trait targeting HE-V\'s gain Frag when base 2 base with 2 or more units from this Team'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Directional Thrusters do not take a slot.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('When targeted by an Engage or Smash order, an HE-V in this Team withou an Activated Marker may gain an Activation Marker. They may make a Smash Order before resolving the Opposing order.'));
			}
		}else if( getHEVSize(hev) == "Medium" ) {
			if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('HE-V\'s in this Team may deploy as Support Assests.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+1 Jump Distance.'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 3 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('HE-V\'s in this Team may deploy as Support Assests.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+1 Jump Distance.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Weapons with the Melee Trait targeting HE-V\'s gain Frag when base 2 base with 2 or more units from this Team'));
			}else if( getTeamsHEV(hev.hevTeamName.value).length == 4 ) {
				clearRuleDiv(hev);
				hev.querySelector("#team_rules_div").removeAttribute("hidden");
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('HE-V\'s in this Team may deploy as Support Assests.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('+1 Jump Distance.'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('Weapons with the Melee Trait targeting HE-V\'s gain Frag when base 2 base with 2 or more units from this Team'));
				hev.querySelector("#team_rules_text").appendChild(document.createElement('br'));
				hev.querySelector("#team_rules_text").appendChild(document.createTextNode('When targeted by an Engage or Smash order, an HE-V in this Team withou an Activated Marker may gain an Activation Marker. They may make a Smash Order before resolving the Opposing order.'));
			}
		}
	}

	//Helper function to rebuild the Light Mech for Assasination Team if they have 3 or more HEV
	function rebuildATLight(hev) {
		if( getTeamsHEV(hev.hevTeamName.value).length == 2 ) {
			clearTeamAttacTable(hev);
				hev.attach1.value = "Directional Thrusters";
				hev.attach1.disabled = true;
				hev.attach1.dispatchEvent(new Event('change'));
				hev.attach2.value = "Melee Weapon"; 
				hev.attach2.dispatchEvent(new Event('change'));
				hev.querySelector("#team_attach_div").setAttribute("hidden",true);
		} else if( hev.querySelector("#team_attach_table").rows.length == 0 && getTeamsHEV(hev.hevTeamName.value).length >= 3 ) {
			let placeholder = hev.attach2[hev.attach2.selectedIndex].value;

			if( placeholder == "" ) {
				placeholder = "Melee Weapon"; }

			clearTeamAttacTable(hev);
			hev.attach1.value = placeholder;
			hev.attach1.dispatchEvent(new Event('change'));
			hev.attach1.disabled = false;

			HEVMeleeOnlyOption(hev, hev.attach1);
			disableSelectOptionTeam(hev, hev.attach1);

			hev.attach2.selectedIndex = 0;

			hev.querySelector("#team_attach_div").removeAttribute("hidden");
			addTeamHardPoint(hev);
			hev.teamattach1.value = "Directional Thrusters";
			hev.teamattach1.disabled = true;
			hev.teamattach1.dispatchEvent(new Event('change'));
		}
	}



	//Helper function that checks the change in HEV per team for free stuff
	function checkTeamBonus(team) {
		let hev = getTeamsHEV(team);
		//Checks what team it is, then based on hev count do stuff
		if( hev[0].hevTeamType.value == "Fire Support Team" ) {
			if( hev.length == 2 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						setTeamFSTDefault(hev[i]); }
					setTeamFSTcells(hev[i]); }
			} else if( hev.length == 3) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						setTeamFSTDefault(hev[i]); }
						setTeamFSTcells(hev[i]); }
			} else if( hev.length == 4) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						setTeamFSTDefault(hev[i]); }
						setTeamFSTcells(hev[i]); }
				}
		} else if( hev[0].hevTeamType.value == "Reconnaissance Team" ) {
			if( hev.length == 1 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						rebuildRTLight(hev[i]); }
					setTeamRTcells(hev[i]); }
			} else if( hev.length == 2 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						rebuildRTLight(hev[i]); }
					setTeamRTcells(hev[i]);
				}
			} else if( hev.length == 3 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						rebuildRTLight(hev[i]); }
					setTeamRTcells(hev[i]);
				}
			} else if( hev.length == 4 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						rebuildRTLight(hev[i]); }
					setTeamRTcells(hev[i]);
				}
			}
		} else if( hev[0].hevTeamType.value == "Security Team" ) {
			if( hev.length == 2 ) {
				for( let i = 0; i < hev.length; i++ ) {
					setTeamSTcells(hev[i]);
					rebuildST(hev[i]); }
			} else if( hev.length == 3 ) {
				for( let i = 0; i < hev.length; i++ ) {
					setTeamSTcells(hev[i]);
					rebuildST(hev[i]); }
			} else if( hev.length == 4 ) {
				for( let i = 0; i < hev.length; i++ ) {
					setTeamSTcells(hev[i]);
					rebuildST(hev[i]); }
			}
		} else if( hev[0].hevTeamType.value == "Tactical Team" ) {
			if( hev.length == 3 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( hev[i].hevType.value == "Light" ) {
						rebuildTTLight(hev[i]); }
						setTeamTTcells(hev[i]);
				}
			} else if( hev.length == 4 ) {
				for( let i = 0; i < hev.length; i++ ) {
					setTeamTTcells(hev[i]);
				}
			}
		} else if( hev[0].hevTeamType.value == "Berserker Team" ) {
			if( hev.length == 2 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( getHEVSize(hev[i]) == "Medium" ) {
						rebuildBTMedium(hev[i]);
					} else if( getHEVSize(hev[i]) == "Heavy" ) {
						rebuildBTHeavy(hev[i]); }
					setTeamBTcells(hev[i]); }
			} else if( hev.length == 3 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( getHEVSize(hev[i]) == "Light" ) {
						rebuildBTLight(hev[i]);
					} else if( getHEVSize(hev[i]) == "Medium" ) {
						rebuildBTMedium(hev[i]);
					} else if( getHEVSize(hev[i]) == "Heavy" ) {
						rebuildBTHeavy(hev[i]);
					} else if( getHEVSize(hev[i]) == "Ultra" ) {
						rebuildBTUltra(hev[i]); }
					setTeamBTcells(hev[i]); }
			} else if( hev.length == 4 ) {
				for( let i = 0; i < hev.length; i++ ) {
					if( getHEVSize(hev[i]) == "Light" ) {
						rebuildBTLight(hev[i]);
					} else if( getHEVSize(hev[i]) == "Medium" ) {
						rebuildBTMedium(hev[i]);
					} else if( getHEVSize(hev[i]) == "Heavy" ) {
						rebuildBTHeavy(hev[i]);
					} else if( getHEVSize(hev[i]) == "Ultra" ) {
						rebuildBTUltra(hev[i]); }
					setTeamBTcells(hev[i]); }
			}
		} else if( hev[0].hevTeamType.value == "Gunslinger Team" ) {
			for( let i = 0; i < hev.length; i++ ) {
				setTeamGSTcells(hev[i]); }
			for( let i = 0; i < hev.length; i++ ) {
				if( getHEVSize(hev[i]) != "none" ) {
					addCompact(hev[i], "Haptic Suit");
					hev[i].attach1.dispatchEvent(new Event('change')); } }
		} else if( hev[0].hevTeamType.value == "Assasination Team" ) {
			if( hev.length == 2 ) {
				for( let i = 0; i < hev.length; i++ ) {
					setTeamATcells(hev[i]); }
			} else if( hev.length == 3 ) {
				for( let i = 0; i < hev.length; i++ ) {
					setTeamATcells(hev[i]); }
			} else if( hev.length == 4 ) {
				for( let i = 0; i < hev.length; i++ ) {
					setTeamATcells(hev[i]); }
			}
			for( let i = 0; i < hev.length; i++ ) {
				if( getHEVSize(hev[i]) == "Light" ) {
					rebuildATLight(hev[i]); } }
		}

	}

	//Helper function to remove team secondarys from the print page
	function cleanTeamSecondaryPrint() {
		let teams = getTeams();
		let teamtypes = [];
		for( let i = 0; i < teams.length; i++ ) {
			teamtypes.push(teams[i].TeamType.value); }

		if( teamtypes.indexOf("Fire Support Team") == -1 ) {
			document.getElementById("fs_team_secondary_print").innerText=""; }
		if( teamtypes.indexOf("Reconnaissance Team") == -1 ) {
			document.getElementById("rt_team_secondary_print").innerText=""; }
		if( teamtypes.indexOf("Security Team") == -1 ) {
			document.getElementById("st_team_secondary_print").innerText=""; }
		if( teamtypes.indexOf("Tactical Team") == -1 ) {
			document.getElementById("tt_team_secondary_print").innerText=""; }
		if( teamtypes.indexOf("Berserker Team") == -1 ) {
			document.getElementById("bt_team_secondary_print").innerText=""; }
		if( teamtypes.indexOf("Gunslinger Team") == -1 ) {
			document.getElementById("gt_team_secondary_print").innerText=""; }
		if( teamtypes.indexOf("Assasination Team") == -1 ) {
			document.getElementById("at_team_secondary_print").innerText=""; }

	}

	document.getElementById("game_size_par").addEventListener("click",GameSize);
	document.getElementById("faction_par").addEventListener("click",FactionSeletion);