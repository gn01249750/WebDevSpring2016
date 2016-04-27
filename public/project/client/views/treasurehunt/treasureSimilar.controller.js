
(function(){
    angular
        .module("BountyShopApp")
        .controller("TreasureSimilarController", TreasureSimilarController);

    function TreasureSimilarController($scope, $routeParams, LookupService)
    {
        renderResults();



        function renderResults()
        {
            var treasureId = $routeParams.searchKeyWord;
            LookupService
                .getItemIdByName(treasureId)
                .then(function(response){
                    $scope.items = response.data;
                }, function(err){
                    console.log("Error: " + err);
                });
        }


    }


})();