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
		$scope.googleResults = [];
		$scope.googleSearchTerm = "";
		$scope.bookSearchTerm = "";

		$scope.getMarketplace = function () {
			$http({
				method: 'GET', 
				url: 'getMarketplace'
			}).then(function onSuccess(response) {
				if (!response.error)
					$scope.books = response.data;
			}).catch(function onError(errResponse) {
				console.log(errResponse);
				var book1 = {
					title:'my title 1',
					authors:'my author 1', 
					price:'40', 
					bookID:6
				};
				var book2 = {
					title:'my title',
					authors:'my author', 
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
					$scope.books = response.data;
			}).catch(function onError(errResponse) {
				console.log(errResponse);
			});
		};

		$scope.logout = function () {
			$http({
				method: 'GET', 
				url: 'logout'
			}).then(function onSuccess(response) {
				console.log(response);
			}).catch(function onError(errResponse) {
				console.log(errResponse);
			});
		};


		$scope.removeBook = function (bookID) {
			var obj = {bookID:bookId}
			$http({
				method: 'POST', 
				url: 'deleteBook',
				data: JSON.stringify(obj)
			}).then(function onSuccess(response) {
				$scope.getMyAccount();
			}).catch (function onError(errResponse) {
				$scope.getMyAccount();
			})
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
		};

		$scope.bookSearch = function (term) {
				$http({
					method: 'POST',
					url: 'bookSearch',
					data: JSON.stringify({searchQ:term})
				}).then(function onSuccess(response) {
					if (response.error)
						$scope.error;
					else 
						$scope.googleResults = response.data;
				}).catch(function onError(errResponse) {
					$scope.error = errResponse;
					$scope.dismiss();
				});
		}

		$scope.googleSearch = function (term) {
				$http({
					method: 'POST',
					url: 'googleSearch',
					data: JSON.stringify({searchQ:term})
				}).then(function onSuccess(response) {
					if (response.error)
						$scope.error;
					else 
						$scope.googleResults = response.data;
				}).catch(function onError(errResponse) {
					$scope.error = errResponse;
					$scope.dismiss();
				});
		};

		$scope.openAddBookModal = function () {
			var modalInstance = $uibModal.open({
				templateUrl: '../templates/NewBook.html', 
				windowClass: 'medium-modal-window',
				controller: function ($scope, $uibModalInstance, $http) {
					
					$scope.amount = 0;
					$scope.desc = "";
					$scope.book = null;

					$scope.dimsiss = function () {
						$uibModalInstance.dimsiss();
					};

					$scope.addBook = function () {
						var obj = {
							title:book.title, 
							authors:book.authors,
							amount: $scope.amount, 
							bookID:book.bookID, 
							image:book.image,
							descriptionGoogle:book.descriptionGoogle, 
							descriptionUser:$scope.desc
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

						}).catch(function onError(errResponse) {
							$scope.error = errResponse;
							$scope.dismiss();
						});
					};
				}, 
				scope: $scope
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
	
