'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fridagarApp'));

  var initController,
      scope,
      Holidayservice;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    initController = function () {
      return $controller('MainCtrl', {
        $scope: scope
      });
    };
    Holidayservice = $injector.get('Holidayservice');
  }));

  describe('Initialization', function () {
    var holidays = [{holidayDate: '01-01-2001', holidayName: 'Nýársdagur'}];
    beforeEach(function () {
      spyOn(Holidayservice, 'getHolidays').andCallFake(function () {
        return {
          then: function (cb) {
            cb(holidays);
          } // mocking promise
        };
      });
      initController();
    });
    it('should have a \'holidays\' object', function () {
      expect(scope.holidays).toBeDefined();
    });
    it('should get the holidays and store it as an object on the scope', function () {
      expect(Holidayservice.getHolidays).toHaveBeenCalled();
      expect(scope.holidays).toEqual(holidays);
    });
  });
});
