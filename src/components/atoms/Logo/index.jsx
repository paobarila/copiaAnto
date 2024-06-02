import PropTypes from 'prop-types';

const Logo = ({ pathImg, width, height }) => {
    return (
        <img
            src={pathImg}
            alt="Isotipo de EdVisto"
            style={{ width: width, height: height }}
        />
    );
};

Logo.propTypes = {
    pathImg: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}

export default Logo;