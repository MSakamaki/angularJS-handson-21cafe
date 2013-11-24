'use strict';

angular.module('formApp', [])
	.controller('todoForm', function ($scope, MESSAGES) {

		$scope.msgTitleRequired = MESSAGES.TITLE_REQUIRED;
		$scope.msgTitleOverlapError = MESSAGES.TITLE_OVERLAP_ERR;
		$scope.msgTitleLengthError = MESSAGES.TITLE_LENGTH_ERR;
		$scope.msgTextLengthError = MESSAGES.TEXT_LENGTH_ERR;

		$scope.insert=function(){
			if ($scope.isFormError()) return;
			$scope.items.push({ title : $scope.inTitle, text : $scope.inText });
		};

		var textChange= function(){
			$scope.items.some(function(v){
				if (v.title === $scope.inTitle){
					v.text = $scope.inText;
				}
			});
		};
		$scope.$watch('inText',textChange, true);

		$scope.isFormError = function(){
			return $scope.isTitleError() || $scope.isTextError();
		};

		$scope.isTitleError = function(){
			return $scope.myForm.title.$error.required ||
				$scope.myForm.title.$error.maxlength ||
				$scope.myForm.title.$error.minlength ||
				$scope.myForm.title.$error.isoverlap ;
		};
		$scope.isTextError = function(){
			return $scope.myForm.text.$error.maxlength;
		};
    });
