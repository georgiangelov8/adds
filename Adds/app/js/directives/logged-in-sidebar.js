/**
 * Created by Georgi on 1/10/2015.
 */
app.directive('loggedInSidebar',function (){

    return {

        controller:'LoggedInSidebarCtrl',
        restrict: 'E',
        templateUrl: 'templates/directives/logged-in-sidebar.html',
        replace: true

    };

});