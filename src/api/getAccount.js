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

const getAccount_id = (username, password) => {

    var results = Account.findOne({

        username : username,
        password : password
    })
    .then(data => {
        //console.log(data);
        return data;
    })
    .catch(err => {

        console.log("loi server");
    });

    return results;
}

module.exports = { getAccount_id };