/**
 * Created by Georgi on 1/10/2015.
 */
app.directive('publishAd',function (){

    return {

        controller:'PublishAddCtrl',
        restrict: 'E',
        templateUrl: 'templates/publishAdd.html',
        replace: true

    };

});