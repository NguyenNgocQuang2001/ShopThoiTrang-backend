const { getUserByFilter, updateUserAttr } = require('../api/getAccount');

const checkExist = async (req, res, next) => {

    var filter = req.body.exist;
    var data = await getUserByFilter(filter);
    //console.log(data);
    if (data.length == 0) {
        next();
    } else {
        res.json({

            notify : "Tên người dùng, số điện thoại hoặc email đã tồn tại !!!"
        });
    }

}

const fixInfo = async (req, res, next) => {

    var filter = req.body.filter;
    var fix = req.body.fix;
    //console.log(filter);
    //console.log(fix);
    await updateUserAttr(filter, fix);
    //console.log(data);
    res.json({

        notify : "Cập nhật thành công !!!"
    });

}

module.exports = { checkExist, fixInfo};
