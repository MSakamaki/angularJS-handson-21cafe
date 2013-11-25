'use strict';

angular.module('angularJSAppApp', [
	'ngCookies',
	'ngRoute',
	'angularLocalStorage', 
	'ngGrid'
	])
	.config(function ($routeProvider) {
		$routeProvider
            .when('/main', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .otherwise({ redirectTo: '/main' });
	});
