/**
 * Created by PO on 3/31/2016.
 */
//var uuid = require('node-uuid');
var q = require("q");

module.exports = function(db, mongoose)
{
    var treasureSchema = require("./treasure.schema.server.js")(mongoose);
    var TreasureModel = mongoose.model("TreasureModel", treasureSchema);

    var api = {
        getAllTreasure: getAllTreasure,
        getTreasureById: getTreasureById,
        createItem: createItem,
        deleteTreasureById: deleteTreasureById,
        updateTreasureById: updateTreasureById,
        getTreasureByName: getTreasureByName
    };
    return api;

    function getTreasureByName(name)
    {
        var deferred = q.defer();
        TreasureModel.find({name: {$regex: name}}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function updateTreasureById(id, treasure)
    {
        var deferred = q.defer();
        TreasureModel.update(
            {_id: id},
            {
                name: treasure.name,
                quantity: treasure.quantity,
                destination: treasure.destination,
                price: treasure.price,
                description: treasure.description,
                image: treasure.image,
                seller: treasure.seller,
                status: treasure.status,
                interester: treasure.interester,
                message: treasure.message
            },
            function(err, results){
                if(err){
                    deferred.reject(err);
                }else{
                    console.log(results);
                    deferred.resolve(results);
                }
            });
        return deferred.promise;
    }

    function deleteTreasureById(id)
    {
        var deferred = q.defer();
        TreasureModel.remove({"_id": id}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function createItem(item)
    {
        var deferred = q.defer();
        var newItem = new TreasureModel({
            name: item.name,
            quantity: item.quantity,
            destination: item.destination,
            price: item.price,
            description: item.description,
            image: item.image,
            seller: item.seller,
            status: item.status,
            interester: item.interester,
            message: item.message
        });

            // save movie to database
        newItem.save(function (err, doc) {

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

    function getAllTreasure()
    {
        //var deferred = q.defer();
        //deferred.resolve(listedItems);
        //return deferred.promise;

        var deferred = q.defer();
        TreasureModel.find(function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function getTreasureById(id)
    {
        var deferred = q.defer();
        TreasureModel.findOne({"_id": id}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

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