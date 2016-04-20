/**
 * Created by PO on 2/20/2016.
 */
(function()
{
    angular
        .module("BountyShopApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope, $rootScope)
    {
        //$scope.isAdmin = isAdmin;
        //
        //function isAdmin() {
        //    if($rootScope.currentUser == null){
        //        return false;
        //    }else{
        //        if($rootScope.currentUser.roles == null){
        //            return false;
        //        }
        //        for(i = 0; i < $rootScope.currentUser.roles.length; i++){
        //            if($rootScope.currentUser.roles[i].replace(/\s/g, '') == "admin"){
        //                return true;
        //            }
        //        }
        //        return false;
        //    }
        //}
    }
})();