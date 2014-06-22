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
          holidays: ['holidayservice', function (holidayservice) {
            return holidayservice.getHolidays();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
