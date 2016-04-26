/**
 * Created by PO on 3/9/2016.
 */

(function(){
    angular
        .module("BountyShopApp")
        .controller("TreasureController", TreasureController);


    function TreasureController($scope, TreasureService, $routeParams, $rootScope, UserService)
    {

        getCurrentTreasure();
        $scope.sendMessageToSeller = sendMessageToSeller

        function getCurrentSeller()
        {
            var seller = $scope.sellerName;
            if(seller)
            {
                UserService
                    .getUserByUsername(seller)
                    .then(function (response){
                        $scope.seller = response.data;
                    })
            }
        }

        function getCurrentTreasure()
        {
            var treasureId = $routeParams.treasureId;
            if(treasureId)
            {
                TreasureService
                    .getTreasureById(treasureId)
                    .then(function(response){
                        if(response.data)
                        {
                            $scope.curTreasure = response.data;
                            $scope.sellerName = response.data.seller;
                            getCurrentSeller();
                        }
                    })
            }
        }

        function sendMessageToSeller(message)
        {
            var tempInt = $scope.curTreasure.interester;
            tempInt.push($rootScope.currentUser._id);
            var tempMes = $scope.curTreasure.message;
            tempMes.push(message);
            var temp =
            {
                name: $scope.curTreasure.name,
                quantity: $scope.curTreasure.quantity,
                destination: $scope.curTreasure.destination,
                price: $scope.curTreasure.price,
                description: $scope.curTreasure.description,
                image: $scope.curTreasure.image,
                seller: $scope.curTreasure.seller,
                status: $scope.curTreasure.status,
                interester: tempInt,
                message: tempMes
            }
            TreasureService.updateTreasureById($scope.curTreasure._id, temp)
                .then(function(response){

                })

        }
        //$scope.selectedIndex = -1;
        //getCurrentTreasure();
        //
        ////$scope.treasures = TreasureService.getAllTreasures();
        //$scope.addTreasure = addTreasure;
        //$scope.deleteTreasure = deleteTreasure;
        //$scope.selectTreasure = selectTreasure;
        //$scope.updateTreasure = updateTreasure;
        //
        //function getCurrentTreasure()
        //{
        //    var treasureId = $routeParams.treasureId;
        //    if(treasureId)
        //    {
        //        TreasureService
        //            .getTreasureById(treasureId)
        //            .then(function(response){
        //                if(response.data)
        //                {
        //                    console.log(response.data);
        //                    $scope.treasures = response.data;
        //                }
        //            })
        //    }
        //}
        //
        //function updateTreasure(data)
        //{
        //    if($scope.selectedIndex != -1)
        //    {
        //        var priceArr = data.price.split(",");
        //        var destinationArr = data.destination.split(",");
        //        $scope.treasures[$scope.selectedIndex] =
        //        {
        //            "name":data.name,
        //            "quantity":data.quantity,
        //            "destination":destinationArr,
        //            "price":priceArr,
        //            "description": $scope.treasurecomment,
        //            "image": data.image
        //        }
        //        $scope.selectedIndex = -1;
        //
        //    }
        //}
        //
        //function selectTreasure(index)
        //{
        //    $scope.selectedIndex = index;
        //    var data = $scope.treasures[index];
        //    var temp =
        //    {
        //        "_id" : data._id,
        //        "name":data.name,
        //        "quantity":data.quantity,
        //        "destination":data.destination.toString(),
        //        "price":data.price.toString(),
        //        "description": data.description,
        //        "image": data.image
        //    };
        //    $scope.treasure = temp;
        //    $scope.treasurecomment = temp.description;
        //}
        //
        //function deleteTreasure(index)
        //{
        //    var id = $scope.treasures[index]._id;
        //    TreasureService.deleteTreasureById(id);
        //}
        //
        //function addTreasure(data)
        //{
        //    var priceArr = data.price.split(",");
        //    var destinationArr = data.destination.split(",");
        //    var newm =
        //    {
        //        "_id" : data._id,
        //        "name":data.name,
        //        "quantity":data.quantity,
        //        "destination":destinationArr,
        //        "price":priceArr,
        //        "description": $scope.treasurecomment,
        //        "image": data.image
        //    };
        //    //$scope.treasures.push(newm);
        //    TreasureService.addTreasure(newm);
        //}


    }

})();
