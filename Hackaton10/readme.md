# 🧠 Hackatón: Dominando localStorage y CRUD con JavaScript

**Duración total:** 6 horas  
**Nivel:** Medio - Avanzado  
**Semana 10**  
- Tema 19: `localStorage` + JSON  
- Tema 20: Proyecto Mini CRUD con JS

---

## 🧩 Objetivo General

Desarrollar un proyecto completo tipo CRUD (Create, Read, Update, Delete) con almacenamiento persistente en el navegador usando `localStorage` y manipulación de datos con `JSON`.

---

## 🕒 Cronograma y Actividades

### ⏱️ Hora 0:00 - 0:30 → Calentamiento técnico

#### 🎓 Charla rápida (15 min)

- ¿Qué es `localStorage` y cómo funciona?
- Estructura y manejo de objetos JSON
- Métodos clave: `localStorage.setItem()`, `getItem()`, `removeItem()`
- `JSON.stringify()` y `JSON.parse()`

#### ⚡ Desafío Flash (15 min)

- Crear un formulario con nombre y edad
- Guardar el objeto en `localStorage`
- Mostrar la información al recargar la página

---

### ⏱️ Hora 0:30 - 2:00 → Módulo 1: CRUD Básico con localStorage

#### 🛠️ Proyecto: Lista de Tareas Avanzada

**Requisitos mínimos:**
- [ ] Crear tarea (input + botón)
- [ ] Mostrar tareas guardadas al cargar
- [ ] Eliminar tareas individuales
- [ ] Editar tareas existentes

**Recomendaciones:**
- Generar ID único (con timestamp o `Date.now()`)
- Guardar todo como array en `localStorage` (`JSON.stringify`)
- Leer y renderizar usando `JSON.parse`
- Buen uso de DOM (`createElement` o `innerHTML` dinámico)

---

### ⏱️ Hora 2:00 - 3:00 → Módulo 2: Refactorización y Buenas Prácticas

**Objetivo:** Separar responsabilidades del código y hacerlo escalable

#### 🔧 Refactoriza tu código:

- `storage.js` → Acceso a localStorage (guardar, leer, borrar)
- `taskManager.js` → Lógica de CRUD
- `main.js` → Eventos del DOM y renderizado

#### 🧪 Mejora:

- No repetir acceso al DOM
- Manejo de errores
- `syncToLocalStorage()` para guardar cambios automáticamente

---

### ⏱️ Hora 3:00 - 5:00 → Módulo 3: CRUD Avanzado

#### 📱 Proyecto: Gestor de Contactos Inteligente

**Funcionalidades:**
- [ ] Crear, listar, editar y eliminar contactos
- [ ] Validación de email y teléfono
- [ ] Filtro de búsqueda en tiempo real
- [ ] Ordenamiento alfabético
- [ ] Notificaciones (tipo toast)
- [ ] Modo oscuro (opcional)

**Extra:**
- Exportar contactos a `.json`
- Importar contactos desde archivo
- Guardar fecha de creación/modificación

---

### ⏱️ Hora 5:00 - 6:00 → Presentaciones + Retro + Bonus

1. 👨‍🏫 Demo y revisión entre grupos
2. 🧠 Retrospectiva:
   - ¿Qué aprendiste?
   - ¿Qué fue lo más difícil?
   - ¿Qué mejoras implementarías?
3. 🎯 Bonus Challenges (opcional):
   - Detección de modo offline
   - Encriptar datos localStorage (básico)
   - Soporte multilenguaje (i18n)

---

## ✅ Evaluación (Check-list)

| Criterio                                | ✓ |
|-----------------------------------------|---|
| CRUD funcional con localStorage         |   |
| Validación y UX                         |   |
| Modularización del código               |   |
| Buen uso de JSON                        |   |
| Estilo visual consistente               |   |
| Extra opcionales implementados          |   |

---

## 🧰 Recursos Sugeridos

- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JSON en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [UUID Generator](https://www.npmjs.com/package/uuid) *(si usas bundler o lo adaptas)*

---

¡Buena suerte y mucho código! 🚀
