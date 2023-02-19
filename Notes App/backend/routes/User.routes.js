const express = require('express');
const {UserModel} = require("../model/User.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userRouter = express.Router()

userRouter.post("/register", async (req,res)=>{
    const {name,email,pass} = res.body
    try{
        bcrypt.hash(pass, 5 ,async(err,hash)=>{
            if(err) res.send({"msg":"Something went wrong","error":err.message})
            else{
                const user = new UserModel({name,email,pass:hash})
                await user.save()
                res.send({"msg":"New User has been Registered!"})
            }
        })
        
    }catch(err){
        res.send({"msg":"Something went wrong","error":err.message})
    }
    
})

userRouter.post("/login", async(req,res)=>{
    const {email,pass} = (res.body)
    try{
        const user = await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(pass, user[0].pass, async(err,result)=>{
                if(result) {
                    let token = jwt.sign({userID:user[0]._id},meta)
                    res.send({"msg":"Logged in","token":token})
             }else{
                res.send({"msg":"Wrong Credentials"})
             }
            })
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
