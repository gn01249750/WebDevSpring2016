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
            getItemIdByName: getItemIdByName,
            getItemsById: getItemsById
        };

        return service;


        function getItemIdByName(item)
        {
            return $http.get("http://www.SupermarketAPI.com/api.asmx/SearchByProductName?APIKEY=0d5bc661c9&ItemName="+item);
        }

        function getItemsById(id)
        {
            return $http.get("http://www.SupermarketAPI.com/api.asmx/COMMERCIAL_SearchByItemID?APIKEY=0d5bc661c9&ItemId="+id);
        }
    }
})();