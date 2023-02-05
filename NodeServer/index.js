//Creating server is also a part of core module i.e., http Module

const http = require('http');

const hostname = "localhost";
const port = "4500";

//To create server:
const server = http.createServer((request,response) => {

    console.log(request.headers);

    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');

    response.end('<html> <body> <h1> Server Connection sucess :) </h1> </body> </html>')
})

server.listen(port,hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});