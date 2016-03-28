/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope,$rootScope)
    {
        $scope.isAdmin = isAdmin;
        $scope.userLogOut = userLogOut;

        function userLogOut() {
            $rootScope.currentUser = null;
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