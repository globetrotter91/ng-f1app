'use strict';
/**
 * @ngdoc overview
 * @name seasonList
 * @description
 * Here we create a seasonList component for the app
 * We define the view and controller of the component.
 */
angular
    .module('foneApp')
    .component(
        'seasonList', 
        {
            templateUrl: 'app/components/season-list/season-list.template.html',
            controller: 'SeasonListController as slCtrl'
        }
    );