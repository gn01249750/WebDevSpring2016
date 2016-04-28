//var passport         = require('passport');
//var LocalStrategy    = require('passport-local').Strategy;
//var mongoose         = require("mongoose");

module.exports = function(app, model)
{
    app.get("/api/project/mission/mission", getAllMissions);
    app.post("/api/project/mission", addMission);
    app.get("/api/project/mission/mission/:missionId", getMissionById);
    app.put("/api/project/mission/:missionId", updateMissionById);


    function updateMissionById(req, res)
    {
        var id = req.params["missionId"];
        var mission = req.body;

        model.updateMissionById(id, mission)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            });
    }

    function getMissionById(req, res)
    {
        var id = req.params["missionId"];
        model.getMissionById(id)
            .then(function(response){
                res.status(200).json(response);
            }, function(err){
                res.status(400).send(err);
            });
    }


    function getAllMissions(req, res)
    {
        model.getAllMissions()
                    .then(function(response){
                        res.status(200).json(response);
                    }, function(err){
                        res.status(400).send(err);
                    });
    }

    function addMission(req, res)
    {
        var item = req.body;
        model.createItem(item)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            })
    }

}

