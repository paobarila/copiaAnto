import { TextField, InputAdornment, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';

const CSSTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid',
      transition: 'border-color 0.2s',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '3px',
    },
  },
});

const InputField = ({
  inputId,
  type,
  variant = 'outlined',
  fullWidth,
  textLabel,
  value,
  onChange,
  multiline,
  rows,
  select,
  options = [],
  required,
  disabled,
  helperText,
  error,
  placeholder,
  childrenAdornment
}) => {
  const theme = useTheme();

  return (
    <CSSTextField
      id={inputId}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      label={textLabel}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      select={select}
      required={required}
      disabled={disabled}
      InputProps={{
        endAdornment: 
          <InputAdornment position='end'>
            {childrenAdornment}
          </InputAdornment>,
      }}
      InputLabelProps={{
        shrink: true,
        sx: { ...theme.typography.button },
      }}
      sx={{ height: '3.5rem', color: theme.palette.primary }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </CSSTextField>
  );
};

InputField.propTypes = {
  inputId: PropTypes.string.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  textLabel: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.arrayOf(PropTypes.string)]),
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  select: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.any, label: PropTypes.string })),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  childrenAdornment: PropTypes.node,
};

export default InputField;
