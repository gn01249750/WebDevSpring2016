/**
 * Created by PO on 3/23/2016.
 */
module.exports = function(app)
{
    var userModel = require("./models/user.model.js")();
    var formModel = require("./models/form.model.js")();
    require("./services/user.service.server.js")(app,userModel);
    require("./services/field.service.server.js")(app, formModel);
    require("./services/form.service.js")(app,formModel);
}