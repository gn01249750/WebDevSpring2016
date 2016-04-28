module.exports = function(mongoose) {

    var statusType = ["complete", "open", "entrusted"];

    var MissionSchema = mongoose.Schema({
        name: String,
        quantity: String,
        destination: String,
        price: String,
        description: String,
        image: String,
        buyer: String,
        status: {type: String, enum: statusType},
        interester: [String],
        message: [String]
    }, {collection: "projectmission"});

    return MissionSchema;

};
