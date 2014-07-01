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
        $scope.holiday.isAfter = holiday.from(now);
      }
    };
  });
