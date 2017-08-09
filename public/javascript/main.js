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
					price:'40', 
					bookID:6
				};
				var book2 = {
					title:'my title',
					author:'my author', 
					price:'50', 
					bookID: 5
				};
				$scope.books = [book1,book2];
			});
		};


		$scope.getMyAccount = function () {
			$http({
				method: 'GET', 
				url: 'getMyAccount'
				// ,data: JSON.stringify($scope.username?$scope.username:"")
			}).then(function onSuccess(response) {
				if (response)
					console.log(response);
			}).catch(function onError(errResponse) {
				console.log(errResponse);
			});
		};


		$scope.openOfferModal = function (bookId, price) {
			$scope.bookId = bookId;
			$scope.initialPrice = price;
			var modalInstance = $uibModal.open({
				templateUrl: '../templates/modal.html', 
				windowClass: 'medium-modal-window',
				controller: function ($scope, $uibModalInstance, $http, bookId, initialPrice) {
					console.log('hey')
					$scope.amount = initialPrice;
					$scope.dimsiss = function () {
						$uibModalInstance.dimsiss();
					}

					$scope.makeOffer = function () {
						var obj = {
							amount: $scope.amount, 
							bookID:bookId 
						};
						$http({
							method: 'POST',
							url: 'makeOffer',
							data: JSON.stringify(obj)
						}).then(function onSuccess(response) {
							if (response.error)
								$scope.error;
							else 
								$scope.dimsiss();
							$scope.dismiss();

						}).catch(function onError(errResponse) {
							$scope.error = errResponse;
							$scope.dismiss();
						});
					};
				}, 
				scope: $scope,
				resolve: {
					bookId: function () {
						console.log('hi');
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
	
