# 🛒 Mi Tienda Online
Este proyecto es una tienda online moderna desarrollada con **React** y **Bootstrap**. Permite explorar productos, agregarlos al carrito, marcarlos como favoritos, finalizar compras y visualizar el historial de compras junto a un ranking de compradores. La página principal tiene un diseño limpio, responsivo y moderno. Distribución en dos columnas: **70%** para la lista de productos con scroll independiente y **30%** para el sidebar que contiene el carrito de compras, favoritos y el ranking de compradores. Se usa un fondo degradado para mejorar la estética. El contenido principal está dentro de un contenedor blanco con bordes redondeados y sombra. La persistencia de datos se realiza con LocalStorage para carrito, favoritos e historial de compras. Se consume la API pública [Fake Store API](https://fakestoreapi.com/) para cargar productos.

## Tecnologías utilizadas
- React 18 (Hooks y Context API)
- Bootstrap 5
- LocalStorage (persistencia en navegador)
- API externa: https://fakestoreapi.com

## Instalación y ejecución
### Requisitos previos
- Node.js (versión recomendada 16 o superior)
- npm 

### Pasos para levantar el proyecto localmente
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/mi-tienda-online.git
   cd mi-tienda-online
   npm install
   npm run dev