angular.module("loginApp", [])
	.controller('loginCtrl', function ($scope, $http) {
		$scope.loginUsername = "";
		$scope.loginPassword = "";

		console.log('controller loginCtrl is running...');
		
		$scope.login = function () {
			var obj = {
				username: $scope.loginUsername, 
				password: $scope.loginPassword
			}
			$http({
				method: 'POST', 
				url: 'login', 
				data: JSON.stringify(obj)
			}).then(function onSuccess(response) {
				if (response.data)
					$scope.errorMsg = response.data;
			}).catch(function onError(errResponse) {
				if (errResponse.data)
					$scope.errorMsg = errResponse.data;
			});
		};

		$scope.register = function () {
			var obj = {
				username: $scope.regUsername, 
				password: $scope.regPassword, 
				name: $scope.regName
			}
			$http({
				method: 'POST', 
				url: 'login', 
				data: JSON.stringify(obj)
			}).then(function onSuccess(response) {
				if (response.data)
					$scope.errorMsg = response.data;
			}).catch(function onError(errResponse) {
				if (errResponse.data)
					$scope.errorMsg = errResponse.data;
			});
		};

	});