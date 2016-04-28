/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("BountyShopApp")
        .factory("MissionService", MissionService);

    function MissionService($http)
    {
        var service = {

            getAllMission : getAllMission,
            deleteTreasureById: deleteTreasureById,
            addMission: addMission,
            getMissionById: getMissionById,
            updateMissionById: updateMissionById,
            getTreasureByName: getTreasureByName
        };

        return service;

        function getTreasureByName(name)
        {
            return $http.get("/api/project/mission/" +name);
        }

        function updateMissionById(id, mission)
        {
            return $http.put("/api/project/mission/" + id, mission);
        }

        function getMissionById(id)
        {
            return $http.get("/api/project/mission/mission/" + id );
        }

        function addMission(newItem)
        {
            return $http.post("/api/project/mission", newItem);
        }

        function getAllMission()
        {
            return $http.get("/api/project/mission/mission");
        }

        function deleteTreasureById(id)
        {
            return $http.delete("/api/project/mission/" + id);
        }
    }
})();