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
        phone : phone,
        pathimg : null,
        address : null
    };
    
    await Account.create(acc);

}

const getUserName = (accid) => {

    var results = Account.findOne({

        account_id : accid
    })
    .then(data => {
        //console.log(data);
        return data.username;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}

const updateUser = (filter, setValue) => {

    //console.log(filter);
    Account.updateOne(filter, setValue, err => {

        if (err) throw err;
        console.log("update information oke !!!");
    });
}

const getUserByun = (filter) => {

    var results = Account
    .aggregate(filter) // Array
    .then(data => {
        //console.log(data);

        return data;
    })
    .catch(err => {

        console.log("loi server");
        //return "this is no account !!!";
    });

    return results;
}

const getUserByFilter = (filter) => {

    var results = Account
    .aggregate(filter) // Array
    .then(data => {
        //console.log(data);

        return data;
    })
    .catch(err => {

        console.log("loi server");
        //return "this is no account !!!";
    });

    return results;
}

const updateUserAttr = (filter, setValue) => {

    Account.updateOne(filter, setValue, err => {

        if (err) throw err;
        console.log("update information oke !!!");
    });
}

const getImagebyUser = (filter) => {

    var result = Account.findOne(filter)
    .then(data => {

        return data.pathimg;
    })
    .catch(err => {

        console.log("Lỗi server !!!");
    });

    return result;
}


module.exports = { 
    getAccountIdByEmail, getAccountIdByPhone, getAccountIdByUsername,
    authenAcc_id, getAccIdByEmail, getAccIdByPhone, getAccIdByUsername, 
    createAcc, getUserName, updateUser, getUserByun, getUserByFilter,
    updateUserAttr, getImagebyUser
};