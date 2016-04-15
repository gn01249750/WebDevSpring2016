/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope,$rootScope, UserService, $location)
    {
        $scope.isAdmin = isAdmin;
        $scope.userLogOut = userLogOut;

        function userLogOut() {
            UserService
                .logout()
                .then(
                    function(response){
                        $rootScope.currentUser = null;
                        $location.url("/home");
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        }

        function isAdmin() {
            if($rootScope.currentUser == null){
                return false;
            }else{
                if($rootScope.currentUser.roles == null){
                    return false;
                }
                for(i = 0; i < $rootScope.currentUser.roles.length; i++){
                    if($rootScope.currentUser.roles[i] == "admin"){
                        return true;
                    }
                }
                return false;
            }
        }


    }
})();