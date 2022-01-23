const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FashtionShop', function(err) {

    if (err) throw err;
    console.log("Connected to FashtionShop !!!");
});

const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    orderId : String,
    createDate : Date,
    shippedDate : Date,
    orderDetail : Array,
    status : String,
    orderCost : Number,
    receiver : String,
    phone : String,
    address : String
}, {
    collection: 'order'
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
