(function() {
    'use strict';

    angular
        .module('trailApp2')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
        .state('main', {
             url: '',
             templateUrl: 'app/main/main.html',
             controller: 'MainController',
             controllerAs: 'main',
             abstract:true
         })
            .state('main.list', {
                url: '/list',
                templateUrl: 'app/list/list.html',
                controller: 'ListController',
                controllerAs: 'List'
            }).state('main.activities', {
                url: '/activities',
                templateUrl: 'app/activities/activities.html',
                controller: 'ActivitiesController',
                controllerAs: 'Activities'
            })
            .state('main.detail', {
                url: '/detail/:uID',
                templateUrl: 'app/detail/detail.html',
                controller: 'DetailController',
                controllerAs: 'Detail'
            });

        $urlRouterProvider.otherwise('/list');
    }

})();
