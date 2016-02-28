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
        $scope.update = update;

        function update(updatedUser) {
            if($rootScope.currentUser != null) {
                var curId = $rootScope.currentUser._id;
                var newUser = {
                    _id: curId,
                    username: updatedUser.username,
                    password: updatedUser.password,
                    firstName: updatedUser.firstName,
                    lastName: updatedUser.lastName,
                    email: updatedUser.email
                };

                UserService.updateUser(curId, newUser, setCurUser);
            }
        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }


    }
})();