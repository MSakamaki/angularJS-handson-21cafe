'use strict';
angular.module('myitems', [])
	.controller('itemsCtrl', function ($scope) {
	   	$scope.items=[];
		$scope.selector=function(todo){
			$scope.inTitle =  todo.title;
			$scope.inText  =  todo.text;
		};
		$scope.delete=function(todo){
			$scope.items.some(function(v, i){
				if(v.title === todo.title) {
                    $scope.items.splice(i, 1);
                }
			});
		};
    });
