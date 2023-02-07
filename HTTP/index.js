//Creating server is also a part of core module i.e., http Module
//To access web pages of any web application, we need a web server. The web server will handle all the http requests for web application.

const http = require('http');

const hostname = "localhost"; //localhost - 127.0.0.1
const port = "4500";

//To create server:
//http.createServer() method includes request and response parameters which is supplied by Node.js. The request object can be used to get information about the current HTTP request. The response object is used to send a response for a current HTTP request. 
const server = http.createServer((request,response) => {

    console.log(request.headers);

    response.statusCode = 200; //200 is for ok status. Value can also be: Error - 404,  

    response.setHeader('Content-Type','text/html'); //If the response from the HTTP server is supposed to be displayed as HTML, we should include an HTTP header with the correct Content-Type.

    response.end('<html> <body> <h1> Server Connection sucess :) </h1> </body> </html>')
})

//To know what is requested we use server.listen(port,hostname, () => {})
server.listen(port,hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});