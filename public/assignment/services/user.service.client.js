/**
 * Created by PO on 2/22/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService)
        .factory("FormService", FormService);

    function FormService()
    {
        var forms = [
                        {"_id": "000", "title": "Contacts", "userId": 123},
                        {"_id": "010", "title": "ToDo", "userId": 123},
                        {"_id": "020", "title": "CDs", "userId": 234}
                    ];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };

        return service;

        function createFormForUser(userId, form, callback)
        {
            var newForm =
            {
                _id: (new Date).getTime(),
                userId: userId,
                title: form
            };
            forms.push(newForm);
            callback(newForm);
        }

        function findAllFormsForUser(userId, callback)
        {
            var results = [];
            for(i = 0; i<forms.length;i++){
                if(forms[i].userId == userId){
                    results.push(forms[i]);
                }
            }
            callback(results);
        }

        function deleteFormById(formId, callback)
        {
            var curIndex = -1;
            for(i = 0; i<forms.length; i++){
                if(forms[i]._id==formId){
                    curIndex = i;
                    break;
                }
            }
            if(curIndex != -1){
                forms.splice(curIndex,1);
                callback(forms);
            }else{
                alert("delete failed");
            }
        }

        function updateFormById(formId, newForm, callback)
        {
            var curIndex = -1;
            for(i = 0; i<forms.length; i++){
                if(forms[i]._id==formId){
                    curIndex = i;
                    break;
                }
            }
            if(curIndex != -1){
                forms[curIndex]._id = newForm._id;
                forms[curIndex].title = newForm.title;
                forms[curIndex].userId = newForm.userId;
                callback(newForm);
            }else{
                alert("update failed");
            }
        }
    }

    function UserService()
    {

        var users = [   {   "_id":123,
                            "firstName":"Alice",
                            "lastName":"Wonderland",
                            "username":"alice",
                            "password":"alice",
                            "roles": ["student"]},
                        {   "_id":234,
                            "firstName":"Bob",
                            "lastName":"Hope",
                            "username":"bob",
                            "password":"bob",
                            "roles": ["admin"]},
                        {   "_id":345,
                            "firstName":"Charlie",
                            "lastName":"Brown",
                            "username":"charlie",
                            "password":"charlie",
                            "roles": ["faculty"]},
                        {   "_id":456,
                            "firstName":"Dan",
                            "lastName":"Craig",
                            "username":"dan",
                            "password":"dan",
                            "roles": ["faculty", "admin"]},
                        {   "_id":567,
                            "firstName":"Edward",
                            "lastName":"Norton",
                            "username":"ed",
                            "password":"ed",
                            "roles": ["student"]}];

        var service = {
            findUserByCredentials : findUserByCredentials,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };

        return service;

        function findUserByCredentials(username, password, callback)
        {
            var curIndex = -1;
            for(i = 0; i<users.length; i++){
                if(users[i].username==username && users[i].password==password){
                    curIndex = i;
                    break;
                }
            }
            if(curIndex != -1){
                callback(users[curIndex]);
            }else{
                alert("log in failed, wrong username or password")
            }
        }

        function findAllUsers(callback)
        {
            callback(users);
        }

        function createUser(user, callback)
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
            users.push(newUser);
            callback(newUser);
        }

        function deleteUserById(userId, callback)
        {
            var curIndex = -1;
            for(i = 0; i<users.length; i++){
                if(users[i]._id==userId){
                    curIndex = i;
                    break;
                }
            }
            if(curId != -1){
                users.splice(curIndex,1);
                callback(users);
            }else{
                alert("delete failed");
            }
        }

        function updateUser(userId, user, callback)
        {
            var curIndex = -1;
            for(i = 0; i<users.length; i++){
                if(users[i]._id==userId){
                    curIndex = i;
                    break;
                }
            }
            if(curIndex != -1){
                users[curIndex] = user;
                callback(user);
            }else{
                alert("update failed");
            }
        }

    }
})();