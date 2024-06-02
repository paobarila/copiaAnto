import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import Ellipse from '../../atoms/Ellipse';
import imgEva from '../../../assets/images/eva/eva_pet.png';
import theme from '../../../theme/theme';
import './Empty.css';


const Empty = ({title, subtitle, color}) => {
  return (
    <div className='empty_container'>
        {title && <Typography variant='h2' color={theme.palette.text.main}>{title}</Typography>}
        {subtitle && <Typography variant='h2' color={theme.palette.text.main}>{subtitle}</Typography>}
        <div className='img_container'>            
            <Ellipse background={color} width={'15.89rem'} height={'16.8125rem'} opacity={'50%'}/> 
            <img  className='img_empty' src={imgEva} alt="Imagen de la mascota de EdVisto" width={'22.65rem'}  height={'22.65rem'} />
        </div>
    </div>
  )
}

Empty.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    color: PropTypes.string.isRequired,
  };
  

export default Empty