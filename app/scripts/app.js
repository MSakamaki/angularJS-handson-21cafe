'use strict';

angular.module('angularJSAppApp', [
	'ngCookies',
	'ngRoute',  // <-Angular-routeを読み込み
	'angularLocalStorage', 
	'ngGrid',
	'btns', 
	'formApp', 
	'todoTags', 
	'utill', 
	'myitems',
	'myconst'
	])
	.config(function ($routeProvider) {
		$routeProvider
            .when('/main', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
            .when('/main2', { templateUrl: 'views/main2.html', controller: 'MainCtrl2' })
            .when('/show', {templateUrl:'views/show.html', controller : 'ShowCtrl'})
            .otherwise({ redirectTo: '/main' });
	});
