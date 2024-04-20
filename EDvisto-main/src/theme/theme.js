import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            // light: "#592ADC",
            main: "#592ADC",
            contrastText: '#F8F8FF',
        },
        secondary: {
            main: "#FFAB40",
            contrastText: '#F8F8FF',
        },
        accent: {
            main: "#4DB8FF",
        },
        text: {
            main: "#333333",
        },
        background: {
            main: "#F8F8F8",
        },
        gray: {
            main: "#CFCFCF",
        },
        alert: {
            main: "#FF6961",
        }
    },
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: "2rem",
            lineHeight: "2.4rem", 
            textTransform: "none", 
            // marginTop: "1.5rem", //letterSpacing: "1.5rem",
            letterSpacing: "0.07em",
        },
        h2: {
            fontWeight: 700,
            fontSize: "1.75rem",
            lineHeight: "2.1rem", 
            textTransform: "none",
            // marginTop: "1.25rem",
            letterSpacing: "0.07em",  
        },
        h3: {
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: "1.8rem", 
            textTransform: "none",
            // marginTop: "1rem",
            letterSpacing: "0.07em",  
        },
        subtitle1: {
            fontWeight: "normal",
            fontSize: "1.25rem",
            lineHeight: "1.5rem", 
            textTransform: "none",
            // marginTop: "1rem",
            letterSpacing: "0.07em",  
        },
        body1: {
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "1.5rem", 
            textTransform: "none",
            // marginTop: "1rem",  
            letterSpacing: "0.07em", 
        },
        button: {
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: "1.5rem", 
            textTransform: "none",
            // marginTop: "1rem",
            letterSpacing: "0.07em",   
        },
        link: {
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "1.5rem", 
            textTransform: "none", 
            // marginTop: "1rem",
            letterSpacing: "0.07em", 
        },
    }
});

export default theme;
