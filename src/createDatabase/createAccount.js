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
    phone : String
}, {
    collection: 'accounts'
});

const Account = mongoose.model('accounts', AccountSchema);

/*for (let i = 0; i < 5; ++i) {

    Account.create({

        account_id : "Accq" + i,
        name : "NULL",
        username : "quang" + i,
        password : String(i),
        role : "NULL",
        email : "quang" + i + "@gmail.com",
        phone : "0123456789" + i
    });
}*/

module.exports = Account;
