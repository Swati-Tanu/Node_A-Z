//Express is built over http module of node only.
//It is not an inbuilt module of node, so we have to install it using npm.
//Express: Fast, Unopinionated, Minimalist web framework for Node.js.

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); //Middleware: Used to parse the json data.

app.get("/", (request,response)=>{
    response.setHeader("Content-Type","text/html")
    response.end("<h1>HOME PAGE</h1>"); //response.send() will also work.
})

app.get("/data", (request,response)=>{
    //response.setHeader("Content-Type","application/json")
    const dataStream = fs.createReadStream("./data.json","utf-8");
    dataStream.pipe(response);
})

app.post("/adddata", (request,response)=>{
    console.log(request.body);
    response.send("Data has been added");
})

app.listen(4500, () => {
    console.log("Server is running at port 4500");
})

