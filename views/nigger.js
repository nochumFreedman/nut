'use strict';

angular.module('fgk')
    .controller('NiggerCtrl', function($scope){

	$scope.shit = 'nigger';

	$scope.list = ['l\'markus',
		       'jemarcus',
		       'shafonda',
		       'oketa mbe',
		       'innocent'
		      ];

	$scope.objs = $scope.list.map(function(item){
	    return {name:item, 
		    status:((Math.random()>0.5)?'poor':'middle-class')
		   };
	});



    });

