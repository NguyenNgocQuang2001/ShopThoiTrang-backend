const { getAccIdByPhone, getAccIdByEmail, createAcc } = require('../api/getAccount');

const authenUser = async (req, res, next) => {


    //console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var phone = req.body.phone;

    //console.log(username + '       ' + password);
    var account1 = await getAccIdByEmail(email);
    var account2 = await getAccIdByPhone(phone);
    var account = account1 || account2 ;
    //console.log(account);

    if (account) {
        
        var answer = 'Số điện thoại đã tồn tại !!!';
        if (account == account1) {
            answer = 'Email đã tồn tại !!!';
        }
        res.json( {

            ans : answer
        });

        //res.json(account_id);
    } else {

        createAcc(name, password, email, phone);
        res.json({

            ans : 'Tạo tài khoản thành công'
        });
    }
};

module.exports = authenUser;