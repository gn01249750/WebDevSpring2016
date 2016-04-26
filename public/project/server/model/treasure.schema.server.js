module.exports = function(mongoose) {

    var statusType = ["complete", "open"];

    var TreasureSchema = mongoose.Schema({
        name: String,
        quantity: String,
        destination: [String],
        price: [String],
        description: String,
        image: String,
        seller: String,
        status: {type: String, enum: statusType},
        interester: [String],
        message: [String]
    }, {collection: "projecttreasure"});

    return TreasureSchema;

};
