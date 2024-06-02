import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const BasicButton = ({ variant, childrenIcon, childrenText, color, ariaLabel, title, onClick, borderRadius, height, width }) => {
  return (
    <Button
      variant={variant}
      color={color}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      sx={{
        height: height || '2.5rem',
        width: width, 
        borderRadius: borderRadius,
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      {childrenIcon}
      {childrenText}
    </Button>
  );
};

BasicButton.propTypes = {
  variant: PropTypes.string.isRequired,
  childrenIcon: PropTypes.node,
  childrenText: PropTypes.string.isRequired,
  color: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default BasicButton;
