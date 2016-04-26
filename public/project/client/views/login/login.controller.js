/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("BountyShopApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService, $location)
    {
        $scope.login = login;

        function login(user) {
            if (!user) {
                return
            }
            UserService.login(user)
                .then(
                    function (response) {
                        if(user.role == response.data.roles){
                            UserService.setCurUser(response.data);
                            $location.url("/profile");
                        }else{
                            alert("user not found");
                        }
                    },
                    function (err) {
                        alert("user not found");
                        console.log(err);
                    }
                );
        }


    }
})();