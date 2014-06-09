'use strict';

describe('Service: Holidayservice', function () {

  // load the service's module
  beforeEach(module('fridagarApp'));

  // instantiate service
  var Holidayservice,
      datafetcher,
      API_URL = 'http://127.0.0.1:5000/api/';

  beforeEach(inject(function (_Holidayservice_, $injector) {
    Holidayservice = _Holidayservice_;
    datafetcher = $injector.get('$datafetcher');
  }));

  describe('Intialization', function () {
    it('should have \'getHolidays\' function', function () {
      expect(Holidayservice.getHolidays).toBeDefined();
    });
  });

  describe('Getting holidays', function () {
    var route = 'holidays/isl/';

    beforeEach(function () {
      spyOn(datafetcher, 'get');
    });

    it('should get holidays for the current year if the \'until\' date is not provided', function () {
      var year = moment().year();
      Holidayservice.getHolidays();
      expect(datafetcher.get).toHaveBeenCalled();
      expect(datafetcher.get).toHaveBeenCalledWith(API_URL + route + year + '/' + year);
    });

    it('should get holidays until the \'range.to\' date', function () {
      var fromYear = 2013,
          toYear = 2014;
      Holidayservice.getHolidays(fromYear, toYear);
      expect(datafetcher.get).toHaveBeenCalled();
      expect(datafetcher.get).toHaveBeenCalledWith(API_URL + route + fromYear + '/' + toYear);
    });
  });

});
