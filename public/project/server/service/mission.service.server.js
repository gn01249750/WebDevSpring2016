//var passport         = require('passport');
//var LocalStrategy    = require('passport-local').Strategy;
//var mongoose         = require("mongoose");

module.exports = function(app, model)
{
    //app.get("/api/project/treasure/treasure", getAllTreasures);
    //app.get("/api/project/treasure/treasure/:treasureId", getTreasureById);
    //app.get("/api/assignment/admin/user", getterHelper);
    //app.get("/api/assignment/admin/user/:userId", getUserById);
    //app.post("/api/assignment/admin/user", addUser);
    //app.delete("/api/assignment/admin/user/:userId", deleteUserById);
    //app.put("/api/assignment/admin/user/:userId", updateUser);
    //app.get("/api/assignment/admin/user", getterHelper);

    //app.post("/api/assignment/login", passport.authenticate('local'), login);
    //app.get("/api/assignment/loggedin", loggedIn);
    //app.post("/api/assignment/logout", logout);
    //app.post("/api/assignment/register", register);
    //app.post("/api/assignment/user", addUser);

    //app.get("/api/assignment/user/:id", getUserById);
    //app.put("/api/assignment/user/:id", updateUser);
    //app.delete("/api/assignment/user/:id", deleteUserById);

    //passport.use(new LocalStrategy(localStrategy));
    //passport.serializeUser(serializeUser);
    //passport.deserializeUser(deserializeUser);

    function getTreasureById(req, res)
    {
        var id = req.params["treasureId"];
        model.getTreasureById(id)
            .then(function(response){
                res.status(200).json(response);
            }, function(err){
                res.status(400).send(err);
            });
    }


    function getAllTreasures(req, res)
    {
        model.getAllTreasure()
                    .then(function(response){
                        res.status(200).json(response);
                    }, function(err){
                        res.status(400).send(err);
                    });
    }

    //function updateUser(req, res)
    //{
    //    var id2 = req.params["userId"];
    //    var user = req.body;
    //    console.log(id2);
    //    model.updateUser(id2,user)
    //        .then(function(response){
    //            res.status(200).send("");
    //        }, function(err){
    //            res.status(400).send(err);
    //        });
    //}
    //
    //function deleteUserById(req,res)
    //{
    //    var id2 = req.params["userId"];
    //    model.deleteUser(id2)
    //        .then(function(response){
    //            res.status(200).send("");
    //        }, function(err){
    //            res.send(err);
    //        })
    //}
    //
    //function getterHelper(req,res)
    //{
    //    var username2 = req.query.username;
    //    var password2 = req.query.password;
    //    if(username2 != null && password2 != null)
    //    {
    //        var credential = {"username":username2, "password":password2};
    //        model.findUserByCredentials(credential)
    //            .then(function(response){
    //                res.status(200).json(response);
    //            }, function(err){
    //                res.status(400).send(err);
    //            });
    //    }else if(username2 != null)
    //    {
    //        model.findUserByUsername(username2)
    //            .then(function(response){
    //                res.status(200).json(response);
    //            }, function(err){
    //                res.status(400).send(err);
    //            });
    //    }else{
    //        model.findAllUser()
    //            .then(function(response){
    //                res.status(200).json(response);
    //            }, function(err){
    //                res.status(400).send(err);
    //            });
    //    }
    //}
    //
    //function addUser(req,res)
    //{
    //    var user = req.body;
    //    model.createUser(user)
    //        .then(function(response){
    //            res.status(200).send(response);
    //        }, function(err){
    //            res.status(400).send(err);
    //        })
    //}
    //
    //function getUserById(req,res)
    //{
    //    var idd = req.params["userId"];
    //    model.findUserById(idd)
    //        .then(function(response){
    //            res.status(200).send(response);
    //        }, function(err){
    //            res.status(400).send(err);
    //        })
    //}
}

