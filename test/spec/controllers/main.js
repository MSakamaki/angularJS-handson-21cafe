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
        btnCtrl = $controller('btnCtrl', {
            $scope: scope
        });
    }));
    describe('基本的な動作', function(){
        describe('登録処理',function(){
            describe('タイトルは', function(){
                it('値がListのTitleに格納される。', function(){
                    scope.inTitle = 'testTitle1';
                    scope.inText = 'XXX';
                    scope.insert();
                    expect(scope.items.length).toEqual(1);
                    expect(scope.items[0].title).toBe('testTitle1');

                });
                it('空文字は登録できない', function(){
                    scope.inTitle = '';
                    scope.inText = 'YYY';
                    expect(scope.items.length).toEqual(0);
                    scope.insert();
                    expect(scope.items.length).toEqual(0);

                });
                it('５文字以下は登録できない', function(){
                    scope.inTitle = '1234';
                    scope.inText = 'YYY';
                    expect(scope.items.length).toEqual(0);
                    scope.insert();
                    expect(scope.items.length).toEqual(0);

                });
                it('10文字以上は登録できない', function(){
                    scope.inTitle = '1234567890A';
                    scope.inText = 'YYY';
                    expect(scope.items.length).toEqual(0);
                    scope.insert();
                    expect(scope.items.length).toEqual(0);

                });
                it('重複データは登録できない', function(){
                    scope.inTitle = '123456789';
                    scope.inText = 'YYY';
                    expect(scope.items.length).toEqual(0);
                    scope.insert();
                    expect(scope.items.length).toEqual(1);
                    scope.insert();
                    expect(scope.items.length).toEqual(1);

                });
            });
            describe('テキストは',function(){
                it('値がListのテキスト内に格納される。', function(){
                    scope.inTitle = 'XXXXXX';
                    scope.inText = 'testText1';
                    scope.insert();
                    expect(scope.items.length).toEqual(1);
                    expect(scope.items[0].title).toBe('XXXXXX');
                    expect(scope.items[0].text).toBe('testText1');
                });
                it('値空文字は登録できる', function(){
                    scope.inTitle = 'XXXXXX';
                    scope.inText = '';
                    scope.insert();
                    expect(scope.items.length).toEqual(1);
                    expect(scope.items[0].title).toBe('XXXXXX');
                    expect(scope.items[0].text).toBe('');
                });
            });
            it('todoが追加されるとListは１つづつ増加する。', function(){

                scope.inTitle = 'testTitle1';
                scope.inText = 'testText1';
                scope.insert();
                expect(scope.items.length).toEqual(1);
                expect(scope.items[0].title).toBe('testTitle1');
                expect(scope.items[0].text).toBe('testText1');

                scope.inTitle = 'testTitle2';
                scope.inText = 'testText2';
                scope.insert();
                expect(scope.items.length).toEqual(2);
                expect(scope.items[1].title).toBe('testTitle2');
                expect(scope.items[1].text).toBe('testText2');

                scope.inTitle = 'testTitle3';
                scope.inText = 'testText3';
                scope.insert();
                expect(scope.items.length).toEqual(3);
                expect(scope.items[2].title).toBe('testTitle3');
                expect(scope.items[2].text).toBe('testText3');
            });
        })

        xit('I can successfully update ', function(){
        });
        xit('I can successfully delete ', function(){
        });
        xit('I can successfully selector ', function(){
        });
    });

    // After Test
    /*
    afterEach(inject(function($controller, $rootScope){
        $scope.items=[];
    }));*/
});
