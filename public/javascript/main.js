angular.module("myApp")
	// .config(function($stateProvider, $urlRouterProvider) {
	// 	$urlRouterProvider.otherwise('/');
	// 	var marketplace = {
	// 		name: 'market', 
	// 		url: '/marketplace',
	// 		templateUrl: 'Home.html'
	// 	};
	// 	var profile = {
	// 		name: 'profile', 
	// 		url: 'profile', 
	// 		templateUrl: 'profile.html'
	// 	}
	// 	$stateProvider.state(profile);
	// 	$stateProvider.state(marketplace);
	// })
	.controller('myCtrl', function ($scope) {
		console.log('controller myCtrl is running...');
		$scope.hello = "OMG HELLO";
	})