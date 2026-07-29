# CSS - Sistema de Posicionamiento

> 📚 Notas del GRAN PRIX LABORAL
>
> Objetivo: comprender **cómo piensa el navegador** antes de aprender Tailwind.

---

# ¿Cómo coloca los elementos el navegador?

Por defecto, todos los elementos HTML tienen:

```css
position: static;
```

Es decir:

> "Me coloco debajo del elemento anterior."

Ejemplo:

```
Header

Sidebar

Main

Footer
```

No hace falta indicar ninguna posición.

Este comportamiento se llama **flujo normal del documento**.

---

# 1. Position: static

Es el comportamiento por defecto.

```css
position: static;
```

Características:

- Participa del flujo normal.
- Empuja a los elementos siguientes.
- No responde a `top`, `left`, `right` ni `bottom`.

Visualmente:

```
████████████

Header

████████████

Sidebar

████████████

Main

████████████
```

### ¿Cuándo usarlo?

Prácticamente siempre.

La mayoría de elementos de una aplicación usan `position: static`.

---

# 2. Position: relative

```css
position: relative;
```

Esta propiedad suele generar confusión porque, visualmente, normalmente no cambia nada.

```
Header

Sidebar

Main
```

Todo sigue igual.

Entonces...

## ¿Para qué sirve?

Principalmente para una cosa:

> "Si algún hijo quiere posicionarse absolutamente, tomame como referencia."

Ejemplo:

```html
<div class="padre">
    <div class="hijo"></div>
</div>
```

```css
.padre{
    position: relative;
}

.hijo{
    position:absolute;
    top:0;
    right:0;
}
```

Ahora el hijo se posiciona respecto del padre.

Si el padre **NO** tuviera `position: relative`, el hijo se posicionaría respecto a toda la ventana.

### También permite pequeños desplazamientos

```css
position: relative;
top:10px;
left:20px;
```

Pero su uso más habitual es servir como referencia para elementos `absolute`.

---

# 3. Position: absolute

```css
position:absolute;
```

Cuando un elemento pasa a `absolute`, ocurre algo muy importante:

> Sale completamente del flujo del documento.

El navegador deja de reservarle espacio.

Antes:

```
Header

Sidebar

Main
```

Después:

```
Header

Main


Sidebar (flotando)
```

El Sidebar sigue existiendo, pero ya no ocupa espacio.

Ahora podemos moverlo con:

```css
top
right
bottom
left
```

Ejemplo:

```css
position:absolute;
top:20px;
right:20px;
```

## ¿Respecto a qué se posiciona?

Si existe un padre con:

```css
position: relative;
```

Se posicionará respecto de ese padre.

Si no existe ninguno...

Se posicionará respecto a la ventana del navegador.

### Casos de uso

- Tooltips
- Badges
- Dropdowns
- Menús desplegables
- Botones flotantes dentro de una tarjeta

---

# 4. Position: fixed

```css
position:fixed;
```

Es parecido a `absolute`, pero con una diferencia enorme.

No se posiciona respecto del padre.

Se posiciona respecto de la ventana del navegador.

Ejemplo:

```css
position:fixed;
bottom:20px;
right:20px;
```

Visualmente:

```
Pantalla

──────────────

Contenido

Contenido

Contenido

          ● Botón
```

Aunque el usuario haga scroll...

El botón permanece exactamente en el mismo lugar.

### Casos de uso

- Botón "Volver arriba"
- Chat flotante
- Barra inferior de navegación
- Menú móvil
- Botón de ayuda

---

# Absolute vs Fixed

## Absolute

```
Depende del padre.
```

Se mueve si el documento hace scroll.

---

## Fixed

```
Depende de la pantalla.
```

Nunca se mueve durante el scroll.

---

# Regla mental

## Static

> "Estoy donde me corresponde."

---

## Relative

> "Sigo en mi sitio, pero puedo servir de referencia."

---

## Absolute

> "Salgo del flujo y floto dentro de mi padre."

---

## Fixed

> "Floto respecto a toda la pantalla."

---

# Aplicación en TaskFlow

## Header

```
position: static;
```

Forma parte del layout.

---

## Sidebar Desktop

```
position: static;
```

También forma parte del layout.

---

## Menú inferior Mobile

```
position: fixed;
bottom:16px;
```

Debe permanecer visible mientras el usuario navega.

---

## Menú desplegable del usuario

```
position: absolute;
```

Debe aparecer relativo al botón del avatar.

---

# Lección del Tech Lead

No elijas un tipo de posicionamiento porque "funciona".

Elegilo según la responsabilidad del elemento.

- **Static** → elementos estructurales.
- **Relative** → referencia para hijos o pequeños ajustes.
- **Absolute** → elementos flotantes dentro de un componente.
- **Fixed** → elementos que deben permanecer visibles respecto a la pantalla.

La pregunta correcta no es:

> "¿Qué posición uso?"

La pregunta correcta es:

> "¿Respecto a quién quiero posicionar este elemento?"