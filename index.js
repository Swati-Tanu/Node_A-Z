// const square = {
//     area : (a) => (a*a),
//     perimeter : (a) => (4*a)
// }

//Everything in Node.js runs inside this function. It is same like global object of JavaScript.
// (function (exports, require, module, __filename, __direname){
    
// })

console.log("File Name: ", __filename); //C:\Users\swati\Documents\Node_A-Z\index.js
console.log("Directory Name: ",__dirname); //C:\Users\swati\Documents\Node_A-Z

//File-based Modules: We can access any file using module.export and require function.
const square = require('./square'); //When using file-based module, we need to give './' for navigation.

const calSqaure = (a) => {
    console.log(`The value of a is ${a} and it's area is ` +square.area(a));
    console.log(`The value of a is ${a} and it's peri is ` +square.perimeter(a));
}
calSqaure(5); //The value of a is 5 and it's area is 25 The value of a is 5 and it's peri is 20


