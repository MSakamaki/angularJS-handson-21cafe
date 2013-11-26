'use strict';

angular.module('formApp', [])
	.controller('todoForm', function ($scope) {

		$scope.insert=function(){
			$scope.items.push({ title : $scope.inTitle, text : $scope.inText });
		};
    });
