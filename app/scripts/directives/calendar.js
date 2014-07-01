'use strict';

angular.module('fridagarApp')
  .directive('calendar', function ($rootScope) {
    return {
      restrict: 'A',
      scope: {
        events: '='
      },
      link: function postLink(scope, element) {
        var _calendar,
            _template =
              '<div class="controls row"> \
                <div class="clndr-previous-button col-md-2 col-xs-2"><span class="glyphicon glyphicon-chevron-left"</span></div> \
                <div class="month col-md-8 col-xs-8"><%= month %></div> \
                <div class="clndr-next-button col-md-2 col-xs-2"><span class="glyphicon glyphicon-chevron-right"</span></div> \
               </div> \
               <div class="clndr-grid"> \
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
          events: scope.events,
          dateParameter: 'holidayDate',
          forceSixRows: true,
          //
          // click events
          //
          clickEvents: {
            onMonthChange: function (month) {
              $rootScope.$emit('click:monthchange', month);
            }
          }
        });
      }
    };
  });
