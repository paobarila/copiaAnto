import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/eva/eva_happy.png";
import Logo from '../../atoms/Logo';
import BasicButton from "../../atoms/Buttons/BasicButton.jsx";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme.js";
import "./Popup.css";

const FormPopup = ({ onClose }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="form-container-popup" style={{ border: `2px solid ${theme.palette.secondary.main}` }}>
                <CloseIcon id="close" onClick={onClose} />
                <div className="form-container-text">
                    <Logo pathImg={logo} width='112px' height='112px' />
                    <label>
                    <h1>Ya completaste tu autoevaluación</h1>
                    <p>¡Qué felicidad haber completado este desafío!</p>
                    <p>Vuelve pronto para ver la devolución de tu docente.</p>
                    </label>
                </div>
                <div className="button-container">
                    <BasicButton
                        variant="contained"
                        childrenText="Ok"
                        ariaLabel="Confirmar accion"
                        title="Ok"
                        borderRadius="1.25rem"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default FormPopup;