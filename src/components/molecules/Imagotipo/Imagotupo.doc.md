Componente Imagotipo
Descripción
El componente Imagotipo es un contenedor para mostrar un isotipo dentro de un div con clases específicas para aplicar estilos. Utiliza el componente Isotipo para renderizar una imagen del logo con dimensiones especificadas.

Props
El componente Imagotipo no acepta props directamente, pero utiliza el componente Isotipo, que requiere ciertas props para renderizar la imagen del logo.

Uso
El componente Imagotipo se utiliza para mostrar una imagen de isotipo dentro de un contenedor estilizado. No requiere props ya que las configuraciones de la imagen y las dimensiones están predefinidas.

jsx
Copiar código
import React from 'react';
import Isotipo from "../../atoms/logo";
import imagenIsotipo from "../../../assets/images/logo_ev.png";
import "./Imagotipo.css";

const Imagotipo = () => {
    return (
        <div className="imagotipo-container">
            <div className="imagotipo-imgTitle">
                <Isotipo pathImg={imagenIsotipo} width={'6rem'} height={'2.75rem'} />
            </div>
        </div>
    );
};

export default Imagotipo;
Ejemplo de Uso
A continuación, se muestra cómo importar y usar el componente Imagotipo en otro componente.

jsx
Copiar código
import React from 'react';
import Imagotipo from './path/to/Imagotipo';

const SomeComponent = () => {
    return (
        <div>
            <h1>Bienvenido a nuestra página</h1>
            <Imagotipo />
        </div>
    );
};

export default SomeComponent;
Estilos
El componente Imagotipo utiliza las siguientes clases CSS para aplicar estilos. Asegúrate de incluir estas clases en tu archivo CSS.

Imagotipo.css
css
Copiar código
.imagotipo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
}

.imagotipo-imgTitle {
    display: flex;
    justify-content: center;
    align-items: center;
}
Resumen
El componente Imagotipo proporciona una manera sencilla de mostrar un isotipo dentro de un contenedor estilizado. Utiliza el componente Isotipo para renderizar la imagen del logo, asegurando que se muestre con las dimensiones especificadas. No requiere props adicionales, lo que simplifica su uso e integración en otros componentes.