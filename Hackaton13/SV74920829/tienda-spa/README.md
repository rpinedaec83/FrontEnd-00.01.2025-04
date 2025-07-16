# Tienda SPA con React

Este proyecto es una tienda web de una sola página (SPA) creada con React que incluye navegación entre varias páginas, consumo de APIs externas y componentes interactivos.

## Funcionalidades

- Navegación entre páginas: Home, Acerca y Productos usando React Router.
- Ruta dinámica para detalles de productos (`/producto/:id`).
- Manejo de estado y efectos con React Hooks (`useState`, `useEffect`).
- Consumo de APIs públicas para mostrar datos reales y simulados.
- Renderizado condicional para manejar estados de carga y errores.
- Diseño responsivo usando Bootstrap.
- Componentes interactivos como un contador y un temporizador para demostrar uso de Hooks.
- Ruta 404 para páginas no definidas.

## Tecnologías y APIs utilizadas

- React
- React Router DOM
- Bootstrap 5
- Fetch API para llamadas HTTP a APIs externas

**APIs utilizadas:**

- `https://fakestoreapi.com/products` para obtener datos reales de productos (imágenes, precios, categorías).
- `https://jsonplaceholder.typicode.com/posts?_limit=5` para simular llamadas a una API genérica y practicar fetch y hooks (como ejemplo de consumo de datos).

## Estructura del proyecto

- `/src/pages`: Contiene las páginas Home, Acerca, Productos y ProductoDetalle.
- `/src/components`: Componentes reutilizables como Contador y Temporizador.
- `App.jsx`: Configura las rutas y la navegación.
- `index.js`: Punto de entrada que envuelve la app en `BrowserRouter` y carga Bootstrap.

## Cómo ejecutar el proyecto

1. Clonar el repositorio  
2. Instalar dependencias con `npm install`  
3. Iniciar el servidor de desarrollo con `npm start`  
4. Abrir en el navegador [http://localhost:3000](http://localhost:3000)

---

