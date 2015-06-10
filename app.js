'use strict';
 
angular.module('fgk', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/nigger");

	$stateProvider
	    .state('faggot', {
		url: "/faggot",
		templateUrl: "views/list.html",
		controller: 'FaggotCtrl as fgt'
	    })
	    .state('nigger', {
		url: "/nigger",
		templateUrl: "views/list.html",
		controller: 'NiggerCtrl as ngr'
	    });
    });
