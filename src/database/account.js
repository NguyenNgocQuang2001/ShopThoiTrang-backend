const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FashtionShop', function(err) {

    if (err) {

        console.log('Ko ket noi dc vs database :((');
        //throw err;
    } else {
        //console.log("Connected to FashtionShop !!!");
    }
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({

    account_id : String,
    name : String,
    username : String,
    password : String,
    role : String,
    email : String,
    phone : String
}, {
    collection: 'accounts'
});

const Account = mongoose.model('accounts', AccountSchema);

module.exports = Account;
