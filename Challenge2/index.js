//This challenge is based on CRUD operation using fs module. 
console.log('Hey, Async');
const fs = require('fs');

fs.writeFile('bio.txt','This is Challenge 1', (err,res) => {
    return err;
});

fs.appendFile('bio.txt',' and I am loving it!', (err,res) => {
    return err;
});

const readFile = fs.readFile('bio.txt', 'utf-8', (err,res) => {
    return err;
});
console.log(readFile);

const renameFile = fs.rename('bio.txt','challengeFile.txt', (err,res) => {
    return err;
});

fs.unlinkSync('challengeFile.txt', (err,res) => {
    return err;
}); //It will delete the file.

fs.rmdir('abc', (err,res) => {
    return err;
}); //It will delete the folder/directory.



