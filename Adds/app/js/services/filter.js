/**
 * Created by Georgi on 1/10/2015.
 */
app.factory('filter',function () {
    var params ={};
    function filterByCategory(category){
        params.categoryId = category.id;

    }
    function filterByTown(town){
        params.townId = town.id;
    }
    function getParams(){
        return params;
    }
    function setPageParams(pageParams){
         params.currentPage = pageParams;
    }
    function myAddsClicked(params){
        params.myMenuId = params;
    }
    return{
        filterByCategory: filterByCategory,
        filterByTown: filterByTown,
        getParams: getParams,
        setPageParams: setPageParams,
        myAddsClicked: myAddsClicked
    }
});