'use strict';

angular.module('fridagarApp')
  .controller('MainCtrl', function ($scope, holidays) {
    //
    // scope variables
    //
    $scope.holidays = holidays;
    console.log($scope.holidays);
  });
