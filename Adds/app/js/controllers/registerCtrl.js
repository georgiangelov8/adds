/**
 * Created by Georgi on 1/8/2015.
 */
app.controller('RegisterCtrl',['$scope','townsData', function($scope,townsData){
   townsData.getTowns()
       .$promise
       .then(function (data) {
           $scope.towns = data;
         });
    $scope.register = function (user) {
       console.log(user);
       // userData.register(user);
    }
}]);