const jwt = require('jsonwebtoken');
const { authenAcc_id, getUserByun } = require('../api/getAccount');

const checkToken = async (req, res, next) => {

    //console.log(req.body);
    var token = req.body.token;
    var acc = jwt.verify(token, process.env.SECRET_TOKEN, (err, data) => {

        if (err) return "cannot decryption";
        return data;
    });
    var authen = await authenAcc_id(acc.account_id);
    if (authen) {

        next();
    } else {
        res.json({authen : false});
    }
}

const getInfo = async (req, res, next) => {

    var filter = req.body.filter;
    var data = await getUserByun(filter);
    res.json({

        data : data
    });

}

module.exports = { checkToken, getInfo};
