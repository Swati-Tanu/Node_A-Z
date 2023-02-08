const express = require('express');
const path = require('path');

const app = express();
const staticPath = path.join(__dirname, "../public");

//To add dynamic website we use template engines: hbs, pug etc.
//There should a folder named views in order to use template files. Also, the files in will be with extension name of the template engines.
app.set("view engine", "hbs");

//Built-In Middleware
// app.use(express.static(staticPath)); //To add static website.

// template engine route
app.get("", (request,response) => {
    response.render('index') //res.render is used in dynamic website
})

const hostname = "localhost";
const port = 4500;

app.get("/", (request,response)=>{
    response.send("Landing Page!");
});

app.get("/about", (request,response)=>{
    response.send("<h1>Hello from About us!</h1>");
});

app.get("/contact", (request,response)=>{
    response.send("Contact us at abc@gmail.com");
});

app.get("/temp", (request,response)=>{ //This will automatically convert object into JSON.
    response.send({
        id : 1,
        name : "Aman"
    });
});

app.get("/json", (request,response)=>{ //response.json will also be same as response.send. The difference is if we pass non-objects such null and undefined res.json() will convert them too.
    response.json({
        id : 1,
        name : "Aman"
    });
});

app.listen(4500, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
})