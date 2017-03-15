(function() {
    'use strict';

    angular
        .module('trailApp2')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController(ListService, $state) {
        var vm = this;
        var listApi = listApi;

        vm.init = function() {
            listApi();
        }
        vm.showAction = function(uid) {
            $state.go('main.detail', { uID: uid });
        }

        function listApi() {
            var success = function(resp) {
                vm.placesList = resp.places;
                vm.listLength = vm.placesList.length;
            }
            var error = function(err) {}
            ListService.get().$promise.then(success, error);
        }





    }
})();
