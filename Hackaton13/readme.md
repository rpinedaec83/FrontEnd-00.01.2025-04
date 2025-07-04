# 🚀 Hackatón React: Navegación + Hooks + UI dinámica

**Duración:** 6 horas  
**Formato:** Práctico + retos guiados  
**Objetivo:** Desarrollar una SPA completa que combine navegación dinámica con React Router, estilos responsivos con Bootstrap y manejo de estado con Hooks.

---

## 🕐 Horario Tentativo

| Hora      | Actividad                                                    |
|-----------|--------------------------------------------------------------|
| 0h - 0h30 | Introducción + setup de proyecto                             |
| 0h30 - 2h | Retos de React Router + Bootstrap                            |
| 2h - 4h   | Retos con Hooks `useState` y `useEffect`                     |
| 4h - 5h30 | Proyecto final integrando todos los temas                    |
| 5h30 - 6h | Presentación de resultados + retroalimentación               |

---

## 🧰 Requisitos previos

- Node.js y npm
- Editor de código (VS Code)
- Conocimientos básicos de React

---

## 🔧 Setup inicial

```bash
npm create vite@latest hackaton-react --template react
cd hackaton-react
npm install
npm install react-router-dom bootstrap
```

```js
// main.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```

---

## 🔥 Reto 1: SPA con React Router (1.5h)

### 🎯 Objetivo
Crear un sitio con 3 páginas: Home, Acerca, Productos

### 📋 Instrucciones

1. Configura `BrowserRouter` en `main.jsx`
2. Crea 3 páginas dentro de `/src/pages`
3. Usa `<NavLink>` para navegar con una barra usando Bootstrap
4. Agrega un botón que navegue con `useNavigate`

### 🧪 Bonus

- Ruta 404
- Ruta dinámica: `/producto/:id`

---

## 🎯 Reto 2: Hooks `useState` + `useEffect` (2h)

### ⚙️ Objetivo
Manejar estados, efectos y condicional rendering

### 📋 Instrucciones

1. Crea un componente `Contador` con un botón para incrementar un número con `useState`
2. Agrega un `useEffect` que imprima en consola cada vez que el contador cambie
3. Mostrar un texto diferente si el contador es mayor a 5

```jsx
{contador > 5 ? <p>Alto contador!</p> : <p>Contador bajo</p>}
```

---

### 🧪 Extra Challenge

- Crear un temporizador con `setInterval` en `useEffect` que se limpie con `clearInterval`
- Simular una llamada a una API usando `useEffect` y `fetch`

---

## 🧱 Reto 3: Proyecto Final (1.5h)

### 🕹️ Descripción
Construir una mini app de productos con:

- Navegación entre Home, Productos y Detalle
- Llamada a una API falsa (como https://fakestoreapi.com)
- Mostrar productos con condicional rendering (loading, error)
- Usar Bootstrap para mostrar las tarjetas de productos

---

## 📢 Entrega y demo (30 min)

Cada grupo/participante debe:

- Mostrar navegación funcional
- Mostrar uso de `useState` y `useEffect`
- Explicar cómo usan condicional rendering
- Mostrar diseño con Bootstrap

---

## 🏆 Criterios de evaluación

| Criterio                        | Puntos |
|-------------------------------|--------|
| Navegación funcional           | 20     |
| Uso correcto de Hooks         | 20     |
| Renderizado condicional       | 20     |
| UI responsive con Bootstrap   | 20     |
| Creatividad y originalidad    | 20     |
| **Total**                      | **100**|
