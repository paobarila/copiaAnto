import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

const ButtonIcon = ({icon}) => {
    return (
        <IconButton sx={{width:"32px", heigth:"32px"}} >
            {icon}
        </IconButton>
    )
}

ButtonIcon.propTypes = {
    icon: PropTypes.string,
}

export default ButtonIcon
