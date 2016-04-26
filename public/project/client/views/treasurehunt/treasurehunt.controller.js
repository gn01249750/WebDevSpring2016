///**
// * Created by PO on 3/9/2016.
// */
//(function()
//{
//    angular
//        .module("BountyShopApp", [])
//        .controller("TreasurehuntController", TreasurehuntController);
//
//    function TreasurehuntController($scope)
//    {
//        var listedItems = [
//            {
//                "name":"watch",
//                "quantity":"1",
//                "destination":["Japan", "China"],
//                "price":["$50", "$80"],
//                "description": "US made watch, good quality, limited edition. Shipping available to Japan and China",
//                "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
//            },
//            {
//                "name":"toys",
//                "quantity":"2",
//                "destination":["Japan", "China"],
//                "price":["$20", "$30"],
//                "description": "US made toys, safe for children. Shipping available to Japan and China",
//                "image": "http://www.accesscal.org/wp-content/uploads/2015/11/kids-Toys.jpg"
//            }
//        ];
//
//        $scope.listedItems = listedItems;
//        $scope.gg = ["dd","ddd"];
//
//    }
//})();

/**
 * Created by PO on 2/21/2016.
 */
(function(){
    angular
        .module("BountyShopApp")
        .controller("TreasurehuntController", TreasurehuntController);

    function TreasurehuntController($scope, TreasureService, $rootScope, UserService)
    {
        //console.log(TreasureService.getAllTreasures());
        //$scope.listedItems =
        $scope.getAllTreasures = getAllTreasures;
        $scope.addNewTreasure = addNewTreasure;
        getAllTreasures();

        function addNewTreasure(item)
        {
            var des = [];
            var price = [];
            var inte = [];
            var mess = [];
            if(item.destination && item.price || item.destination == null && item.price == null)
            {
                if(item.destination){
                    des = item.destination.split(",");
                    for(i = 0 ; i<des.length; i++){
                        des[i] = des[i].replace(/\s/g, '');
                    }
                }
                if(item.price){
                    price = item.price.split(",");
                    for(i = 0 ; i<price.length; i++){
                        price[i] = price[i].replace(/\s/g, '');
                    }
                }
                if(des.length != price.length)
                {
                    alert("price, destination not matched");
                }else {
                    var newItem = {
                        name: item.name,
                        quantity: item.quantity,
                        destination: des,
                        price: price,
                        description: item.description,
                        image: item.image,
                        seller: $rootScope.currentUser.username,
                        status: "open",
                        interester: inte,
                        message: mess
                    };
                    TreasureService
                        .addTreasure(newItem)
                        .then(
                            function (response) {
                                return response;

                            },
                            function (err) {
                                console.log("Error: " + err);
                            }
                        )
                        .then(
                            function (response){
                                var curId = $rootScope.currentUser._id;
                                var newM = $rootScope.currentUser.treasures;
                                newM.push(response.data);
                                var newUser = {
                                    "_id": $rootScope.currentUser._id,
                                    "username": $rootScope.currentUser.username,
                                    "password": $rootScope.currentUser.password,
                                    "firstName": $rootScope.currentUser.firstName,
                                    "lastName": $rootScope.currentUser.lastName,
                                    "emails": $rootScope.currentUser.emails,
                                    "country": $rootScope.currentUser.country,
                                    "missions": $rootScope.currentUser.missions,
                                    "treasures": newM,
                                    "phones": $rootScope.currentUser.phones,
                                    "roles": $rootScope.currentUser.roles,
                                    "image": $rootScope.currentUser.image
                                };
                                UserService
                                    .updateUser(curId, newUser)
                                    .then(function(response){
                                        UserService.setCurUser(newUser);
                                        getAllTreasures();
                                        $scope.item = null;
                                    }, function(err){
                                        console.log("Error: " + err);
                                    });
                            }
                        )

                }
            }else{
                alert("price, destination not matched");
            }



        }

        function getAllTreasures()
        {
            TreasureService
                .getAllTreasures()
                .then(
                    function(response) {
                        $scope.listedItems = response.data;
                    },
                    function(err) {
                        console.log("Error: "+ err);
                    }
                )
        }


    }

})();