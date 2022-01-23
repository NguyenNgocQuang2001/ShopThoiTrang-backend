const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FashtionShop', function(err) {

    if (err) throw err;
    console.log("Connected to FashtionShop !!!");
});

const Schema = mongoose.Schema;

const CartSchema = new Schema({

    product_id : String,
    quantily : Number,
    name_pro : String,
    cost_pro : Number,
    pathimg_pro : String,
    path_pro : String
}, {
    collection: 'cart'
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;
