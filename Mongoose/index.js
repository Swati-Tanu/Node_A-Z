const express = require('express')
const {connection, UserModel} = require("./db")
require('dotenv').config()

const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Welcome!")
})

//READ
app.get("/users", async(req,res) => {
    let query = req.query
    try{
    const users = await UserModel.find(query) //Helps mentioning the query
    res.send(users)
    }
    catch(err){
        res.status(500).send({"msg": "Cannot register", "error": err.message})
    }
})

//CREATE
app.post("/register", async(req,res) => {
    console.log(req.body)
    const user = new UserModel(req.body) 
    try {
        await user.save()
        res.send({"msg": "User has been registered"})
    } catch (err) {
        console.error(err)
        res.status(500).send({"msg": "Cannot register", "error": err.message})
    }
})

//UPDATE
app.patch("/update/:id", async(req,res) => {
    const ID = req.params.id
    const payload = req.body
    try{
        await UserModel.findByIdAndUpdate({_id:ID},payload)
        res.send({"msg": "User has been updated"})
    }catch(err){
        res.status(500).send({"msg": "Cannot modify", "error": err.message})
    }
})

//DELETE
app.patch("/delete/:id", async(req,res) => {
    const ID = req.params.id
    try{
        await UserModel.findByIdAndDelete({_id:ID})
        res.send({"msg": "User has been deleted"})
    }catch(err){
        res.status(500).send({"msg": "Cannot delete", "error": err.message})
    }
})

app.listen(process.env.port, async() => {
    try{
    await connection
    console.log("Connected to DB");
    }
    catch(err){
        console.log("Cannot connected to DB");
        console.log(err);
    }
    console.log(`Server running at port ${process.env.port}`);
})