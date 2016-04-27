/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("BountyShopApp")
        .factory("LookupService", LookupService);

    function LookupService($http)
    {

        var service = {
            getItemIdByName: getItemIdByName
        };

        return service;


        function getItemIdByName(item)
        {
            console.log(item);
            //return $http.jsonp("http://www.omdbapi.com/?s=home&callback=JSON_CALLBACK");
            return $http.get("http://www.supermarketapi.com/api.asmx/SearchByProductName?APIKEY=0d5bc661c9&ItemName=lays");
        }
    }
})();