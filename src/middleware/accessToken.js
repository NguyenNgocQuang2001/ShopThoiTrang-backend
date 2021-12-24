const jwt = require('jsonwebtoken');
const { authenAcc_id } = require('../api/getAccount');

const accessToken = async (req, res, next) => {

    var token = req.body.token;
    var acc = jwt.verify(token, process.env.SECRET_TOKEN, (err, data) => {

        if (err) return "cannot decryption";
        return data;
    });
    var authen = await authenAcc_id(acc.account_id);
    if (authen) {

        res.json({authen : true});
    } else {
        res.json({authen : false});
    }
}

module.exports = accessToken;
