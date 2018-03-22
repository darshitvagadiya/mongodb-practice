angular.module('myApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/list.html',
				controller: 'driverController'
			})

			.when('/drivers', {
				templateUrl:'views/list.html',
				controller: 'driverController'
			})

			.when('/drivers/create', {
				templateUrl:'views/add.html',
				controller: 'driverController'
			})

			.when('/drivers/:id/edit', {
				templateUrl:'views/edit.html',
				controller: 'driverController'
			})

			.when('/drivers/:id/show', {
				templateUrl:'views/show.html',
				controller: 'driverController'
			})

	})