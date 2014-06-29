'use strict';

describe('Service: loadingservice', function () {

  // load the service's module
  beforeEach(module('fridagarApp'));

  // instantiate service
  var loadingservice,
      rootScope;
  beforeEach(inject(function (_loadingservice_, _$rootScope_) {
    loadingservice = _loadingservice_;
    rootScope = _$rootScope_;
  }));

  describe('Initialization', function () {
    it('should have a \'blockUILoading\' function', function () {
      expect(loadingservice.blockUI).toBeDefined();
    });
    it('should have a \'releaseUILoading\' function', function () {
      expect(loadingservice.releaseUI).toBeDefined();
    });
  });

  describe('Loading logic', function () {
    it('should set rootscopes \'loading\' as true when some loading is happening, false when it has stopped', function () {
      loadingservice.blockUI();
      expect(rootScope.loading).toBe(true);
      loadingservice.releaseUI();
      expect(rootScope.loading).toBe(false);
    });
  });
});
