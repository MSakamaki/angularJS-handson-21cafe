'use strict';
angular.module('utill', [])
    .service('uiCheck', function(){
        this.isOverlap = function(ary, key){
            return ary.some(function(v, i){
                return (v.title == key);
            });
        }
        this.required=function(value){
        		return Boolean(value) || value===0;
        }
        this.isBetweenLength=function(value, min, max){
            if (! value) return 0 === min ;
            return value.length >= min && value.length <= max;
        }
    });
