'use strict';

angular.module('fridagarApp')
  .directive('calendar', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log(attrs);
        var template =
          '<div class="clndr-controls"> \
            <div class="clndr-previous-button">&lsaquo;</div> \
            <div class="month"><%= month %></div> \
            <div class="clndr-next-button">&rsaquo;</div> \
          </div> \
          <div class="clndr-grid"> \
          <div class="days-of-the-week"> \
            <% _.each(daysOfTheWeek, function(day) { %> \
              <div class="header-day"><%= day %></div> \
            <% }); %> \
            <div class="days"> \
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
