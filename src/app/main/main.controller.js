(function() {
  'use strict';

  angular
    .module('trailApp2')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {}
})();
