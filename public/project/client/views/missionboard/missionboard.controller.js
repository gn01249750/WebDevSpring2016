/**
 * Created by PO on 3/9/2016.
 */
(function()
{
    angular
        .module("BountyShopApp", [])
        .controller("MissionBoardController", MissionBoardController);

    function MissionBoardController($scope)
    {
        var missions = [
            {
                "name":"watch",
                "quantity":"1",
                "date":"2016",
                "destination":"Japan",
                "price":"0-120",
                "description": "want this watch for friend's birthday, ASAP!",
                "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
            },
            {
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