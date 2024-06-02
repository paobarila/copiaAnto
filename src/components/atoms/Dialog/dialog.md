Componente DialogContainer
Descripción
El componente DialogContainer es un contenedor para mostrar un diálogo de pantalla completa utilizando Material-UI. El diálogo se abre automáticamente al renderizar el componente y se cierra mediante una función de navegación cuando se invoca handleClose.

Props
El componente DialogContainer acepta las siguientes props:

Prop	Tipo	Requerido	Descripción
children	node	sí	Los elementos hijos que se renderizarán dentro del diálogo.
Uso
El componente DialogContainer se utiliza para mostrar un diálogo de pantalla completa con contenido personalizado. El diálogo se puede cerrar mediante la función handleClose, que también navega a una ruta específica.

jsx
Copiar código
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import theme from "../../../theme/theme.js";

const DialogContainer = ({ children }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    const handleClose = (path) => {
        setOpen(false);
        navigate(path);
    };

    return (
        <Dialog
            fullScreen
            open={open}
            scroll="body"
            onClose={() => handleClose("/")}
            sx={{'& .MuiDialog-paper': {backgroundColor: theme.palette.gray.main, display: "flex", alignItems: "center" }}}
        >
            {children}
        </Dialog>
    );
};

DialogContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DialogContainer;
Ejemplo de Uso
A continuación se muestra cómo importar y usar el componente DialogContainer en otro componente.

jsx
Copiar código
import React from 'react';
import DialogContainer from './path/to/DialogContainer';
import SomeChildComponent from './path/to/SomeChildComponent';

const MyComponent = () => {
    return (
        <DialogContainer>
            <SomeChildComponent />
        </DialogContainer>
    );
};

export default MyComponent;
Resumen
El componente DialogContainer proporciona una manera fácil de mostrar un diálogo de pantalla completa utilizando Material-UI. El diálogo se abre automáticamente y se cierra mediante la función handleClose, que también redirige al usuario a una ruta específica. El componente acepta un nodo como prop children, lo que permite incluir contenido personalizado dentro del diálogo.

Prop Types
El componente define los tipos de las props esperadas usando PropTypes para asegurar que se pasen los tipos correctos al componente.

jsx
Copiar código
DialogContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
Temas y Estilos
El componente DialogContainer utiliza el tema theme para aplicar estilos personalizados al diálogo. Asegúrate de tener configurado el tema theme con los colores y estilos necesarios.

Ejemplo de tema (theme.js)
javascript
Copiar código
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        gray: {
            main: '#f5f5f5',
        },
        // otros colores del tema
    },
    // otros ajustes del tema
});

export default theme;
Este ejemplo muestra cómo configurar y utilizar un tema personalizado en Material-UI, lo que permite aplicar estilos consistentes en toda la aplicación.