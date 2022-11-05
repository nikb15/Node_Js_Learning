const express = require('express');

server= express();
const port =4242

server.get('/',(req,res)=>{
    res.send("Let fuck up")
})

server.get('/showup',(req,res)=>{
    res.send("Request to show up ")
})

server.listen(4242,()=>{
    console.log("Listening on port " + port)
});

