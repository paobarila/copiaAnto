import {useState} from 'react';
import Logo from '../../atoms/Logo';
import Box from '@mui/material/Box';
import LabelInput from '../../molecules/LabelInput';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import BasicButton from '../../atoms/Button/BasicButton';
// import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { ThemeProvider } from '@mui/material/styles';
import theme from '.././../../theme/theme.js';
import './FormRegister.css';

const FormRegister = () => {
    const [ value, setValue ] = useState('');


    return (
        <ThemeProvider theme={theme} >
            <Box className="form-container" sx={{border: `2px solid ${theme.palette.secondary.main}`}}>
                <Logo/>
                <Box component="form" noValidate autoComplete="off" sx={{display: "flex", flexDirection: "column", gap: "1.25rem", width: "100%", height: "47.625rem" }}>
                    <FormGroup sx={{display:"flex", flexDirection: "column", flexWrap: "nowrap", width: "100%", gap:"2.5rem", height: "33.5rem", alignItems: 'center'}}>
                        <LabelInput inputId={'nombre-apellido'} textLabel={'Nombre Completo'} placeholder={"Nombre y Apellido"} type={'text'} variant={'outlined'} setValue={setValue} value={value}/>
                        <LabelInput inputId={'fechaNacimiento'} textLabel={'Fecha de Nacimiento'} type={'date'} variant={'outlined'} setValue={setValue} value={value}/>
                        <LabelInput inputId={'email'} textLabel={'E-mail'} type={'e-mail'} variant={'outlined'} setValue={setValue} value={value}/>
                        <LabelInput inputId={'password'} textLabel={'Contraseña'} type={'password'} variant={'outlined'}/>
                        <LabelInput inputId={'password2'} textLabel={'Repetir contraseña'} type={'password'} variant={'outlined'}/>
                        <LabelInput inputId={'helperPassword'} textLabel={'Pista para contraseña'} type={'text'} variant={'outlined'} setValue={setValue} value={value}/>
                    </FormGroup>

                    <FormControl sx={{width:"100", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        defaultValue="student"
                        name="radio-buttons-group">
                        <FormControlLabel value="student" control={<Radio />} label="Soy Estudiante" sx={{display:"flex", justifyContent:"center", alignItems:"center"}} />
                        <FormControlLabel value="teacher" control={<Radio />} label="Soy Educador" />
                        </RadioGroup>
                    </FormControl>

                    <Stack direction="column" sx={{ width: "100%", height: "5.625rem", display:"flex", gap:"0.625rem"}}>
                        <BasicButton variant={'contained'} text={'Registrarse'} ariaLabel={'Registro de cuenta de EdVisto'} title={'Registrarse'} borderRadius={'1.25rem'}/>
                        <BasicButton variant={'outlined'} text={'Iniciar sesión'} ariaLabel={'Inicio de sesión de EdVisto'} title={'Iniciar Sesion'}  borderRadius={'1.25rem'}/>
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default FormRegister
