# Componente BasicButton

Este componente es un botón básico construido con Material-UI.

## Propiedades

**variant:** `string`  
El estilo del botón (obligatorio).
Acepta tres variantes de botón: 
- `text`: botón sin relleno y sin borde, 
- `contained`: botón relleno y sin borde, el color del texto se toma de contrastText de theme.js,
- `outlined`: botón sin relleno y con borde, el color del borde se toma de pallete de theme.js

- childrenIcon: `node`  
El ícono a mostrar dentro del botón.

- childrenText: `string`  
El texto del botón (obligatorio).

- color: `string`  
El color del botón.

- ariaLabel: `string`  
La etiqueta ARIA para accesibilidad (obligatorio).

- title: `string`  
El título del botón (obligatorio).

- onClick: `func`  
Función de devolución de llamada a ejecutar cuando se hace clic en el botón.

- borderRadius: `string`  
El radio de borde del botón.

![AvailableButtons](../../../assets/images/doc/AvailableButtons.png)

## Uso

```jsx
import BasicButton from './Butons/BasicButton';

<BasicButton
  variant="contained"
  childrenIcon={<Icono />}
  childrenText="Texto del Botón"
  color="primary"
  ariaLabel="Etiqueta ARIA del Botón"
  title="Título del Botón"
  onClick={() => console.log('Botón clickeado')}
  borderRadius="50%"
/>