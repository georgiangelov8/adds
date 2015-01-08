/**
 * Created by Georgi on 1/9/2015.
 */
app.factory('userData',['$resource','baseServiceUrl', function ($resource,baseServiceUrl) {
    var resource= $resource(baseServiceUrl+'towns');
    function registerUser(user){
        return resource.query();
    }
    function loginUser(user){
        return resource.query();
    }
    function logoutUser(user){
        return resource.query();
    }
    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);