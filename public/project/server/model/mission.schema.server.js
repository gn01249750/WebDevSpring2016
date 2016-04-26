module.exports = function(mongoose) {

    var MissionSchema = mongoose.Schema({
        name: String,
        quantity: String,
        destination: [String],
        price: [String],
        description: String,
        image: String,
        buyer: String
    }, {collection: "projectmission"});

    return MissionSchema;

};
