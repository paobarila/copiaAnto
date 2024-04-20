# InputField Component

Este componente proporciona un campo de entrada utilizando el componente `TextField` de Material-UI.

## Props

| Propiedad  | Tipo     | Descripción                                                                       |
|------------|----------|-----------------------------------------------------------------------------------|
| inputId    | string   | ID único para el campo de entrada. Requerido.                                     |
| type       | string   | Tipo de entrada del campo (por ejemplo, 'text', 'number'). Requerido.             |
| textLabel  | string   | Texto del label para el campo de entrada. Requerido.                              |
| variant    | string   | Variante del campo de entrada (por ejemplo, 'standard', 'outlined'). Requerido.   |
| setValue   | function | Función para establecer el valor del campo de entrada. Requerido.                 |
| value      | string   | Valor del campo de entrada. Requerido.                                            |

## Uso

```jsx
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const InputField = ({ inputId, type, textLabel, variant, setValue, value }) => {
    const theme = useTheme();
    
    const handleChange = (event) => {
        setValue(event.target.value);
    } 
    
    return (
        <TextField 
            id={`input-${inputId}`} 
            type={type} 
            label={textLabel} 
            variant={variant} 
            value={value}
            onChange={handleChange}
            sx={{ height: "3.5rem", color: theme.palette.primary.light }} />
    );
}

InputField.propTypes = {
    inputId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    textLabel: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default InputField;


// Uso: 
// <Input inputId={'email'} textLabel={'E-mail'} type={'text'} variant={'outlined'} setValue={setValue} value={value}/>
// <Input inputId={'password'} textLabel={'Contraseña'} type={'password'} variant={'outlined'} setValue={setValue} value={value}/>
// <Input inputId={'anonacimientp'} textLabel={'Año de Nacimiento'} type={'date'} variant={'outlined'} setValue={setValue} value={value}/>
// <Input inputId={'fraseSeguridad'} textLabel={'Frase de seguridad'} variant={'outlined'} setValue={setValue} value={value}/>
// <Input inputId={'fileFoto'} textLabel={'Foto Perfil'} type={'file'} setValue={setValue} value={value}/>
// <Input inputId={'description'} textLabel={'Descripción'} multiline={true} maxRows={4} setValue={setValue} value={value}/>
