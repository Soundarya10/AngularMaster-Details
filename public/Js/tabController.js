(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('tabCtrl', tabCtrl);

    function tabCtrl($scope, $http) {
        //Displaying Data in Table
        let a = function() { 
            $http({
                method: "GET",
                url: "http://localhost:3002/data",
            })
            .then(function mySuccess(response) {
                $scope.myTableData = response.data; 
                $scope.colHeaders = Object.keys($scope.myTableData[0])
            }, function myError(response) {
                $scope.names = response.statusText;
                console.log(response.statusText);
            });
        }

        a();

        $('#myModal').on('shown.bs.modal', function() {
            $('#myInput').focus()
        })
        $('#myModalEdit').on('shown.bs.modal', function() {
            $('#myInput').focus()
        })

        $scope.selectedRow = null;

        //Display Details in the Employee Details below
        $scope.openDetails = function(index) {
            $scope.selectedRow = index;
            $scope.fname = $scope.myTableData[index].Name;
            $scope.desig = $scope.myTableData[index].Designation;
            $scope.company = $scope.myTableData[index].Company;
        }

        //Highlight the selected rows
        $scope.setClickedRow = function(index) {
            $scope.selectedRow = index;
        }
        
        //moves to previous row on button click
        $scope.moveUp = function(num) {
            if (num > 0) {
             var tmp = $scope.myTableData[num - 1];
                    $scope.fname = tmp.Name;
                    $scope.desig = tmp.Designation;
                    $scope.company = tmp.Company;
              $scope.selectedRow--;
            }
        }
        //moves to next row on button click
        $scope.moveDown = function(num) {
            if (num < $scope.myTableData.length - 1) {
              var tmp = $scope.myTableData[num + 1];
                    $scope.fname = tmp.Name;
                    $scope.desig = tmp.Designation;
                    $scope.company = tmp.Company;
              $scope.selectedRow++;
            }
        }

        //adds a new row and posts in the database
        $scope.addRow = function(){     
            var data = { 'Name':$scope.name, 'Designation': $scope.designation,
             'Company':$scope.Company1 }
            $scope.name='';
            $scope.designation='';
            $scope.Company1='';
            $http({
                method: "POST",
                url: "http://localhost:3002/",
                data: data,
            })
            .then(function mySuccess(response) {
                $('#myModal').modal('hide');
                a();
            }, function myError(response) {
                $scope.names = response.statusText;
                console.log(response.statusText);
            });

        };

        $scope.deleteIt=function(index){
            var id = index;
            $http({
                method: "DELETE",
                url: "http://localhost:3002/"+id,
            })
            .then(function mySuccess(response) {
                a();
                // $scope.myTableData = response.data;
            }, function myError(response) {
                $scope.names = response.statusText;
                console.log(response.statusText);
                console.log(response);
            });
        }

        $scope.editRow = function(index){  
            var id = $scope.myTableData[index].ID;
            var data = { 'Name':$scope.fname, 'Designation': $scope.desig,
             'Company':$scope.company }
            $scope.fname='';
            $scope.desig='';
            $scope.company='';
            $http({ 
                method: "PUT",
                url: "http://localhost:3002/"+id,
                data: data,
            })
            .then(function mySuccess(response) {
                $('#myModalEdit').modal('hide');
                a();
            }, function myError(response) {
                $scope.names = response.statusText;
                console.log(response.statusText);
            });

        };

    }

})();