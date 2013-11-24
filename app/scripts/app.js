'use strict';

angular.module('angularJSAppApp', [
	'ngCookies',
	'ngRoute',  // <-Angular-routeを読み込み
	'angularLocalStorage', 
	'ngGrid',
	'btns', 
	'todoTags', 
	'utill', 
	'myitems',
	'myvalidate',
	'myconst'
	])
	.config(function ($routeProvider) {
		$routeProvider
            .when('/main', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .when('/show', {templateUrl:'views/show.html', controller : 'ShowCtrl'})
            .otherwise({ redirectTo: '/main' });
	});
