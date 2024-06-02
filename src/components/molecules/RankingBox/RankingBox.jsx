import PropTypes from "prop-types";
import CustomizedRating from '../../atoms/Ranking/ranking';
import SelfEvaluation from '../../atoms/TextRanking/TextRanking';
import'./rankingBox.css'

function RankingBox ({title, question, childrenIcon,}){
    return (

     <div className='star-box'>
     
        <div className='container-text'>
      <SelfEvaluation ClassName='self-evaluation'
        category={title}
        question={question}/>
        <div className='evaluation-icon'>
        {childrenIcon}
        </div>
        </div>
  <CustomizedRating ClassName='star-rank'/>

      </div>
       
    )
}
RankingBox.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  childrenIcon: PropTypes.node.isRequired,
color:PropTypes.string,
};
export default RankingBox;