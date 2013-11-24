// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'app/vendor/ng-grid/lib/jquery-1.9.1.js',
        'app/vendor/angular/angular.js',
        'app/vendor/angular-route/angular-route.js',
        'app/vendor/ng-grid/lib/angular-resource-1.0.6.js',
        'app/vendor/ng-grid/ng-grid-2.0.7.debug.js',
        'app/vendor/angular-cookies/angular-cookies.js',
        'app/vendor/angularLocalStorage/src/angularLocalStorage.js',
        'app/vendor/angular-mocks/angular-mocks.js',
        'app/scripts/*.js',
        'app/scripts/**/*.js',
        //'test/mock/**/*.js',
        'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
