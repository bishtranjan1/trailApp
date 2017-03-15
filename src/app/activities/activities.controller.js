(function() {
    'use strict';

    angular
        .module('trailApp2')
        .controller('ActivitiesController', ActivitiesController);

    /** @ngInject */
    function ActivitiesController(ListService, $state) {
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
                vm.activitiesList = _.reduce(vm.placesList, function(memo, show) {
                    return memo.concat(show.activities);
                }, []);
               vm.countryList= _.pluck(vm.placesList, "country");



            }
            var error = function(err) {
            }
            ListService.get().$promise.then(success, error);
        }





    }
})();
