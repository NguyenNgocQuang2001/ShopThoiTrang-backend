const jwt = require('jsonwebtoken');
const { getAccountIdByUsername, getAccountIdByPhone, getAccountIdByEmail } = require('../api/getAccount');

const accessUser = async (req, res, next) => {


    //console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;

    //console.log(username + '       ' + password);
    var account1 = await getAccountIdByUsername(username, password);
    var account2 = await getAccountIdByEmail(username, password);
    var account3 = await getAccountIdByPhone(username, password);
    var account = account1 || account2 || account3 ;
    //console.log(account);

    if (account) {

        var token = jwt.sign({account_id : account}, process.env.SECRET_TOKEN, {

            expiresIn : '24h'
        });
        
        res.json( {

            token : token
        })

        //res.json(account_id);
    } else {

        res.json('Tài khoản không tồn tại !!!');
    }
};

module.exports = accessUser;