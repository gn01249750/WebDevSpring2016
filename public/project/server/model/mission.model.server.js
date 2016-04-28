/**
 * Created by PO on 4/23/2016.
 */
var q = require("q");

module.exports = function(db, mongoose)
{



    var missionSchema = require("./mission.schema.server.js")(mongoose);
    var MissionModel = mongoose.model("MissionModel", missionSchema);

    var api = {
        getAllMissions: getAllMissions,
        createItem: createItem,
        getMissionById: getMissionById,
        updateMissionById: updateMissionById
    };
    return api;

    function updateMissionById(id, mission)
    {
        var deferred = q.defer();
        MissionModel.update(
            {_id: id},
            {
                name: mission.name,
                quantity: mission.quantity,
                destination: mission.destination,
                price: mission.price,
                description: mission.description,
                image: mission.image,
                buyer: mission.buyer,
                status: mission.status,
                interester: mission.interester,
                message: mission.message
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

    function getMissionById(id)
    {
        var deferred = q.defer();
        MissionModel.findOne({"_id": id}, function(err, result){
            if(err){
                deferred.reject(err);
            }else{
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }

    function getAllMissions()
    {
        var deferred = q.defer();
        MissionModel.find(function(err, result){
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
        var newItem = new MissionModel({
            name: item.name,
            quantity: item.quantity,
            destination: item.destination,
            price: item.price,
            description: item.description,
            image: item.image,
            buyer: item.buyer,
            status: item.status,
            interester: item.interester,
            message: item.message
        });

        newItem.save(function (err, doc) {
            if (err) {
                defferred.reject(err)
            } else {
                deferred.resolve(doc);
            }

        });

        return deferred.promise;
    }

}