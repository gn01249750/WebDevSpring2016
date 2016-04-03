/**
 * Created by PO on 3/31/2016.
 */
var uuid = require('node-uuid');
var q = require("q");

module.exports = function(db, mongoose)
{

    var formSchema = require("./form.schema.server.js")(mongoose);
    var Form  = mongoose.model("Form", formSchema);

    //createForm(23, {
    //    "title": "ha",
    //    "fields": {
    //        "label": "yo",
    //        "type": "TEXT",
    //        "options": [{label: "test", "value": "test"}]
    //    }
    //});

    //deleteFormByFormId("5700309f7bf6a38014dda67d");

    //updateFormByFormId("5700309f7bf6a38014dda67d", {title: "form1", userId: "user1"});

    //testt();

    var movies = [];
    var api = {
        createForm: createForm,
        findAllForm: findAllForm,
        getFormByFormId: getFormByFormId,
        updateFormByFormId: updateFormByFormId,
        findFormByTitle: findFormByTitle,
        deleteFormByFormId: deleteFormByFormId,
        getFormByUserId: getFormByUserId
    };
    return api;

    function testt()
    {
        findAllForm()
            .then(function(response){
                console.log(response);
            })
    }

    function getFormByUserId(userId)
    {
        var deferred = q.defer();
        Form.find({userId: userId}, function(err, results){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(results);
            }

        });
        return deferred.promise;
    }

    function deleteFormByFormId(formId)
    {
        var deferred = q.defer();
        Form.remove({"_id": formId}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function updateFormByFormId(id, form)
    {
        var deferred = q.defer();
        Form.update(
            {_id: id},
            {
                title: form.title,
                userId: form.userId,
                fields: form.fields
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

    function findFormByTitle(title)
    {
        var deferred = q.defer();
        Form.find({title: title}, function(err, results){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(results);
            }

        });
        return deferred.promise;
    }

    function getFormByFormId(id)
    {
        var deferred = q.defer();
        Form.find({_id: id}, function(err, results){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(results);
            }

        });
        return deferred.promise;
    }

    function findAllForm()
    {
        var deferred = q.defer();
        Form.find(function(err, results){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(results);
            }

        });
        return deferred.promise;
    }

    function createForm(userId, form)
    {
        var deferred = q.defer();

        var form = new Form({
            "title": form.title,
            "userId": userId,
            "fields": form.fields
        });

        // save movie to database
        form.save(function (err, doc) {

            if (err) {
                // reject promise if error
                defferred.reject(err)
            } else {
                // resolve promise
                deferred.resolve(doc);
            }

        });

        return deferred.promise;



    }
}