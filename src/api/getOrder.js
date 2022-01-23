const Order = require('../database/order');

const getOrder = (filter) => {

    var results = Order.find(filter)
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

const deleteOrder = (filter) => {

    var results = Order.deleteOne(filter)
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

const updateOrder = (filter, setValue) => {

    //console.log(filter);
    Order.updateOne(filter, setValue, err => {

        if (err) throw err;
        console.log("update information oke !!!");
    });
}

const addOrder = (newOrder) => {

    //console.log(filter);
    Order.create(newOrder);
}


module.exports = { getOrder, deleteOrder, updateOrder, addOrder };