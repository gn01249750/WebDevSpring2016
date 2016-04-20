/**
 * Created by PO on 3/9/2016.
 */
(function()
{
    angular
        .module("BountyShopApp", [])
        .controller("TreasurehuntController", TreasurehuntController);

    function TreasurehuntController($scope)
    {
        var listedItems = [
            {
                "name":"watch",
                "quantity":"1",
                "destination":["Japan", "China"],
                "price":["$50", "$80"],
                "description": "US made watch, good quality, limited edition. Shipping available to Japan and China",
                "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
            },
            {
                "name":"toys",
                "quantity":"2",
                "destination":["Japan", "China"],
                "price":["$20", "$30"],
                "description": "US made toys, safe for children. Shipping available to Japan and China",
                "image": "http://www.accesscal.org/wp-content/uploads/2015/11/kids-Toys.jpg"
            }
        ];

        $scope.listedItems = listedItems;
        $scope.gg = ["dd","ddd"];

    }
})();