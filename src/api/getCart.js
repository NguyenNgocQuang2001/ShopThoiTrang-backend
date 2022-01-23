const Cart = require('../database/cart');

const getCart = (filter) => {

    var results = Cart.find(filter)
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


const addCart = (newCart) => {

    //console.log(filter);
    Cart.create(newCart);
}

const updateCart = (filter, setValue) => {

    //console.log(filter);
    Cart.updateOne(filter, setValue, err => {

        if (err) throw err;
        console.log("update information oke !!!");
    });
}

const deleteCart = (filter) => {

    //console.log(filter);
    Cart.deleteOne(filter, err => {

        if (err) throw err;
        console.log("update information oke !!!");
    });
}

const deleteCarts = (filter) => {

    //console.log(filter);
    Cart.deleteMany(filter, err => {

        if (err) throw err;
        console.log("delete carts oke !!!");
    });
}

module.exports = { getCart, addCart, updateCart, deleteCart, deleteCarts };