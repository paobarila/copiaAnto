import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Dialog, DialogContent, DialogActions } from '@mui/material';
import EvaSleep from '../../../assets/images/eva/eva_sleep.png';
import InputField from '../../../components/atoms/Input';
import BasicButton from '../../atoms/Buttons/BasicButton';
import { processEmails, processUrl, validateDate,} from '../../../utils/validations';
import './CreateProyect.css';

const CreateProyect = ({openDialog, setOpenDialog}) => {
  const [formData, setFormData] = useState({
    nameProyect: '',
    listEmails: '',
    imgProyect: '',
    finishDate: '',
    descriptionProyect: ''
  });

  const [errors, setErrors] = useState({
    nameProyect: false,
    listEmails: false,
    imgProyect: false,
    finishDate: false,
    descriptionProyect: false,
  });

  const [processedData, setProcessedData] = useState({
    nameProyect: '',
    listEmails: '',
    imgProyect: '',
    finishDate: '',
    descriptionProyect: ''
  }); 

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (event) => {
    //captura de datos cuando se modifica el campo
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value
    });

     // Limpieza el error cuando se modifica el campo
     setErrors({
      ...errors,
      [id]: false
    });
  };

  //ENVÍO DE FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Datos obtenidos:", formData);

    const validEmails = processEmails(formData.listEmails,setErrors);
    const validUrl = processUrl(formData.imgProyect, setErrors);
    const validDate = validateDate(formData.finishDate, setErrors);

    // Si todos los datos son válidos, enviarlos a la base de datos
    if (validEmails && validUrl && validDate) {
      setProcessedData({
        nameProyect: formData.nameProyect,
        listEmails: validEmails,
        imgProyect: formData.imgProyect,
        finishDate: formData.finishDate,
        descriptionProyect: formData.descriptionProyect
      });
    } 

  };

  // Simulación de envío de datos a una base de datos
  useEffect(() => {
    console.log("Datos enviados a la base de datos:", processedData);
  }, [processedData]);

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog} className='dialog_createForm' sx={{'& .MuiDialog-paper': {inlineSize: '33.5rem',
    blockSize: '43rem',
    borderRadius: '1.5rem',
    padding: '1rem 2.5rem',
    boxSizing: 'border-box',
    display: 'flex',
    gap: '1rem'}}}>
      <DialogContent className='dialog_content'>
      <Box className='createForm_title'>
        <Box className='title'>
          <Typography variant='h2' align='left'>Crea tu proyecto</Typography>
          <Typography variant='body1' align='left'>Coloca toda la información necesaria y despierta la creatividad.</Typography>
        </Box>
        <img src={EvaSleep} alt="" />
      </Box>
      <Box className='createForm_form' component={'form'} onSubmit={handleSubmit} >
        <InputField
          inputId="nameProyect"
          type={'text'}
          variant="outlined"
          textLabel="Nombre del Proyecto"
          placeholder={'Tema o nombre'}
          value={formData.nameProyect}
          error={errors.nameProyect}
          helperText={errors.nameProyect ? "El nombre del proyecto debe tener - cáracteres": ""}
          onChange={handleChange}
        />
        <InputField
          inputId="listEmails"
          type={'email'}
          variant="outlined"
          textLabel="Email de participantes"
          error={errors.listEmails}
          helperText={errors.listEmails ? "Formato de email incorrecto" : ""}
          placeholder={'Separalos con ","(coma)'}
          value={formData.listEmails}
          onChange={handleChange}
        />
        <InputField
          inputId="imgProyect"
          type={'text'}
          variant="outlined"
          error={errors.imgProyect}
          helperText={errors.imgProyect ? "La URL no es válida" : ""}
          textLabel="Imagen del proyecto"
          value={formData.imgProyect}
          onChange={handleChange}  
        />
        <InputField
          inputId="finishDate"
          type={'date'}
          variant="outlined"
          textLabel="Fecha de finalización"
          error={errors.finishDate}
          helperText={errors.finishDate ? "La fecha debe ser posterior a la fecha actual" : ""}
          value={formData.finishDate}
          onChange={handleChange}
        />
        <InputField
          inputId="descriptionProyect"
          type={'text'}
          variant="outlined"
          textLabel="Descripción"
          placeholder={'Coloca todos los detalles necesarios'}
          error={errors.descriptionProyect}
          helperText={errors.descriptionProyect ? "La descripción debe tener - cáracteres": ""}
          value={formData.descriptionProyect}
          onChange={handleChange}
        />
      </Box>
      </DialogContent>
      <DialogActions className='createForm_buttons'>
        <BasicButton
        variant="outlined"
        childrenText="Cancelar"
        color="primary"
        ariaLabel="cancelar creación de proyecto"
        title="cancelar"
        onClick={handleCloseDialog}
        borderRadius={"1.25rem"}/>
        <BasicButton
        variant="contained"
        childrenText="Crear proyecto"
        color="primary"
        ariaLabel="creación de proyecto"
        title="crear proyecto"
        onClick={handleSubmit}
        borderRadius={"1.25rem"}/>
    </DialogActions>
  </Dialog>
  );
};

CreateProyect.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  setOpenDialog: PropTypes.func.isRequired
}

export default CreateProyect;
