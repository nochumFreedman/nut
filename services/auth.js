'use strict';

angular.module('nut')
  .service('auth', function($http, $q){

      var that = this;

      this.confirmLogin = function(){
	  var def = $q.defer();

	  // check fb/google login state

	  return def.promise;
      };


  });
