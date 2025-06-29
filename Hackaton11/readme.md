# 🛠️ Hackatón Semana 11 – Full Stack Web

## ⏰ Duración: 6 horas  
## 🧠 Temas:  
- Node.js y npm, gestión de paquetes  
- HTTP verbs  
- APIs  
- CORS  
- Manejo de errores

---

## 🧩 Objetivo General
Desarrollar en equipos una API RESTful funcional en Node.js utilizando buenas prácticas de gestión de paquetes, manejo de errores, configuración de CORS y uso correcto de HTTP verbs.

---

## 📅 Agenda de la Hackatón

| Hora       | Actividad                                                                 |
|------------|--------------------------------------------------------------------------|
| 0:00 – 0:20 | **Kickoff + formación de equipos**                                       |
| 0:20 – 1:00 | **Mini workshop 1:** Node.js, npm y estructura de proyecto               |
| 1:00 – 2:00 | **Sprint 1:** Setup del proyecto, instalación de paquetes                |
| 2:00 – 2:20 | **Mini workshop 2:** Verbos HTTP y diseño de endpoints REST              |
| 2:20 – 3:30 | **Sprint 2:** Desarrollo de la API (GET, POST, PUT, DELETE)              |
| 3:30 – 3:50 | **Mini workshop 3:** CORS y manejo de errores                            |
| 3:50 – 5:00 | **Sprint 3:** Integrar CORS, validaciones y manejo de errores            |
| 5:00 – 5:40 | **Testing cruzado entre equipos** (usar Postman o curl)                  |
| 5:40 – 6:00 | **Demo final y feedback**                                                |

---

## 🛠️ Reglas del Proyecto

- Debe usarse `Node.js` y `Express`
- Se debe crear al menos una entidad (`/products`, `/users`, etc.)
- Deben implementarse los verbos HTTP: `GET`, `POST`, `PUT`, `DELETE`
- Debe haber manejo de errores para:
  - Rutas no encontradas
  - Validaciones de datos
  - Errores internos
- Debe incluir CORS habilitado correctamente
- El proyecto debe iniciarse con `npm init` y tener un `package.json` limpio
- Usar rutas modulares si es posible (`routes/`, `controllers/`)

---

## 📦 Lista mínima de paquetes sugeridos

```bash
npm init -y
npm install express cors nodemon
