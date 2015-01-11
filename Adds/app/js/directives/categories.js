/**
 * Created by Georgi on 1/8/2015.
 */
app.directive('categories',function (){

    return {

        controller:'CategoriesCtrl',
        restrict: 'E',
        templateUrl: 'templates/public/categories.html',
        replace: true

    };

});