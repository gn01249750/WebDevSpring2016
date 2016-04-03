/**
 * Created by PO on 3/17/2016.
 */
module.exports = function(app, model)
{
    app.post("/api/assignment/user", addUser);
    app.get("/api/assignment/user", getterHelper);
    app.get("/api/assignment/user/:id", getUserById);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUserById);

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

    function addUser(req,res)
    {
        var user = req.body;
        model.createUser(user)
            .then(function(response){
                res.status(200).send(response);
            }, function(err){
                res.status(400).send(err);
            })
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
}

