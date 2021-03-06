/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("BountyShopApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, UserService, $location, $rootScope)
    {

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


    }
})();