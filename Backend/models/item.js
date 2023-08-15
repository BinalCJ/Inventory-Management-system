const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    productID : {
        type : String,
        required : true
    },
    itemName : {
        type : String,
        required : true
    },
    itemDescription : {
        type : String,
        required :true
    },
    quantity : {
        type : Number,
        required : true
    },
    vendorName : {
        type : String,
        required : true
    },
    expiryDate : {
        type : String,
        required : true
    },
    addedDate : {
        type : String,
        required : true
    }
})
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;