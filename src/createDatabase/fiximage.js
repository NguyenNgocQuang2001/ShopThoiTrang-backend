const { fs, readdir, rename } = require("fs").promises;
//const { readdirSync, rename } = require('fs');
const { resolve}  = require("path");

// async function findSalesFiles(folderName) {

//   const proFiles = await fs.readdir(folderName);
//   console.log(proFiles.length);
//   //return proFiles;
// }

// async function main() {

//   //await findSalesFiles("src\\public\\products");
//   var list =  await fs.readdir("src\\public\\products", {withFileTypes : true});
//   for (const item of list) {

//     console.log(item.isDirectory()); //=> f, t, t
//   }
// }

// main();

const imageDirPath = resolve(__dirname, "anh");

// async function renameImg() {

//   var files = await readdir(imageDirPath, { withFileTypes : true});
//   files.forEach((name, index) => {

//     const oldPath = imageDirPath + '/' + name.name;
//     //console.log(name.name);
  
//     // lowercasing the filename
//     const newPath = imageDirPath + '/' + index + '.jpg';
  
//     // Rename file
//     rename(
//       oldPath,
//       newPath,
//       err => console.log(err)
//     );
//   });
// }

// console.log(imageDirPath);

async function renameImg() {

  var list = await readdir(imageDirPath, { withFileTypes : true});
  for (var [index, value] of list.entries()) {

      //console.log(value.isDirectory());
      //console.log(index + " : " + value.name);

      if (value.isDirectory() == false) {

        rename(
          imageDirPath + '/' + value.name,
          imageDirPath + '/hihi' + index + '.jpg',
          err => console(err) 
        )
      }
  }
}

renameImg();