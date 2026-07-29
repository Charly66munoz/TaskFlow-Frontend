# Decisiones Técnicas - TaskFlow

> Este documento registra las decisiones arquitectónicas y tecnológicas tomadas durante el desarrollo del proyecto. El objetivo es comprender **por qué** se eligió cada herramienta y facilitar el repaso de conceptos antes de entrevistas técnicas.

---

# Sprint 1 - Día 1

## Arquitectura del proyecto

### Decisión

Separar el proyecto en dos aplicaciones independientes:

```text
taskflow/
├── frontend/
├── backend/
└── docs/
```

### Justificación

- Mantiene una separación clara entre cliente y servidor.
- Facilita el despliegue independiente.
- Es una estructura habitual en proyectos Full Stack.

---

## React + TypeScript

### Decisión

Utilizar React con TypeScript desde el inicio.

### Justificación

- TypeScript detecta errores durante el desarrollo.
- Mejora el autocompletado y la mantenibilidad.
- Es el estándar en la mayoría de proyectos React actuales.

---

## React Router

### Opciones

#### Forma tradicional

```tsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

Dentro de `App.tsx`:

```tsx
import { useState } from 'react'

import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Calculadora from './Calculadora';
import Listado from './Listado';

function App() {
const [calculos, setCalculos] =useState<string[]>([])

return (
  <>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Calculadora
        </Link>
        <Link to="/list" className="navbar-brand">
          Listado de calculo
        </Link>
      </div>
    </nav>
    <Routes>
      <Route
        path="/"
        element={<Calculadora calculos={calculos} setCalculos={setCalculos} />}
      />
      <Route
        path="/list"
        element={<Listado calculos={calculos}  />}
      />
    </Routes>
    ;
  </>
);

}

export default App
```

#### Forma elegida

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
```

```tsx
<RouterProvider router={router} />
```

### Justificación

Se eligió `createBrowserRouter` porque es la API moderna recomendada por React Router para aplicaciones nuevas.

Ventajas:

- Mejor escalabilidad.
- Soporta loaders y actions.
- Facilita layouts anidados.
- Permite manejo de errores por ruta.
- Prepara el proyecto para futuras funcionalidades sin modificar la arquitectura.

---

## Fetch vs Axios

### Decisión

Comenzar utilizando la API nativa `fetch`.

### Justificación

Antes de incorporar librerías externas, es importante comprender cómo funcionan las peticiones HTTP utilizando las herramientas que ofrece el navegador.

Cuando el proyecto crezca y aparezcan necesidades como:

- interceptores
- configuración global
- cancelación de peticiones
- mejor manejo de errores

se evaluará migrar a Axios.

---

## Organización de src

### Decisión

Separar el código por responsabilidades.

```text
src/
├── assets/
├── components/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── types/
└── utils/
```

### Justificación

Esta organización facilita el crecimiento del proyecto y evita tener todos los archivos mezclados en la raíz de `src`.

---

## Convenciones

### Carpetas

Siempre en minúsculas.

Ejemplo:

```text
components
services
hooks
```

### Componentes

PascalCase.

```tsx
TaskCard.tsx
LoginForm.tsx
```

### Funciones

camelCase.

```ts
getTasks()
createTask()
deleteTask()
```

### Constantes

UPPER_SNAKE_CASE.

```ts
API_URL
DEFAULT_PAGE_SIZE
```

---

> Este documento se actualizará al finalizar cada Sprint con las nuevas decisiones técnicas tomadas durante el desarrollo del proyecto.

## COMMITS

"feat: add task creation page" -> Nueva funcionalidad.

"fix: resolve navigation issue" -> Corrección de un error.

"refactor: simplify router configuration" ->Mejora interna sin cambiar el comportamiento.

"docs: update README" -> Cambios en la documentación.

"style: format code with prettier" -> Cambios de formato.

"test: add unit tests for TaskCard" -> Pruebas.