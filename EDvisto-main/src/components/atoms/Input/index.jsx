import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
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
}})

const InputField = ({
    inputId,
    type,
    multiline,
    rows,
    textLabel,
    variant = "outlined",
    setValue,
    value,
    required,  
    disabled,
    autoComplete,
    helperText,
})=> {

    const theme = useTheme();
    // const [showPassword, setShowPassword] = useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {
    // event.preventDefault();
    // };

    const handleChange = (event) => {
        //console.log(event.target.value);
        setValue(event.target.value);
    };


    return (
        <CSSTextField
            id={`input-${inputId}`}
            type={type}
            multiline={multiline}
            rows={rows}
            label={textLabel}
            variant={variant}
            value={value}
            onChange={handleChange}
            required={required}  
            disabled={disabled}
            autoComplete={autoComplete} 
            helperText={helperText}
            InputLabelProps={{
                shrink: true,
                sx:{...theme.typography.button}
            }}
            sx={{ height: "3.5rem", color: theme.palette.primary }}
        />
    );
};

InputField.propTypes = {
    inputId: PropTypes.string.isRequired,
    type: PropTypes.string,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    textLabel: PropTypes.string.isRequired,
    variant: PropTypes.string,
    setValue: PropTypes.func,
    value: PropTypes.string,
    required: PropTypes.string,
    disabled: PropTypes.string,
    autoComplete: PropTypes.string,
    helperText: PropTypes.string
};

export default InputField;


