
(function(){
    angular
        .module("BountyShopApp")
        .controller("TreasureSearchController", TreasureSearchController);

    function TreasureSearchController($scope, TreasureService, $routeParams)
    {
        renderResults();



        function renderResults()
        {
            var treasureId = $routeParams.searchKeyWord;
            TreasureService
                .getTreasureByName(treasureId)
                .then(function(response){
                    $scope.currentResults = response.data;
                }, function(err){
                    console.log("Error: " + err);
                });
        }


    }


})();