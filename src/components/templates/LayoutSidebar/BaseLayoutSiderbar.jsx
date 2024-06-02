import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Container } from '@mui/material';
// import theme from '../../theme/theme.js';
import VerticalTabs from '../../molecules/VerticalTabs/VerticalTabs.jsx';

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