import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardContainer = ({project}) =>  {

  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/project/${project.projectId}`)
  }

  return (
    <Card sx={{ maxWidth: 360, maxHeight: 80, borderRadius:'12px' }} onClick={handleClickCard}>
      <CardActionArea sx={{ display:'flex'}}>  
        <CardContent  sx={{ padding: '1rem', width: '248px', height: '48px', textAlign: 'left' }}>
          <Typography variant="h6" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { `${project.usersId.length} participantes`} 
          </Typography>
        </CardContent>
        {project.image ? (
          <CardMedia
            component="img"
            sx={{ width: '80px', height: '80px', objectFit: 'cover' }}
            image={project.image}
            alt={project.name}
          />
        ) : null}
      </CardActionArea>
    </Card>
  );
}

CardContainer.propTypes = {
  project: PropTypes.shape({
    projectId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    usersId: PropTypes.arrayOf(PropTypes.number).isRequired,
    image: PropTypes.string
  }).isRequired
};

export default CardContainer;