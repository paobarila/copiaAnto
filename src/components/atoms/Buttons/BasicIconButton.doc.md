# Componente BasicIconButton

Este componente es un botón de icono básico que cambia entre dos iconos al hacer clic en él.

## Propiedades

- iconOff: `node` 
Obligatorio
El icono a mostrar cuando el botón está desactivado.
- iconOn: `node`
Obligatorio
El icono a mostrar cuando el botón está activado.

## Uso

```jsx
import React from 'react';
import BasicIconButton from './Buttons/BasicIconButton';
import { FavoriteBorder, Favorite } from '@mui/icons-material';

const ExampleComponent = () => {
  return (
    <div>
      <BasicIconButton iconOff={<FavoriteBorder />} iconOn={<Favorite />} />
    </div>
  );
};

export default ExampleComponent;
```

