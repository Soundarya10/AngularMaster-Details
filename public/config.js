(function() {
    'use strict';
    var app = angular.module("myApp");

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        
        when('/', {
            templateUrl: './views/tabView.html',
            controller: 'tabCtrl',
        }).
        otherwise({
            redirectTo: '/'
        });

    }]);

})();