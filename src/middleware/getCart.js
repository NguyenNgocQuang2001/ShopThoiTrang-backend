const { getCart, addCart, updateCart, deleteCart, deleteCarts } = require('../api/getCart');

const getcart = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await getCart(filter);
    res.json({

        data : data
    });

}

const addcart = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await addCart(filter);
    res.json({

        notify : "thêm thành công"
    });

}

const updatecart = async (req, res, next) => {

    var filter = req.body.filter;
    var value = req.body.value;
    var data = await updateCart(filter, value);
    res.json({

        notify : "thêm thành công"
    });

}

const deletecart = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await deleteCart(filter);
    res.json({

        notify : "xóa thành công"
    });

}

const deletecarts = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await deleteCarts(filter);
    res.json({

        notify : "xóa thành công"
    });

}

module.exports = { getcart, addcart, updatecart, deletecart, deletecarts };
