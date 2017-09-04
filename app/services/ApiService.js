'use strict';
/**
 * @ngdoc overview
 * @name ApiService
 * @description
 * API Service is used to call the API 
 * It takes $http dependency
 */
angular
    .module('foneApp')
	.service(
        'ApiService',
        function ($http) {

            const START_YEAR = 2005; 
            const FINISH_YEAR = 2015;
            const BEGINNING_YEAR = 1950;
            const API_BASE_URL = 'http://ergast.com/api/f1';
            
            // here we call the api fetch for start year to end year
            // Now tomorrow if someone wants to change the to and from years, 
            // JUST change the constants.
            this.getDriverStandingsForAssignment = getDriverStandingsForAllRacesInPeriod(START_YEAR, FINISH_YEAR);
            this.getAllRacesForYear = getAllRacesForYear;
            
            /**
             * Function
             * @name getDriverStandingsForAllRacesInPeriod
             * @param  startYear 
             * @param  endYear 
             * @description The function is used to fetch the seasons list from API. 
             * Using a mathematical approach for offset and limit and API doc, this seems the best way
             */
            function getDriverStandingsForAllRacesInPeriod(startYear, endYear) {
                var offset = startYear - BEGINNING_YEAR;
                var limit = (endYear - startYear) + 1;
                var url = API_BASE_URL+"/driverStandings/1.json?limit="+limit+"&offset="+offset;
                return $http.get(url);
            }

            // This function gets the races of a season
            //	We can also use the limit and offset here for paginating results if needed
            function getAllRacesForYear(season) {
                var url = API_BASE_URL+"/"+season+"/results/1.json";
                return $http.get(url);
            }
        
        }
    );
