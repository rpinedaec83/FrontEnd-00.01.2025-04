console.log("Prueba de funcionamiento");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let productos = [
  { id: 1, nombre: "Laptop", precio: 1000 },
  { id: 2, nombre: "Mouse", precio: 70 },
  { id: 3, nombre: "Teclado", precio: 200 },
  { id: 4, nombre: "Monitor", precio: 500 },
];

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.get("/productos", (req, res) => {
  res.status(200).json(productos);
});

app.get("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  res.status(200).json(producto);
});

app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ mensaje: "Nombre y precio son requeridos" });
  }

  if (typeof precio !== "number") {
    return res.status(400).json({ mensaje: "El precio debe ser un número" });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
  };

  productos.push(nuevoProducto);
  res.status(201).json({ mensaje: "Producto creado", producto: nuevoProducto });
});

app.put("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, precio } = req.body;

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  if (nombre) producto.nombre = nombre;
  if (precio) producto.precio = precio;

  res.status(200).json({ mensaje: "Producto actualizado", producto });
});

app.delete("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  productos.splice(index, 1);
  res.status(200).json({ mensaje: `Producto con ID ${id} eliminado` });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
