// The Flag Game is designed to accompany John Hunter's World
// Peace Game and was created by students at MIT in CMS.615
// This game is intended to allow teachers to make an easier
// transition from a normal classroom setting to the controlled
// chaos of the World Peace Game

// The Flag Game is a game in which 4 teams attempt to split up
// the areas in a flag, where is team is motivated by attempting 
// to accomplish a set of goals that is unique to that team.
// Any team that has accomplished all of its objectives wins!

// The way the teams accomplish their goal is as the following:
// The game happens one round at a time until all areas in the 
// flag have been claimed by at least one team.  After each round,
// one team's leader will announce a proposal that would divvy up 
// sections of the flags to certain teams.  The proposal is then 
// voted on by all 4 team leaders, and it passes if < 50% of the 
// team leaders vote in favor.  Territories that have already been
// claimed cannot be changed.

// The round structure is as follows:
// 	1 minute: teams strategize
// 	2 minutes: team members split up and negotiate with other teams
// 	1 minute: teams reform and restratigize
// 	1 minute: teams discuss proposal on table
// 	x minutes: teams vote
// 	repeat from the beginnning

// Any questions the players may have or anything left ambiguous is 
// left to the color guard to decide.  The color guard is a student 
// that is picked at the beginning of the game and has absolute 
// power to decide on whether something not stated in the rules
// is allowed (ie can multiple teams inhabit a single area ect)

// An area is a part of the flag that has a predetermined area and
// it can be "owned" by any number of teams.

// areaName is a string that contains the name of the area
// areaSize is an int that tells us the size of the area
Area = function(areaName, areaSize) {
	var ownedByTeams = [];
	var name = areaName;
	var size = areaSize;

	return {
		setTeams: function(teams) {ownedByTeams = teams;}, // adds a team
		getSize: function() {return size;}, // the width * length of a certain area
		getName: function() {return name;}, // the name, usually donated by A, B, C, etc
		getTeams: function() {return ownedByTeams;},
	}
}

// A flag is a collection of areas
// flagAreas is a list of areas
Flag = function(flagAreas) {
	var areas = flagAreas; // 
	var state = "Game Not Started";
	return {
		// returns an associative array containing teams and the sums of the sizes of all areas that team owns
		
		getTeamTotalArea: function() {
			teamAreas = {};
			for (area in areas){
				for (team in area.getTeams()){
					if (!(team in teamAreas)){
						teamAreas[team] = 0;
					}
					teamAreas[team] += area.getSize();
				}
			}

			return teamAreas;
		},

		// team names is a list of the team's names that will be added to the area
		setTeamsToArea: function(teamNames, areaName) {
			for (area in areas){
				if (area.getName() === areaName){
					area.setTeams(teamNames);
				}
			}
		},
	}
}
