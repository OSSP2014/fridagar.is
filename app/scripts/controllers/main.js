'use strict';

angular.module('fridagarApp')
  .controller('MainCtrl', function ($rootScope, $scope, holidays, holidayservice) {
    //
    // scope variables
    //
    var _today = moment().format('YYYY-MM-DD');
    $scope.holidays = holidays.result;
    $scope.daysToNextHoliday = holidayservice.daysToNextHoliday(_today, $scope.holidays);
    $scope.holidaysInCurrentMonth = holidayservice.holidaysInMonth(_today, $scope.holidays);

    //
    // register to events
    //
    $rootScope.$on('click:next', function (event, month) {
      $scope.$apply(function () {
        $scope.holidaysInCurrentMonth = holidayservice.holidaysInMonth(month, $scope.holidays);
      });
    });
    $rootScope.$on('click:prev', function (event, month) {
      $scope.$apply(function () {
        $scope.holidaysInCurrentMonth = holidayservice.holidaysInMonth(month, $scope.holidays);
      });
    });
  });
