# 🧠 Hackatón Avanzada - Asincronismo y jQuery

**⏱️ Duración:** 6 horas  
**🧩 Nivel:** Avanzado  
**🛠️ Tecnologías:** HTML, JavaScript (Callbacks, Promesas, async/await, fetch), jQuery  

## 🎯 Objetivo General

Desarrollar una aplicación web que consulte APIs externas de forma asincrónica, muestre resultados manipulando dinámicamente el DOM y permita interacciones avanzadas con eventos usando jQuery.

---

## 🗂️ Estructura de la Hackatón

### 🔹 Hora 1: Setup + Reto 1 – Fundamentos

**Reto 1: "Callback Hell Hotel"**

- Simula una secuencia de reserva de habitación con funciones anidadas y callbacks.
- Refactoriza el código utilizando Promesas.
- Finalmente, reescribe con `async/await`.

✅ **Entrega esperada:**  
Tres versiones funcionales con los mismos resultados: callbacks, promesas y async/await.

---

### 🔹 Hora 2: Reto 2 – API Fetch + DOM simple

**Reto 2: "Buscador de Pokémons"**

- Usar la [PokeAPI](https://pokeapi.co/) para buscar un Pokémon por nombre.
- Mostrar nombre, imagen y habilidades.
- Usar `fetch` para consultar API.
- Manipular el DOM con jQuery.

✅ **Entrega esperada:**  
Tarjeta dinámica con datos del Pokémon buscado.

---

### 🔹 Hora 3: Reto 3 – Eventos jQuery + DOM dinámico

**Reto 3: "Galería Interactiva"**

- Obtener personajes desde la [API de Rick & Morty](https://rickandmortyapi.com/).
- Mostrar tarjetas con nombre e imagen.
- Cada tarjeta debe tener un botón "Ver más" que cargue detalles (estado, especie, etc.).
- Usar delegación de eventos en jQuery para manejar elementos dinámicos.

✅ **Entrega esperada:**  
Listado interactivo con carga de detalles bajo demanda.

---

### 🔹 Hora 4: Reto 4 – Estados y Errores

**Reto 4: "UX Ninja"**

- Agregar loader/spinner durante las peticiones `fetch`.
- Mostrar mensaje de error si la API falla o el nombre es incorrecto.
- Deshabilitar botones mientras se espera respuesta.

✅ **Entrega esperada:**  
Experiencia de usuario mejorada con estados visuales.

---

### 🔹 Hora 5: Reto 5 – Composición de Promesas

**Reto 5: "Comparador de Pokémons"**

- Permitir buscar dos Pokémons y compararlos visualmente.
- Usar `Promise.all()` para ejecutar ambas peticiones en paralelo.
- Mostrar diferencias en atributos (HP, tipos, habilidades).

✅ **Entrega esperada:**  
Comparación visual clara entre los dos personajes.

---

### 🔹 Hora 6: Bonus + Demo Final

**Bonus (opcional): "Mi colección"**

- Permitir guardar Pokémons favoritos en `localStorage`.
- Mostrar una sección "Mi colección" al final de la página.
- Permitir eliminar elementos desde la colección.

✅ **Entrega esperada:**  
Favoritos persistentes y manejables por el usuario.

---

## 📝 Entregables

- Código fuente (HTML, JS, CSS).
- Archivo README con instrucciones de ejecución.
- Breve demo (puede ser grabación o presentación en vivo).

---

## 🏁 Evaluación

| Criterio                     | Puntos |
|-----------------------------|--------|
| Correcto uso de async/await | 20     |
| Manipulación del DOM        | 20     |
| Uso de jQuery para eventos  | 20     |
| Manejo de errores/UX        | 20     |
| Creatividad y bonus         | 20     |
| **Total**                   | **100**|

---

¡Buena suerte y que la asincronía esté contigo! 🚀
