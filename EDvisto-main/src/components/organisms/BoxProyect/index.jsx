import './BoxProyect.css';
import Box from '../../atoms/Box';

const BoxProyect = ({color}) => {
    return (
        <div className="boxProyect">
            
            <Box color={color}>
                <h1>Hola Mundo</h1>
            </Box>
        </div>
    )
}

export default BoxProyect
