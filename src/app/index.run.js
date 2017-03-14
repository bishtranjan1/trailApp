(function() {
  'use strict';

  angular
    .module('trailApp2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
