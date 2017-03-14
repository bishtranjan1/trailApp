(function() {
    'use strict';

    angular
        .module('trailApp2')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController(ListService, $state) {
        var vm = this;
        var listApi = listApi;
        console.log("controller")

        vm.init = function() {
            console.log("init")
            listApi();
        }
        vm.showAction = function(uid) {
            $state.go('main.detail', { uID: uid });
        }

        function listApi() {
            var success = function(resp) {
                console.log("success")
                vm.placesList = resp.places;
                vm.listLength = vm.placesList.length;
            }
            var error = function(err) {
                console.log(err)
            }
            console.log("api")
            ListService.get().$promise.then(success, error);
        }





    }
})();
