'use strict';
angular.module('myconst', [])
    .constant('MESSAGES', {
       TITLE_LENGTH_ERR : "タイトルは5文字以上10文字以下で入力してください。" ,
       TITLE_OVERLAP_ERR : "タイトルが重複しています。" ,
       TITLE_REQUIRED : "タイトルは必須入力です。",
       TEXT_LENGTH_ERR : "テキストは140文字までで入力してください。"
    });
