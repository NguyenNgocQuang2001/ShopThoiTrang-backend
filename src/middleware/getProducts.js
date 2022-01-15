const { getPro, countPro } = require('../api/getProduct');

const getProduct = async (req, res, next) => {

    var filter = req.body;
    //console.log(filter);
    var data = await getPro(filter);
    var allpage = await countPro(filter);
    //console.log(allpage);

    if (data) {

        res.json({

            allpage : allpage,
            data : data
        });

    } else {

        res.json({

            notify : "Không tìm thấy sản phẩm nào"
        })
    }
}


module.exports = getProduct;