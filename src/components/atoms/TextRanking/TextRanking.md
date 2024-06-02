# SelfEvaluation
El componente `SelfEvaluation` es utilizado para mostrar una pregunta y su categoría en una interfaz de evaluación. Puede recibir las siguientes propiedades:

- category (obligatorio): La categoría de la pregunta.
- question (obligatorio): El texto de la pregunta.

## Ejemplo de uso
```jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TextRanking.css'; // Asegúrate de ajustar la ruta al archivo CSS

function SelfEvaluation(props) {
  return (
    <div className='conteiner-selfevaluation'>
      <div className='conteiner-text'>
        <h4 className='evaluation-item'>
          <strong>{props.category}</strong>
        </h4>
        <p className='evaluation-question'>{props.question}</p>
      </div>
    </div>
  );
}

SelfEvaluation.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default SelfEvaluation;
```