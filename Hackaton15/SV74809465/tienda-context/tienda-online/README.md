# Tienda Online con Carrito de Compras

Este proyecto es una tienda online desarrollada con React y Context API. Permite a los usuarios navegar por productos, agregarlos a un carrito de compras, gestionar favoritos y realizar un seguimiento de sus interacciones.

## Estructura del Proyecto

```
tienda-online
├── src
│   ├── components          # Componentes de la aplicación
│   │   ├── Cart.jsx       # Componente para mostrar el carrito de compras
│   │   ├── ProductList.jsx # Componente para listar productos
│   │   ├── ProductItem.jsx # Componente para un producto individual
│   │   ├── Favorites.jsx   # Componente para mostrar productos favoritos
│   │   └── ClickCounter.jsx # Componente para contar interacciones
│   ├── context             # Contexto para el carrito de compras
│   │   └── CartContext.js  # Definición del contexto del carrito
│   ├── utils               # Utilidades para el proyecto
│   │   └── storage.js      # Funciones para manejar LocalStorage
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── main.jsx            # Punto de entrada de la aplicación
│   └── index.css           # Estilos globales
├── package.json            # Configuración de npm
├── vite.config.js          # Configuración de Vite
└── README.md               # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd tienda-online
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

1. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```
2. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en acción.

## Funcionalidades

- **Carrito de Compras**: Agrega productos al carrito, elimina productos y limpia el carrito.
- **Favoritos**: Marca productos como favoritos y visualiza tu lista de favoritos.
- **Contador de Interacciones**: Lleva un registro de cuántas veces has interactuado con los productos.
- **Persistencia**: Utiliza LocalStorage para guardar el estado del carrito y los favoritos.

## Recursos

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Context API](https://reactjs.org/docs/context.html)
- [Vite](https://vitejs.dev/)

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.