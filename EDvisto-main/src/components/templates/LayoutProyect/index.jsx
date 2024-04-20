import './LayoutProyect.css';
import theme from  '../../../theme/theme.js';
import { ThemeProvider } from '@mui/material/styles';
// import PropTypes from 'prop-types';
import Background from '.././../atoms/Background';

const LayoutProyect = ({color, children}) => {

    console.log(color)
    return (
        <ThemeProvider theme={theme}>
            <div className="layoutProyect">
                {children}
                <div className="layoutProyect-backround">
                    <Background color={color}/>
                </div>
            </div>
        </ThemeProvider>
    )
}

// LayoutProyect.propTypes = {
//     color: PropTypes.string.isRequired
// }

export default LayoutProyect
