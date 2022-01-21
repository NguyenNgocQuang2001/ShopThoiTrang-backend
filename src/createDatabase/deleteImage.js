var fs = require('fs');
const { resolve}  = require("path");

var publicpath = __dirname.split('\\').slice(0, __dirname.split('\\').length - 1).join('/');
var imageDirPath = resolve(publicpath, "public");
var linked = imageDirPath + "/images/testimg/0a1b6f9940a7464d9025e2d342b7db61.jpg";
fs.stat(linked, function (err, stats) {
    console.log(stats);//here we got all information of file in stats variable
 
    if (err) {
        return console.error(err);
    }
 
    fs.unlink(linked, function(err){
         if(err) return console.log(err);
         console.log('file deleted successfully');
    });  
});