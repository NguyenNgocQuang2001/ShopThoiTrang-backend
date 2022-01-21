const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FashtionShop', function(err) {

    if (err) throw err;
    console.log("Connected to FashtionShop !!!");
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({

    account_id : String,
    name : String,
    username : String,
    password : String,
    role : String,
    email : String,
    phone : String,
    pathimg : String,
    address : String,
    birthday : Date,
    sex : Boolean
}, {
    collection: 'accounts'
});

const Account = mongoose.model('accounts', AccountSchema);

for (let i = 0; i < 2; ++i) {

    Account.create({

        account_id : "Accq" + i,
        name : null,
        username : "quang" + i,
        password : String(i),
        role : null,
        email : "quang" + i + "@gmail.com",
        phone : "0123456789" + i,
        pathimg : null,
        address : null,
        sex : null,
        birthday : null
    });
}

module.exports = Account;
