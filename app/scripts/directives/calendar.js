'use strict';

angular.module('fridagarApp')
  .directive('calendar', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log(attrs);
        var template =
          '<div class="clndr-grid"> \
            <div class="days-of-the-week clearfix"> \
              <% _.each(daysOfTheWeek, function(day) { %> \
                <div class="header-day"><%= day %></div> \
              <% }); %> \
              <div class="days clearfix"> \
                <% _.each(days, function(day) { %> \
                  <div class="<%= day.classes %>"><%= day.day %></div> \
                <% }); %> \
              </div> \
            </div> \
          </div>';
        $(element).clndr({
          template: template
        });
      }
    };
  });
