'use strict';

angular.module('nut')
    .service('data', function($http, $q){

	var that = this;
	var nuts =[
	    {
		nut_hash:'nut0',
		name:'almond', type:'nut', kasher:'parev',
		protein:10, carbs:1, fat:3
	    },{
		nut_hash:'nut1',
		name:'past', type:'grain product', kasher:'parev',
		protein:10, carbs:10, fat:0
	    },{
		nut_hash:'nut2',
		name:'wooden chess peices', type:'wood', kasher:'depends on the varnesh',
		protein:0, carbs:0, fat:666
	    }
	];
	
	this.read = function(){
	    var def = $q.defer();
	    
	    setTimeout(function(){
		def.resolve(nuts);
	    },300);
	    
	    return def.promise;
	};

    });
