# CustomizedRating Component
El componente `CustomizedRating` es una versión personalizada del componente `Rating`  de Material-UI (MUI). Permite mostrar una calificación con estrellas personalizadas.


## Propiedades

- name: El nombre del componente. Debe ser único si hay varios componentes CustomizedRating en la misma página.
- defaultValue: El valor inicial de la calificación (por defecto es 0).
- value: El valor actual de la calificación.
- icon: El ícono que se muestra para las estrellas llenas. En este caso, se utiliza el componente - - - - StarFilled con un color personalizado (#33B5FF) y un ancho de 26 píxeles.
- emptyIcon: El ícono que se muestra para las estrellas vacías. Aquí se utiliza el componente StarEmpty con el mismo color y ancho.
- onChange: Una función de devolución de llamada que se ejecuta cuando cambia el valor de la calificación. Recibe dos argumentos: event (el evento de cambio) y newValue (el nuevo valor de la calificación).

 
### Uso
Para utilizar el componente CustomizedRating, simplemente importa y colócalo en tu aplicación de la siguiente manera:

```jsx

import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/system/Box';
import StarFilled from '../Icons/StarFilled';
import StarEmpty from '../Icons/StarEmpty';

function CustomizedRating() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="customized-color"
        defaultValue={0}
        value={value}
        icon={<StarFilled color={'#33B5FF'} width={26} />}
        emptyIcon={<StarEmpty color={'#33B5FF'} width={26} />}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

export default CustomizedRating;
```