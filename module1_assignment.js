(function () {
    'use strict';
    
    angular.module('moduleApp',[])
    
    .controller('moduleAppController', calculateNoOfItems);
    
    calculateNoOfItems.$inject = ['$scope'];
    function calculateNoOfItems($scope) {
        $scope.lunchMenu = "";
        $scope.lunchitems = 0;
        $scope.message = "";
    
        $scope.evalItemsCount = function() {
            var items_list = $scope.lunchMenu.split(',');
            if (items_list != 0){
                $scope.lunchitems = items_list.length;
                if ($scope.lunchitems <= 3)
                 {
                    $scope.message = "Enjoy!";
                 }
                 else{
                     $scope.message = "Too Much!";
                 }
            }
            else{
                $scope.message = "Please enter data first";
            }
        }
    };
    })();