import Input from '../../atoms/Input';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';

const LabelInput = ({inputId, type, multiline, maxRows,  textLabel, variant, setValue, value}) => {
    return (
        <FormControl sx={{width:"100%"}}>
            <Input inputId={inputId} type={type} multiline={multiline} maxRows={maxRows} textLabel={textLabel} variant={variant} setValue={setValue} value={value}/>
        </FormControl>
    )
}

LabelInput.propTypes = {
    inputId: PropTypes.string.isRequired,
    type: PropTypes.string,
    multiline: PropTypes.bool,
    maxRows: PropTypes.number,
    textLabel: PropTypes.string.isRequired,
    variant: PropTypes.string,
    setValue: PropTypes.func,
    value: PropTypes.string,
};

export default LabelInput
