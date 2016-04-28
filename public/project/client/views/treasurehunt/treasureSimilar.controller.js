
(function(){
    angular
        .module("BountyShopApp")
        .controller("TreasureSimilarController", TreasureSimilarController);

    function TreasureSimilarController($scope, $routeParams, LookupService)
    {

        renderResults();

        $scope.results = [];

        function renderResults()
        {

            var treasureId = $routeParams.searchKeyWord;
            LookupService
                .getItemIdByName(treasureId)
                .then(function(response){
                    var x2js = new X2JS();
                    var y = x2js.xml_str2json(response.data);
                    $scope.test = y;
                    console.log($scope.test.ArrayOfProduct.Product);
                    for(i = 0; i < $scope.test.ArrayOfProduct.Product.length; i++){
                        //console.log($scope.test.ArrayOfProduct.Product[i]);
                        //console.log($scope.test.ArrayOfProduct.Product[i].ItemID);
                        LookupService
                            .getItemsById($scope.test.ArrayOfProduct.Product[i].ItemID)
                            .then(function(response){
                                var y2 = x2js.xml_str2json(response.data);
                                $scope.results.push(y2.ArrayOfProduct_Commercial.Product_Commercial);
                            }, function(err){
                                console.log("Error: " + err);
                            })
                    }
                }, function(err){
                    console.log("Error: " + err);
                });
        }
    }


})();