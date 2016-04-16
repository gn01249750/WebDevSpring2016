/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("AdminService", AdminService);

    function AdminService($http, $rootScope)
    {
        var service = {
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            findUserByUserId: findUserByUserId,
            findUserByUsername: findUserByUsername
        };

        return service;

        function findUserByUserId(userId)
        {
            return $http.get("/api/assignment/admin/user/" + userId);
        }


        function findAllUsers()
        {
            return $http.get("/api/assignment/admin/user");
        }

        function createUser(user)
        {
            var newUser = {
                _id : (new Date).getTime(),
                firstName : user.firstName,
                lastName : user.lastName,
                username : user.username,
                password : user.password,
                roles : user.roles,
                emails : user.emails
            };
            return $http.post("/api/assignment/admin/user", newUser);
        }

        function deleteUserById(userId)
        {
            console.log("client");
            console.log(userId);
            return $http.delete("/api/assignment/admin/user/" + userId);
        }

        function updateUser(userId, user)
        {
            return $http.put("/api/assignment/admin/user/" + userId, user);
        }

        function findUserByUsername(username)
        {
            return $http.get("/api/assignment/admin/user?username=" + username);
        }
    }
})();