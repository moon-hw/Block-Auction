const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const auctionSchema = new Schema({
    sellserId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    buyserId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    participateId : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }],
    availableId : [{
        type : mongoose.SchemaTypes.ObjectId,
        ref: "AvailableBuyer"
    }],
    endPrice : Number,
    state : String,
    endDate : Date
});

module.exports = mongoose.model("Auction", auctionSchema);