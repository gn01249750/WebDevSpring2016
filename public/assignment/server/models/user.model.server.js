/**
 * Created by PO on 3/31/2016.
 */
module.exports = function(db, mongoose) {
    var userSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model("UserModel", userSchema);
    var q = require("q");

    //createUser({
    //    "username": "username1",
    //    "password": "password1",
    //    "firstName": "firstname1",
    //    "lastName": "lastname1",
    //    "emails": "randomemail@random",
    //    "phones": "09245778"
    //});

    //deleteUser("56ff3268fd5158f805287c69");
    //updateUser("5700340731a3b0102079e915", {username: "user1", password: "pass1"});
    //testt();

    var api = {
        createUser: createUser,
        findAllUser: findAllUser,
        findUserById: findUserById,
        updateUser: updateUser,
        deleteUser: deleteUser,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;

    function testt()
    {
        findAllUser()
            .then(function(response){
                console.log(response);
            }, function(err){
                console.log(err);
            });
    }

    function updateUser(id, user)
    {
        var deferred = q.defer();
        console.log("in model");
        console.log(user.roles);
        var emailTemp = null;
        if(user.emails)
        {
            emailTemp = user.emails.toString().split(",");
        }

        UserModel.update(
            {_id: id},
            {
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                emails: emailTemp,
                phones: user.phones,
                roles: user.roles
            },
            function(err, results){
                if(err){
                    deferred.reject(err);
                }else{
                    deferred.resolve(results);
                }

            });
        return deferred.promise;
    }

    function deleteUser(id)
    {
        var deferred = q.defer();
        UserModel.remove({"_id": id}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function findUserByCredentials(credentials){
        var deferred = q.defer();
        UserModel.findOne({"username": credentials.username,
        "password": credentials.password}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function findUserById(id)
    {
        var deferred = q.defer();
        UserModel.find({"_id": id}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function findUserByUsername(username)
    {

        var deferred = q.defer();
        UserModel.findOne({"username": username}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function findAllUser()
    {
        var deferred = q.defer();
        UserModel.find(function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }


    function createUser(user)
    {
        var deferred = q.defer();
        //var emailTemp = null;
        //if(user.emails)
        //{
        //    emailTemp = user.emails.split(",");
        //}

        var newUser = new UserModel({
            "username": user.username,
            "password": user.password,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "emails": user.emails,
            "phones": [user.phones],
            "roles": user.roles
        });
        console.log(newUser);
        // save movie to database
        newUser.save(function (err, doc) {
            if (err) {
                // reject promise if error
                deferred.reject(err)
            } else {
                // resolve promise
                deferred.resolve(doc);
            }

        });

        return deferred.promise;
    }


}