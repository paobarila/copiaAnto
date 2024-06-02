Componente FormPopup
Descripción
El componente FormPopup es un cuadro emergente que notifica al usuario que ha completado su autoevaluación. Utiliza varios componentes como Logo, BasicButton, y CloseIcon para estructurar y estilizar el contenido. El componente también permite la navegación a otra ruta cuando se cierra el popup.

Props
El componente FormPopup no acepta props directamente. Todo su contenido y comportamiento está predefinido en el código.

Uso
El componente FormPopup se utiliza para mostrar un mensaje de finalización de autoevaluación en un cuadro emergente estilizado. Incluye un logo, un mensaje y un botón que redirige a la página principal al hacer clic.

jsx
Copiar código
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/eva/eva_happy.png";
import Logo from '../../../components/atoms/Logo';
import BasicButton from "../../atoms/Buttons/BasicButton.jsx";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import theme from ".././../../theme/theme.js";
import "./FormPopup.css";

const FormPopup = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="form-container"
                sx={{
                    border: `2px solid ${theme.palette.secondary.main}`,
                }}
            >
                <CloseIcon 
                id="close"
                onClick={() => handleClick("/")}
                />
                <div className="form-container-text">
                    <Logo pathImg={logo} width={'112px'} height={'112px'} />
                    <label>
                        <h1>Ya completaste tu autoevaluación</h1>
                        <p>¡Qué felicidad haber completado este desafío!</p>
                        <p> Vuelve pronto para ver la devolución de tu docente.</p>
                    </label>
                </div>
                <div className="button-container">
                    <BasicButton
                        variant="outlined"
                        childrenText="Ok"
                        color="primary"
                        ariaLabel="Confirmar accion"
                        title="Ok"
                        borderRadius={"1.25rem"}
                        onClick={() => handleClick("/")}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default FormPopup;
Ejemplo de Uso
A continuación se muestra cómo importar y usar el componente FormPopup en otro componente.

jsx
Copiar código
import React from 'react';
import FormPopup from './path/to/FormPopup';

const SomeComponent = () => {
    return (
        <div>
            <FormPopup />
        </div>
    );
};

export default SomeComponent;
Estilos
El componente FormPopup utiliza las siguientes clases CSS para aplicar estilos. Asegúrate de incluir estas clases en tu archivo CSS.

FormPopup.css
css
Copiar código
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 28rem;
    max-height: 56.585rem;
    border-radius: 1.25rem;
    padding: 1.25rem;
    background: var(--white);
    gap: 1.25rem;
    box-sizing: border-box;
    width: 816px;
}

.form-container-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-container {
    margin-top: 1.25rem;
}

#close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
}
Resumen
El componente FormPopup proporciona una interfaz de usuario estilizada para notificar al usuario sobre la finalización de una autoevaluación. Utiliza Material-UI para los estilos y la funcionalidad, y permite la navegación a una página principal o cualquier otra ruta especificada. Este componente es fácil de integrar y reutilizar en diferentes partes de la aplicación.

Temas y Estilos
El componente FormPopup utiliza el tema theme para aplicar estilos personalizados. Asegúrate de tener configurado el tema theme con los colores y estilos necesarios.

Ejemplo de tema (theme.js)
javascript
Copiar código
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        gray: {
            main: '#f5f5f5',
        },
        // otros colores del tema
    },
    // otros ajustes del tema
});

export default theme;
Este ejemplo muestra cómo configurar y utilizar un tema personalizado en Material-UI, lo que permite aplicar estilos consistentes en toda la aplicación.