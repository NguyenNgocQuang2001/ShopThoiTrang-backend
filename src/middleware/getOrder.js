const { getOrder, deleteOrder, updateOrder, addOrder } = require('../api/getOrder');

const getorder = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await getOrder(filter);
    res.json({

        data : data
    });

}

const updateorder = async (req, res, next) => {

    var filter = req.body.filter;
    var value = req.body.value;
    var data = await updateOrder(filter, value);
    res.json({

        notify : "cập nhật thành công"
    });

}

const deleteorder = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await deleteOrder(filter);
    res.json({

        notify : "xóa thành công"
    });

}

const addorder = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await addOrder(filter);
    res.json({

        notify : "thêm thành công"
    });

}

module.exports = { getorder, deleteorder, updateorder, addorder };
