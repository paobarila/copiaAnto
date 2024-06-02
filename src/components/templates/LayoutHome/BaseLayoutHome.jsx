import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Container } from '@mui/material';
import theme from '../../../theme/theme';
import Header from '../../molecules/Header';

const BaseLayoutHome = ({ children }) => {
  return (
    <div style={{background:theme.palette.background.main}}>
      <AppBar position="static" sx={{ boxShadow: 'none'}}>
        <Toolbar sx={{backgroundColor: theme.palette.background.main}}>
          <Header/>
        </Toolbar>
      </AppBar>
      <Container sx={{display:'flex', justifyContent:'center', marginTop:'1.25rem'}}>
          {children}
      </Container>
    </div>
  );
};

BaseLayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayoutHome;
