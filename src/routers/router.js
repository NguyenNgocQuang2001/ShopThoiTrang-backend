const express = require('express');
const multer  = require('multer');
//const jwt = require('jsonwebtoken');
const accessUser = require('../middleware/accessUser');
const accessToken = require('../middleware/accessToken');
const authenUser = require('../middleware/authenUser');
const getProduct = require('../middleware/getProducts');
const updateInformation = require('../middleware/updateInformation');
const { getInfo, checkToken} = require('../middleware/getInfo');
const { checkExist, fixInfo } = require('../middleware/fixInformation');
const router = express.Router();
const uploadimg = multer({ dest: './src/public/images/usernames' });

// router.get('/', (req, res, next) => {

//     res.json("server run oke :))");
//     //next();
// });

// router.get('/home', (req, res, next) => {

//     res.json({
//         data :"hello world !!!"
//     });
// });

// router.get('/account', (req, res, next) => {

//     res.json("there is no account :((");
// });

router.post('/account', accessUser);

router.post('/access', accessToken);

router.post('/signup', authenUser);

router.post('/products', getProduct);

router.post('/information', uploadimg.single('avatar'), checkToken, updateInformation);

router.post('/getinfo', checkToken, getInfo);

router.post('/fixinfo', checkToken, checkExist, fixInfo);

module.exports = router;