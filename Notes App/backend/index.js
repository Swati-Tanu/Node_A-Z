const express = require('express');
const {connection} = require("./db")
const {userRouter} = require("./routes/User.routes")
const mongoose = require('mongoose')

const app = express()

const status = mongoose.set('strictQuery', true);

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("HOME PAGE")
})

app.use("/users", userRouter)

app.listen(8000, async()=> {
    try{
        await connection
        console.log("Connected to DB");
    }catch(err){
        console.log(err.message);
    }
    console.log("Server is running at port 8000");
})