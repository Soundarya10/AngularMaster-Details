(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('tableCtrl', tableCtrl);

    function tableCtrl($scope, $http) {

        $http({
                method: "GET",
                url: "http://localhost:3000/data",
            })
            .then(function mySuccess(response) {
                $scope.gridOptions.data = response.data;
                console.log($scope.gridOptions.data);
            }, function myError(response) {
                $scope.names = response.statusText;
                console.log(response.statusText);
            });

        $scope.gridOptions = {
            enableSorting: true,
            enableGridMenu: false,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            paginationPageSizes: [5, 10, 20, 30, 40],
            paginationPageSize: 5,
            exporterMenuPdf: false,
            enableFiltering: false,
            treeRowHeaderAlwaysVisible: false,
            multiSelect: false,
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
                $scope.fname = undefined;
                $scope.lname = undefined;
                $scope.age = undefined;

                gridApi.selection.on.rowSelectionChanged($scope, function(row) {
                    var msg = 'row selected ' + row.isSelected;
                    $scope.fname = row.entity.Fname;
                    $scope.lname = row.entity.Lname;
                    $scope.age = row.entity.Age;

                });
            }
        };
    }

})();