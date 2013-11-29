#AngularJS Handson 21cafe

## さいしょに
 + 開発には**git**、**node**、**yeoman**、**grunt**、**bower**が必要になります。  登録と構築が完了してない方は[佐川さんの作成されたマニュアル](https://github.com/albatrosary/backbone-handson-21cafe/blob/master/backbone%20%E3%83%8F%E3%83%B3%E3%82%BA%E3%82%AA%E3%83%B3%20in%2021Cafe.pdf)を参考に必要な機能の準備を完了させてください。
 +  よく使うコマンド「clone/branch/stash」等に付いては[安易マニュアル](https://github.com/MSakamaki/angularJS-handson-21cafe/wiki/Git-%E5%AE%89%E6%98%93-Manual)を用意しました。
 + その他注意事項は[注意事項のページ](https://github.com/MSakamaki/angularJS-handson-21cafe/wiki/angularJS-handson%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85)のページにまとめてあります。

 + まずは以下のコマンドでissues/1-0ブランチをcloneしてください。  

```
git clone -b issues/1-0 https://github.com/MSakamaki/angularJS-handson-21cafe.git
```

 + その後、npm、bowerにてモジュール、JSライブラリをインストールします。

```sh
npm install
```

```sh
bower install
```

 + これから issues/1-0から開始し、issues/2-4まで、機能を徐々に追加しながらAngularJSの様々な機能を体験していきます。
 + ```grunt server```コマンドでライブリロードしながら開発していきましょう。
 + ブラウザにchoromeを使用される方は**[AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk)**があると便利です。
 
---
##[issues/1-0](https://github.com/MSakamaki/angularJS-handson-21cafe/tree/issues/1-0)のapp/配下初期構成
```
app/  
├── 404.html  
├── favicon.ico  
├── index.html  
├── robots.txt  
├── scripts  
│   ├── app.js  
│   └── controllers  
│       └── main.js  
├── styles  
│   └── main.css  
└── views  
    └── main.html  
```

---
##[issues/1-1](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F1-0...issues%2F1-1)
#### 基本的な登録機能編
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html                 # <- 変更
├── robots.txt
├── scripts
│   ├── app.js                 # <- 変更
│   ├── controllers
│   │   ├── btns.js            # <- 新規追加
│   │   ├── main.js
│   │   └── myitems.js         # <- 新規追加
│   └── directive              # <- 新規追加
│       ├── element.js         # <- 新規追加
│       └── template           # <- 新規追加
│           ├── btns.html      # <- 新規追加
│           ├── myfooter.html  # <- 新規追加
│           └── myitems.html   # <- 新規追加
├── styles
│   └── main.css
└── views
    └── main.html              # <- 変更
```
#####追加される機能
 + ボタンの実装
 + テキストボックスの実装
 + 一覧の実装

---
##[issues/1-2](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F1-1...issues%2F1-2)
#### 追加機能編
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html                 # <- 変更
├── robots.txt
├── scripts
│   ├── app.js                 # <- 変更
│   ├── controllers
│   │   ├── btns.js            # <- 変更
│   │   ├── main.js
│   │   └── myitems.js         # <- 変更
│   ├── directive
│   │   ├── element.js         # <- 変更
│   │   └── template
│   │       ├── btns.html
│   │       ├── myfooter.html
│   │       └── myitems.html
│   └── service                # <- 新規追加
│       ├── constant.js        # <- 新規追加
│       └── utill.js           # <- 新規追加
├── styles
│   └── main.css
└── views
    └── main.html              # <- 変更
```
#####追加される機能
 + ボタンのコントロール内にバリデーション実装
 + serviceで共通部品的なものを作ってみる。
 + 一覧にフィルタ機能を追加
 + テキストボックス（タイトル）にエンターでフォーカス移動を

---
##[issues/1-3](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F1-2...issues%2F1-3)
#### テストの実装
以下のファイルを追加/編集します。  
```sh
app/
test/
├── runner.html
└── spec
    └── controllers
        └── main.js             # <- 変更
```
#####追加される機能
 + 登録機能だけテストを実装してみる

#####補足
 + ```grunt test```コマンドでテストだけ実行できます。
 + 余裕があれば登録処理をわざとおかしい動きにして、単体テスト失敗時にはどういう表示になるかも見てみましょう。

---
##issues/1-4
#### localstrage機能を実装

 + [issues/1-4(古い差分です、以下の「track byによる正しい問題回避方法のソース」を使ってください。)](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F1-3...issues%2F1-4)
以下のファイルを追加/編集します。
 + 上記の$watchを使っての問題回避は暫定的なものです。
 + 正しい実装内容は[track by による正しい問題回避方法のソース](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F1-3...issues%2F1-4-1)を参考にしてください。
 + 詳細は[AngularJS1.2.0環境でAngularLocalStrageとng-repeatを共存させるとエラーが発生する件](https://github.com/MSakamaki/angularJS-handson-21cafe/wiki/angularJS-handson%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85#angularjs120%E7%92%B0%E5%A2%83%E3%81%A7angularlocalstrage%E3%81%A8ng-repeat%E3%82%92%E5%85%B1%E5%AD%98%E3%81%95%E3%81%9B%E3%82%8B%E3%81%A8%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B%E4%BB%B6)を参考にしてください。

```sh
app/
├── 404.html
├── favicon.ico
├── index.html                  # <- (使うモジュールの説明のみ)動作に変更はなし
├── robots.txt
├── scripts
│   ├── app.js
│   ├── controllers
│   │   ├── btns.js             # <- 変更
│   │   ├── main.js             # <- 変更
│   │   └── myitems.js          # <- 変更
│   ├── directive
│   │   ├── element.js
│   │   └── template
│   │       ├── btns.html
│   │       ├── myfooter.html
│   │       └── myitems.html    # <- 変更
│   └── service
│       ├── constant.js
│       └── utill.js
├── styles
│   └── main.css
└── views
    └── main.html
```
#####追加される機能
 + モジュール「[angularLocalStorage](https://github.com/agrublev/angularLocalStorage)」を使用

---
##[issues/1-5](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F1-4...issues%2F1-5)
#### 画面遷移
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html                  # <- 使うモジュールの説明と変更
├── robots.txt
├── scripts
│   ├── app.js                  # <- 変更
│   ├── controllers
│   │   ├── btns.js
│   │   ├── main.js
│   │   ├── myitems.js
│   │   └── show.js             # <- 新規追加
│   ├── directive
│   │   ├── element.js          # <- 変更
│   │   └── template
│   │       ├── btns.htm
│   │       ├── myfooter.html
│   │       ├── myitems.html
│   │       └── mymenu.html     # <- 新規追加
│   └── service
│       ├── constant.js
│       └── utill.js
├── styles
│   └── main.css
└── views
    ├── main.html               # <- 変更
    └── show.html               # <- 新規追加
```
#####追加される機能
 + 遷移先のページを作成
 + 遷移用の部品を作成
 + 一覧はモジュール「[ng-grid](http://angular-ui.github.io/ng-grid/)」を使用

---
##[issues/2-0](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F1-5...issues%2F2-0)
#### menu2画面の作成
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html                   # <- 変更
├── robots.txt
├── scripts
│   ├── app.js                   # <- 変更
│   ├── controllers
│   │   ├── btns.js
│   │   ├── main.js
│   │   ├── main2.js             # <- 新規追加
│   │   ├── myitems.js
│   │   └── show.js
│   ├── directive
│   │   ├── element.js
│   │   └── template
│   │       ├── btns.html
│   │       ├── myfooter.html
│   │       ├── myitems.html
│   │       └── mymenu.html      # <- 変更
│   └── service
│       ├── constant.js
│       └── utill.js
├── styles
│   └── main.css
└── views
    ├── main.html
    ├── main2.html               # <- 新規追加
    └── show.html
```
#####追加される機能
 + 画面遷移機能と新規画面の作成

---
##[issues/2-1](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F2-0...issues%2F2-1)
####submit & formを追加
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html                   # <- 変更
├── robots.txt
├── scripts
│   ├── app.js                   # <- 変更
│   ├── controllers
│   │   ├── btns.js
│   │   ├── main.js
│   │   ├── main2.js
│   │   ├── myitems.js
│   │   ├── show.js
│   │   └── todoForm.js          # <- 新規追加
│   ├── directive
│   │   ├── element.js           # <- 変更
│   │   └── template
│   │       ├── btns.html
│   │       ├── myfooter.html
│   │       ├── myitems.html
│   │       ├── mymenu.html
│   │       └── todoForm.html    # <- 新規追加
│   └── service
│       ├── constant.js
│       └── utill.js
├── styles
│   └── main.css
└── views
    ├── main.html
    ├── main2.html                # <- 変更
    └── show.html
```
#####追加される機能
 + 入力とボタンを追加

---
##[issues/2-2](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F2-1...issues%2F2-2)
####チェック処理１
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html
├── robots.txt
├── scripts
│   ├── app.js
│   ├── controllers
│   │   ├── btns.js
│   │   ├── main.js
│   │   ├── main2.js
│   │   ├── myitems.js
│   │   ├── show.js
│   │   └── todoForm.js           # <- 変更
│   ├── directive
│   │   ├── element.js
│   │   └── template
│   │       ├── btns.html
│   │       ├── myfooter.html
│   │       ├── myitems.html
│   │       ├── mymenu.html
│   │       └── todoForm.html     # <- 変更
│   └── service
│       ├── constant.js
│       └── utill.js
├── styles
│   └── main.css
└── views
    ├── main.html
    ├── main2.html
    └── show.html
```
#####追加される機能
 + validationの実装

---
##[issues/2-3](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F2-2...issues%2F2-3)
####チェック処理２
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html                 # <- 変更
├── robots.txt
├── scripts
│   ├── app.js                 # <- 変更
│   ├── controllers
│   │   ├── btns.js
│   │   ├── main.js
│   │   ├── main2.js
│   │   ├── myitems.js
│   │   ├── show.js
│   │   └── todoForm.js        # <- 変更
│   ├── directive
│   │   ├── element.js
│   │   ├── template
│   │   │   ├── btns.html
│   │   │   ├── myfooter.html
│   │   │   ├── myitems.html
│   │   │   ├── mymenu.html
│   │   │   └── todoForm.html  # <- 変更
│   │   └── validate.js        # <- 新規追加
│   └── service
│       ├── constant.js
│       └── utill.js
├── styles
│   └── main.css
└── views
    ├── main.html
    ├── main2.html
    └── show.html
```
#####追加される機能
 + custom validationの実装

---
##[issues/2-4](https://github.com/MSakamaki/angularJS-handson-21cafe/compare/issues%2F2-3...issues%2F2-4)
#### 更新機能実装
以下のファイルを追加/編集します。  
```sh
app/
├── 404.html
├── favicon.ico
├── index.html
├── robots.txt
├── scripts
│   ├── app.js
│   ├── controllers
│   │   ├── btns.js
│   │   ├── main.js
│   │   ├── main2.js
│   │   ├── myitems.js
│   │   ├── show.js
│   │   └── todoForm.js         # <- 変更
│   ├── directive
│   │   ├── element.js
│   │   ├── template
│   │   │   ├── btns.html
│   │   │   ├── myfooter.html
│   │   │   ├── myitems.html
│   │   │   ├── mymenu.html
│   │   │   └── todoForm.html
│   │   └── validate.js
│   └── service
│       ├── constant.js
│       └── utill.js
├── styles
│   └── main.css
└── views
    ├── main.html
    ├── main2.html
    └── show.html
```
#####追加される機能
 + $waitchでのアップデート機能を実装

