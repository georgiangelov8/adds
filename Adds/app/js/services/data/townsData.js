/**
 * Created by Georgi on 1/8/2015.
 */
app.factory('townsData',['$resource','baseServiceUrl', function ($resource,baseServiceUrl) {
    var resource= $resource(baseServiceUrl+'towns');
    function getAllTowns(){
        return resource.query();
    }
    return {
        getTowns: getAllTowns
    }
}]);