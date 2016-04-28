
(function(){
    angular
        .module("BountyShopApp")
        .controller("MissionDetailController", MissionDetailController);


    function MissionDetailController($scope, $routeParams, MissionService, $rootScope, UserService)
    {

        getCurrentTreasure();
        $scope.sendMessageToBuyer = sendMessageToBuyer;

        function getCurrentBuyer()
        {
            var buyer = $scope.buyerName;
            if(buyer)
            {
                UserService
                    .getUserByUsername(buyer)
                    .then(function (response){
                        $scope.buyer = response.data;
                    })
            }
        }

        function getCurrentTreasure()
        {
            var missionId = $routeParams.id;
            if(missionId)
            {
                MissionService
                    .getMissionById(missionId)
                    .then(function(response){
                        if(response.data)
                        {
                            $scope.curMission = response.data;
                            $scope.buyerName = response.data.buyer;
                            getCurrentBuyer();
                        }
                    })
            }
        }

        function sendMessageToBuyer(message)
        {
            var tempInt = $scope.curMission.interester;
            tempInt.push($rootScope.currentUser.username);
            var tempMes = $scope.curMission.message;
            tempMes.push(message);
            var temp =
            {
                name: $scope.curMission.name,
                quantity: $scope.curMission.quantity,
                destination: $scope.curMission.destination,
                price: $scope.curMission.price,
                description: $scope.curMission.description,
                image: $scope.curMission.image,
                buyer: $scope.curMission.seller,
                status: $scope.curMission.status,
                interester: tempInt,
                message: tempMes
            }
            MissionService.updateMissionById($scope.curMission._id, temp)
                .then(function(response){
                    console.log("here");
                    $scope.message = null;
                })

        }

    }

})();
