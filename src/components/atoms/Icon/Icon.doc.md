# Documentación de Componentes

En este archivo se documentan varios componentes de React.

## Componente `Icon`

El componente `Icon` es un componente SVG utilizado para representar:

- AddProyect: un ícono de "agregar proyecto",
- Background: fondo de la aplicación,
- Bookmark: un ícono de "bibliografia",
- Bulb: un ícono de "idea",
- Camera: un ícono de "camara de video",
- CreateProyect: un ícono de "crear proyecto",
- Delete: un ícono de "eliminar",
- FolderEmpty: un ícono de "carpeta vacia",
- Google: un ícono de "Google",
- Megaphone: un ícono de "megafono",
- Message: un ícono de "chat",
- MovieClapper: un ícono de "video",
- Note: un ícono de "nota adhesiva",
- PaintBrush: un ícono de "pincel",
- PenTool:  un ícono de "pluma de escribir",
- Play: un ícono de "reproducir",
- Puzzle: un ícono de "pieza de rompecabeza",
- Record:  un ícono de "grabación",
- Star:  un ícono de estrella,
- StarFilled:  un ícono de estrella rellena,

El componente `Icon` acepta dos props: `color` y `width`, y devuelve un SVG que representa el ícono.

### Propiedades

**color (string):** Color del ícono en formato HEX o RGB.  Puede ser proporcionado por el tema de la aplicación si se está utilizando un `ThemeProvider`.

**width (number):** Ancho del ícono en píxeles.

![IconosDisponibles](../../../assets/images/AvailableIcons.png)

### Uso

```jsx
import AddProject from './AddProject';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js'; // Importa tu tema desde el archivo adecuado

const MyComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <Bookmark color={theme.palette.primary.main} width={36}/>
        </ThemeProvider>
    );
};