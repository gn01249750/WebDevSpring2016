/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("BountyShopApp")
        .factory("TreasureService", TreasureService);

    function TreasureService($http)
    {
        //var listedItems = [
        //    {
        //        "_id": "2",
        //        "name":"watch",
        //        "quantity":"1",
        //        "destination":["Japan", "China"],
        //        "price":["$50", "$80"],
        //        "description": "US made watch, good quality, limited edition. Shipping available to Japan and China",
        //        "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
        //    },
        //    {
        //        "_id": "2",
        //        "name":"toys",
        //        "quantity":"2",
        //        "destination":["Japan", "China"],
        //        "price":["$20", "$30"],
        //        "description": "US made toys, safe for children. Shipping available to Japan and China",
        //        "image": "http://www.accesscal.org/wp-content/uploads/2015/11/kids-Toys.jpg"
        //    }
        //
        //];

        var service = {
            //findAllUsers : findAllUsers,
            //createUser : createUser,
            //deleteUserById: deleteUserById,
            //updateUser: updateUser,
            //findUserByUserId: findUserByUserId,
            //findUserByUsername: findUserByUsername
            getAllTreasures : getAllTreasures,
            deleteTreasureById: deleteTreasureById,
            addTreasure: addTreasure,
            getTreasureById: getTreasureById,
            updateTreasureById: updateTreasureById,
            getTreasureByName: getTreasureByName
        };

        return service;

        function getTreasureByName(name)
        {
            return $http.get("/api/project/treasure/" +name);
        }

        function updateTreasureById(treasureId, treasure)
        {
            return $http.put("/api/project/treasure/" + treasureId, treasure);
        }

        function getTreasureById(id)
        {
            return $http.get("/api/project/treasure/treasure/" + id );
        }

        function addTreasure(newItem)
        {
            return $http.post("/api/project/treasure", newItem);
        }

        function getAllTreasures()
        {
            return $http.get("/api/project/treasure/treasure");
        }

        function deleteTreasureById(id)
        {
            return $http.delete("/api/project/treasure/" + id);
        }

        //function findUserByUserId(userId)
        //{
        //    return $http.get("/api/assignment/admin/user/" + userId);
        //}
        //
        //
        //function findAllUsers()
        //{
        //    return $http.get("/api/assignment/admin/user");
        //}
        //
        //function createUser(user)
        //{
        //    var newUser = {
        //        _id : (new Date).getTime(),
        //        firstName : user.firstName,
        //        lastName : user.lastName,
        //        username : user.username,
        //        password : user.password,
        //        roles : user.roles,
        //        emails : user.emails
        //    };
        //    return $http.post("/api/assignment/admin/user", newUser);
        //}
        //
        //function deleteUserById(userId)
        //{
        //    console.log("client");
        //    console.log(userId);
        //    return $http.delete("/api/assignment/admin/user/" + userId);
        //}
        //
        //function updateUser(userId, user)
        //{
        //    return $http.put("/api/assignment/admin/user/" + userId, user);
        //}
        //
        //function findUserByUsername(username)
        //{
        //    return $http.get("/api/assignment/admin/user?username=" + username);
        //}
    }
})();