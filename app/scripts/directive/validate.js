'use strict';

angular.module('myvalidate', ['utill'])
	.directive('isoverlap', function(uiCheck){
		return {
			require : 'ngModel',
			restrict:'A',
			link : function(scope, elem, attr, ctrl){
				ctrl.$parsers.unshift(function(_value) {
					if (! uiCheck.isOverlap(scope.items, _value)) {
						ctrl.$setValidity('isoverlap', true);
						return _value;
					} else {
						ctrl.$setValidity('isoverlap', false);
						return _value;
					}
				});
			}
		}
	});
