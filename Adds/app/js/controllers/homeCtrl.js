/**
 * Created by Georgi on 1/8/2015.
 */
app.controller('HomeCtrl',['$scope','authentication',function($scope,authentication){
$scope.pageTitle= 'Home';
    $scope.isLoggedIn = authentication.isLoggedIn();
}]);