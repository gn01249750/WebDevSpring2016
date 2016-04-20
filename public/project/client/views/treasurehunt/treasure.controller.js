/**
 * Created by PO on 3/9/2016.
 */

(function(){
    angular
        .module("BountyShopApp")
        .controller("TreasureController", TreasureController);


    function TreasureController($scope, TreasureService)
    {
        $scope.selectedIndex = -1;


        $scope.treasures = TreasureService.getAllTreasures();
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
                $scope.treasures[$scope.selectedIndex] =
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
            var data = $scope.treasures[index];
            var temp =
            {
                "_id" : data._id,
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
            var id = $scope.treasures[index]._id;
            TreasureService.deleteTreasureById(id);
        }

        function addTreasure(data)
        {
            var priceArr = data.price.split(",");
            var destinationArr = data.destination.split(",");
            var newm =
            {
                "_id" : data._id,
                "name":data.name,
                "quantity":data.quantity,
                "destination":destinationArr,
                "price":priceArr,
                "description": $scope.treasurecomment,
                "image": data.image
            };
            //$scope.treasures.push(newm);
            TreasureService.addTreasure(newm);
        }


    }

})();
