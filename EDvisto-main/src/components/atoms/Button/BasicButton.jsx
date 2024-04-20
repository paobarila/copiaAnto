import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const BasicButton = ({
    variant,
    icon,
    text,
    color,
    ariaLabel,
    title,
    onClick,
    borderRadius,
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            aria-label={ariaLabel}
            title={title}
            onClick={onClick}
            sx={{
                height: "2.5rem",
                borderRadius: borderRadius,
                display: "flex",
                gap: "0.5rem",
            }}
        >
            <img src={icon} alt="" />
            {text}
        </Button>
    );
};

BasicButton.propTypes = {
    variant: PropTypes.string.isRequired,
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    borderRadius: PropTypes.string,
};

export default BasicButton;
