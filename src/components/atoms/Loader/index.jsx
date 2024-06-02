import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from 'prop-types';

const Loader = ({color,  size}) => {
    return (
        <Backdrop open={true}>
            <CircularProgress color={color} size={size}  />
        </Backdrop>
    );
};

Loader.propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export default Loader;