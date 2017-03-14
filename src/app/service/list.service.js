(function() {
    'use strict';
    angular
        .module('trailApp2')
        .factory('ListService', ListService);

    /** @ngInject */
    function ListService($resource) {
        /*
         * value of :controller could be one of search, snapshot, summary or total-sum
         * */

        var _path = 'https://trailapi-trailapi.p.mashape.com';
        return $resource(_path, {}, {
            get: {
                method: 'get',
                cache : true,
                headers: {
                    'X-Mashape-Key': 'nmSNaF8fv1mshBaP37h1uTtXmJkFp1A3nwUjsnFHIVLPDE3E4C',
                    'Accept': 'text / plain'
                }
            }
        });
    }
})();
