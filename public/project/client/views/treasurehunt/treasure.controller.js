/**
 * Created by PO on 3/9/2016.
 */
(function()
{
    angular
        .module("BountyShopApp", [])
        .controller("TreasureController", TreasureController);

    function TreasureController($scope)
    {
        $scope.selectedIndex = -1;
        var treasures = [
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

        $scope.treasures = treasures;
        $scope.addTreasure = addTreasure;
        $scope.deleteTreasure = deleteTreasure;
        $scope.selectTreasure = selectTreasure;
        $scope.updateTreasure = updateTreasure;

        function updateTreasure(data)
        {
            if($scope.selectedIndex != -1)
            {
                var priceArr = data.price.split(",");
                var destinationArr = data.destination.split(",");
                treasures[$scope.selectedIndex] =
                {
                    "name":data.name,
                    "quantity":data.quantity,
                    "destination":destinationArr,
                    "price":priceArr,
                    "description": $scope.treasurecomment,
                    "image": data.image
                }
                $scope.selectedIndex = -1;

            }
        }

        function selectTreasure(index)
        {
            $scope.selectedIndex = index;
            var data = treasures[index];
            var temp =
            {
                "name":data.name,
                "quantity":data.quantity,
                "destination":data.destination.toString(),
                "price":data.price.toString(),
                "description": data.description,
                "image": data.image
            };
            $scope.treasure = temp;
            $scope.treasurecomment = temp.description;
        }

        function deleteTreasure(index)
        {
            treasures.splice(index,1);
        }

        function addTreasure(data)
        {
            var priceArr = data.price.split(",");
            var destinationArr = data.destination.split(",");
            var newm =
            {
                "name":data.name,
                "quantity":data.quantity,
                "destination":destinationArr,
                "price":priceArr,
                "description": $scope.treasurecomment,
                "image": data.image
            };
            treasures.push(newm);
        }


    }
})();
