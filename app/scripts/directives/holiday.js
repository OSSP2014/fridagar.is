'use strict';

angular.module('fridagarApp')
  .directive('holiday', function () {
    return {
      templateUrl: 'views/holiday.html',
      restrict: 'E',
      replace: true,
      scope: {
        holiday: '=data'
      },
      controller: function ($scope) {
        var now = moment();
        var holiday = moment($scope.holiday.holidayDate);
        if (holiday.isBefore(now)) {
          $scope.holiday.passed = true;
        } else {
          $scope.holiday.isAfter = holiday.from(now);
        }
      }
    };
  });
