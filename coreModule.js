//Core Modules: Built-in Modules (part of core Node). Eg; path, fs, os, http, util, etc. 

//Path Module
const path = require('path'); //When using core module, we don't not to give './'.

const fileName = path.join(__filename);
console.log("File Name: ", fileName); //C:\Users\swati\Documents\Node_A-Z\coreModule.js

const baseName = path.basename(fileName);
console.log("Base Name: ", baseName); //coreModule.js

const extensionName = path.extname(baseName);
console.log("Extension Name: ", extensionName); //.js

//File-system Module (fs)
const fs = require('fs');

fs.copyFileSync("text.txt", "text2.txt");
console.log("New file named text2.txt is created!");

