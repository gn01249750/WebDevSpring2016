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
            tempInt.push($rootScope.currentUser.username);
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
                    $scope.message = null;
                })

        }


    }

})();
