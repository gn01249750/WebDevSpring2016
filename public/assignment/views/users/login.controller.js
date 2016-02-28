/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService, $rootScope)
    {
        $scope.login = login;

        function login(username,password)
        {
            var curUser = UserService.findUserByCredentials(username,password,setCurUser);
        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }


    }
})();