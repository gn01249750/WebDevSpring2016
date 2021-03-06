module.exports = function(mongoose) {

    var fields = require("./field.schema.server.js")(mongoose);

    var FormSchema = mongoose.Schema({
        userId: String,
        title: String,
        fields: [fields],
        created: {type: Date, default: new Date()},
        updated: {type: Date, default: new Date()}
    }, {collection: "form"});

    return FormSchema;

};