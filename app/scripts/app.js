'use strict';

angular
  .module('fridagarApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'angular-datafetcher',
    'endpoint-config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          holidays: ['holidayservice', 'loadingservice', function (holidayservice, loadingservice) {
            loadingservice.blockUI();
            return holidayservice.getHolidays();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($window) {
    $window.moment.lang('is');
  });
