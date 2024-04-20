import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme/theme.js';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import './Box.css';

const BoxContainer = ({color, children}) => {

    return (
        <ThemeProvider theme={theme}>
            <Box className="box" sx={{border:`3px solid ${color}`}}>
                {children}
            </Box>
        </ThemeProvider>
    )
}

// BoxContainer.propTypes = {
//     color: PropTypes.string.isRequired,
//     children: PropTypes.objetc,
// }

export default BoxContainer
