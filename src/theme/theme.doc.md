# Archivo theme.js - Documentación

El archivo `theme.js` define un objeto de tema personalizado utilizando la librería Material-UI. Este tema personalizado se puede aplicar a una aplicación para controlar aspectos visuales como colores, tipografías y espaciado.

## Paleta de Colores

El objeto `palette` define los colores principales y secundarios utilizados en la aplicación. Estos colores pueden ser referenciados en varios componentes de Material-UI para mantener una apariencia coherente.

- `primary`: Define los colores primarios utilizados en la aplicación.
  - `light`: Color claro utilizado para efectos de resaltado.
  - `main`: Color principal utilizado para la mayoría de los elementos.
  - `contrastText`: Color del texto que contrasta con el color principal.

- `secondary`: Define los colores secundarios utilizados en la aplicación.
  - `main`: Color secundario principal utilizado para resaltar elementos secundarios.
  - `contrastText`: Color del texto que contrasta con el color secundario.

- `accent`: Define un color de acento adicional para uso específico.

- `text`: Define un color de texto adicional.

- `white`: Define un color de fondo blanco para uso específico. (Ver si funciona)

- `gray`: Define un color de fondo gris para uso específico. (Ver si funciona)

- `alert`: Define un color para mensajes de alerta o errores.

## Tipografía

El objeto `typography` define estilos de tipografía para diferentes elementos de texto en la aplicación. Estos estilos pueden aplicarse a títulos, subtítulos, texto de párrafo, botones, enlaces, etc.

- `h1`, `h2`, `h3`: Estilos para títulos principales de diferentes tamaños.

- `subtitle1`: Estilo para subtítulos.

- `body1`: Estilo para texto de párrafo.

- `button`: Estilo para botones.

- `link`: Estilo para enlaces.

Cada estilo de tipografía especifica propiedades como peso de fuente (fontWeight), tamaño (fontSize), altura de línea (lineHeight), espaciado de letras (letterSpacing), transformación (textTransform) y espaciado del parrafo (marginTop).

## Exportación del Tema

El objeto de tema personalizado se exporta al final del archivo usando `export default`. Esto permite que el tema se importe y aplique en otras partes de la aplicación utilizando Material-UI.

---

Este archivo proporciona una manera fácil de personalizar el aspecto visual de una aplicación utilizando Material-UI, permitiendo un control preciso sobre colores y tipografías.
