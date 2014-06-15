'use strict';

angular.module('fridagarApp')
  .directive('calendar', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the calendar directive');
      }
    };
  });
