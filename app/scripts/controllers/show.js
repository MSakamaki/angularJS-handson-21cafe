'use strict';
angular.module('angularJSAppApp')
	.controller('ShowCtrl', function ($scope, storage) {
        var defAry=[];
        storage.bind($scope,'items', {defaultValue: defAry ,storeName: 'todoAPP'});

        /* angular-ui-grid settings */
        $scope.grids = {
            data: 'items',
            enableCellSelection: true,
            enableRowSelection: false,
            enableCellEdit: true,
            columnDefs: [
                {field:'title', displayName: 'タイトル', enableCellEdit: false},
                {field:'text', displayName:'内容', enableCellEdit: true}
            ]
        };
	});