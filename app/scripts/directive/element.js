'use strict';

angular.module('todoTags', [])
    .directive('mymenu', function(){
        return {
            restrict:'E',
            templateUrl : 'scripts/directive/template/mymenu.html'
        }
    })
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
    })
    .directive('mylist', function(){
        return {
            restrict : 'E',
            template : '</br><div class="gridStyle" ng-grid="grids"></div>'
        }
    });
