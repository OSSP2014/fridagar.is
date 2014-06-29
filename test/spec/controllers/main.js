'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fridagarApp'));

  var initController,
      scope,
      loadingservice;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    initController = function () {
      return $controller('MainCtrl', {
        $scope: scope,
        holidays: { result: 1 }
      });
    };
    loadingservice = $injector.get('loadingservice');
  }));

  describe('Initialization', function () {
    beforeEach(function () {
      spyOn(loadingservice, 'releaseUI');
      initController();
    });
    it('should have a \'holidays\' object', function () {
      expect(scope.holidays).toBeDefined();
    });
    it('should take the value of the \'result\' object', function () {
      expect(scope.holidays).toBe(1);
    });
    it('should relase the UI from loading', function () {
      expect(loadingservice.releaseUI).toHaveBeenCalled();
    });
  });
});
