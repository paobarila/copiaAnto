import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Container } from '@mui/material';
import Header from '../molecules/Header';


const BaseLayout = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Header/>
          {/* Aquí puedes agregar tu logotipo, menú de navegación, etc. */}
          {/* <h1>My App</h1> */}
        </Toolbar>
      </AppBar>
      <Container>
        {/* El contenido dinámico se renderizará aquí */}
        
        {children}
      </Container>
      <footer>
        {/* Puedes agregar tu pie de página aquí, insertar icon Wavy */}
        <p>© 2024 EdVisto. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout;

