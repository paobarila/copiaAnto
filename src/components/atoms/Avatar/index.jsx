import Avatar from "@mui/material/Avatar";
import PropTypes from 'prop-types';

const AvatarContainer = ({ pathImg, size, nameUser, color, onClick }) => {
    return (
        <Avatar 
            src={pathImg} 
            alt={nameUser} 
            sx={{ width: size, height: size, border: `2px solid ${color}` }}
            onClick={onClick} />
    );
};

AvatarContainer.propTypes = {
    pathImg: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    nameUser: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default AvatarContainer;