'use strict';
angular.module('angularJSAppApp')
	.controller('MainCtrl', function ($scope,storage) {
        var defAry=[];
        storage.bind($scope,'items', {defaultValue: defAry ,storeName: 'todoAPP'});

        $scope.$watch('items',function(){
			$scope.lists=[];
			$scope.items.some(function(v){
				$scope.lists.push({text: v.text ,title: v.title});
			});
		}, true);
    });
