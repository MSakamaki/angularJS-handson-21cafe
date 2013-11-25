'use strict';

angular.module('formApp', [])
	.controller('todoForm', function ($scope, MESSAGES) {

		$scope.msgTitleRequired = MESSAGES.TITLE_REQUIRED;
		$scope.msgTitleLengthError = MESSAGES.TITLE_LENGTH_ERR;
		$scope.msgTextLengthError = MESSAGES.TEXT_LENGTH_ERR;

		$scope.insert=function(){
			if ($scope.isFormError()) return;
			$scope.items.push({ title : $scope.inTitle, text : $scope.inText });
		};

		$scope.isFormError = function(){
			return $scope.isTitleError() || $scope.isTextError();
		};

		$scope.isTitleError = function(){
			return $scope.myForm.title.$error.required ||
				$scope.myForm.title.$error.maxlength ||
				$scope.myForm.title.$error.minlength ;
		};
		$scope.isTextError = function(){
			return $scope.myForm.text.$error.maxlength;
		};
    });
