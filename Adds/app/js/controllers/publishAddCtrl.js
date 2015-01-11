/**
 * Created by Georgi on 1/10/2015.
 */
app.controller('PublishAddCtrl',['$scope','$location','townsData','adsData','categoriesData','authentication', function($scope,$location,townsData,adsData,categoriesData,authentication){

    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });
    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        });

    $scope.publishAd = function (ad) {
        ad.Authorization= authentication.getHeaders().Authorization;
        adsData.add(ad)
            .$promise
            .then(function (data) {
                $location.path('/');
            })
    }
}]);