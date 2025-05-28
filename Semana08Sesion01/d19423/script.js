const numeros = [1, 2, 3, 4, 5];

numeros.forEach(n => console.log(n));

const dobles = numeros.map(n => n * 2);
console.log(dobles);

const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

const primeroMayr3 = numeros.find(n => n > 3);
console.log(primeroMayr3)

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if (element > 3) {
        console.log(element);
        break;
    }
}

const suma = numeros.reduce((acc, val) => acc + val, 0);
console.log(suma)

let suma2 = 0;
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    suma2 += element;

}
console.log(suma2);

const productos = [
    { nombre: "Laptop", precio: 1000, categoria: "tecnologia" },
    { nombre: "Silla", precio: 450, categoria: "hogar" },
    { nombre: "Escritorio", precio: 560, categoria: "hogar" },
    { nombre: "Celular", precio: 4200, categoria: "tecnologia" },
    { nombre: "Cafetera", precio: 200, categoria: "hogar" },
    { nombre: "Audifonos", precio: 36, categoria: "tecnologia" },
];

const productosConDescuento = productos.map(p=>({
    ...p,
    productosConDescuento: +(p.precio * 0.9).toFixed(2)
}));
console.log(productosConDescuento);

const productosDeTecnologia = productosConDescuento.filter(p=> p.categoria === "tecnologia");
console.log(productosDeTecnologia);

const totalProductos = productosDeTecnologia.reduce((sum, p)=>sum+p.productosConDescuento,0);
console.log(totalProductos);