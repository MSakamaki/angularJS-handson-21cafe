'use strict';
angular.module('angularJSAppApp')
	.controller('MainCtrl', function ($scope, storage) {
        var defAry=[];
        storage.bind($scope,'items', {defaultValue: defAry ,storeName: 'todoAPP'});

    });
