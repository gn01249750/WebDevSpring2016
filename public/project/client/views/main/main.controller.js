/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("BountyShopApp")
        .controller("MainController", MainController);


    function MainController($scope, $location) {
        $scope.$location = $location;
    }
})();