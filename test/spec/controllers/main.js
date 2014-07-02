'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fridagarApp'));

  var initController,
      scope,
      loadingservice,
      holidayservice;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    loadingservice = $injector.get('loadingservice');
    holidayservice = $injector.get('holidayservice');
    initController = function () {
      return $controller('MainCtrl', {
        $scope: scope,
      });
    };
  }));

  describe('Initialization', function () {
    beforeEach(function () {
      initController();
    });
    it('should have a \'holidays\' object', function () {
      expect(scope.holidays).toBeDefined();
    });
  });

  describe('Init flow', function () {
    beforeEach(function () {
      spyOn(holidayservice, 'getHolidays').andCallFake(function () {
        return {
          then: function (cb) {cb({result: 1});} // mocking response
        };
      });
      spyOn(loadingservice, 'blockUI');
      spyOn(loadingservice, 'releaseUI');
    });

    it('should talk to the server when loaded and get holidays correctly', function () {
      initController();
      expect(loadingservice.blockUI).toHaveBeenCalled();
      expect(holidayservice.getHolidays).toHaveBeenCalled();
      expect(loadingservice.releaseUI).toHaveBeenCalled();
      expect(scope.holidays).toBe(1);
    });
  });
});
