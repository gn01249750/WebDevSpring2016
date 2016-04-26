//var passport         = require('passport');
//var LocalStrategy    = require('passport-local').Strategy;
//var mongoose         = require("mongoose");
var LocalStrategy    = require('passport-local').Strategy;
module.exports = function(app, model, passport)
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
    var auth = authenticated;
    app.post("/api/project/login", passport.authenticate('local'), login);
    app.post("/api/project/user/register", registerUser);
    app.post("/api/project/logout", logout);
    app.delete("/api/project/user/:id", deleteUserById);
    app.get("/api/project/user/:id", getUserById);
    app.get("/api/project/user", getterHelper);
    app.get("/api/project/loggedin", loggedIn);
    app.put("/api/project/user/:id", updateUser);

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function authenticated (req, res, next)
    {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    };


    function localStrategy(username, password, done) {
        model
            .findUserByCredentials({username: username, password: password})
            .then(
                function(user) {
                    if (!user) { return done(null, false); }
                    return done(null, user);
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        model
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function updateUser(req, res)
    {
        var id2 = req.params["id"];
        var user = req.body;

        model.updateUser(id2,user)
            .then(function(response){
                res.status(200).send("");
            }, function(err){
                res.status(400).send(err);
            });
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function loggedIn(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function getterHelper(req,res)
    {
        var username2 = req.query.username;
        var password2 = req.query.password;
        if(username2 != null && password2 != null)
        {
            var credential = {"username":username2, "password":password2};
            model.findUserByCredentials(credential)
                .then(function(response){
                    res.status(200).json(response);
                }, function(err){
                    res.status(400).send(err);
                });
        }else if(username2 != null)
        {
            model.findUserByUsername(username2)
                .then(function(response){
                    res.status(200).json(response);
                }, function(err){
                    res.status(400).send(err);
                });
        }else{
            model.findAllUser()
                .then(function(response){
                    res.status(200).json(response);
                }, function(err){
                    res.status(400).send(err);
                });
        }
    }

    function getUserById(req,res)
    {
        var idd = req.params["id"];
        model.findUserById(idd)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            })
    }

    function deleteUserById(req,res)
    {
        var id2 = req.params["id"];
        model.deleteUser(id2)
            .then(function(response){
                res.status(200).send("");
            }, function(err){
                res.send(err);
            })
    }



    function registerUser(req, res)
    {
        //var user = req.body;
        //model.register(user)
        //    .then(function(response){
        //        res.status(200).send(response);
        //    }, function(err){
        //        res.status(400).send(err);
        //    })

        var newUser = req.body;
        model
            .findUserByUsername(newUser.username)
            .then(
                function(user){
                    if(user) {
                        res.json(null);
                    } else {
                        return model.register(newUser);
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            )
            .then(
                function(user){
                    if(user){
                        req.login(user, function(err) {
                            if(err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    //function getTreasureById(req, res)
    //{
    //    var id = req.params["treasureId"];
    //    model.getTreasureById(id)
    //        .then(function(response){
    //            res.status(200).json(response);
    //        }, function(err){
    //            res.status(400).send(err);
    //        });
    //}
    //
    //
    //function getAllTreasures(req, res)
    //{
    //    model.getAllTreasure()
    //        .then(function(response){
    //            res.status(200).json(response);
    //        }, function(err){
    //            res.status(400).send(err);
    //        });
    //}

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

