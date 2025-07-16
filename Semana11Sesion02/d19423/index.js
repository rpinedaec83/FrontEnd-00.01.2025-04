console.log("Inicio de la aplicacion de NodeJS");
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();
const app = express();

const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000
const CUENTAAHORROS = process.env.CUENTAAHORROS;

const corsOptions={
    origin: "*"
}
app.use(cors(corsOptions));

app.get('/',(req,res)=>{
    let query = req.query;
    let respuesta = {mensaje: `Hola desde mi API Filtro: ${query.filtro}` }
    res.status(200).send(respuesta)
});

app.post('/',(req,res)=>{
    let persona = req.body;
    let respuesta = {mensaje: `Hola ${persona.nombre } desde el post en la cuenta ${CUENTAAHORROS}`}
    res.status(201).send(respuesta);
});

app.put('/:id',(req,res)=>{
    let id = req.params.id;
    let respuesta = {mensaje: `El registro ${id} ha sido modificado correctamente`}
    res.status(200).send(respuesta)
})

app.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let respuesta = {mensaje: `El registro ${id} ha sido borrado correctamente`}
    res.status(200).send(respuesta)
});

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


app.listen(PORT, ()=>{
    console.log(`Servidor Inciado el en puerto ${PORT}`)
})