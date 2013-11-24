'use strict';

angular.module('todoTags', [])
	.directive('myfooter', function(){
        return {
            restrict : 'E',
            templateUrl : 'scripts/directive/template/myfooter.html'
        }
    })
    .directive('ngEnterfocus', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        angular.element("#" + attrs.ngEnterfocus).focus();
                    });
                    event.preventDefault();
                }
            });
        };
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
