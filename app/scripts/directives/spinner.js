'use strict';

angular.module('fridagarApp')
  .directive('spinner', function () {
    return {
      templateUrl: 'views/spinner.html',
      restrict: 'A',
      replace: true,
      link: function postLink() {}
    };
  });
