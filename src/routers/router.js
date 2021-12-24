const express = require('express');
//const jwt = require('jsonwebtoken');
const accessUser = require('../middleware/accessUser');
const accessToken = require('../middleware/accessToken');
const authenUser = require('../middleware/authenUser');

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

router.post('/account', accessUser);

router.post('/access', accessToken);

router.post('/signup', authenUser);

module.exports = router;