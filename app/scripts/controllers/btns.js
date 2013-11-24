'use strict';
angular.module('btns', [])
	.controller('btnCtrl', function ($scope) {
	   $scope.items=[];
        $scope.update=function(){
            $scope.items.some(function(v){
                if (v.title === $scope.inTitle){
                    v.text = $scope.inText;
                }
            });
            $scope.$broadcast('updateTodo',$scope.items);
		};
		$scope.insert=function(){
            var todo = { title : $scope.inTitle, text : $scope.inText };
            $scope.items.push(todo);
		};
        $scope.deleteALL=function(todo){
            $scope.items=[];
        };
    });
