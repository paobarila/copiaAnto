import PropTypes from 'prop-types';

const Isotipo = ({ pathImg, width, height }) => {
    return (
        <img
            className="isotipo"
            src={pathImg}
            alt="Isotipo de EdVisto"
            style={{ width: width, height: height }}
        />
    );
};

Isotipo.propTypes = {
    pathImg: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Isotipo;
