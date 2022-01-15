const Product = require('../database/product');

const getPro = (filter) => {

    // var results = Product.find(filter.filter)
    // .aggregate([
    
    // ])
    console.log(filter.filter);
    var results = Product
    //.find(filter.filter)
    .aggregate(filter.filter) // Array
    //.sort(filter.sort)  // object
    .skip(filter.skippage)
    //.sort(filter.sort)
    .limit(filter.limitdata)
    //.sort(filter.sort)
    .then(data => {
        //console.log(data);

        return data;
    })
    .catch(err => {

        console.log("loi server");
        //return "this is no account !!!";
    });

    return results;
}

const countPro = (filter) => {

    //var results = Product.countDocuments(filter.filter)
    var results = Product
    //.find(filter.filter)
    .aggregate(filter.count)
    //.itcount()
    .then(data => {
        //console.log(data);

        return data[0].totalpage;
    })
    .catch(err => {

        console.log("loi server");
        //return "this is no account !!!";
    });

    return results;
}

// async function getp() {

//     var ff = '^Vay c'
//     var filter = {
//         name : { $regex : ff, $options : "i" }
//     }
//     var ans = await getPro(filter);
//     var num = await countPro(filter);
//     console.log(ans);
//     console.log(num);
// }

// getp();

module.exports = { getPro, countPro };