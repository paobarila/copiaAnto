import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Empty from '../../molecules/Empty';
import BasicButton from '../../atoms/Buttons/BasicButton';
import Folder from '../../atoms/Icon/CreateProyect';
import CreateProyect from '../../organisms/CreateProyect';
import Dashboard from '../../molecules/Dashboard';
import theme from '../../../theme/theme';

const HomeContainer = ({projects}) => {
    const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
        <div style={ {display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem', marginBlock: '1.5rem' }}>
            <BasicButton variant="contained" childrenIcon={<Folder color={theme.palette.primary.contrastText} width={18}/>} childrenText="Nuevo proyecto" color="primary" ariaLabel="Crear nuevo proyecto" title="Crear nuevo proyecto" onClick={() => setOpenDialog(true)} borderRadius="6.25rem"/>
        </div>
        <div style={{height: '30.52rem', overflow:`${projects.length > 8 ? 'auto' : 'none'}`}}>
            {projects.length > 0 ? ( <Dashboard projects={projects} /> ) : ( <Empty color={theme.palette.accent.main} title={'Todavía no hay proyectos.'} subtitle={'¿Quieres crear uno? Haz click en “Nuevo proyecto”.'}/> )}
            {openDialog && (<CreateProyect openDialog={openDialog} setOpenDialog={setOpenDialog}/>)}
        </div>
    </>
  )
}

HomeContainer.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object),
  }
  
export default HomeContainer