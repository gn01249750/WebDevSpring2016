/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, UserService, $location)
    {

        $scope.register = register;

        function register(regi)
        {
            if(regi.Password != regi.VerifyPassword || !regi.Password || !regi.VerifyPassword){
                alert("password not matched");
            }else{
                var newUser = {
                    username: regi.Username,
                    password: regi.Password,
                    emails: regi.Emails

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
                    //.createUser(newUser)
                    //.then(function(response){
                    //    return UserService.findUserByCredentials(newUser.username, newUser.password);
                    //}, function(err){
                    //    console.log("Error: " + err);
                    //})
                    //.then(function(curUser){
                    //    UserService.setCurUser(curUser.data);
                    //}, function(err){
                    //    console.log("Error: " + err);
                    //})
            }

        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }
    }
})();