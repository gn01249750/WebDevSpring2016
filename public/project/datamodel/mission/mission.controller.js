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
        $scope.selectedIndex = -1;
        var missions = [
            {
                "name":"watch",
                "quantity":"1",
                "date":"2016-03-15T07:00:00.000Z",
                "destination":"Japan",
                "price":"0-120",
                "description": "want this watch for friend's birthday, ASAP!",
                "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
            },
            {
                "name":"toys",
                "quantity":"2",
                "date":"2016-03-15T07:00:00.000Z",
                "destination":"Italy",
                "price":"20-28",
                "description": "",
                "image": "http://www.accesscal.org/wp-content/uploads/2015/11/kids-Toys.jpg"
            }
        ];

        $scope.missions = missions;
        $scope.addMission = addMission;
        $scope.deleteMission = deleteMission;
        $scope.selectMission = selectMission;
        $scope.updateMission = updateMission;

        function updateMission(data)
        {
            console.log($scope.selectedIndex);
            if($scope.selectedIndex != -1)
            {
                missions[$scope.selectedIndex] =
                {
                    "name":data.name,
                    "quantity":data.quantity,
                    "date":new Date(data.date),
                    "destination":data.destination,
                    "price":data.price,
                    "description": $scope.missioncomment,
                    "image": data.image
                }
                $scope.selectedIndex = -1;
                data = null;
            }
        }

        function selectMission(index)
        {
            $scope.selectedIndex = index;
            var data = missions[index];
            var temp =
            {
                "name":data.name,
                "quantity":data.quantity,
                "date":new Date(data.date),
                "destination":data.destination,
                "price":data.price,
                "description": data.description,
                "image": data.image
            };
            $scope.mission = temp;
            $scope.missioncomment = temp.description;
        }

        function deleteMission(index)
        {
            missions.splice(index,1);
        }

        function addMission(data)
        {
            var newm =
            {
                "name":data.name,
                "quantity":data.quantity,
                "date":data.date,
                "destination":data.destination,
                "price":data.price,
                "description": $scope.missioncomment,
                "image": data.image
            };
            missions.push(newm);
        }


    }
})();/**
 * Created by PO on 3/10/2016.
 */
