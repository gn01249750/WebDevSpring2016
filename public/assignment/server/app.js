/**
 * Created by PO on 3/23/2016.
 */
module.exports = function(app, db, mongoose, passport)
{
    var userModel = require("./models/user.model.server.js")(db, mongoose);
    var formModel = require("./models/form.model.server.js")(db, mongoose);
    var fieldModel = require("./models/field.model.server.js")(db, mongoose);
    require("./services/user.service.server.js")(app,userModel, passport);
    require("./services/field.service.server.js")(app, fieldModel);
    require("./services/form.service.js")(app,formModel);
}