module.exports = function(app, db, mongoose, passport)
{
    //var userModel = require("./models/user.model.server.js")(db, mongoose);
    //var formModel = require("./models/form.model.server.js")(db, mongoose);
    //var fieldModel = require("./models/field.model.server.js")(db, mongoose);
    //require("./services/user.service.server.js")(app,userModel, passport);
    //require("./services/field.service.server.js")(app, fieldModel);
    //require("./services/form.service.server.js")(app,formModel);
    var tresureModel = require("./model/treasure.model.server.js")(app, mongoose);
    var userModel = require("./model/user.model.server.js")(app, mongoose);
    var missionModel = require("./model/mission.model.server.js")(app, mongoose);
    require("./service/treasure.service.server.js")(app, tresureModel);
    require("./service/user.service.server.js")(app,userModel, passport);
    require("./service/mission.service.server.js")(app, missionModel);
}