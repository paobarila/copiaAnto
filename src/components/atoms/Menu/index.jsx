import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

const BasicMenu = ({ list, anchorEl, onClose, idElement, idMenu }) => {
  const open = Boolean(anchorEl);

  return (
      <Menu
        id={idMenu}
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': `${idElement}`,
        }}
      >
        {list.map((item) => (
          <MenuItem key={item.id} onClick={onClose}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText>{item.string}</ListItemText>
            <Divider/>
          </MenuItem>
        ))}
      </Menu>
  );
};

BasicMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  anchorEl: PropTypes.instanceOf(Element), // Tipo específico de elemento DOM
  onClose: PropTypes.func.isRequired,
  idElement: PropTypes.string.isRequired,
  idMenu: PropTypes.string.isRequired,
};
export default BasicMenu;
