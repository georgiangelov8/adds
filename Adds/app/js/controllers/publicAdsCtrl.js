/**
 * Created by Georgi on 1/9/2015.
 */
app.controller('PublicAdsCtrl',['$scope','adsData', function ($scope,adsData) {
    $scope.ready = false;
    adsData.getPublicAds()
        .$promise
        .then(function (data) {
            $scope.adsData=data;
            $scope.ready = true;
        })

}]);