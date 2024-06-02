# AvatarContainer

El componente `AvatarContainer` es un contenedor para un avatar que muestra una imagen de perfil y el nombre del usuario.

## Props

- pathImg:`string`
    - Obligatorio
    - La ruta de la imagen del avatar.
- size: `string`
    - Obligatorio
    - El tamaño del avatar.
- nameUser:	`string`
    - Obligatorio
    - El nombre del usuario.
- color: `string`
    - Obligatorio
    - El color del borde del avatar.

## Uso

```jsx
import Avatar from "@mui/material/Avatar";
import PropTypes from 'prop-types';

const AvatarContainer = ({ pathImg, size, nameUser, color }) => {
    return (
        <Avatar 
            src={pathImg} 
            alt={nameUser} 
            sx={{ width: size, height: size, border: `2px solid ${color}` }} />
    );
};

AvatarContainer.propTypes = {
    pathImg: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}


export default AvatarContainer;
```

![AvatarDisponible](../../../assets/images/doc/AvailableAvatar.png)

## Ejemplo de Uso

```jsx
import AvatarContainer from './components/atoms/Avatar';
import imgPerfil from './assets/images/avatar/imgPerfil.png';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';

function MyComponent() {

  return (
    <ThemeProvider theme={theme}>
      <AvatarContainer pathImg={imgPerfil} size={'3rem'} nameUser={'Cameron Rodriguez'} color={theme.palette.primary.main}/>
    </ThemeProvider>
  )
}

export default MyComponent
```

