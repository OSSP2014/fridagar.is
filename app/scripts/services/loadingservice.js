'use strict';

angular.module('fridagarApp')
  .service('loadingservice', function loadingservice($rootScope) {
    var activeRequests = 0;
    return {
      blockUI: function () {
        $rootScope.loading = true;
        activeRequests += 1;
      },
      releaseUI: function () {
        activeRequests -= 1;
        if (activeRequests === 0) {
          $rootScope.loading = false;
        }
      }
    };
  });
