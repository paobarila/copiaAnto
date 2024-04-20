import PropTypes from 'prop-types';
import LayoutProyect from '../../templates/LayoutProyect';
import BoxProyect from '../../organisms/BoxProyect';

const PageProyect = ({color}) => {
    return (
        <LayoutProyect color={color}>
            <BoxProyect color={color}/> 
        </LayoutProyect>
    )
}

PageProyect.propTypes = {
    color: PropTypes.string.isRequired
}

export default PageProyect
