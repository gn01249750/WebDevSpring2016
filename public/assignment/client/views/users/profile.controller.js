/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService, $rootScope)
    {
        init();
        $scope.update = update;


        function init()
        {
            if($rootScope.currentUser != null)
            {
                $scope.updatedUser = $rootScope.currentUser;
            }
        }

        function update(updatedUser) {
            if($rootScope.currentUser != null) {
                var curId = $rootScope.currentUser._id;
                var newUser = {
                    _id: curId,
                    username: updatedUser.username,
                    password: updatedUser.password,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    emails: updatedUser.emails
                };
                UserService
                    .updateUser(curId, newUser)
                    .then(function(response){
                            UserService.setCurUser(newUser);

                    }, function(err){
                        console.log("Error: " + err);
                    });
            }
        }


    }
})();