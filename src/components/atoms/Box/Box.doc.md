# BoxContainer

Componente reutilizable de contenedor con propiedades configurables.

## Props

- `color` (String, requerido): Color del borde del contenedor.
- `type` (String): Tipo de elemento HTML para usar como contenedor. Puede ser uno de: 'div', 'form', 'section'.
- `height` (String, requerido): Altura del contenedor.
- `width` (String, requerido): Ancho del contenedor.
- `radius` (String): Radio de borde del contenedor.
- `children` (Node): Contenido del contenedor.

```jsx
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";

const BoxContainer = ({ color, type, height, width, radius, children }) => {
    return (
        <Box component={type} height={height} width={width} sx={{ border: `3px solid ${color}`, borderRadius:radius }}>
            {children}
        </Box>
    );
};

BoxContainer.propTypes = {
    color: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['div', 'form', 'section']),
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    radius: PropTypes.string,
    children: PropTypes.node,
};

export default BoxContainer;
```

## Uso
```jsx
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';
import BoxContainer from './components/atoms/Box';

function MyComponent() {

  return (
    <ThemeProvider theme={theme}>
        <BoxContainer color={theme.palette.primary.main} type={'form'} height={'70.5rem'} width={'51rem'} radius={'1.25rem'} />
    </ThemeProvider>
  )
}

export default MyComponent
```

