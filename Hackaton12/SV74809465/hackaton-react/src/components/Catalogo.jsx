import React from "react";
import ProductoCard from "./ProductoCard";

const datosProducto = [
    {
        nombre: "Auriculares Sony",
        descripcion: "Auriculares inalámbricos con cancelación de ruido.",
        precio: "$120",
        imagen: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9Xo23RL5YW3lbhzfFHGA9tth3Q2kTuw5bXPlV5UnM66FEh8qmHfHVNJ31R2_E-0f8hnFTFWyg4wqV5rpHE0AMfPBuMIEKyiCaaokkM6wGkgDFYOjJL3a7q0zDuDWsOS2gjjnPfUE&usqp=CAc"
    },
    {
        nombre: "Smartphone Samsung",
        descripcion: "Pantalla AMOLED, 128GB de almacenamiento.",
        precio: "$400",
        imagen: "https://f.rpp-noticias.io/2018/12/03/351335_719960.jpg?imgdimension=look"
    },
    {
        nombre: "Teclado Mecánico",
        descripcion: "Teclado retroiluminado con switches azules.",
        precio: "$80",
        imagen: "https://promart.vteximg.com.br/arquivos/ids/7479097-1000-1000/image-9af968446b50480fade90869c612e40f.jpg?v=638305829355370000"
    },
    {
        nombre: "Monitor LG 24''",
        descripcion: "Monitor Full HD con panel IPS.",
        precio: "$180",
        imagen: "https://www.kabifperu.com/imagenes/prod-06022021184315-monitor-lg-led-22-22mk400h-b-vga-hdmi-deta.png"
    },
    {
        nombre: "Mouse Logitech",
        descripcion: "Mouse inalámbrico ergonómico.",
        precio: "$35",
        imagen: "https://www.eccom.pe/wp-content/uploads/2023/10/imagen.jpeg"
    }
];

function Catalogo(){
    return(
        <div className="lista-catalogo">
            {datosProducto.map((producto, idx) => (
                <ProductoCard
                key={idx}
                nombre={producto.nombre}
                imagen={producto.imagen}
                precio={producto.precio}
                descripcion={producto.descripcion}
                />
            ))}
        </div>
    );
}

export default Catalogo