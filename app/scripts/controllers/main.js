'use strict';

angular.module('fridagarApp')
  .controller('MainCtrl', function ($scope, datafetcher) {
    $scope.buttonValue = 'Yee boy';
    datafetcher.get('http://apis.is/bus/realtime').then(function (data) {
      console.log(data);
    }, function (reason) {
      console.log(reason);
    });
  });
