angular.module('LeagueSharpDocs.services', []).service('getService', ['$q', '$http', function($q, $http) {
    "use strict";

    var data = './assets/json/nav-data.json';

    var baseService = {
        /**
          Navigation data
          @returns navigation data
        */
        navData: function() {
            var fetchedData = [];
            var promise = $http.get(data, {
                cache: true
            }).then(function(result) {
                angular.forEach(result, function(item) {
                    fetchedData.push(item);
                });
                return fetchedData;
            });
            return promise;
        },
    };
    return baseService;
}]);
