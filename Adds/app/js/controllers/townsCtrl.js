/**
 * Created by Georgi on 1/9/2015.
 */
app.controller('TownsCtrl',['$scope','townsData', function ($scope,townsData) {

    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns=data;
        });
}]);