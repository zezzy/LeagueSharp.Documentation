var app = angular.module("LeagueSharpDocs", ['ngRoute', 'LeagueSharpDocs.services', 'hc.marked']).config(function($routeProvider, $locationProvider, markedProvider) {
	"use strict";

	markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });

	$locationProvider.html5Mode(false).hashPrefix('!');
	$routeProvider
		.when('/', {
		templateUrl: 'templates/index.html',
		controller: 'StartController'
	})
	.when('/:name*', {
		templateUrl: 'templates/default.html',
	}).when('/404', {
		templateUrl: 'templates/404.html',
		controller: 'StartController'
	});
});


function MainController($scope, Page) {
	$scope.Page = Page;
}

app.controller("StartController", function($scope, $location, getService, $route) {
	"use strict";
	$scope.$route = $route;

	//Get the navigation items
	getService.navData().then(function( data ) {
	    var navGroups = $scope.navGroups = [];
	    angular.forEach(data[0], function(v, k) {
	    	//Loop through the navigation items
	    	for( var i = 0; i < v.navGroups.length; i++ ) {
	    		//Push navigation items to view
	       		navGroups.push(v.navGroups[i]);
	  		}	
	    });
	 });
});