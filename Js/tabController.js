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

        $scope.openDetails = function(index) {
            $scope.selectedRow = index;
            $scope.fname = $scope.myTableData[index].Fname;
            $scope.lname = $scope.myTableData[index].Lname;
            $scope.age = $scope.myTableData[index].Age;
}

 $scope.setClickedRow = function(index) {
    $scope.selectedRow = index;
  }
  
  $scope.moveUp = function(num) {
    if (num > 0) {
     var tmp = $scope.myTableData[num - 1];
            $scope.fname = tmp.Fname;
            $scope.lname = tmp.Lname;
            $scope.age = tmp.Age;
      $scope.selectedRow--;
    }
  }
  $scope.moveDown = function(num) {
    if (num < $scope.myTableData.length - 1) {
      var tmp = $scope.myTableData[num + 1];
            $scope.fname = tmp.Fname;
            $scope.lname = tmp.Lname;
            $scope.age = tmp.Age;
      $scope.selectedRow++;
    }
  }

  $scope.makeItEditable=function(index){
    if($scope.currentEditableIndex!=null)
    $scope.myTableData[$scope.currentEditableIndex].editable=false;
    $scope.myTableData[index].editable=true;
    $scope.currentEditableIndex=index;
    console.log($scope.myTableData[index].editable);

    }

     $scope.deleteIt=function(index){
    if($scope.currentEditableIndex!=null)
    $scope.myTableData[$scope.currentEditableIndex].editable=false;
    $scope.myTableData.splice(index,1);
    $scope.currentEditableIndex=null;
    console.log($scope.myTableData);

    }

    $scope.addRow = function(){     
    $scope.myTableData.push({ 'Fname':$scope.firstname, 'Lname': $scope.lastname,
     'Age':$scope.PersonAge1 });
    $scope.firstname='';
    $scope.lastname='';
    $scope.PersonAge1='';
};

$scope.editRow = function(index){  
    $scope.myTableData.push({ 'Fname':$scope.fname, 'Lname': $scope.lname,
     'Age':$scope.age });
    $scope.fname='';
    $scope.lname='';
    $scope.age='';
    $scope.deleteIt(index);
};

    }

})();