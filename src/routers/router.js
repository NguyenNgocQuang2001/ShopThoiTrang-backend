const express = require('express');
const jwt = require('jsonwebtoken');
const { getAccount_id } = require('../api/getAccount');

const router = express.Router();


router.get('/', (req, res, next) => {

    res.json("server run oke :))");
});

router.get('/home', (req, res, next) => {

    res.json({
        data :"hello world !!!"
    });
});

router.get('/account', (req, res, next) => {

    res.json("there is no account :((");
});

router.post('/account',async (req, res, next) => {


    //console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;

    //console.log(username + '       ' + password);
    var account = await getAccount_id(username, password);
    //console.log(account);

    if (account) {

        var token = jwt.sign({account_id : account.account_id }, process.env.SECRET_TOKEN, {

            expiresIn : '24h'
        });
        
        res.json( {

            token : token
        })

        //res.json(account_id);
    } else {

        res.json('Tài khoản không tồn tại !!!');
    }
});


module.exports = router;