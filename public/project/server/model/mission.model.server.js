/**
 * Created by PO on 4/23/2016.
 */
var q = require("q");

module.exports = function(db, mongoose)
{

    var users = [
        {
            "_id": "1",
            "name":"watch",
            "quantity":"1",
            "destination":["Japan", "China"],
            "price":["$50", "$80"],
            "description": "US made watch, good quality, limited edition. Shipping available to Japan and China",
            "image": "http://www.danpontefract.com/wp-content/uploads/2013/05/watch.jpg"
        }

    ];


    //var formSchema = require("./form.schema.server.js")(mongoose);
    //var Form  = mongoose.model("Form", formSchema);

    var api = {

    };
    return api;

    //function getTreasureById(id)
    //{
    //    console.log("dd" + id);
    //    var deferred = q.defer();
    //    var temp = null;
    //    var gg = [];
    //    for(i = 0; i < listedItems.length; i++)
    //    {
    //        console.log("test");
    //        if(listedItems[i]._id == id){
    //
    //            temp = listedItems[i];
    //            break;
    //        }
    //    }
    //    if(temp)
    //    {
    //        gg.push(temp);
    //        deferred.resolve(gg);
    //    }else{
    //        deferred.reject();
    //    }
    //    return deferred.promise;
    //}


}