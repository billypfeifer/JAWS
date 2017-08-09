angular.module("myApp", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.otherwise('/');
		var marketplace = {
			name: 'market', 
			url: '/',
			templateUrl: '../templates/Home.html'
		};
		var profile = {
			name: 'profile', 
			url: 'profile', 
			templateUrl: 'profile.html'
		}
		$stateProvider.state(profile);
		$stateProvider.state(marketplace);
	})
	.controller('myCtrl', function ($scope, $state) {
		console.log('controller myCtrl is running...');
		
		$state.go('market');
	})