module.exports = function(mongoose) {

    //var mission = require("./mission.schema.server.js")(mongoose);
    //var treasure = require("./treasure.schema.server.js")(mongoose);

    var rolesTypes = ["buyer", "seller", "admin"];

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: String,
        country: String,
        roles: {type: String, enum: rolesTypes},
        missions: [String],
        treasures: [String],
        phones: String,
        image: String
    }, {collection: "projectuser"});

    return UserSchema;

};