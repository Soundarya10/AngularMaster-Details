(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('tabCtrl', tabCtrl);

    function tabCtrl($scope, $http) {
        $http({
                method: "GET",
                url: "http://localhost:3000/data",
            })
            .then(function mySuccess(response) {
                // console.log(response.data);
                $scope.myTableData = response.data;
                // console.log($scope.myTableData);
                $scope.colHeaders = Object.keys($scope.myTableData[0])
            }, function myError(response) {
                $scope.names = response.statusText;
                console.log(response.statusText);
            });

            $scope.selectedRow = null;

        $scope.openDetails = function(x) {
            $scope.selectedRow = x;
            $scope.fname = x.Fname;
            $scope.lname = x.Lname;
            $scope.age = x.Age;
}

     $scope.openDetails1 = function(x) {
            $scope.selectedRow = x;
            console.log(x);
            $scope.fname = x.Fname;
            $scope.lname = x.Lname;
            $scope.age = x.Age;
}


        
    }

})();