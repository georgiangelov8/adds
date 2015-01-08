/**
 * Created by Georgi on 1/8/2015.
 */
app.directive('leftPublicSidebar',function (){

    return {

        controller:'HomeCtrl',
        restrict: 'E',
        templateUrl: 'templates/public/left-sidebar.html',
        replace: true

    };
    
});