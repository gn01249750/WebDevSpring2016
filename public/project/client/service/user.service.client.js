/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("BountyShopApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope)
    {


        var service = {
            //findAllUsers : findAllUsers,
            //createUser : createUser,
            //deleteUserById: deleteUserById,
            //updateUser: updateUser,
            //findUserByUserId: findUserByUserId,
            //findUserByUsername: findUserByUsername
            //getAllTreasures : getAllTreasures,
            //deleteTreasureById: deleteTreasureById,
            //addTreasure: addTreasure,
            //getTreasureById: getTreasureById
            register: register,
            getAllUsers: getAllUsers,
            getTests: getTests,
            setCurUser: setCurUser,
            login: login,
            logout: logout,
            updateUser: updateUser,
            getUserByUsername: getUserByUsername
        };

        return service;

        function getUserByUsername(username)
        {

            return $http.get("/api/project/user?username=" + username);
        }

        function updateUser(userId, user)
        {
            return $http.put("/api/project/user/" + userId, user);
        }

        function login(user)
        {
            return $http.post("/api/project/login", user);
        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }


        function register(user)
        {
            return $http.post("/api/project/user/register", user);
        }

        function getAllUsers()
        {
            var temp = $http.get("/api/project/user");
            return temp;
        }

        function getTests()
        {
            var temp = $http.get("/api/project/user/user2");
            return temp;
        }

        function logout()
        {
            return $http.post("/api/project/logout");
        }
        //
        //function findAllUsers()
        //{
        //    return $http.get("/api/project/user/user2");
        //}

        //function getTreasureById(id)
        //{
        //    return $http.get("/api/project/treasure/treasure/" + id );
        //}
        //
        //function addTreasure(newItem)
        //{
        //    listedItems.push(newItem);
        //}
        //
        //function getAllTreasures()
        //{
        //    console.log("service client");
        //    return $http.get("/api/project/treasure/treasure");
        //}

        //function deleteTreasureById(id)
        //{
        //    for(i=0; i<listedItems.length; i++)
        //    {
        //        console.log(i);
        //        if(listedItems[i]._id == id){
        //            listedItems.splice(i,1);
        //            break;
        //        }
        //    }
        //}

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