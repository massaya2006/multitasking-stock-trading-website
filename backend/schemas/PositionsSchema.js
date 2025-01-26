const {Schema} =require("mongoose");

const PositionsSchema=new Schema({

    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isloss:Boolean,

});

module.exports={PositionsSchema};