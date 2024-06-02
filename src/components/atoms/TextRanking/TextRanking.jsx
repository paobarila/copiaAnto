import PropTypes from "prop-types";
import './TextRanking.css'

function SelfEvaluation(props){ 
  return (
    <div className='conteiner-selfevaluation'>
      <div className='conteiner-text'>
        <h4 className='evaluation-item'>
        <strong>{props.category}</strong></h4>
        <p className='evaluation-question'>{props.question}</p>
      </div>
    </div>
  );}

  
SelfEvaluation.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
}
export default SelfEvaluation;