//OBSERVACIÓN!!: seria conveniente que las validaciones esten un archivo utils para que esten disponibles para todo el proyecto

  //VALIDACION Y EDICIÓN DE EMAILS
  export const validateEmail = (email) => {
    // const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\[A-Z]{2,}$/i;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }

  export const processEmails = (listEmails, setErrors) => { 
    //separación del string usando la ','
    const emails = listEmails.split(',').map(email => email.trim());

    //creación de array vacio de emails válidos
    const validEmails = [];

    //validación de cada email
    // IMPORTANT!: ver si aquí se puede validar si el email esta en la base de datos para poder incluir el alumno al proyecto sino que salga el alert
    // IMPORTANT!: ver si aquí se puede poner tope a la cantidad de alumnos que forman el proyecto, si sobrepasa la cantidad de alumnos debe salir un alert
    emails.forEach(email => {
      if(validateEmail(email)) {
        validEmails.push(email);      
        //console.log(`${validEmails}: Emails correctos`)
        return true; 
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          listEmails: true
        }));
        return false;
      }    
    });
    return validEmails;
  }

  //VALIDACION URL IMG
  const validateUrlImage = (urlImage) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(urlImage);
  };

  export const processUrl = (url, setErrors) => {
    if(validateUrlImage(url)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        imgProyect: false
      }));
      return true;
      //console.log(`La url es válida`) 
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        imgProyect: true
      }));
      return false;
    }    
  }

  //VALIDACIÓN DE FECHA
  export const validateDate = (date, setErrors) => {
    const currentDate = new Date();
    const dateForm = new Date(date);

    if(dateForm >= currentDate) {
      setErrors(prevErrors => ({
        ...prevErrors,
        finishDate: false
      }));
      //console.log(`La fecha es válida`)
      return true;
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        finishDate: true
      }));
      return false;
    }
  }
