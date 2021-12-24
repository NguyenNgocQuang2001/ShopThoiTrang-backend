const Account = require('../database/account');

/*const getAccount = (username, password) => {

    return new Promise((resolve, reject) => {

        Account.findOne( {

            username : username,
            password : password
        }, (err, results) => {

            if (err) return reject(err);
            return resolve(results);
        })
    });
};

const getAccount_id = async (username, password) => {

    const results = await getAccount(username, password);
    return results;
}*/

const authenAcc_id = (acc_id) => {

    var results = Account.findOne({

        account_id : acc_id
    })
    .then(data => {
        //console.log(data);
        return data.account_id;
    })
    .catch(err => {

        console.log("loi server");
        //return "this is no account !!!";
    });

    return results;
}

const getAccountIdByUsername = (username, password) => {

    var results = Account.findOne({

        username : username,
        password : password
    })
    .then(data => {
        //console.log(data);
        return data.account_id;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}

const getAccountIdByEmail = (email, password) => {

    var results = Account.findOne({

        email : email,
        password : password
    })
    .then(data => {
        //console.log(data);
        return data.account_id;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}

const getAccountIdByPhone = (phone, password) => {

    var results = Account.findOne({

        phone : phone,
        password : password
    })
    .then(data => {
        //console.log(data);
        return data.account_id;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}

//////////////   ***************  /////////////////

const getAccIdByUsername = (username) => {

    var results = Account.findOne({

        username : username
    })
    .then(data => {
        //console.log(data);
        return data.account_id;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}

const getAccIdByEmail = (email, password) => {

    var results = Account.findOne({

        email : email
    })
    .then(data => {
        //console.log(data);
        return data.account_id;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}

const getAccIdByPhone = (phone, password) => {

    var results = Account.findOne({

        phone : phone
    })
    .then(data => {
        //console.log(data);
        return data.account_id;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}


const createAcc = async (name, password, email, phone) => {

    var len = await Account.collection.count();
    var acc_id = 'Acc' + name[0] + '_' + len;
    acc_id = String(acc_id);
    var username = name.split(' ')[0] + len;
    username = String(username);

    var acc = {

        account_id : acc_id,
        name : name,
        username : username,
        password : password,
        role : 'customer',
        email : email,
        phone : phone
    };
    
    await Account.create(acc);

}

module.exports = { 
    getAccountIdByEmail, getAccountIdByPhone, getAccountIdByUsername, authenAcc_id,
    getAccIdByEmail, getAccIdByPhone, getAccIdByUsername, createAcc
};