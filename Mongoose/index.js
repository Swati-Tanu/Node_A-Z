const express = require('express')
const {connection, UserModel} = require("./db")

const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Welcome!")
})

app.get("/users",(req,res) => {
    res.send("All the users data will be sent.")
})

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

app.listen(4200, async() => {
    try{
    await connection
    console.log("Connected to DB");
    }
    catch(err){
        console.log("Cannot connected to DB");
        console.log(err);
    }
})