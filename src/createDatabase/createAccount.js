const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FashtionShop', function(err) {

    if (err) throw err;
    console.log("Connected to FashtionShop !!!");
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({

    account_id : String,
    username : String,
    password : String,
    role : String,
    role_id : String
}, {
    collection: 'accounts'
});

const Account = mongoose.model('accounts', AccountSchema);

/*for (let i = 0; i < 3; ++i) {

    Account.create({

        account_id : "Accq" + i,
        username : "quang" + i,
        password : String(i),
        role : "NULL",
        role_id : "NULL"
    });
}*/

module.exports = Account;
