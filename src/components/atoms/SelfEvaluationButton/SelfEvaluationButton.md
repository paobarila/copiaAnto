# SelfEvaluationButton
El componente `SelfEvaluationButton` es un botón personalizado utilizado en aplicaciones React con Material-UI (MUI). Puede recibir varias propiedades para personalizar su apariencia y comportamiento. Proviene del átomo BasicButton del mismo proyecto.

## Propiedades
- variant (obligatorio): Define el estilo del botón. Puede ser uno de los siguientes valores:
- 'contained': Botón con fondo y texto.
- 'outlined': Botón con borde y texto.
- 'text': Botón con texto sin fondo ni borde.
- childrenIcon: Un nodo React que representa un icono o cualquier otro contenido que desees mostrar junto al texto del botón.
- childrenText (obligatorio): El texto que se mostrará en el botón.
- ariaLabel (obligatorio): Etiqueta accesible para el botón.
- title (obligatorio): Título del botón (se muestra al pasar el cursor sobre él).
- onClick: Función que se ejecutará cuando se haga clic en el botón.
- borderRadius: Radio de borde personalizado para el botón (puede ser un valor en píxeles o porcentaje).

### Ejemplo de uso
```jsx
import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const SelfEvaluationButton = ({ variant, childrenIcon, childrenText, ariaLabel, title, onClick, borderRadius }) => {
  return (
    <Button
      variant={variant}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      sx={{
        height: '2.5rem',
        borderRadius: borderRadius,
        display: 'flex',
        gap: '0.5rem',
        width: '18rem',
        marginTop: '3.5rem',
        marginLeft: '35%',
      }}
    >
      {childrenIcon}
      {childrenText}
    </Button>
  );
};

SelfEvaluationButton.propTypes = {
  variant: PropTypes.string.isRequired,
  childrenIcon: PropTypes.node,
  childrenText: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
};

export default SelfEvaluationButton;
```