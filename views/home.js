'use strict';

angular.module('nut')
    .controller('HomeCtrl', function($scope, data){
	
	data.read().then(function(nuts){
	   $scope.nuts = nuts;
	});

	$scope.tableClass = function(r){
	    return['danger','success','warning'][r%3]
	};
	
    });

