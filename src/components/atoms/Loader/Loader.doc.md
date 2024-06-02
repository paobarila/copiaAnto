# Loader

El componente Loader muestra un indicador de carga circular.

## Propiedades

- color: `string`
  - Obligatorio
  - Color del indicador de carga.
- size: `string`
  - Obligatorio
	- Tamaño del indicador de carga.

## Uso

```jsx
import Loader from './Loader';

const MyComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Loader color={'primary'} size={'7.5rem'}/>
    </ThemeProvider>
  );
};

export default MyComponent;
