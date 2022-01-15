const mongoose = require('mongoose');
// const { resolve } = require('path');
// const { log } = require('console');

mongoose.connect('mongodb://localhost:27017/FashtionShop', function(err) {

    if (err) throw err;
    //console.log("Connected to FashtionShop !!!");
});

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    product_id : String,
    name : String,
    description : String,
    pathimage : Array,
    type : String,
    quantily : Number,
    sold : Number,
    cost : Number,
    sale : Number,
    createDate : Date
}, {
    collection: 'products'
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;


