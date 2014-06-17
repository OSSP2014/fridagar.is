'use strict';

angular.module('fridagarApp')
  .controller('MainCtrl', function ($scope, Holidayservice) {
    $scope.holidays = {};
    Holidayservice.getHolidays().then(function (holidays) {
      $scope.holidays = holidays;
    });
  });
