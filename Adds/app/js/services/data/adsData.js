/**
 * Created by Georgi on 1/9/2015.
 */
app.factory('adsData',['$resource','baseServiceUrl','authentication',function ($resource,baseServiceUrl,authentication) {
    var resource= $resource(baseServiceUrl+'user/ads:adId',{adId: '@id'}, {
        update: {method : 'PUT'},
        add: {method: 'POST',headers: authentication.getHeaders()}
    });
    function getPublicAds(params){
        var resourceAdd= $resource(baseServiceUrl+'ads')
        return resourceAdd.get(params);
    }
    function editAd(adId,ad){
        return resource.update({id:adId},ad);
    }
    function getAdById(adId){
        return resource.get({id:adId});
    }
    function addAd(ad){

        return resource.add(ad);
    }
    function deleteAd(adId){
        return resource.delete({id:adId});
    }
    return {
        getPublicAds: getPublicAds,
        edit: editAd,
        getAdById: getAdById,
        add: addAd,
        delete: deleteAd
    }
}]);