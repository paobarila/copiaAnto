Componente FormPopupStar
Descripción
El componente FormPopupStar es un cuadro emergente que permite a los usuarios reflexionar sobre su participación en un proyecto. Utiliza varios componentes como Logo, BasicButton, CustomizedRating, y CloseIcon para estructurar y estilizar el contenido. El componente también permite la navegación a otra ruta cuando se cierra el popup.

Props
El componente FormPopupStar no acepta props directamente. Todo su contenido y comportamiento está predefinido en el código.

Uso
El componente FormPopupStar se utiliza para mostrar un mensaje de reflexión en un cuadro emergente estilizado. Incluye un logo, un mensaje, un sistema de calificación con estrellas y un botón que redirige a la página principal al hacer clic.

jsx
Copiar código
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/eva/eva_happy.png";
import Logo from '../../../components/atoms/Logo';
import BasicButton from '../../atoms/Buttons/BasicButton.jsx';
import CustomizedRating from "../../atoms/Ranking/ranking.jsx";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import theme from ".././../../theme/theme.js";
import "./FormPopupStar.css";

const FormPopupStar = () => {
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
                        <p>Es momento de reflexionar acerca de tu participación en este proyecto.</p>
                        <p>En cada área debés puntuar con estrellas. Te dejamos una pista para hacerlo:</p>
                    </label>
                </div>

                <div className="star-static">
                    <div className="rating-pair">
                        <CustomizedRating defaultValue={1} readOnly />
                        <p>Necesito mejorar</p>
                    </div>
                    <div className="rating-pair">
                        <CustomizedRating defaultValue={2} readOnly />
                        <p>Estuvo bien, pero puedo hacerlo mejor</p>
                    </div>
                    <div className="rating-pair">
                        <CustomizedRating defaultValue={3} readOnly />
                        <p>Hice un buen trabajo, estoy contento con mis aportes y cómo ayudé al grupo.</p>
                    </div>
                    <div className="rating-pair">
                        <CustomizedRating defaultValue={4} readOnly />
                        <p>Hice un gran trabajo, me siento muy bien con mi esfuerzo e ideas.</p>
                    </div>
                    <div className="rating-pair">
                        <CustomizedRating defaultValue={5} readOnly />
                        <p>¡Hice un trabajo excelente, estoy muy orgulloso de mi participación.</p>
                    </div>
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

export default FormPopupStar;
Ejemplo de Uso
A continuación se muestra cómo importar y usar el componente FormPopupStar en otro componente.

jsx
Copiar código
import React from 'react';
import FormPopupStar from './path/to/FormPopupStar';

const SomeComponent = () => {
    return (
        <div>
            <FormPopupStar />
        </div>
    );
};

export default SomeComponent;
Estilos
El componente FormPopupStar utiliza las siguientes clases CSS para aplicar estilos. Asegúrate de incluir estas clases en tu archivo CSS.

FormPopupStar.css
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

.star-static {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.rating-pair {
    display: flex;
    align-items: center;
    gap: 1rem;
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
El componente FormPopupStar proporciona una interfaz de usuario estilizada para que los usuarios reflexionen sobre su participación en un proyecto. Utiliza Material-UI para los estilos y la funcionalidad, y permite la navegación a una página principal o cualquier otra ruta especificada. Este componente es fácil de integrar y reutilizar en diferentes partes de la aplicación.

Temas y Estilos
El componente FormPopupStar utiliza el tema theme para aplicar estilos personalizados. Asegúrate de tener configurado el tema theme con los colores y estilos necesarios.

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