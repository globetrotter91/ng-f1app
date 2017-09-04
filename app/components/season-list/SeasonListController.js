'use strict';
/**
 * @ngdoc overview
 * @name SeasonListController
 * @description
 * SeasonListController takes ApiService as dependency and fetches the list of seasons on load
 */
angular
    .module('foneApp')
    .controller(
        'SeasonListController',
        function (ApiService) {

            this.loading = true;                    //  for showing the loading icon on the top right
            this.seasons = [];		    			//	array of seasons fetched from API
			this.seasonRaces = [];				    //	array of races of selected season
			this.selectedSeason = '';				//	selected season
			this.selectedSeasonChampionId = ''; 	//	championId of the selected season
            this.errorInApi = '';
            
            var self = this;                        // this has to be done because we are using ES5 
            //  with ES6 arrow functions we could have avoided a `self variable all together
            //  Making API call for list of seasons between 2005 to 2015 -- already set constants
            ApiService.getDriverStandingsForAssignment.then(
                function(response) {
                    self.seasons = response.data.MRData.StandingsTable.StandingsLists;
                    self.loading = false;
                }, 
                function(err) {
                    console.log(err); 
                    self.loading = false;
                }
            );

            //  this function is called when a season is clicked 
            //  It fetches the races of the selected season
            //  Also adds bg-success class where the winner is champion of the season
            this.seasonClicked = function(season) {
                self.loading = true;
                self.selectedSeasonChampionId = season.DriverStandings[0].Driver.driverId; 
                self.selectedSeason = season.season; 
                ApiService.getAllRacesForYear(season.season).then(
                    function(res) {
                        if (res.data) {
                            self.seasonRaces = res.data.MRData.RaceTable.Races;
                            self.loading = false;
                        }
                    },
                    function (err) {
                        console.log(err);
                        self.loading = false;
                    },
                );
            }
        }
    );