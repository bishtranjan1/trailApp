(function() {
    'use strict';

    angular
        .module('trailApp2')
        .controller('ListController', ListController);

    /** @ngInject */
    function ListController(ListService, $state) {
        var vm = this;
        var listApi = listApi;
        vm.placesList = "";
        vm.listLength = "";
        vm.currentPage = 1;
        vm.pageLimit = 25;
        vm.pageIndex = 0;
        vm.placesListChunk = [];
        vm.pageLimitDropDownList = [25, 50, 100];

        vm.init = function() {
            listApi();



        }


        vm.showAction = function(uid) {
            $state.go('main.detail', { uID: uid });
        }
        vm.pageLimitListChange = function(limit) {
            vm.currentPage = 1;
            vm.pageIndex = 0;
            vm.pageLimit = parseInt(limit);
            generate();
        };
        vm.initActivityList = function() {
            vm.pageIndex = vm.currentPage-1;
            generate();
        }

        function generate() {

            var start = vm.pageIndex * vm.pageLimit;
            var end = start + vm.pageLimit;
            vm.placesListChunk=[];
            vm.placesListChunk = vm.placesList.slice(start, end);
        }

        function listApi() {
            var success = function(resp) {
                vm.placesList = resp.places;
                vm.listLength = vm.placesList.length;
                generate();
            }
            var error = function(err) {}
            ListService.get().$promise.then(success, error);
        }
    }
})();
