import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const SelfEvaluationButton = ({ variant, childrenIcon, childrenText, ariaLabel, title, onClick, borderRadius, }) => {
  return (
    <Button
      variant={variant}
     /* color={color}*/
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      sx={{
        height: '2.5rem',
        borderRadius: {borderRadius},
        display: 'flex',
        gap: '0.5rem',
        width:'18rem',
        marginTop:'3.5rem',
        marginLeft:'75%',
       }}
    >
      {childrenIcon}
      {childrenText}
    </Button>
  );
};

SelfEvaluationButton.propTypes = {
  variant: PropTypes.string.isRequired,
  childrenIcon: PropTypes.node,
  childrenText: PropTypes.string.isRequired,
  /*color: PropTypes.string,*/
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  borderRadius: PropTypes.string,
};

export default SelfEvaluationButton;
