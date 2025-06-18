console.log("Hola desde NodeJS")

// const fs= require("fs");

// fs.readFile("texto.txt",'utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("Hola desde el servidor web de Nodejs por medio de ngrok v3");
//     res.end()
// }).listen(3000);

const express = require('express');
const app = express();
app.get("/", (req,res)=>res.send("Hola desde express"));
app.get("/hola/:nombre",(req,res)=>{
    let nombre = req.params.nombre
    res.send(`Hola ${nombre}`);
})
app.listen(3000)