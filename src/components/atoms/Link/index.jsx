import Link from "@mui/material/Link";
import PropTypes from 'prop-types';
import theme from "../../../theme/theme.js";

const BaseLink = ({ path, color, text, onClick }) => {
    return (
        <Link
            href={path}
            underline="none"
            color={color}
            sx={{ textAlign: "center" }}
            onClick={onClick}
        >
            {text}
        </Link>
    );
};

BaseLink.propTypes = {
    path: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

BaseLink.defaultProps = {
    color: theme.palette.text.main // Valor por defecto para color
}

export default BaseLink;