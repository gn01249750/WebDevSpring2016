/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, UserService)
    {

        $scope.register = register;

        function register(regi)
        {
            var newUser = {
                username: regi.Username,
                password: regi.Password,
                email: regi.Email
            };
            UserService
                .createUser(newUser)
                .then(function(response){
                    UserService.setCurUser(newUser);
                })
        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }
    }
})();