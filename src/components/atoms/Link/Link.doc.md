# BaseLink

El componente BaseLink es un componente de enlace personalizado que utiliza Material-UI (@mui/material) y PropTypes para gestionar sus propiedades. Este componente acepta varias props para personalizar el enlace.

## Props

- path: `string, required`: 
    - URL a la que apunta el enlace.
- color `string, optional`: 
    - Color del texto del enlace. Se espera una cadena de texto en formato CSS.
    - Este componente utiliza theme.palette.text.main como el color por defecto del texto del enlace
- onClick `func, optional`: 
    - Función de manejo de clic para el enlace.
- text `string, required`: 
    - Texto a mostrar en el enlace.

## Uso
```jsx
import Link from "@mui/material/Link";
import PropTypes from 'prop-types';
import theme from "../../../theme/theme.js";

const BaseLink = ({ path, color, text, onClick }) => {
    return (
        <Link
            href={path}
            underline="none"
            color={color}
            sx={{ textAlign: "center" }}
            onClick={onClick}
        >
            {text}
        </Link>
    );
};

BaseLink.propTypes = {
    path: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

BaseLink.defaultProps = {
    color: theme.palette.text.main
}

export default BaseLink;
```

## Ejemplo de Uso

```jsx
import Link from './components/atoms/Link';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <ThemeProvider theme={theme}>
      <Link path={'/home'}  text='Haga click aquí' onClick={handleClick}/> 
    </ThemeProvider>
  )
}

export default MyComponent
```