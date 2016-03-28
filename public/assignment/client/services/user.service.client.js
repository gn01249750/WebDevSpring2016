/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService)
        .factory("FormService", FormService);

    function FormService($http)
    {

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById,
            getAllFormsTest: getAllFormsTest
        };

        return service;

        function getAllFormsTest()
        {
            return $http.get("/api/assignment/form");
        }

        function createFormForUser(userId, data)
        {
            var newForm =
            {
                _id: null,
                userId: userId,
                title: data,
                fields: []
            };
            return $http.post("/api/assignment/user/" + userId + "/form", newForm);
        }

        function findAllFormsForUser(userId)
        {
            return $http.get("/api/assignment/user/" + userId + "/form");
        }

        function deleteFormById(formId)
        {
            return $http.delete("/api/assignment/form/"+formId);
        }

        function updateFormById(formId, newForm)
        {
            return $http.put("/api/assignment/form/" + formId, newForm);
        }
    }

    function UserService($http, $rootScope)
    {
        var service = {
            findUserByCredentials : findUserByCredentials,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            findUserByUsername: findUserByUsername,
            setCurUser: setCurUser
        };

        return service;

        function findUserByUsername(username)
        {
            return $http.get("/api/assignment/user?username=" + username);
        }

        function findUserByCredentials(username, password)
        {
            return $http.get("/api/assignment/user?username=" + username + "&" + "password=" + password);
        }


        function findAllUsers()
        {
            return $http.get("/api/assignment/user");
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
                email : user.email
            };
            return $http.post("/api/assignment/user", newUser);
        }

        function deleteUserById(id)
        {
            return $http.delete("/api/assignment/user/" + id);
        }

        function updateUser(userId, user)
        {
            return $http.put("/api/assignment/user/" + userId, user);
        }

        function setCurUser(data)
        {
            $rootScope.currentUser = data;
        }

    }
})();