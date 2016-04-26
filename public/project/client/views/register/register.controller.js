/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("BountyShopApp")
        .controller("RegisterController", RegisterController);


    function RegisterController($scope, $location, UserService)
    {

        //$scope.allUsers = null;


        $scope.register = register;
        getAllUsers2();

        function getAllUsers2()
        {
            UserService
                .getAllUsers()
                .then(
                    function(response) {
                        $scope.allUsers = response.data;
                    },
                    function(err) {
                        console.log("Error: "+ err);
                    }
                );
        }

        function register(regi)
        {
            if(regi.Password != regi.VerifyPassword || !regi.Password || !regi.VerifyPassword){
                alert("password not matched");
            }else{
                var newUser = {
                    username: regi.Username,
                    password: regi.Password,
                    emails: regi.Email,
                    roles: regi.Role,
                    "lastName": null,
                    "country": null,
                    "phones": null
                };
                UserService
                    .register(newUser)
                    .then(
                        function(response) {
                            var user = response.data;
                            if(user != null) {
                                UserService.setCurUser(user);
                                $location.url("/profile");
                            }
                        },
                        function(err) {
                            console.log("Error: "+ err);
                        }
                    );

            }

        }
    }
})();