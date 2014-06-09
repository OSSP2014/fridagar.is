'use strict';

angular.module('fridagarApp')
  .controller('MainCtrl', function ($scope, Holidayservice) {
    $scope.buttonValue = 'Yee boy';
    Holidayservice.getHolidays().then(function (holidays) {
      console.log(holidays);
    });
  });
