const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://127.0.0.1:27017/connecting", {
  socketTimeoutMS: 30000
});

//Basic Structure
const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    age: {type:Number, required:true},
    city: {type:String, required:true},
    language: {type:String, required:true},
    is_married: {type:Boolean, required:true},
},{
    versionKey: false
})

//Model for the data
const UserModel = mongoose.model("user",userSchema)

module.exports = {
    connection,
    UserModel
}