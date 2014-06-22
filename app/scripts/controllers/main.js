'use strict';

angular.module('fridagarApp')
  .controller('MainCtrl', function ($scope, holidays, holidayservice) {
    //
    // scope variables
    //
    var _today = moment().format('YYYY-MM-DD');
    $scope.holidays = holidays.result;
    $scope.daysToNextHoliday = holidayservice.daysToNextHoliday(_today, $scope.holidays);
    $scope.holidaysInCurrentMonth = holidayservice.countHolidaysInMonth(_today, $scope.holidays);
  });
