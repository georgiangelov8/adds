/**
 * Created by Georgi on 1/9/2015.
 */
app.controller('PublicAdsCtrl',['$scope','adsData','filter', function ($scope,adsData,filter) {
       $scope.ready = false;

    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            });
    }
    loadPublicAds();
    $scope.$on('categoryClicked', function (event, category) {
        loadPublicAds(filter.getParams());
    });
    $scope.$on('townClicked', function (event, town) {
        loadPublicAds(filter.getParams());
    });
}]);