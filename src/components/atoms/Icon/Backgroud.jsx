import PropTypes from "prop-types";

const Background = ({ color, width = 1440, height = 500 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 1440 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M-278 500H1717.17V0C1660.15 11.5575 1594.88 29.8004 1517.65 56.2266C1365.37 108.333 1259.58 163.56 1171.9 209.335C972.37 313.498 866.581 368.725 520.068 226.903C315.166 143.041 26.0917 93.6291 -278 97.5992V500Z"
                fill={color}
            />
        </svg>
    );
};

Background.propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default Background;
