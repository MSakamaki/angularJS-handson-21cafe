'use strict';
angular.module('btns', [])
	.controller('btnCtrl', function ($window, $scope, uiCheck, MESSAGES) {
        $scope.update=function(){
            $scope.items.some(function(v){
                if (v.title === $scope.inTitle){
                    v.text = $scope.inText;
                }
            });
        };
        $scope.insert=function(){
            if (isTitleError() || isTextError()){
                return;
            }
            $scope.items.push({ title : $scope.inTitle, text : $scope.inText });
        };
        $scope.deleteALL=function(){
            $scope.items.splice(0,$scope.items.length);
        };

        var isTitleError =function(){
            if(! uiCheck.required($scope.inTitle)){
                ($window.mockWindow || $window).alert(MESSAGES.TITLE_REQUIRED);
                return true;
            }
            if(uiCheck.isOverlap($scope.items, $scope.inTitle)){
                ($window.mockWindow || $window).alert(MESSAGES.TITLE_OVERLAP_ERR);
                return true;
            }
            if (! uiCheck.isBetweenLength($scope.inTitle, 5, 10))
            {
                ($window.mockWindow || $window).alert(MESSAGES.TITLE_LENGTH_ERR);
                return true;
            }
            return false;
        }

        var isTextError =function(){
            if (! uiCheck.isBetweenLength($scope.inText, 0, 140))
            {
                ($window.mockWindow || $window).alert(MESSAGES.TEXT_LENGTH_ERR);
                return true;
            }

            return false;
        }
    });
