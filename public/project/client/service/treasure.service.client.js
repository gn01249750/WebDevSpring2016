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
        var listedItems = [
            {
                "_id": "2",
                "name":"watch",
                "quantity":"1",
                "destination":["Japan", "China"],
                "price":["$50", "$80"],
                "description": "US made watch, good quality, limited edition. Shipping available to Japan and China",
                "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
            },
            {
                "_id": "2",
                "name":"toys",
                "quantity":"2",
                "destination":["Japan", "China"],
                "price":["$20", "$30"],
                "description": "US made toys, safe for children. Shipping available to Japan and China",
                "image": "http://www.accesscal.org/wp-content/uploads/2015/11/kids-Toys.jpg"
            }

        ];

        var service = {
            //findAllUsers : findAllUsers,
            //createUser : createUser,
            //deleteUserById: deleteUserById,
            //updateUser: updateUser,
            //findUserByUserId: findUserByUserId,
            //findUserByUsername: findUserByUsername
            getAllTreasures : getAllTreasures,
            deleteTreasureById: deleteTreasureById,
            addTreasure: addTreasure
        };

        return service;

        function addTreasure(newItem)
        {
            listedItems.push(newItem);
        }

        function getAllTreasures()
        {
            return listedItems;
        }

        function deleteTreasureById(id)
        {
            for(i=0; i<listedItems.length; i++)
            {
                console.log(i);
                if(listedItems[i]._id == id){
                    listedItems.splice(i,1);
                    break;
                }
            }
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