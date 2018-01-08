(function() {
    'use strict';
    var app = angular.module("myApp");

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: './views/tableView.html',
            controller: 'tableCtrl',
        }).
        when('/tab', {
            templateUrl: './views/tabView.html',
            controller: 'tabCtrl',
        }).
        otherwise({
            redirectTo: '/'
        });

    }]);

})();