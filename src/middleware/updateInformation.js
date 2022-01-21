const { updateUser, getImagebyUser } = require('../api/getAccount');
const { readdir, rename } = require("fs").promises;
const { resolve}  = require("path");
const fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeName(name) {

    var name_id = "";
    for (let i = 0; i < 15; ++i) {

        var c = getRandomInt(0, 26);
        name_id = name_id + String.fromCharCode(97 + c);
    }
    name = name + ' ' + name_id;
    return name;
}

const renameImg = (nameimg, newname) => {

    var publicpath = __dirname.split('\\').slice(0, __dirname.split('\\').length - 1).join('/');
    //console.log(publicpath);
    const imageDirPath = resolve(publicpath, "public");
    //console.log(imageDirPath);
    //console.log(imageDirPath + '/' + nameimg);
    rename(
        imageDirPath + '/' + nameimg,
        imageDirPath + '/' + newname,
        err => {
            throw err;
        }
    );
}

const deleteOldAvatar = (linked) => {

    var publicpath = __dirname.split('\\').slice(0, __dirname.split('\\').length - 1).join('/');
    var imageDirPath = resolve(publicpath, "public");
    linked = imageDirPath + '/' + linked;
    fs.stat(linked, function (err, stats) {
        //console.log(stats);//here we got all information of file in stats variable
     
        if (err) {
            //return console.error(err);
            console.log("loi xoa anh");
            return false;
        }
     
        fs.unlink(linked, function(err){

            if (err) {
                
                return console.log(err);
            }
            console.log('file deleted successfully');
        });  
    });
}

const updateInformation = async (req, res, next) => {

    try {

        var img = req.file;
        // console.log(img);
        // console.log(req.body);
        var typeimg = img.originalname.split('.')[img.originalname.split('.').length - 1];
        var pathname = img.destination.split('/').slice(3, img.destination.split('/').length).join('/');
        //console.log(img.originalname.split('.')[img.originalname.split('.').length - 1]);
        //console.log(img.destination.split('/').slice(3, img.destination.split('/').length).join('/'));
        //console.log(img.filename);

        var filter = {
            username : req.body.username
        };
        var oldImg = await getImagebyUser(filter);
        //console.log(oldImg);
        deleteOldAvatar(oldImg);
        var newname = makeName(img.filename);
        var data = {

            $set: {
                
                pathimg : pathname + '/' + newname + '.' + typeimg
            }
        }

        renameImg(pathname + '/' + img.filename, pathname + '/' + newname + '.' + typeimg);
        await updateUser(filter, data);
        res.json({

            notify : "Cập nhật thành công !!!"
        });
    } catch {

        res.json({

            notify : "Lỗi cập nhật ảnh !!!"
        })
    }
}

module.exports = updateInformation;
