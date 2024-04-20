// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../atoms/Logo";
import Box from "@mui/material/Box";
import LabelInput from "../../molecules/LabelInput";
import FormGroup from "@mui/material/FormGroup";
import Link from "../../atoms/Link";
import Stack from "@mui/material/Stack";
import BasicButton from "../../atoms/Button/BasicButton";
import Ellipse from "../../atoms/Ellipse";
import GoogleIcon from "../../../assets/icons/google.png";
import { ThemeProvider } from "@mui/material/styles";
import theme from ".././../../theme/theme.js";
import "./FormLogin.css";

const FormLogin = () => {
    const navigate = useNavigate();

    // const [user, setUser] = useState({
    //     email: "",
    //     password: "",
    // });

    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                className="form-content"
                sx={{ border: `2px solid ${theme.palette.accent.main}` }}
            >
                <Logo />
                <Box
                    container="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5rem",
                        width: "100%",
                        height: "26.625rem",
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.625rem",
                        height: "11.625rem",
                    }}>

                        <FormGroup
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "nowrap",
                                gap:"2.5rem",
                                width: "100%",
                                height: "9.5rem",
                                alignItems: "center",
                            }}
                        >
                            <LabelInput
                                inputId={"email"}
                                textLabel={"E-mail"}
                                type={"email"}
                                variant={"outlined"}
                            />
                            <LabelInput
                                inputId={"password"}
                                textLabel={"Contraseña"}
                                type={"password"}
                                variant={"outlined"}
                            />
                        </FormGroup>
                        <Link text={"¿Olvidaste tu contraseña?"} />
                    </div>
                    <Stack
                        direction="column"
                        spacing={3}
                        sx={{ width: "100%", height: "10rem" }}
                    >
                        <BasicButton
                            variant={"contained"}
                            text={"Iniciar sesión"}
                            ariaLabel={"Inicio de sesión de EdVisto"}
                            title={"Iniciar Sesion"}
                            borderRadius={"1.25rem"}
                            // onClick={handleClick()}
                        />
                        <BasicButton
                            variant={"outlined"}
                            text={"Registrarse"}
                            ariaLabel={"Registro de cuenta de EdVisto"}
                            title={"Registrarse"}
                            borderRadius={"1.25rem"}
                            onClick={() => handleClick("/register")}
                        />
                        <BasicButton
                            variant={"text"}
                            icon={GoogleIcon}
                            text={"Ingresar con Google"}
                            color="text"
                            ariaLabel={"Inicio de sesión de EdVisto con Google"}
                            title={"Iniciar Sesion con Google"}
                            borderRadius={"1.25rem"}
                            onClick={() => handleClick("/google-login")}
                        />
                    </Stack>
                </Box>
                <Ellipse className="ellipse-container" />
            </Box>
        </ThemeProvider>
    );
};

export default FormLogin;
