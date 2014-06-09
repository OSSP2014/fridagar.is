'use strict';

angular.module('fridagarApp')
  .service('Holidayservice', function Holidayservice(ENV, $datafetcher) {
    return {
      //
      // API communication
      //

      /**
       * Retrieves all holidays for the given year. If the 'from' parameter is not given, the default
       * value is the current year.
       * param: from - the year the result should cover from
       * param: to - the year the result should cover to
       * TODO: detect language
       */
      getHolidays: function (from, to) {
        var url = ENV.api + 'holidays/isl/';
        if (!angular.isDefined(from)) {
          var year = moment().year();
          url += year + '/' + year;
        } else {
          url += from + '/' + to;
        }
        return $datafetcher.get(url);
      }
    };
  });
