import PropTypes from "prop-types";

const Wavy = ({ color }) => {
  return (
    <svg width="1996" height="500" viewBox="0 0 1996 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 500H1995.17V0C1938.15 11.5575 1872.88 29.8004 1795.65 56.2266C1643.37 108.333 1537.58 163.56 1449.9 209.335C1250.37 313.498 1144.58 368.725 798.068 226.903C593.166 143.041 304.092 93.6291 0 97.5992V500Z" fill={color} />
    </svg >
  );
};

Wavy.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Wavy;
