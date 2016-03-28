/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService)
    {
        $scope.login = login;

        function login(username,password)
        {
            if(!username || !password)
            {
                return
            }
            UserService
                .findUserByCredentials(username, password)
                .then(function(response){
                    if(response.data) {
                        UserService.setCurUser(response.data);
                    }
                });
        }




    }
})();