/**
 * Created by PO on 3/31/2016.
 */
//var uuid = require('node-uuid');
var q = require("q");

module.exports = function(db, mongoose)
{
    var userSchema2 = require("./user.schema.server.js")(mongoose);
    var UserModel2 = mongoose.model("UserModel2", userSchema2);

    //var users = [
    //    {
    //        "_id": "1",
    //        "name":"watch",
    //        "quantity":"1",
    //        "destination":["Japan", "China"],
    //        "price":["$50", "$80"],
    //        "description": "US made watch, good quality, limited edition. Shipping available to Japan and China",
    //        "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
    //    }
    //
    //];

    //var formSchema = require("./form.schema.server.js")(mongoose);
    //var Form  = mongoose.model("Form", formSchema);
    //
    //
    //var movies = [];
    var api = {
        //createForm: createForm,
        //findAllForm: findAllForm,
        //getFormByFormId: getFormByFormId,
        //updateFormByFormId: updateFormByFormId,
        //findFormByTitle: findFormByTitle,
        //deleteFormByFormId: deleteFormByFormId,
        //getFormByUserId: getFormByUserId
        //getAllTreasure: getAllTreasure,
        //getTreasureById: getTreasureById
        register: register,
        findAllUser: findAllUser,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        deleteUser: deleteUser,
        updateUser: updateUser

    };
    return api;

    function updateUser(id, user)
    {
        var deferred = q.defer();
        //UserModel2.update(
        //    {_id: id},
        //    {
        //        "username": user.username,
        //        "password": user.password,
        //        "firstName": user.firstName,
        //        "lastName": user.lastName,
        //        "emails": user.emails,
        //        "country": user.country,
        //        "missions": user.missions,
        //        "treasures": user.treasures,
        //        "phones": user.phones,
        //        "roles": user.roles
        //    },
        //    function(err, results){
        //        if(err){
        //            console.log("here");
        //            deferred.reject(err);
        //        }else{
        //            console.log(results);
        //            deferred.resolve(results);
        //        }
        //
        //    });

        UserModel2.update(
            {_id: id},
            {    "username": user.username,
                        "password": user.password,
                        "firstName": user.firstName,
                        "lastName": user.lastName,
                        "emails": user.emails,
                        "country": user.country,
                        "missions": user.missions,
                        "treasures": user.treasures,
                        "phones": user.phones,
                        "roles": user.roles
            },
            function(err, results){
                if(err){
                    console.log(err);
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
        UserModel2.remove({"_id": id}, function(err, result){
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
        UserModel2.findOne({"username": credentials.username,
            "password": credentials.password}, function(err, result){
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
        UserModel2.findOne({"username": username}, function(err, result){
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
        UserModel2.find({"_id": id}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function register(user)
    {
        var deferred = q.defer();
        var newUser = new UserModel2({
            "username": user.username,
            "password": user.password,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "emails": user.emails,
            "country": user.country,
            "missions": user.missions,
            "treasures": user.treasures,
            "phones": user.phones,
            "roles": user.roles
        });
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

    function findAllUser()
    {
        var deferred = q.defer();
        UserModel2.find(function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    //function getAllTreasure()
    //{
    //    var deferred = q.defer();
    //    deferred.resolve(listedItems);
    //    return deferred.promise;
    //}
    //
    //function getTreasureById(id)
    //{
    //    console.log("dd" + id);
    //    var deferred = q.defer();
    //    var temp = null;
    //    var gg = [];
    //    for(i = 0; i < listedItems.length; i++)
    //    {
    //        console.log("test");
    //        if(listedItems[i]._id == id){
    //
    //            temp = listedItems[i];
    //            break;
    //        }
    //    }
    //    if(temp)
    //    {
    //        gg.push(temp);
    //        deferred.resolve(gg);
    //    }else{
    //        deferred.reject();
    //    }
    //    return deferred.promise;
    //}

    //function testt()
    //{
    //    findAllForm()
    //        .then(function(response){
    //            console.log(response);
    //        })
    //}
    //
    //function getFormByUserId(userId)
    //{
    //    var deferred = q.defer();
    //    Form.find({userId: userId}, function(err, results){
    //        if(err){
    //            deferred.reject(err);
    //        }else{
    //            deferred.resolve(results);
    //        }
    //
    //    });
    //    return deferred.promise;
    //}
    //
    //function deleteFormByFormId(formId)
    //{
    //    var deferred = q.defer();
    //    Form.remove({"_id": formId}, function(err, result){
    //        if(err){
    //            deferred.reject(err);
    //        }else{
    //            deferred.resolve(result);
    //        }
    //    });
    //    return deferred.promise;
    //}
    //
    //function updateFormByFormId(id, form)
    //{
    //    var deferred = q.defer();
    //    Form.update(
    //        {_id: id},
    //        {
    //            title: form.title,
    //            userId: form.userId,
    //            fields: form.fields
    //        },
    //        function(err, results){
    //            if(err){
    //                deferred.reject(err);
    //            }else{
    //                deferred.resolve(results);
    //            }
    //
    //        });
    //    return deferred.promise;
    //}
    //
    //function findFormByTitle(title)
    //{
    //    var deferred = q.defer();
    //    Form.find({title: title}, function(err, results){
    //        if(err){
    //            deferred.reject(err);
    //        }else{
    //            deferred.resolve(results);
    //        }
    //
    //    });
    //    return deferred.promise;
    //}
    //
    //function getFormByFormId(id)
    //{
    //    var deferred = q.defer();
    //    Form.find({_id: id}, function(err, results){
    //        if(err){
    //            deferred.reject(err);
    //        }else{
    //            deferred.resolve(results);
    //        }
    //
    //    });
    //    return deferred.promise;
    //}
    //
    //function findAllForm()
    //{
    //    var deferred = q.defer();
    //    Form.find(function(err, results){
    //        if(err){
    //            deferred.reject(err);
    //        }else{
    //            deferred.resolve(results);
    //        }
    //
    //    });
    //    return deferred.promise;
    //}
    //
    //function createForm(userId, form)
    //{
    //    var deferred = q.defer();
    //
    //    var form = new Form({
    //        "title": form.title,
    //        "userId": userId,
    //        "fields": form.fields
    //    });
    //
    //    // save movie to database
    //    form.save(function (err, doc) {
    //
    //        if (err) {
    //            // reject promise if error
    //            defferred.reject(err)
    //        } else {
    //            // resolve promise
    //            deferred.resolve(doc);
    //        }
    //
    //    });
    //
    //    return deferred.promise;
    //
    //
    //
    //}
}