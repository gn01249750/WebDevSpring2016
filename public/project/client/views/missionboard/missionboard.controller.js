
(function(){
    angular
        .module("BountyShopApp")
        .controller("MissionBoardController", MissionBoardController);

    function MissionBoardController($scope, MissionService, $rootScope, UserService)
    {
        $scope.getAllMission = getAllMission;
        $scope.addNewMission = addNewMission;
        getAllMission();
        $scope.searchItems = searchItems;

        function searchItems(keyword)
        {
            TreasureService
                .getTreasureByName(keyword)
                .then(function(response){
                    console.log(response.data);
                }, function(err){
                    console.log("Error: " + err);
                })
        }

        function addNewMission(item)
        {
            var inte = [];
            var mess = [];

                    var newItem = {
                        name: item.name,
                        quantity: item.quantity,
                        destination: item.destination,
                        price: item.price,
                        description: item.description,
                        image: item.image,
                        buyer: $rootScope.currentUser.username,
                        status: "open",
                        interester: inte,
                        message: mess
                    };
                    MissionService
                        .addMission(newItem)
                        .then(
                            function (response) {
                                return response;

                            },
                            function (err) {
                                console.log("Error: " + err);
                            }
                        )
                        .then(
                            function (response){
                                var curId = $rootScope.currentUser._id;
                                var newM = $rootScope.currentUser.missions;
                                newM.push(response.data._id);
                                var newUser = {
                                    "_id": $rootScope.currentUser._id,
                                    "username": $rootScope.currentUser.username,
                                    "password": $rootScope.currentUser.password,
                                    "firstName": $rootScope.currentUser.firstName,
                                    "lastName": $rootScope.currentUser.lastName,
                                    "emails": $rootScope.currentUser.emails,
                                    "country": $rootScope.currentUser.country,
                                    "missions": newM,
                                    "treasures": $rootScope.currentUser.treasures,
                                    "phones": $rootScope.currentUser.phones,
                                    "roles": $rootScope.currentUser.roles,
                                    "image": $rootScope.currentUser.image
                                };
                                UserService
                                    .updateUser(curId, newUser)
                                    .then(function(response){
                                        UserService.setCurUser(newUser);
                                        getAllMission();
                                        $scope.item = null;
                                    }, function(err){
                                        console.log("Error: " + err);
                                    });
                            }
                        )






        }

        function getAllMission()
        {
            MissionService
                .getAllMission()
                .then(
                    function(response) {
                        $scope.listedItems = response.data;
                    },
                    function(err) {
                        console.log("Error: "+ err);
                    }
                )
        }


    }


})();