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

        function deleteTreasureFromUser(index)
        {
            var tempId = $rootScope.currentUser.treasures[index]._id;
            TreasureService
                .deleteTreasureById(tempId)
                .then(function(response){
                    $rootScope.currentUser.treasures.splice(index,1);
                    updateUser($rootScope.currentUser);
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
