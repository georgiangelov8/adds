/**
 * Created by Georgi on 1/10/2015.
 */
app.directive('myAdds',function (){

    return {

        controller:'MyAddsCtrl',
        restrict: 'E',
        templateUrl: 'templates/user/myAdds.html',
        replace: true

    };

});