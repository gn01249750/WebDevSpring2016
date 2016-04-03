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
                emails: regi.Emails

            };
            UserService
                .createUser(newUser)
                .then(function(response){
                    return UserService.findUserByCredentials(newUser.username, newUser.password);
                }, function(err){
                    console.log("Error: " + err);
                })
                .then(function(curUser){
                    UserService.setCurUser(curUser.data);
                }, function(err){
                    console.log("Error: " + err);
                })
        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }
    }
})();