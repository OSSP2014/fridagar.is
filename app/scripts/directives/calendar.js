'use strict';

angular.module('fridagarApp')
  .directive('calendar', function () {
    return {
      restrict: 'A',
      scope: {
        events: '='
      },
      link: function postLink(scope, element) {
        var _calendar,
            _template =
              '<div class="clndr-grid"> \
                <div class="days-of-the-week clearfix"> \
                  <% _.each(daysOfTheWeek, function(day) { %> \
                    <div class="header-day"><%= day %></div> \
                  <% }); %> \
                  <div class="days clearfix"> \
                    <% _.each(days, function(day) { %> \
                      <div class="<%= day.classes %>" id="<%= day.id %>"><span class="day-number"><%= day.day %></span></div> \
                    <% }); %> \
                  </div> \
                </div> \
              </div>';
        // finally, init the calendar
        _calendar = $(element).clndr({
          template: _template,
          events: [ {date: '2014-06-19'} ]
        });

        scope.$watch('events', function (events) {
          if (events.length) {
            console.log(events);
            _calendar.setEvents(events);
          }
        }, true);
      }
    };
  });
