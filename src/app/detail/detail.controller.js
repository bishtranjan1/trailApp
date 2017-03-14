(function() {
    'use strict';

    angular
        .module('trailApp2')
        .controller('DetailController', DetailController);

    /** @ngInject */
    function DetailController(ListService, $stateParams) {
        var google=window.google;
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
                console.log("success",resp)
                var placesList = resp.places;
                console.log(placesList)
                 var param = parseInt($stateParams.uID);
                 vm.activity = _.findWhere(placesList, { unique_id: param });
                 console.log(vm.activity)
                 vm.loc=[];
                 vm.loc.push(vm.activity.lat)
                 vm.loc.push(vm.activity.lon)
                
            
            }
            var error = function(err) {
                console.log(err)
            }
            console.log("api")
            ListService.get().$promise.then(success, error);
        }
    }
})();
