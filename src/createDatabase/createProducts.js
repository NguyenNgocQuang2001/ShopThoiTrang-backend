const mongoose = require('mongoose');
const { resolve } = require('path');
const { log } = require('console');

mongoose.connect('mongodb://localhost:27017/FashtionShop', function(err) {

    if (err) throw err;
    console.log("Connected to FashtionShop !!!");
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeName(name) {

    var name_id = "";
    for (let i = 0; i < 10; ++i) {

        var c = getRandomInt(0, 26);
        name_id = name_id + String.fromCharCode(97 + c);
    }
    name = name + ' ' + name_id;
    return name;
}

function createArrayPath(name, id, num) {

    var result = [];
    result.push("/images/products/" + name + '/' + name + id + '.jpg');
    for (var i = 0; i < 9; ++i) {

        var index = getRandomInt(0, num);
        var pathname = "/images/products/" + name + '/' + name + index + '.jpg';
        result.push(pathname);
    }
    return result;
}

var productline = [

    {
        type : "Vay",
        quantily : 344
    },
    {
        type : "Ao",
        quantily : 688
    },
    {
        type : "Quan",
        quantily : 536
    }
];


async function createPro(proline, quan) {

    for (let i = 0; i < quan; ++i) {

        await Product.create({
    
            product_id : proline + i,
            name : makeName(proline),
            description : "Chiếc " + proline + " Tình Yêu, làm cuộc sống bạn tươi đẹp hơn <3",
            pathimage : createArrayPath(proline,i , quan),
            type : proline,
            quantily : getRandomInt(3000, 10001),
            sold : 0,
            cost : getRandomInt(60, 10001),
            sale : getRandomInt(0, 81),
            createDate : Date.now()
        });
    }
}
async function createProline() {

    var len = productline.length;
    for (var i = 0; i < len; ++i) {

        await createPro(productline[i].type, productline[i].quantily);
    }
}

// createProline();

async function deleteData() {

    await Product.deleteMany({

        // type : "Vay"
    })
}

// deleteData();


// module.exports = Product;

// const dirpath = resolve(__dirname, "public");
// log(dirpath);


