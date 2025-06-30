console.log("Inicio de la aplicacion de NodeJS");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const axios = require('axios');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000
const corsOptions={
    origin: "*"
}

app.use(cors(corsOptions));

let arrProducts = [];
app.post('/products', (req, res) => {
    const producto = req.body;
    if (!producto.name) {
        return res.status(400).json({ error: "Se requiere nombre del producto" });
    }
    const newProduct = {
        id: arrProducts.length ? arrProducts[arrProducts.length - 1].id + 1 : 1,
        name: producto.name,
    };
    arrProducts.push(newProduct);
    console.log("Producto agregado:", newProduct);
    console.log("Productos actuales:", arrProducts);

    res.status(201).json({ mensaje: "Producto creado", producto: newProduct });
});


app.get('/products', (req, res) => {
    res.status(200).send(arrProducts);
});


app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = arrProducts.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json(producto);
});

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = arrProducts.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Datos inválidos: se requiere name " });
    }

    arrProducts[index] = { id, name };

    res.status(200).json({ mensaje: "Producto actualizado", producto: arrProducts[index] });
});

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = arrProducts.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }
    const eliminado = arrProducts.splice(index, 1);
    res.status(200).json({ mensaje: "Producto eliminado", producto: eliminado[0] });
});

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
    console.error("Error interno:", err);
    res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});