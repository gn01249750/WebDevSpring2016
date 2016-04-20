
(function(){
    angular
        .module("BountyShopApp")
        .controller("MissionBoardController", MissionBoardController);

    function MissionBoardController($scope)
    {
        var missions = [
            {
                "_id": "2",
                "name":"watch",
                "quantity":"1",
                "date":"2016",
                "destination":"Japan",
                "price":"0-120",
                "description": "want this watch for friend's birthday, ASAP!",
                "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
            },
            {
                "_id": "2",
                "name":"toys",
                "quantity":"2",
                "date":"2016",
                "destination":"Italy",
                "price":"20-28",
                "description": "",
                "image": "http://www.accesscal.org/wp-content/uploads/2015/11/kids-Toys.jpg"
            }
        ];

        $scope.missions = missions;


    }


})();