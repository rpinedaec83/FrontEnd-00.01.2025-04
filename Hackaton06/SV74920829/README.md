# Proyecto Web 

## 👤 Autor

Desarrollado por Raúl Emanuel Comun Unocc.

## 🎨 Metodología CSS

Usé **BEM (Block Element Modifier)** para organizar las clases en el CSS. Esto me ayudó a mantener un código más ordenado, entendible y fácil de mantener.

También trabajé con **SCSS (Sass)** como preprocesador para poder usar variables, mixins y separar el código en archivos más manejables. La idea fue tener una estructura clara y reutilizable.

## 🧱 Estructura de carpetas

```plaintext
/scss
├── _variables.scss     → Variables de colores, fuentes, etc.
├── _mixins.scss        → Funciones y mixins reutilizables
├── _components.scss    → Estilos de componentes
└── main.scss           → Archivo principal que importa todo

/css
├── main.css            → CSS compilado
└── main.css.map        → Source map para depuración

index.html              → Página principal del proyecto
