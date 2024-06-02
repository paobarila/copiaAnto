# Documentación de Funciones de Validación

## Validación y Edición de Emails

### `validateEmail(email)`

Esta función valida si una dirección de correo electrónico es válida.

#### Parámetros

- `email` (string): La dirección de correo electrónico a validar.

#### Retorno

- `true` si la dirección de correo electrónico es válida.
- `false` si la dirección de correo electrónico no es válida.

---

### `processEmails(listEmails, setErrors)`

Esta función procesa una lista de correos electrónicos, separados por comas.

#### Parámetros

- `listEmails` (string): La lista de correos electrónicos separados por comas.
- `setErrors` (función): Función para establecer errores en el estado.

#### Retorno

- Un array con los correos electrónicos válidos.

## Validación de URL de Imagen

### `validateUrlImage(urlImage)`

Esta función valida si una URL de imagen es válida.

#### Parámetros

- `urlImage` (string): La URL de la imagen a validar.

#### Retorno

- `true` si la URL de la imagen es válida.
- `false` si la URL de la imagen no es válida.

---

### `processUrl(url, setErrors)`

Esta función procesa una URL de imagen.

#### Parámetros

- `url` (string): La URL de la imagen.
- `setErrors` (función): Función para establecer errores en el estado.

#### Retorno

- `true` si la URL de la imagen es válida.
- `false` si la URL de la imagen no es válida.

## Validación de Fecha

### `validateDate(date, setErrors)`

Esta función valida si una fecha es posterior o igual a la fecha actual.

#### Parámetros

- `date` (string): La fecha a validar en formato string.
- `setErrors` (función): Función para establecer errores en el estado.

#### Retorno

- `true` si la fecha es válida.
- `false` si la fecha no es válida.