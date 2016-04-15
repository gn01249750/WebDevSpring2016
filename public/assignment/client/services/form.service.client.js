/**
 * Created by PO on 4/15/2016.
 */
/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
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


})();