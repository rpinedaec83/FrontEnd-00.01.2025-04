
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
| Navegación funcional           | 4     |
| Uso correcto de Hooks         | 4     |
| Renderizado condicional       |4     |
| UI responsive con Bootstrap   | 4     |
| Creatividad y originalidad    | 4     |
| **Total**                      | **20**|
=======
# 🧠 Hackatón Semana 14 – React Intermedio/Avanzado

## Temas:
- **Semana 14 - Tema 27**: Arquitectura del proyecto, diseño de componentes
- **Semana 14 - Tema 28**: Consumo de API para productos

---

## 🎯 Objetivo

Desarrollar una aplicación en React que consuma una API pública de productos y utilice una arquitectura profesional basada en componentes, separando vistas, contenedores, servicios y estilos.

---

## ⏰ Duración Total: 6 horas

| Tiempo       | Etapa                | Actividad                                                               |
|--------------|----------------------|-------------------------------------------------------------------------|
| 0:00 - 0:30  | Kickoff              | Presentación del reto, lectura de requerimientos, división en equipos  |
| 0:30 - 2:00  | Fase 1: Arquitectura | Crear el esqueleto del proyecto, organizar carpetas, definir componentes |
| 2:00 - 4:00  | Fase 2: API & UI     | Consumir API, crear vistas, mostrar productos, agregar filtros          |
| 4:00 - 5:30  | Fase 3: Bonus        | Agregar carrito, favoritos, paginación, optimizaciones                  |
| 5:30 - 6:00  | Demo & Evaluación    | Presentaciones, feedback y premiación                                  |

---

## ✅ Requerimientos Mínimos

- Crear estructura escalable de carpetas
- Componentes reutilizables y organizados
- Consumo de API desde servicio (`/api`)
- Mostrar productos con imagen, nombre, descripción y precio
- Filtros por categoría o búsqueda
- Estilo con Bootstrap o Bootstrap-Table

---

## 🌟 Bonus Opcionales

- Carrito de compras con estado global (Context/Redux)
- Favoritos con localStorage
- Paginación
- Skeleton Loaders o loaders personalizados
- Uso de React Query o SWR
- UI responsive y profesional

---

## 📁 Sugerencia de Estructura de Proyecto

```
/src
  /api         → servicios para llamadas HTTP
  /components  → componentes reutilizables (Card, Loader, etc.)
  /views       → vistas principales (Home, Detail, Cart)
  /layouts     → layout base para la app
  /hooks       → hooks personalizados
  /contexts    → estados globales (ej. carrito)
  /styles      → estilos generales
  App.jsx
  index.jsx
```

---

## 🔌 APIs Sugeridas

- [Fake Store API](https://fakestoreapi.com/)
- [DummyJSON](https://dummyjson.com/products)

También puedes usar una mock API con [`json-server`](https://www.npmjs.com/package/json-server).

---

## 📊 Criterios de Evaluación

| Criterio                                         | Peso  |
|--------------------------------------------------|-------|
| Arquitectura escalable y limpia                  | 25%   |
| Componentización clara y reutilizable            | 20%   |
| Consumo eficiente de API y manejo de estados     | 25%   |
| Diseño visual con Bootstrap                      | 15%   |
| Funcionalidades avanzadas (bonus)                | 15%   |

---

## 🏆 Premios Especiales

- 🖌️ Mejor diseño UI
- ⚙️ Mejor arquitectura de código
- 🧠 Funcionalidad avanzada destacada
- 💬 Voto del público

---

¡Mucha suerte y que gane el mejor equipo! 🚀

