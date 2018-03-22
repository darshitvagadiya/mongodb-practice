angular.module('myApp')
	.controller('driverController', function($scope, $http, $routeParams, $location, $route){

		$scope.getDrivers = function(){
			$http.get('/api/drivers/').then(function(response){
				$scope.drivers = response.data;
			});
		};

		$scope.showDriver = function(){
			var id = $routeParams.id;
			$http.get('/api/drivers/' + id).then(function(response){
				$scope.driver = response.data;
			});
		};

		$scope.addDriver = function(){
			$http.post('/api/drivers/', $scope.driver).then(function(response){
				$location.path('/');
			});
		};

		$scope.updateDriver = function(){
			var id = $routeParams.id;
			$http.put('/api/drivers/' + id, $scope.driver).then(function(response){
				$location.path('/');
			});
		};

		$scope.deleteDriver = function(id){
			var id = id;
			$http.delete('/api/drivers/' + id).then(function(response){
				$route.reload();
			});
		}
	});