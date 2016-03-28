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
        model.updateUser(id2,user);
        res.status(200).send("");
    }

    function deleteUserById(req,res)
    {
        var id2 = req.params["id"];
        model.deleteUser(id2);
        res.status(200).send("");
    }

    function getterHelper(req,res)
    {
        var username2 = req.query.username;
        var password2 = req.query.password;
        if(username2 != null && password2 != null)
        {
            var credential = {"username":username2, "password":password2};
            var user = model.findUserByCredentials(credential);
            res.status(200).send(user);
        }else if(username2 != null)
        {
            var user = model.findUserByUsername(username2);
            res.status(200).send(user);
        }else{
            var users = model.findAllUser();
            res.status(200).send(users);
        }
    }

    function addUser(req,res)
    {
        var user = req.body;
        var users = model.createUser(user);
        res.status(200).send(users);
    }

    function getUserById(req,res)
    {
        var idd = req.params["id"];
        var user = model.findUserById(idd);
        res.status(200).json(user);
    }
}

