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

const productosConDescuento = productos.map(p => ({
    ...p,
    productosConDescuento: +(p.precio * 0.9).toFixed(2)
}));
console.log(productosConDescuento);


const productosDeTecnologia = productosConDescuento.filter(p=> p.categoria === "tecnologia");
console.log(productosDeTecnologia);

const totalProductos = productosDeTecnologia.reduce((sum, p)=>sum+p.productosConDescuento,0);
console.log(totalProductos);


//Strings

const mensaje = '    Hola desde Pachaqtec      ';

console.log(mensaje.trim());

if(mensaje.includes("Hola")){
    console.log("Si incluye")
}else{
    console.log("no incluye")
};

console.log(mensaje.includes("Hola")?"si incluye":"no incluye");
console.log(mensaje.trim().replace("Pachaqtec","IDAT"));

const ahora = new Date();
console.log(ahora.toLocaleDateString());

const fechaNacimiento = new Date("1983-08-28");
const edad = ahora.getFullYear() - fechaNacimiento.getFullYear();
console.log(edad);

moment.locale('es-mx'); 
console.log(moment().format())
console.log(moment("1983-08-28", "YYYY-MM-DD").fromNow());
console.log(moment().format('LLLL'));

//numeros funciones matematicas

console.log(Math.round(4.3));
console.log(Math.random());
console.log(Math.max(6,7,1,4,99))
