'use strict';

angular.module('todoTags', [])
	.directive('myfooter', function(){
        return {
            restrict : 'E',
            templateUrl : 'scripts/directive/template/myfooter.html'
        }
    })
    .directive('btns', function(){
        return {
            restrict : 'E',
            templateUrl : 'scripts/directive/template/btns.html'
        }
    })
    .directive('myitems', function(){
        return {
            restrict : 'E',
            controller : 'itemsCtrl',
            templateUrl : 'scripts/directive/template/myitems.html'
        }
    });
