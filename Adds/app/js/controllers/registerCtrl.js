/**
 * Created by Georgi on 1/8/2015.
 */
app.controller('RegisterCtrl',['$scope','townsData', 'userData', function($scope,townsData,userData){
   townsData.getTowns()
       .$promise
       .then(function (data) {
           $scope.towns = data;
         });

    $scope.register = function (user) {

        userData.register(user);
    }
}]);