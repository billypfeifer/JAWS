angular.module("loginApp", [])
	.controller('loginCtrl', function ($scope, $http) {
		$scope.loginEmail = "";
		$scope.loginPassword = "";
		$scope.regPassword = "";
		$scope.regPassword2 = "";
		$scope.regEmail = "";
		$scope.regName = "";

		console.log('controller loginCtrl is running...');

		$scope.login = function () {
			var obj = {
				email: $scope.loginEmail,
				password: $scope.loginPassword
			}
			console.log('hey');
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
				email: $scope.regEmail,
				password: $scope.regPassword,
				name: $scope.regName
			}
			$http({
				method: 'POST',
				url: 'register', 
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
