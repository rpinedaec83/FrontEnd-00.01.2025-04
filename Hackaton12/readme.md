
# 🧠 Hackatón React: Fundamentos de Componentes, JSX y Props

**Duración total:** 6 horas  
**Nivel:** Medio - Avanzado  
**Requisitos previos:** Conocimientos básicos de HTML, CSS y JavaScript ES6+  
**Objetivo:** Que los participantes construyan una aplicación React desde cero utilizando componentes funcionales y props.

---

## 🕐 Cronograma

| Hora | Actividad |
|------|-----------|
| 00:00 - 00:30 | Instalación de entorno y estructura del proyecto |
| 00:30 - 01:30 | Componentes y JSX: fundamentos y mini retos |
| 01:30 - 02:30 | Props en profundidad y desafío práctico |
| 02:30 - 04:30 | Proyecto intermedio: Lista de Perfiles |
| 04:30 - 06:00 | Proyecto final: Vista de Catálogo de Productos |

---

## 🛠️ 00:00 - 00:30 | Instalación y Setup

### Objetivo
Instalar Node.js, crear proyecto con `create-react-app` o Vite.

### Pasos
```bash
npm create vite@latest hackaton-react -- --template react
cd hackaton-react
npm install
npm run dev
```

---

## 💡 00:30 - 01:30 | Componentes y JSX

### Ejercicio 1: Crea 3 componentes funcionales

1. `Header.jsx`
2. `Footer.jsx`
3. `Card.jsx` con un mensaje estático

```jsx
function Header() {
  return <h1>Bienvenido a mi Hackatón</h1>;
}
```

### Mini desafío
- Mostrar los 3 componentes en `App.jsx`
- Usar fragmentos `<> </>` y `<React.Fragment>`

---

## 🔗 01:30 - 02:30 | Props

### Teoría breve

```jsx
function Saludo({ nombre }) {
  return <p>Hola, {nombre}!</p>;
}
```

### Ejercicio 2: Componente de perfil

Crear un componente `Perfil.jsx` que reciba:

- `nombre`
- `rol`
- `imagen`

### Mini desafío
Renderizar una lista de perfiles (mínimo 3) con `.map()` usando props.

---

## 🧪 02:30 - 04:30 | Proyecto Intermedio: Lista de Perfiles

Crear una vista que muestre un conjunto de tarjetas de perfil usando props y componentes.

### Requisitos

- Componente `ListaPerfiles` que recorra una lista de datos.
- Componente `Perfil` para cada tarjeta.

---

## 🚀 04:30 - 06:00 | Proyecto Final: Vista de Catálogo de Productos

### Requisitos

- Componente `ProductoCard` que muestre: nombre, descripción y precio.
- Componente `Catalogo` que renderice múltiples productos.
- Datos definidos como array dentro del componente padre.

---

## 📦 Entrega

- Repositorio en GitHub o ZIP
- README con instrucciones de ejecución
- Breve presentación (5 mins) de tu proyecto

---

## 🏆 Criterios de Evaluación

- Funcionalidad completa del proyecto
- Buen uso de componentes y props
- Buenas prácticas de código y estructura
- Creatividad y diseño

---ejerccio 1 y 2 ir --------
http://localhost:5173/scd


---ejerccio perfiles --------

http://localhost:5173/scd