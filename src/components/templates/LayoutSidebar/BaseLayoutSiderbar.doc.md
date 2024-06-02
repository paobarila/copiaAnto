# Componente BaseLayoutSiderbar

El componente `BaseLayoutSiderbar` es un diseño base para una barra lateral en una aplicación. Incluye una barra de aplicación (`AppBar`) con una barra de herramientas (`Toolbar`) y un contenedor principal con pestañas verticales y contenido.

## Props

- **children** (`node`, requerido): Contenido secundario que se renderizará dentro del componente.

## Estructura del Componente

El componente consta de los siguientes elementos:

1. `div`: Un contenedor principal con un fondo definido por el tema de la aplicación.
2. `AppBar`: Una barra de aplicación fija en la parte superior.
3. `Toolbar`: Una barra de herramientas dentro de la barra de aplicación.
4. `Container`: Un contenedor para el contenido principal y las pestañas verticales.
5. `VerticalTabs`: Componente de pestañas verticales para la navegación.

## Ejemplo de Uso

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Container } from '@mui/material';
import theme from '../../theme/theme.js';
import VerticalTabs from '../molecules/VerticalTabs.jsx/VerticalTabs.jsx';

const BaseLayoutSiderbar = ({ children }) => {
  return (
    <div style={{background:"white"}}>
      <AppBar position="static" sx={{ boxShadow: 'none'}}>
        <Toolbar sx={{backgroundColor:"white"}}>
          
        </Toolbar>
      </AppBar>
      <Container sx={{display: 'flex', justifyContent:'center', marginTop:'1.25rem'}}>
        <VerticalTabs/>
        {children}
      </Container>
    </div>
  );
};

BaseLayoutSiderbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayoutSiderbar;
