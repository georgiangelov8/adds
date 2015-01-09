/**
 * Created by Georgi on 1/8/2015.
 */
app.controller('LoginCtrl',['$scope','$location','userData',function($scope,$location,userData){
    $scope.login = function (user) {
        userData.login(user)
            .$promise
            .then(function (data) {
                $location.path('/');
            });
    }
}]);