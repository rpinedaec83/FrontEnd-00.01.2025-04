# Hackatón Avanzada - Semana 15

## Duración total: 6 horas

**Temas:**

- Context API y lógica de carrito de compras
- Interacción con eventos y almacenamiento persistente

---

## Objetivos

1. Implementar una tienda online con carrito de compras usando Context API.
2. Aplicar eventos de usuario personalizados para mejorar la interactividad.
3. Guardar el estado del carrito en almacenamiento persistente (LocalStorage).
4. Resolver retos individuales y colaborativos relacionados a los temas.

---

## Requisitos previos

- Conocimientos básicos de React.js
- Conocer el uso de hooks (useState, useEffect, useContext)
- Saber trabajar con Vite o CRA
- Haber visto previamente los temas de la semana 15

---

## Estructura de la Hackatón

### Primera Parte (3h) - Desarrollo guiado (individual o por parejas)

#### Paso 1: Setup del proyecto (15 min)

- Crear un proyecto con Vite + React.
- Instalar dependencias necesarias.
- Crear estructura de carpetas:

```
/src
  /components
  /context
  /utils
```

#### Paso 2: Context API (30 min)

- Crear un archivo `CartContext.js`
- Definir el context, provider y funciones:
  - `addToCart(product)`
  - `removeFromCart(id)`
  - `clearCart()`
  - `getTotal()`
- Envolver `<App />` con `<CartProvider>`

#### Paso 3: Product List con API externa (45 min)

- Usar `https://fakestoreapi.com/products` para obtener productos
- Mostrar los productos en `ProductList.jsx`
- Incluir botón "Agregar al carrito"
- Disparar `addToCart(product)` al clickear el botón

#### Paso 4: Componente Cart (45 min)

- Mostrar productos agregados
- Botones para eliminar producto o limpiar carrito
- Mostrar total a pagar

#### Paso 5: LocalStorage para persistencia (45 min)

- Al agregar o eliminar productos, actualizar LocalStorage
- Al iniciar la app, cargar el carrito desde LocalStorage usando `useEffect`
- Validar integridad de datos (no duplicados, id correcto)

```js
useEffect(() => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    setCart(JSON.parse(storedCart));
  }
}, []);

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
```

---

### Segunda Parte (3h) - Desafíos y extensiones avanzadas

#### Desafío 1: Eventos personalizados (30 min)

- Crear un evento personalizado cuando se agregue algo al carrito:

```js
const event = new CustomEvent('productAdded', { detail: product });
document.dispatchEvent(event);
```

- Escuchar ese evento y mostrar una notificación:

```js
document.addEventListener('productAdded', (e) => {
  alert(`Producto agregado: ${e.detail.title}`);
});
```

#### Desafío 2: Contador de clics y persistencia (30 min)

- Crear un componente que cuente cuántas veces el usuario ha interactuado con los productos
- Guardar ese conteo en LocalStorage
- Mostrarlo al usuario

#### Desafío 3: Favoritos persistentes (45 min)

- Agregar un ícono de corazón a cada producto
- Permitir marcar como favorito
- Guardar en LocalStorage la lista de favoritos
- Mostrar sección de favoritos separados del carrito

#### Desafío 4: Checkout simulado (30 min)

- Botón para "Finalizar compra"
- Al clickear, mostrar resumen y limpiar el carrito
- Guardar el historial de compras en LocalStorage

#### Desafío 5: Leaderboard de compras (opcional, 30 min)

- Simular múltiples usuarios
- Guardar en LocalStorage el total comprado por cada usuario
- Mostrar un ranking de usuarios con más compras

---

## Evaluación final (30 min)

- Cada equipo presenta su versión funcionando
- Se evalúa:
  - Uso correcto de Context API
  - Eventos funcionando correctamente
  - Persistencia de datos
  - Creatividad y extensión

---

## Recursos

- [https://fakestoreapi.com/](https://fakestoreapi.com/)
- [https://react.dev/learn](https://react.dev/learn)
- [https://developer.mozilla.org/es/docs/Web/API/Window/localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

---

**Fin de la Hackatón**

---

