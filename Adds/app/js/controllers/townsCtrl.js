/**
 * Created by Georgi on 1/9/2015.
 */
app.controller('TownsCtrl',['$scope','$rootScope','townsData','filter', function ($scope,$rootScope,townsData,filter) {

    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns=data;
        });
    $scope.townClicked = function townClicked(town) {
        filter.filterByTown(town);
        $rootScope.$broadcast('townClicked',town);
    }
}]);