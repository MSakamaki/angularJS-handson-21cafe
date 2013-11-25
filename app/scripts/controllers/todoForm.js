'use strict';

angular.module('formApp', [])
	.controller('todoForm', function ($scope) {

		$scope.insert=function(){
			$scope.items.push({ title : $scope.inTitle, text : $scope.inText });
		};

		var textChange= function(){
			$scope.items.some(function(v){
				if (v.title === $scope.inTitle){
					v.text = $scope.inText;
				}
			});
		};
    });
