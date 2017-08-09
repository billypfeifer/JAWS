angular.module("myApp", ['ui.router', 'ui.bootstrap'])
	.config(function($stateProvider, $urlRouterProvider) {
		// $urlRouterProvider.otherwise('/');
		var marketplace = {
			name: 'market', 
			url: '/',
			templateUrl: '../templates/marketplace.html', 
			controller: 'marketplaceLoadCtrl'
		};
		var profile = {
			name: 'profile', 
			url: 'profile', 
			templateUrl: '../templates/mybooks.html', 
			controller: 'profileLoadCtrl'
		}
		$stateProvider.state(profile);
		$stateProvider.state(marketplace);
	})
	.controller('myCtrl', function ($scope, $state, $http , $uibModal) {
		console.log('controller myCtrl is running...');
		
		$scope.getMarketplace = function () {
			$http({
				method: 'GET', 
				url: 'getMarketplace'
			}).then(function onSuccess(response) {
				if (response)
					console.log(response);
			}).catch(function onError(errResponse) {
				console.log(errResponse);
				var book1 = {
					title:'my title 1',
					author:'my author 1', 
					price:'40'
				};
				var book2 = {
					title:'my title',
					author:'my author', 
					price:'50'
				};
				$scope.books = [book1,book2];
			});
		};


		$scope.getMyAccount = function () {
			$http({
				method: 'GET', 
				url: 'getMyAccount', 
				data: JSON.stringify($scope.username?$scope.username:"")
			}).then(function onSuccess(response) {
				if (response)
					console.log(response);
			}).catch(function onError(errResponse) {
				console.log(errResponse);
			});
		};


		$scope.openOfferModal = function () {
			$uibModal.open({
				templateUrl: 'template/modalOffer.html', 
				controller: function ($scope, $uibModalInstance, bookId, initialPrice) {

				}, 
				resolve: {
					bookId: function () {
						return $scope.selectedId;
					}, 
					initialPrice: function () {
						return $scope.initialPrice;
					}
				}
			})
		}




		if (!$scope.state) {
			console.log('ok switching to market');
			$scope.state = 'market'
			$state.go('market');
		}	

		$scope.goToProfile = function () {
			$state.go('profile');
		}
		$scope.goHome = function () {
			$state.go('market');
		}
	})
	.controller('marketplaceLoadCtrl', function ($scope, $http) {
		console.log('get marketplace');
		$scope.getMarketplace();
	})
	.controller('profileLoadCtrl', function ($scope, $http) {
		console.log('get profile');
		$scope.getMyAccount();
	})
	
