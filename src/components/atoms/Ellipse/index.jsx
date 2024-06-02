import './Ellipse.css';
import PropTypes from 'prop-types';

const Ellipse = ({ background, width, height, opacity }) => {
  return <div className="ellipse" style={{ background: background, width: width, height: height, opacity:opacity }}></div>;
};

Ellipse.propTypes = {
  background: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  opacity: PropTypes.string
};

export default Ellipse;
