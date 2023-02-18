const express = require('express')
const {connection} = require("./configs/db")
const {UserModel} = require("./model/User.model")

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("HOME PAGE")
})

app.post("/register", async(req,res)=>{
    const userDetail = req.body
    try{
        const user = new UserModel(userDetail)
        await user.save()
        res.send({"msg" : "User Registered"})
    } catch(err) {
        console.log({"msg" :"Something went wrong", "error": err.message});
    }
})

app.post("/login", async(req,res)=>{
    const {email,pass}=req.body
    try{
        const user = await UserModel.find({email,pass})
        if(user.length>0){
            res.send("Login Successful")
        }else{
            res.send({"msg":"Wrong Credentials"})
        }
    }
    catch (err){
        console.log({"msg" :"Something went wrong", "error": err.message});
    }
})

app.listen(8000, async ()=>{
    try{
        await connection
        console.log("Connected to the DB");
    }
    catch (err){
        console.log(err);
    }
    console.log("Running at port 8000");
})