/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService, $location)
    {
        $scope.login = login;

        function login(user)
        {
            console.log(user);
            if(!user)
            {
                return
            }
            UserService
                .login(user)
                .then(
                    function(response)
                    {
                        UserService.setCurUser(response.data);
                        $location.url("/profile");
                    },
                    function(err) {
                        console.log(err);
                    }
                );
                //.findUserByCredentials(username, password)
                //.then(function(response){
                //    if(response) {
                //        UserService.setCurUser(response.data);
                //    }
                //},
                //function(err){
                //    console.log(err);
                //});
        }




    }
})();