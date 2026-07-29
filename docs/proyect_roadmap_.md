FASE 1 — Frontend Foundation

Objetivo:

Construir toda la interfaz antes de tener backend.
------------
Sprint 1
✅ Crear proyecto React
✅ Arquitectura
✅ Router
✅ Layout
✅ README
✅ Git
✅ Documentación técnica


------------
Sprint 2

Sprint 2 — UI Foundation

Objetivo: Construir una base visual sólida y responsive para la aplicación.

✅ Diseño del Dashboard
✅ MainLayout
✅ Header
✅ Sidebar (Desktop)
✅ Bottom Navigation (Mobile)
✅ Routing integrado
✅ Responsive Design
✅ Greeting Card
✅ Estructura del Kanban
✅ Fondo y sistema visual
✅ Refactor del Layout

Decisiones tomadas

🎨 Identidad visual

Se definió una identidad moderna basada en tonos oscuros con acentos violetas.
Se priorizó una interfaz limpia y minimalista.

🏗 Arquitectura del Layout

Separación entre LandingPage y Dashboard.
Uso de MainLayout para encapsular Header, Sidebar y contenido.
Uso de React Router con rutas anidadas (Outlet).

🧩 Estructura de componentes

División entre componentes de layout y componentes de negocio.
Cada componente con una única responsabilidad.
Preparación para reutilización en futuros sprints.

📱 Estrategia Responsive

Sidebar permanente en escritorio.
Bottom Navigation en móvil.
Lista kanban para desktop, lista filtrable para movil

👾 Extras

Uso de Tailwind directamente sobre los componentes.
Evitar CSS adicional mientras no exista una necesidad real.
Priorizar composición de componentes antes que reutilización de estilos.
------------

Sprint 3 — Dominio y modelo de datos

Objetivo:
Diseñar el dominio antes de construir funcionalidades.

✅ Definir entidades del MVP
    - User
    - Task

✅Modelar Task
□ Modelar User
✅Datos mock
✅Primera TaskCard
✅Render dinámico

Decisiones tomadas

Decisiones técnicas

1. El dominio se diseña antes de implementar funcionalidades

Primero se definieron las entidades y sus relaciones para evitar modificar 
continuamente la estructura de datos a medida que avanza el desarrollo.

2. Las tareas se agrupan por estado en KanbanBoard

Cada KanbanColumn recibe únicamente las tareas que debe representar.

De esta forma:

KanbanBoard organiza los datos.
KanbanColumn únicamente renderiza.
TaskCard representa una tarea.

3. Gestión del scroll mediante Flexbox

Para conseguir un scroll independiente por columna fue necesario combinar varias utilidades de Tailwind:

h-full
min-h-0
overflow-y-auto

h-full: Hace que el contenedor ocupe toda la altura disponible del padre.

min-h-0: Permite que el elemento pueda reducir su altura dentro de un contenedor flex. 
         Sin esta propiedad, el contenido seguiría creciendo y nunca aparecería el scroll.

overflow-y-auto: Muestra el scroll vertical únicamente cuando el contenido supera el espacio disponible.

------------
Sprint 4

Primer CRUD

Pero todavía usando datos mock.

Crear

Editar

Eliminar

Completar

Filtrar

Buscar
------------
Sprint 5

Refactor

Componentes reutilizables

Custom Hooks


------------
------------
FASE 2 — Backend

Cuando el frontend esté listo.
------------
Sprint 6

Arquitectura FastAPI
Configuración
Primer endpoint
Swagger

Sprint 7

Dominio

User
Task

Pydantic
SQLAlchemy
------------
Sprint 8

CRUD

GET

POST

PUT

DELETE
------------
Sprint 9

Conectar React

Usando

fetch()

Todavía NO Axios.
------------
Sprint 10

Persistencia real

------------
------------
FASE 3 — Profesionalización

Autenticación

JWT

Usuarios

Roles

Validaciones

Errores

------------
------------
FASE 4 — Calidad

Testing

Lint

Prettier

Refactor

Optimización

------------
------------
FASE 5 — Deploy

Frontend

Backend

Base de datos

Dominio

Portfolio

------------
------------
FASE 6 — Marca personal

LinkedIn

Portfolio

README profesional

Vídeo demo

CV

Stack

Frontend

React
TypeScript
Vite
React Router
Fetch

Después

Axios
TanStack Query

Backend

FastAPI
SQLAlchemy
SQLite
PostgreSQL