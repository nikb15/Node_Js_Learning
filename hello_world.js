const http = require('http');
//This used to manage dependancies fo the program  can be anytype 
//Having feature of the webserver  

const server=http.createServer((req,res)=>{
    res.end("Hello Node!");
})
/*
Creatign a server that wwill accept req and response and will listen and invoke the fucntion 
*/

server.listen(4242,()=>{
    console.log('Server listening on port');
})
//to invoke the server 
