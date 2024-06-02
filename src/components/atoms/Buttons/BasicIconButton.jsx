import { useState} from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';

const BasicIconButton = ({iconOff, iconOn}) => {
  const [showIcon, setShowIcon] = useState(false);

  const handleClickShowIcon = () => setShowIcon((show) => !show);

  const handleMouseDownIcon = (event) => {
    event.preventDefault();
  };

  return (
    <IconButton onClick={handleClickShowIcon} onMouseDown={handleMouseDownIcon}>
      {showIcon ? iconOff : iconOn}
    </IconButton>
  );
};

BasicIconButton.propTypes = {
  iconOff: PropTypes.node.isRequired,
  iconOn: PropTypes.node.isRequired,
}

export default BasicIconButton;
