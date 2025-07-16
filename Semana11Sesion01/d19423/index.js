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
const bodyParser = require('body-parser')
const app = express();
const axios = require('axios');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.get("/", (req, res) => res.send("Hola desde express"));
app.get("/hola/:nombre", (req, res) => {
    let nombre = req.params.nombre
    res.send(`Hola ${nombre}`);
});


app.get('/query', (req, res) => {
    let pregunta = req.query;
    console.log(pregunta);

    res.send(`Datos personales: Nombre: ${pregunta.nombre} Apellido: ${pregunta.apellido} Edad: ${pregunta.edad}`)
})

let arrUsuario = []
app.post("/crearusuario", (req, res) => {
    let usuario = req.body;
    console.log(usuario)
    arrUsuario.push(usuario);
    console.log(arrUsuario)
    res.status(201).send("Usuario creado")
})

app.put("/usuario/:nombre", (req, res) => {
    let nombre = req.params.nombre;
    console.log(nombre);

    res.status(202).send({ message: "Se actualizo correctamente" })
})


app.get("/rick-and-morty", (req, res) => {

    //https://rickandmortyapi.com/api/character
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://rickandmortyapi.com/api/character',
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data.info.count));
            res.send({ message: JSON.stringify(response.data.info.count) })
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ message: error })
        });


})


app.get("/rick-and-morty/:id", (req, res) => {

    let id = req.params.id;
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://rickandmortyapi.com/api/character/'+id,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            res.send(response.data)
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({ message: error })
        });


})

app.delete("/usuario/:nombre", (req, res) => {
    let nombre = req.params.nombre;
    console.log(nombre);

    res.status(202).send({ message: "Se borro correctamente" })
})

app.listen(3000)