//Mongoose helps in 1.Connection (Server to Database), 2.Validation (checking everything) and 3.Structure

const mongoose = require('mongoose')

const main = async() => {
    try{
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/")
    console.log("Connected to MongoDB");
    // connection.disconnect()
    // console.log("Disconnected to MongoDB");
    }
    catch(err){
        console.log(err);
    }
}

main()

//Structure: 1.Schema(structure), 2. Constructor function(model) and 3. Data(and put into Database)