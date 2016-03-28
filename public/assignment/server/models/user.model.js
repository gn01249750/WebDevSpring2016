/**
 * Created by PO on 3/17/2016.
 */
var mock = require("./user.mock.json");

module.exports = function()
{
    //var CourseSchema = require("./course.server.schema.js")(mongoose);
    //var CourseModel = mongoose.model("CourseModel", CourseSchema);
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

    function createUser(user)
    {
        mock.push(user);
        return mock;
    }

    function findAllUser()
    {
        return mock;
    }

    function findUserById(id)
    {
        for(var u in mock) {
            if( mock[u]._id == id) {
                return mock[u];
            }
        }
        return null;
    }

    function updateUser(id, user)
    {
        for(var u in mock)
        {
            if(mock[u]._id == id)
            {
                mock[u] = user;
            }
        }
    }

    function deleteUser(id){
        var curIndex = -1;
        for(var u in mock){
            if(mock[u]._id==id){
                curIndex = u;
                break;
            }
        }
        if(curIndex != -1){
            mock.splice(curIndex,1);
        }
    }

    function findUserByUsername(username){
        for(var u in mock) {
            if( mock[u].username == username) {
                return mock[u];
            }
        }
        return null;
    }

    function findUserByCredentials(credentials){
        for(var u in mock) {

            if(mock[u].username == credentials.username &&
            mock[u].password == credentials.password){
                return mock[u];
            }
        }
        return null;
    }
}