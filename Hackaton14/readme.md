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
