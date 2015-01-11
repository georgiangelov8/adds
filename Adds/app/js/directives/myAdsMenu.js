/**
 * Created by Georgi on 1/10/2015.
 */
app.directive('myAdsMenu',function (){

    return {

        controller:'MyAddsCtrl',
        restrict: 'E',
        templateUrl: 'templates/user/myAdsMenu.html',
        replace: true

    };

});