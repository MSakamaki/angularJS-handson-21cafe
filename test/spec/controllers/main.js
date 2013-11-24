'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('angularJSAppApp'));

    var MainCtrl,
        btnCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));
    describe('基本的な動作', function(){

    });

    // After Test
    /*
    afterEach(inject(function($controller, $rootScope){
        $scope.items=[];
    }));*/
});
