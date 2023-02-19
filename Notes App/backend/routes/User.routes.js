const express = require('express');
const {UserModel} = require("../model/User.model")
const jwt = require('jsonwebtoken')

const userRouter = express.Router()

userRouter.post("/register", async (req,res)=>{
    const payload = res.body
    try{
        const user = new UserModel(payload)
        await user.save()
        res.send({"msg":"New User has been Registered!"})
        

    }catch(err){
        res.send({"msg":"Something went wrong","error":err.message})
    }
    
})

userRouter.post("/login", async(req,res)=>{
    const {email,pass} = (res.body)
    try{
        const user = await UserModel.find({email,pass})
        if(user.length>1){
            let token = jwt.sign({course: backend},meta)
        res.send({"msg":"Logged in","token":token})
        }else{
            res.send({"msg":"Wrong Credentials"})
        }
    }catch(err){
        res.send({"msg":"Something went wrong","error":err.message})
    }
   
})

module.exports={
    userRouter
}
