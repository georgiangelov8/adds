/**
 * Created by Georgi on 1/10/2015.
 */
app.factory('categoriesData',['$resource','baseServiceUrl', function ($resource,baseServiceUrl) {
    var resource= $resource(baseServiceUrl+'categories');
    function getCategories(){
        return resource.query();
    }
    return {
        getCategories: getCategories
    }
}]);