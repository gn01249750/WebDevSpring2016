module.exports = function(mongoose) {

    var rolesTypes = ["student", "faculty", "admin"];

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: [String],
        phones: [String],
        "roles": [{type: String, enum: rolesTypes, default: "student"}]
    }, {collection: "user"});

    return UserSchema;

};