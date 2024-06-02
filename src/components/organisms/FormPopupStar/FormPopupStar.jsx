import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/eva/eva_happy.png";
import Logo from '../../atoms/Logo/index.jsx';
import BasicButton from "../../atoms/Buttons/BasicButton.jsx";
import CustomizedRating from "../../atoms/Ranking/ranking.jsx";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme/theme.js";
import "./PopupStar.css";

const FormPopupStar = ({ onClose }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/report");
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="form-container-popupstar" style={{ border: `2px solid ${theme.palette.secondary.main}` }}>
                <CloseIcon id="close" onClick={onClose} />
                <div className="form-container-text">
                    <Logo pathImg={logo} width='112px' height='112px' />
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
                        <p>¡Hice un trabajo excelente, estoy muy orgulloso de mi participación!</p>
                    </div>
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

export default FormPopupStar;