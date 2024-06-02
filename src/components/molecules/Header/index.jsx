import React, { useState} from 'react';
import AvatarContainer from '../../atoms/Avatar';
import Logo from '../../atoms/Logo';
import Menu from '../../atoms/Menu';
import Edit from '../../atoms/Icon/Edit';
import Logout from '../../atoms/Icon/Logout';
import logoImg from '../../../assets/images/logos/logo_ev.png';
import imgPerfil from '../../../assets/images/avatar/imgPerfil.png';
import theme from '../../../theme/theme';
import './Header.css';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   const menuItems = [
    {
        id: 'editProfile',
        string: "Editar perfil",
        path: "/editProfile", 
        icon: <Edit color={theme.palette.primary.main} width={24} />
      },
    { 
        id: 'logout',
        string: "Cerrar sesión",
        path: "/",
        icon: <Logout color={theme.palette.primary.main} width={24} />
      }
  ];

  return (
    <div className='header_container'>
        <Logo  pathImg={logoImg} width={'5rem'} height={'2.25rem'}/>
        <AvatarContainer pathImg={imgPerfil} size={'3rem'} nameUser={'Cameron Rodriguez'} color={theme.palette.primary.main} onClick={handleClick}/>
        <Menu list={menuItems} anchorEl={anchorEl} onClose={handleClose} idElement={"botonAccount"} idMenu={"menuAccount"}/>
    </div>
  )
}

export default Header