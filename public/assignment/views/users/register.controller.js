/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, UserService, $rootScope)
    {

        $scope.register = register;

        function register(regi)
        {
            var newUser = {
                username: regi.Username,
                password: regi.Password,
                email: regi.Email
            };
            console.log(regi.Email);
            UserService.createUser(newUser,setCurUser);
        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }
    }
})();