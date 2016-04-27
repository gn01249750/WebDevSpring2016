/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("BountyShopApp")
        .controller("ProfileController", ProfileController);


    function ProfileController($scope, $location, UserService, $rootScope, TreasureService)
    {
        $scope.passData= passData;
        $scope.updateUser = updateUser;
        $scope.deleteTreasureFromUser = deleteTreasureFromUser;
        $scope.chooseTreasure = chooseTreasure;
        getAllTreasuresOfUser();


        function chooseTreasure(index)
        {
            $scope.chosenTreasure = $scope.alltreasures[index];
            $scope.chosenTreasureUser = [];
            $scope.chosenTreasreMessage = $scope.chosenTreasure.message;
            for(i = 0; i<$scope.chosenTreasure.interester.length; i++)
            {
                console.log(i);
                UserService
                    .getUserByUsername($scope.chosenTreasure.interester[i])
                    .then(function(response){
                        console.log(response.data);
                        $scope.chosenTreasureUser.push(response.data);
                    }, function(err){
                        console.log("Error: " + err);
                    });
            }

        }

        function getAllTreasuresOfUser()
        {
            $scope.alltreasures = [];
            for(i = 0; i<$rootScope.currentUser.treasures.length;i++)
            {
                TreasureService
                    .getTreasureById($rootScope.currentUser.treasures[i])
                    .then(function(response){
                        return response;
                    }, function(err){
                        console.log("Error: " + err);
                    })
                    .then(function(response){
                        console.log(response.data);
                        $scope.alltreasures.push(response.data);
                    })
            }
        }

        function deleteTreasureFromUser(index)
        {
            var tempId = $rootScope.currentUser.treasures[index];
            TreasureService
                .deleteTreasureById(tempId)
                .then(function(response){
                    $rootScope.currentUser.treasures.splice(index,1);
                    updateUser($rootScope.currentUser);
                    getAllTreasuresOfUser();
                }, function(err){
                    console.log("Error: " + err);
                });

        }

        function updateUser(user)
        {
            if($rootScope.currentUser != null) {
                var curId = $rootScope.currentUser._id;
                UserService
                    .updateUser(curId, user)
                    .then(function(response){
                        UserService.setCurUser(user);
                    }, function(err){
                        console.log("Error: " + err);
                    });
            }
        }

        function passData()
        {
            var newU =
            {
                "_id": $rootScope.currentUser._id,
                "username": $rootScope.currentUser.username,
                "password": $rootScope.currentUser.password,
                "firstName": $rootScope.currentUser.firstName,
                "lastName": $rootScope.currentUser.lastName,
                "emails": $rootScope.currentUser.emails,
                "country": $rootScope.currentUser.country,
                "missions": $rootScope.currentUser.missions,
                "treasures": $rootScope.currentUser.treasures,
                "phones": $rootScope.currentUser.phones,
                "roles": $rootScope.currentUser.roles,
                "image": $rootScope.currentUser.image
            }
            $scope.user = newU;
        }




    }
})();/**
 * Created by PO on 4/23/2016.
 */
