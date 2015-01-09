/**
 * Created by Georgi on 1/9/2015.
 */
app.factory('userData',['$resource','baseServiceUrl','authentication', function ($resource,baseServiceUrl,authentication) {
    //var resource= $resource(baseServiceUrl, paramDefaults,actions);
    function registerUser(user){
       return $resource(baseServiceUrl+ 'user/register')
        .save(user)
           .$promise
           .then(function (data) {
            authentication.saveUser(data);
           console.log( authentication.getHeaders());
           });
    }
    function loginUser(user){
        var resource =$resource(baseServiceUrl+ 'user/login')
            .save(user);

        resource.$promise
            .then(function (data) {
                authentication.saveUser(data);
            });
        return resource;
    }
    function logoutUser(user){
        return $resource(baseServiceUrl+ 'user/login')
            .save(user)
            .$promise
            .then(function (data) {
                authentication.removeUser();
                console.log( authentication.getHeaders());
            });
    }
    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);